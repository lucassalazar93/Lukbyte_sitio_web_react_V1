import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import abeja from '../../assets/abejas/abeja-tech.webp';
import './AbejaFlotante.css';

const RADIO = 200; // distancia a la que la abeja nota el cursor
const HUIDA = 96; // cuánto se aparta, en px

/* Abeja decorativa: flota sola y esquiva el cursor cuando se le acerca */
export default function AbejaFlotante({ className = '', size = 72, flip = false, delay = 0 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 110, damping: 13, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 110, damping: 13, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let raf = 0;
    let cursor = null;

    const actualizar = () => {
      raf = 0;
      const el = ref.current;
      if (!el || !cursor) return;

      const r = el.getBoundingClientRect();
      if (r.bottom < -RADIO || r.top > window.innerHeight + RADIO) return;

      // Centro en reposo: se descuenta el desplazamiento actual
      const dx = r.left + r.width / 2 - sx.get() - cursor.x;
      const dy = r.top + r.height / 2 - sy.get() - cursor.y;
      const d = Math.hypot(dx, dy);

      if (d < RADIO && d > 0.5) {
        const fuerza = (1 - d / RADIO) ** 2 * HUIDA;
        x.set((dx / d) * fuerza);
        y.set((dy / d) * fuerza);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const alMover = (e) => {
      cursor = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(actualizar);
    };

    window.addEventListener('pointermove', alMover, { passive: true });
    return () => {
      window.removeEventListener('pointermove', alMover);
      cancelAnimationFrame(raf);
    };
  }, [reduce, x, y, sx, sy]);

  return (
    <motion.span
      ref={ref}
      className={`abeja-flotante ${className}`}
      style={{ x: sx, y: sy, width: size }}
      aria-hidden="true"
    >
      <img
        src={abeja}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={flip ? 'abeja-flotante__img abeja-flotante__img--flip' : 'abeja-flotante__img'}
        style={{ animationDelay: `${delay}s` }}
      />
    </motion.span>
  );
}

AbejaFlotante.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  flip: PropTypes.bool,
  delay: PropTypes.number,
};
