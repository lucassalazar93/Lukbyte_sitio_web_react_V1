import React from 'react';
import PropTypes from 'prop-types';
import { PiArrowRightBold, PiArrowUpRightBold } from 'react-icons/pi';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import AbejaFlotante from '../Panal/AbejaFlotante';
import { PORTAFOLIO_URL } from '../../data/sitio';
import { claseEstado, destacados, otros, ESTADO_EN_MERCADO } from './proyectosData';
import './Proyectos.css';

const proyectoShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  icono: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  bajada: PropTypes.string,
  descripcion: PropTypes.string.isRequired,
  nota: PropTypes.string,
  flujo: PropTypes.arrayOf(PropTypes.string),
  detalles: PropTypes.arrayOf(PropTypes.string).isRequired,
  estado: PropTypes.string.isRequired,
  enlace: PropTypes.string,
  placa: PropTypes.string,
});

/* Foco que sigue al cursor dentro de la celda */
const handleSpot = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const Emblema = ({ proyecto, size }) => (
  <span
    className="hex-emblema"
    style={{ '--s': `${size}px`, ...(proyecto.placa && { '--placa': proyecto.placa }) }}
  >
    <img src={proyecto.icono} alt="" loading="lazy" />
  </span>
);

Emblema.propTypes = { proyecto: proyectoShape.isRequired, size: PropTypes.number.isRequired };

const Chips = ({ items }) => (
  <ul className="chips">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

Chips.propTypes = { items: PropTypes.arrayOf(PropTypes.string).isRequired };

const Enlace = ({ proyecto }) => (
  <a
    className="link-arrow"
    href={proyecto.enlace}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Ver ${proyecto.titulo} en vivo`}
  >
    Ver en vivo
    <PiArrowUpRightBold size={14} aria-hidden="true" />
  </a>
);

Enlace.propTypes = { proyecto: proyectoShape.isRequired };

const Celda = ({ proyecto }) => {
  const enMercado = proyecto.estado === ESTADO_EN_MERCADO;

  return (
    <article
      className={`proyecto${enMercado ? ' proyecto--mercado' : ''}`}
      onPointerMove={handleSpot}
    >
      <header className="proyecto__cabecera">
        <Emblema proyecto={proyecto} size={enMercado ? 92 : 68} />
        <span className={`estado ${claseEstado(proyecto.estado)}`}>{proyecto.estado}</span>
      </header>

      <h3>{proyecto.titulo}</h3>
      {proyecto.bajada && <p className="proyecto__bajada">{proyecto.bajada}</p>}
      <p className="proyecto__desc">{proyecto.descripcion}</p>
      {proyecto.nota && <p className="proyecto__nota">{proyecto.nota}</p>}

      {proyecto.flujo && (
        <ol className="proyecto__flujo" aria-label="Flujo del sistema">
          {proyecto.flujo.map((paso, i) => (
            <li key={paso}>
              {i > 0 && <PiArrowRightBold size={11} aria-hidden="true" />}
              {paso}
            </li>
          ))}
        </ol>
      )}

      <footer className="proyecto__pie">
        <Chips items={proyecto.detalles} />
        {proyecto.enlace && <Enlace proyecto={proyecto} />}
      </footer>
    </article>
  );
};

Celda.propTypes = { proyecto: proyectoShape.isRequired };

export default function Proyectos() {
  return (
    <section className="section proyectos" id="proyectos" aria-labelledby="proyectos-titulo">
      <div className="frame">
        <AbejaFlotante className="abeja-proyectos" size={58} delay={-4} />

        <EncabezadoSeccion
          id="proyectos-titulo"
          titulo="Ideas que se volvieron reales."
          tono="Productos en operación y sistemas corporativos."
        >
          Software que ya trabaja en restaurantes, clínicas, tiendas y plantas de producción. Son
          los mismos proyectos del{' '}
          <a href={PORTAFOLIO_URL} target="_blank" rel="noopener noreferrer">
            portafolio de Lucas Salazar
          </a>
          .
        </EncabezadoSeccion>

        <div className="proyectos-grid">
          {destacados.map((proyecto) => (
            <Celda proyecto={proyecto} key={proyecto.id} />
          ))}
        </div>

        <h3 className="proyectos-mas">Más proyectos</h3>
        <ul className="proyectos-lista">
          {otros.map((proyecto) => (
            <li key={proyecto.id} onPointerMove={handleSpot}>
              <Emblema proyecto={proyecto} size={52} />
              <div className="proyectos-lista__texto">
                <h4>
                  {proyecto.titulo}
                  {proyecto.bajada && <span> · {proyecto.bajada}</span>}
                </h4>
                <p>
                  {proyecto.descripcion}
                  {proyecto.nota && <strong> {proyecto.nota}</strong>}
                </p>
              </div>
              <Chips items={proyecto.detalles.slice(0, 3)} />
              <div className="proyectos-lista__estado">
                <span className={`estado ${claseEstado(proyecto.estado)}`}>{proyecto.estado}</span>
                {proyecto.enlace && <Enlace proyecto={proyecto} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
