import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const RAIZ3 = Math.sqrt(3);
const ALCANCE = 180; // radio de celdas que despierta el cursor, en px
const CIAN = '0, 191, 255';
const VIOLETA = '139, 108, 255';

function celda(ctx, x, y, r) {
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    const px = x + r * Math.cos(a);
    const py = y + r * Math.sin(a);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/* Panal del hero: una retícula de celdas que se enciende bajo el cursor y
   late sola de vez en cuando. `origen` marca desde dónde despierta (0–1). */
export default function HiveCanvas({ className, origen = { x: 0.7, y: 0.48 } }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let celdas = [];
    let ondas = [];
    let base = null;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let radio = 36;
    let raf = 0;
    let enVista = true;
    let cursor = null;
    let proximaOnda = 0;

    const construir = () => {
      const rect = host.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      radio = w < 720 ? 26 : 36;

      const ancho = RAIZ3 * radio;
      const alto = 1.5 * radio;
      celdas = [];
      for (let fila = 0; fila * alto < h + radio; fila++) {
        const desfase = fila % 2 ? ancho / 2 : 0;
        for (let x = desfase; x < w + ancho; x += ancho) {
          celdas.push({ x, y: fila * alto, e: 0, violeta: false });
        }
      }

      // La retícula en reposo se pinta una sola vez
      base = document.createElement('canvas');
      base.width = canvas.width;
      base.height = canvas.height;
      const b = base.getContext('2d');
      b.scale(dpr, dpr);
      b.lineWidth = 1;
      b.strokeStyle = 'rgba(148, 190, 255, 0.075)';
      b.beginPath();
      for (const c of celdas) celda(b, c.x, c.y, radio);
      b.stroke();
    };

    const pintar = (t) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(base, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (cursor) {
        for (const c of celdas) {
          const d = Math.hypot(c.x - cursor.x, c.y - cursor.y);
          if (d < ALCANCE) {
            const e = (1 - d / ALCANCE) ** 1.7;
            if (e > c.e) {
              c.e = e;
              c.violeta = false;
            }
          }
        }
      }

      ondas = ondas.filter((o) => t - o.inicio < o.vida);
      for (const o of ondas) {
        if (t < o.inicio) continue;
        const edad = (t - o.inicio) / o.vida;
        const frente = edad * o.alcance;
        for (const c of celdas) {
          const d = Math.hypot(c.x - o.x, c.y - o.y);
          if (Math.abs(d - frente) < radio) {
            const e = (1 - edad) * o.fuerza;
            if (e > c.e) {
              c.e = e;
              c.violeta = o.violeta;
            }
          }
        }
      }

      ctx.lineWidth = 1.2;
      for (const c of celdas) {
        if (c.e < 0.012) continue;
        const rgb = c.violeta ? VIOLETA : CIAN;
        ctx.beginPath();
        celda(ctx, c.x, c.y, radio - 1.5);
        ctx.fillStyle = `rgba(${rgb}, ${c.e * 0.14})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${rgb}, ${c.e * 0.85})`;
        ctx.stroke();
        c.e *= 0.945;
      }
    };

    const ciclo = (t) => {
      raf = 0;
      if (!enVista || document.hidden) return;

      if (t > proximaOnda) {
        const c = celdas[Math.floor(Math.random() * celdas.length)];
        if (c) {
          ondas.push({
            x: c.x,
            y: c.y,
            inicio: t,
            vida: 1500,
            alcance: 150,
            fuerza: 0.5,
            violeta: true,
          });
        }
        proximaOnda = t + 1800 + Math.random() * 2200;
      }

      pintar(t);
      raf = requestAnimationFrame(ciclo);
    };

    const arrancar = () => {
      if (!raf && !reduce) raf = requestAnimationFrame(ciclo);
    };

    const alMover = (e) => {
      const rect = host.getBoundingClientRect();
      cursor = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const alSalir = () => {
      cursor = null;
    };

    // El panal despierta desde la abeja
    const despertar = () => {
      const ahora = performance.now();
      ondas.push({
        x: w * origen.x,
        y: h * origen.y,
        inicio: ahora + 350,
        vida: 2200,
        alcance: Math.hypot(w, h),
        fuerza: 0.75,
        violeta: false,
      });
      proximaOnda = ahora + 3200;
    };

    construir();
    if (reduce) {
      pintar(0);
    } else {
      // Con la pantalla de carga encima, espera a que se retire para que se vea
      if (document.documentElement.classList.contains('cargando')) {
        proximaOnda = Infinity;
        window.addEventListener('lukbyte:listo', despertar, { once: true });
      } else {
        despertar();
      }
      arrancar();
    }

    const tamano = new ResizeObserver(() => {
      construir();
      if (reduce) pintar(0);
    });
    tamano.observe(host);

    const vista = new IntersectionObserver(([entrada]) => {
      enVista = entrada.isIntersecting;
      if (enVista) arrancar();
    });
    vista.observe(host);

    const alVolver = () => arrancar();
    host.addEventListener('pointermove', alMover, { passive: true });
    host.addEventListener('pointerleave', alSalir);
    document.addEventListener('visibilitychange', alVolver);

    return () => {
      cancelAnimationFrame(raf);
      tamano.disconnect();
      vista.disconnect();
      host.removeEventListener('pointermove', alMover);
      host.removeEventListener('pointerleave', alSalir);
      document.removeEventListener('visibilitychange', alVolver);
      window.removeEventListener('lukbyte:listo', despertar);
    };
  }, [origen.x, origen.y]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}

HiveCanvas.propTypes = {
  className: PropTypes.string,
  origen: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
};
