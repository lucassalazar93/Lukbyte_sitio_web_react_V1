import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import AbejaFlotante from '../Panal/AbejaFlotante';
import './Servicio.css';

/* Bloques con los que se arma cada página de servicio.
   Todas comparten estructura: hero, beneficios, proceso, galería, preguntas y cierre. */

/* Botón de acción: ruta interna (`to`) o enlace externo (`href`) */
export function Accion({ to, href, primaria = false, children }) {
  const clase = `btn ${primaria ? 'btn--primary' : 'btn--ghost'}`;
  const contenido = (
    <>
      {children}
      {primaria && <PiCaretDoubleRightBold size={13} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={clase}>
        {contenido}
      </Link>
    );
  }

  const externo = href.startsWith('http');
  return (
    <a
      href={href}
      className={clase}
      {...(externo && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {contenido}
    </a>
  );
}

Accion.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primaria: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export function HeroServicio({ titulo, tono, imagen, alt, acciones, children }) {
  return (
    <section className="section sv-hero" aria-labelledby="sv-titulo">
      <div className="frame">
        <AbejaFlotante className="sv-hero__abeja sv-hero__abeja--a" size={56} delay={-3} />

        <div className="sv-hero__texto">
          <h1 className="h-display" id="sv-titulo">
            {titulo}
            {tono && <span className="tone">{tono}</span>}
          </h1>
          <p className="lede">{children}</p>
          <div className="sv-acciones">{acciones}</div>
        </div>

        <figure className="sv-hero__imagen">
          <img src={imagen} alt={alt} fetchPriority="high" />
          <AbejaFlotante className="sv-hero__abeja sv-hero__abeja--b" size={74} flip delay={-1} />
          <AbejaFlotante className="sv-hero__abeja sv-hero__abeja--c" size={52} delay={-5} />
        </figure>
      </div>
    </section>
  );
}

HeroServicio.propTypes = {
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  imagen: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  acciones: PropTypes.node,
  children: PropTypes.node.isRequired,
};

/* Lista de puntos en rejilla: beneficios, públicos, principios */
export function Puntos({ id, titulo, tono, intro, items }) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="frame">
        <EncabezadoSeccion id={id} titulo={titulo} tono={tono}>
          {intro}
        </EncabezadoSeccion>
        <ul className="sv-puntos">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Puntos.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  intro: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* Proceso: una celda numerada por paso, unidas por una línea */
export function Proceso({ id, titulo, tono, pasos }) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="frame">
        <EncabezadoSeccion id={id} titulo={titulo} tono={tono} />
        <ol className="sv-proceso" style={{ '--n': pasos.length }}>
          {pasos.map((paso, i) => (
            <li key={paso}>
              <span className="sv-proceso__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p>{paso}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

Proceso.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  pasos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/* Galería: cada pieza abre ampliada al pulsarla */
export function Galeria({
  id,
  titulo,
  tono,
  intro,
  items,
  pie,
  columnas = 3,
  formato = 'vertical',
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-titulo`}>
      <div className="frame">
        <EncabezadoSeccion id={`${id}-titulo`} titulo={titulo} tono={tono}>
          {intro}
        </EncabezadoSeccion>
        <ul className={`sv-galeria sv-galeria--${formato}`} style={{ '--cols': columnas }}>
          {items.map((item) => (
            <li key={item.alt}>
              <figure>
                <div className="sv-galeria__imgs">
                  {(item.imagenes ?? [item.img]).map((src, i) => (
                    <Zoom key={src}>
                      <img
                        src={src}
                        alt={i === 0 ? item.alt : `${item.alt}, vista interior`}
                        loading="lazy"
                      />
                    </Zoom>
                  ))}
                </div>
                {(item.nombre || item.texto) && (
                  <figcaption>
                    {item.nombre && <h3>{item.nombre}</h3>}
                    {item.tecnologias && (
                      <ul className="chips">
                        {item.tecnologias.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                    {item.resultado && <p className="sv-galeria__resultado">{item.resultado}</p>}
                    {item.texto && <p>{item.texto}</p>}
                    {item.testimonio && (
                      <blockquote className="sv-galeria__cita">“{item.testimonio}”</blockquote>
                    )}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
        {pie && <div className="sv-galeria__pie">{pie}</div>}
      </div>
    </section>
  );
}

Galeria.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  intro: PropTypes.node,
  pie: PropTypes.node,
  columnas: PropTypes.number,
  formato: PropTypes.oneOf(['vertical', 'horizontal']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      imagenes: PropTypes.arrayOf(PropTypes.string),
      alt: PropTypes.string.isRequired,
      nombre: PropTypes.string,
      tecnologias: PropTypes.arrayOf(PropTypes.string),
      resultado: PropTypes.string,
      texto: PropTypes.string,
      testimonio: PropTypes.string,
    })
  ).isRequired,
};

/* Testimonios breves */
export function Citas({ id, titulo, tono, items }) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="frame">
        <EncabezadoSeccion id={id} titulo={titulo} tono={tono} />
        <div className="sv-citas">
          {items.map((cita) => (
            <figure key={cita.autor}>
              <blockquote>
                <p>“{cita.texto}”</p>
              </blockquote>
              <figcaption>{cita.autor}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

Citas.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ texto: PropTypes.string.isRequired, autor: PropTypes.string.isRequired })
  ).isRequired,
};

/* Preguntas frecuentes: titular a la izquierda, respuestas plegables a la derecha */
export function Preguntas({ titulo = 'Preguntas frecuentes.', tono, items }) {
  return (
    <section className="section" aria-labelledby="sv-preguntas">
      <div className="frame sv-preguntas">
        <h2 className="h-display" id="sv-preguntas">
          {titulo}
          {tono && <span className="tone">{tono}</span>}
        </h2>
        <div className="sv-faq">
          {items.map((item) => (
            <details key={item.pregunta}>
              <summary>{item.pregunta}</summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

Preguntas.propTypes = {
  titulo: PropTypes.string,
  tono: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      pregunta: PropTypes.string.isRequired,
      respuesta: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/* Cierre de la página con la acción principal */
export function CierreServicio({ titulo, tono, acciones, children }) {
  return (
    <section className="section sv-cierre" aria-labelledby="sv-cierre">
      <div className="frame">
        <h2 className="h-display" id="sv-cierre">
          {titulo}
          {tono && <span className="tone">{tono}</span>}
        </h2>
        {children && <p className="lede">{children}</p>}
        <div className="sv-acciones">{acciones}</div>
      </div>
    </section>
  );
}

CierreServicio.propTypes = {
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  acciones: PropTypes.node.isRequired,
  children: PropTypes.node,
};
