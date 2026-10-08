import React, { useEffect, useReducer, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  PiBrowsersLight,
  PiChartLineUpLight,
  PiCloudLight,
  PiCodeLight,
  PiCpuLight,
  PiDatabaseLight,
  PiDeviceMobileLight,
  PiGearSixLight,
  PiGitBranchLight,
  PiGlobeLight,
  PiLightningLight,
  PiLockKeyLight,
  PiPlugsConnectedLight,
  PiRobotLight,
  PiShieldCheckLight,
  PiSparkleLight,
  PiStackLight,
  PiTerminalWindowLight,
} from 'react-icons/pi';
import abeja from '../../assets/abejas/abeja-tech.webp';
import './PanalEnConstruccion.css';

const VUELO = 1300; // lo que tarda una abeja en llegar a su celda, en ms
const PAUSA = 1100; // intervalo entre despegues
const BRILLO = 900; // cuánto dura encendida una celda recién terminada

/* Cada celda del panal es una pieza de tecnología */
const ICONOS = [
  PiCodeLight,
  PiDatabaseLight,
  PiCloudLight,
  PiCpuLight,
  PiPlugsConnectedLight,
  PiSparkleLight,
  PiDeviceMobileLight,
  PiShieldCheckLight,
  PiChartLineUpLight,
  PiGearSixLight,
  PiBrowsersLight,
  PiLightningLight,
  PiRobotLight,
  PiGitBranchLight,
  PiLockKeyLight,
  PiStackLight,
  PiTerminalWindowLight,
  PiGlobeLight,
];

/* Panal de 19 celdas en coordenadas axiales (q, r): un núcleo y dos anillos */
const CELDAS = [];
for (let r = -2; r <= 2; r++) {
  for (let q = -2; q <= 2; q++) {
    const anillo = Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r));
    if (anillo <= 2) CELDAS.push({ q, r, anillo });
  }
}
let siguienteIcono = 0;
CELDAS.forEach((celda) => {
  celda.Icono = celda.anillo === 0 ? null : ICONOS[siguienteIcono++];
});

const INDICES = CELDAS.map((_, i) => i);
const NUCLEO = CELDAS.findIndex((c) => c.anillo === 0);
const columna = (i) => CELDAS[i].q + CELDAS[i].r / 2;
const distancia = (a, b) => {
  const dq = CELDAS[a].q - CELDAS[b].q;
  const dr = CELDAS[a].r - CELDAS[b].r;
  return Math.max(Math.abs(dq), Math.abs(dr), Math.abs(dq + dr));
};

// El anillo exterior se construye en orden, dando la vuelta al panal
const ORDEN = INDICES.filter((i) => CELDAS[i].anillo === 2).sort(
  (a, b) =>
    Math.atan2(CELDAS[a].r, columna(a)) - Math.atan2(CELDAS[b].r, columna(b))
);

const ABEJAS_INICIO = INDICES.filter((i) => CELDAS[i].anillo === 1)
  .filter((_, n) => n % 2 === 0)
  .map((celda) => ({ celda, flip: false }));

const inicial = (todoListo) => ({
  listas: CELDAS.map((c) => todoListo || c.anillo < 2),
  abejas: ABEJAS_INICIO,
  obra: {},
});

function reducir(estado, accion) {
  switch (accion.type) {
    case 'volar': {
      const origen = estado.abejas[accion.abeja].celda;
      return {
        ...estado,
        abejas: estado.abejas.map((a, i) =>
          i === accion.abeja
            ? { celda: accion.destino, flip: columna(accion.destino) < columna(origen) }
            : a
        ),
        obra: {
          ...estado.obra,
          [accion.destino]: estado.listas[accion.destino] ? 'mejora' : 'construye',
        },
      };
    }
    case 'llegar':
      return {
        ...estado,
        listas: estado.listas.map((lista, i) => lista || i === accion.celda),
        obra: { ...estado.obra, [accion.celda]: 'recien' },
      };
    case 'apagar': {
      const obra = { ...estado.obra };
      delete obra[accion.celda];
      return { ...estado, obra };
    }
    default:
      return estado;
  }
}

/* Abejas trabajando en equipo: completan el panal celda por celda y, cuando ya
   está armado, siguen mejorando las piezas existentes. Al pasar el cursor por
   una celda, la abeja libre más cercana vuela a mejorarla. */
