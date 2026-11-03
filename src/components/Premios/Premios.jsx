import React from 'react';
import PropTypes from 'prop-types';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import { formatoMillones, formatoPesos, premios, totalPremios } from '../../data/premios';
import './Premios.css';

const premioShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  detalles: PropTypes.arrayOf(PropTypes.string).isRequired,
  monto: PropTypes.number.isRequired,
  lugar: PropTypes.number.isRequired,
  puesto: PropTypes.string.isRequired,
  convocatoria: PropTypes.string.isRequired,
  anio: PropTypes.number.isRequired,
});

/* Una celda por premio: la foto arriba, la historia abajo */
const Premio = ({ premio }) => (
  <li className={`premio${premio.lugar === 1 ? ' premio--primero' : ''}`}>
    <div className="premio__foto">
      <img
        src={premio.foto}
        alt={premio.alt}
        width="960"
        height="1000"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div className="premio__cuerpo">
      <p className="label premio__puesto">
        <span aria-hidden="true">{String(premio.lugar).padStart(2, '0')}</span>
        {premio.puesto} · {premio.convocatoria} {premio.anio}
      </p>
      <h3>{premio.titulo}</h3>
      <p className="premio__desc">{premio.descripcion}</p>
      <ul className="chips">
        {premio.detalles.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <p className="premio__monto">
        <span className="label">Premio al equipo</span>
        <strong>{formatoPesos(premio.monto)}</strong>
        <span className="premio__moneda">COP</span>
      </p>
    </div>
  </li>
);

Premio.propTypes = { premio: premioShape.isRequired };

export default function Premios() {
  return (
    <section className="section premios" id="premios" aria-labelledby="premios-titulo">
      <div className="frame">
        <EncabezadoSeccion
          id="premios-titulo"
          titulo="Proyectos premiados."
          tono="Primer y tercer puesto en INNOVA."
        >
          Lucas Salazar, nuestro fundador, fue parte de los equipos detrás de dos proyectos
          premiados en INNOVA, la convocatoria de innovación de Crystal S.A.S. Entre los dos suman{' '}
          {formatoMillones(totalPremios)} COP en premios a los equipos.
        </EncabezadoSeccion>

        <ol className="premios-grid">
          {premios.map((premio) => (
            <Premio premio={premio} key={premio.id} />
          ))}
        </ol>
      </div>
    </section>
  );
}
