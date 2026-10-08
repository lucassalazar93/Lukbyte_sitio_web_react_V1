import React from 'react';
import PropTypes from 'prop-types';

/* Titular en dos tonos con párrafo opcional a la derecha */
export default function EncabezadoSeccion({ titulo, tono, id, children }) {
  return (
    <header className={`sec-head${children ? '' : ' sec-head--solo'}`}>
      <h2 className="h-display" id={id}>
        {titulo}
        {tono && <span className="tone">{tono}</span>}
      </h2>
      {children && <div className="lede">{children}</div>}
    </header>
  );
}

EncabezadoSeccion.propTypes = {
  titulo: PropTypes.string.isRequired,
  tono: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};