export default function PanalEnConstruccion() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [estado, dispatch] = useReducer(reducir, reduce, inicial);

  // Los temporizadores leen el estado más reciente desde aquí
  const actual = useRef(estado);
  useEffect(() => {
    actual.current = estado;
  });

  const llamar = useRef(null);

  useEffect(() => {
    if (reduce) return;

    let enVista = true;
    let turno = 0;
    const ocupadas = ABEJAS_INICIO.map(() => false);
    const relojes = new Set();
    const luego = (fn, ms) => {
      const id = setTimeout(() => {
        relojes.delete(id);
        fn();
      }, ms);
      relojes.add(id);
    };

    const tomadas = () =>
      new Set([
        ...actual.current.abejas.map((a) => a.celda),
        ...Object.keys(actual.current.obra).map(Number),
      ]);

    const mandar = (abeja, destino) => {
      ocupadas[abeja] = true;
      dispatch({ type: 'volar', abeja, destino });
      luego(() => {
        dispatch({ type: 'llegar', celda: destino });
        luego(() => {
          dispatch({ type: 'apagar', celda: destino });
          ocupadas[abeja] = false;
        }, BRILLO);
      }, VUELO);
    };

    // Primero las celdas que faltan; con el panal completo, mejora una al azar
    const elegir = () => {
      const { listas } = actual.current;
      const no = tomadas();
      const pendiente = ORDEN.find((i) => !listas[i] && !no.has(i));
      if (pendiente !== undefined) return pendiente;
      const hechas = INDICES.filter((i) => i !== NUCLEO && listas[i] && !no.has(i));
      return hechas[Math.floor(Math.random() * hechas.length)];
    };

    const ciclo = () => {
      if (enVista && !document.hidden) {
        const libre = ocupadas
          .map((_, n) => (turno + n) % ocupadas.length)
          .find((i) => !ocupadas[i]);
        const destino = libre === undefined ? undefined : elegir();
        if (destino !== undefined) {
          mandar(libre, destino);
          turno = libre + 1;
        }
      }
      luego(ciclo, PAUSA);
    };
    luego(ciclo, 700);

    llamar.current = (celda) => {
      if (celda === NUCLEO || tomadas().has(celda)) return;
      const libres = ocupadas.map((o, i) => (o ? -1 : i)).filter((i) => i >= 0);
      if (!libres.length) return;
      const { abejas } = actual.current;
      const cercana = libres.reduce((a, b) =>
        distancia(abejas[a].celda, celda) <= distancia(abejas[b].celda, celda) ? a : b
      );
      mandar(cercana, celda);
    };

    const vista = new IntersectionObserver(([entrada]) => {
      enVista = entrada.isIntersecting;
    });
    vista.observe(ref.current);

    return () => {
      llamar.current = null;
      relojes.forEach(clearTimeout);
      vista.disconnect();
    };
  }, [reduce]);

  const hechas = estado.listas.filter(Boolean).length;

  return (
    <figure
      className="obra"
      ref={ref}
      role="img"
      aria-label="Abejas de Lukbyte construyendo un panal: cada celda es una pieza de tecnología"
    >
      <div className="obra__panal">
        {CELDAS.map(({ q, r, anillo, Icono }, i) => (
          <span
            key={`${q},${r}`}
            className={[
              'obra__celda',
              anillo === 0 && 'obra__celda--nucleo',
              estado.listas[i] && 'is-lista',
              estado.obra[i] && `is-${estado.obra[i]}`,
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ '--q': q, '--r': r }}
            onPointerEnter={() => llamar.current?.(i)}
          >
            {Icono ? (
              <Icono aria-hidden="true" />
            ) : (
              <svg viewBox="0 0 22 24" aria-hidden="true">
                <path d="M11 1.2l9 5.2v11.2l-9 5.2-9-5.2V6.4z" />
                <path d="M11 7.4l4 2.3v4.6l-4 2.3-4-2.3V9.7z" />
              </svg>
            )}
          </span>
        ))}

        {estado.abejas.map((a, i) => (
          <span
            key={i}
            className="obra__abeja"
            style={{ '--q': CELDAS[a.celda].q, '--r': CELDAS[a.celda].r }}
          >
            <img
              src={abeja}
              alt=""
              className={a.flip ? 'is-flip' : undefined}
              style={{ animationDelay: `${i * -0.7}s` }}
            />
          </span>
        ))}
      </div>

      <figcaption className="obra__estado label">
        {hechas < CELDAS.length
          ? `Construyendo · ${hechas} de ${CELDAS.length} celdas`
          : 'Panal completo · mejora continua'}
      </figcaption>
    </figure>
  );
}
