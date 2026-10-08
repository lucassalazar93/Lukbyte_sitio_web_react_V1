import React from 'react';
import { PiCubeFocusLight, PiPenNibLight, PiSparkleLight, PiTargetLight } from 'react-icons/pi';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import { pilares } from '../../data/sitio';
import './Elegirnos.css';

const ICONOS = {
  proposito: PiTargetLight,
  ia: PiSparkleLight,
  ux: PiPenNibLight,
  producto: PiCubeFocusLight,
};

export default function Elegirnos() {
  return (
    <section className="section elegirnos" id="elegirnos" aria-labelledby="elegirnos-titulo">
      <div className="frame">
        <EncabezadoSeccion
          id="elegirnos-titulo"
          titulo="¿Por qué elegir a Lukbyte?"
          tono="Ingeniería con propósito."
        >
          No creamos solo sitios web: desarrollamos ecosistemas digitales con propósito, con la
          inteligencia artificial como aliada estratégica.
        </EncabezadoSeccion>

        <ul className="elegirnos-grid">
          {pilares.map((pilar) => {
            const Icono = ICONOS[pilar.id];
            return (
              <li className="razon" key={pilar.id}>
                <Icono size={26} aria-hidden="true" />
                <h3>{pilar.titulo}</h3>
                <p>{pilar.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
