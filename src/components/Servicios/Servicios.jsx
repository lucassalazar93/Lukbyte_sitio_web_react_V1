import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PiArrowUpRightBold,
  PiBrowsersLight,
  PiDeviceMobileLight,
  PiEnvelopeOpenLight,
  PiLinkSimpleLight,
  PiPenNibLight,
  PiPlugsConnectedLight,
} from 'react-icons/pi';
import abeja from '../../assets/abejas/abeja-tech.webp';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import AbejaFlotante from '../Panal/AbejaFlotante';

import './Servicios.css';

/* cx / cy: posición de la celda alrededor del centro del panal */
const servicios = [
  {
    titulo: 'Desarrollo Web Personalizado',
    corto: 'Desarrollo web',
    texto:
      'Creamos sitios web únicos, pedagógicos y adaptados a tus necesidades y objetivos, optimizados para todos los dispositivos.',
    Icono: PiBrowsersLight,
    ruta: '/servicios/desarrollo-web',
    cx: -0.5,
    cy: -1,
  },
  {
    titulo: 'Diseño UI-UX Profesional',
    corto: 'Diseño UI‑UX',
    texto:
      'Transformamos ideas en interfaces visualmente atractivas y fáciles de usar, priorizando la experiencia del usuario.',
    Icono: PiPenNibLight,
    ruta: '/servicios/diseno-ui-ux',
    cx: 0.5,
    cy: -1,
  },
  {
    titulo: 'Aplicaciones Web Progresivas',
    corto: 'Apps PWA',
    texto:
      'Desarrollamos aplicaciones rápidas y funcionales que puedes instalar y usar desde cualquier dispositivo.',
    Icono: PiDeviceMobileLight,
    ruta: '/servicios/pwa',
    cx: 1,
    cy: 0,
  },
  {
    titulo: 'Automatización y APIs',
    corto: 'Automatización y APIs',
    texto:
      'Optimizamos tus procesos conectando sistemas con flujos seguros y automatizados, mejorando tu eficiencia.',
    Icono: PiPlugsConnectedLight,
    ruta: '/servicios/automatizacion-apis',
    cx: 0.5,
    cy: 1,
  },
  {
    titulo: 'Tarjetas Digitales para Eventos',
    corto: 'Tarjetas digitales',
    texto:
      'Creamos invitaciones digitales hermosas, interactivas y personalizadas para bodas, 15 años, primeras comuniones y más.',
    Icono: PiEnvelopeOpenLight,
    ruta: '/servicios/invitaciones-digitales',
    cx: -0.5,
    cy: 1,
  },
  {
    titulo: 'Bio Links Personalizados',
    corto: 'Bio links',
    texto:
      'Diseñamos enlaces visuales e impactantes para Instagram, TikTok y más. Ideal para destacar tus redes, productos o servicios en un solo lugar.',
    Icono: PiLinkSimpleLight,
    ruta: '/servicios/bio-links',
    cx: -1,
    cy: 0,
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function Servicios() {
  const [activo, setActivo] = useState(0);
  const [enVista, setEnVista] = useState(false);
  const panalRef = useRef(null);
  const reduce = useReducedMotion();
  const servicio = servicios[activo];

  // Las celdas se arman la primera vez que el panal entra en pantalla
  useEffect(() => {
    const vista = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setEnVista(true);
        vista.disconnect();
      },
      { threshold: 0.3 }
    );
    vista.observe(panalRef.current);
    return () => vista.disconnect();
  }, []);

  return (
    <section
      className="section servicios-section"
      id="servicios"
      aria-labelledby="servicios-titulo"
    >
      <div className="frame">
        <AbejaFlotante className="abeja-servicio" size={64} flip delay={-2} />

        <EncabezadoSeccion
          id="servicios-titulo"
          titulo="Nuestros servicios."
          tono="Seis celdas de un mismo panal."
        >
          Ayudamos a empresas y emprendedores a dar el salto digital. No solo creamos sitios web:
          construimos herramientas que optimizan tus ventas y procesos.
        </EncabezadoSeccion>

        <div className="servicios-panal">
          {/* Panal: cada celda es un servicio, la abeja ocupa el centro */}
          <div
            className={`panal${enVista ? ' is-vista' : ''}`}
            ref={panalRef}
            role="group"
            aria-label="Elige un servicio"
          >
            <span className="panal__celda panal__celda--nucleo" aria-hidden="true">
              <img src={abeja} alt="" loading="lazy" />
            </span>

            {servicios.map((s, i) => (
              <button
                type="button"
                key={s.ruta}
                className={`panal__celda${i === activo ? ' is-activa' : ''}`}
                style={{ '--cx': s.cx, '--cy': s.cy, '--i': i + 1 }}
                aria-pressed={i === activo}
                aria-controls="servicio-detalle"
                onClick={() => setActivo(i)}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setActivo(i)}
                onFocus={() => setActivo(i)}
              >
                <s.Icono size={28} aria-hidden="true" />
                <span>{s.corto}</span>
              </button>
            ))}
          </div>

          {/* Detalle del servicio elegido */}
          <div className="servicio-detalle" id="servicio-detalle" aria-live="polite">
            <motion.div
              key={servicio.ruta}
              initial={reduce ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <h3>{servicio.titulo}</h3>
              <p className="servicio-detalle__texto">{servicio.texto}</p>
              <Link to={servicio.ruta} className="link-arrow">
                Ver más
                <PiArrowUpRightBold size={14} aria-hidden="true" />
              </Link>
            </motion.div>

            <ul className="servicio-lista">
              {servicios.map((s, i) => (
                <li key={s.ruta}>
                  <Link
                    to={s.ruta}
                    className={i === activo ? 'is-activa' : undefined}
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setActivo(i)}
                    onFocus={() => setActivo(i)}
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
