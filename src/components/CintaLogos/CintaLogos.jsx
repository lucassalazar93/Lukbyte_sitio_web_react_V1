import React from 'react';
import { marcas } from '../../data/marcas';
import './CintaLogos.css';

export default function CintaLogos() {
  // duplicamos la lista para un scroll continuo sin parpadeos
  const fichas = [...marcas, ...marcas];

  return (
    <section className="section cinta-logos" aria-label="Marcas con las que hemos trabajado">
      <div className="frame">
        <div className="cinta-logos__marquesina">
          <ul className="cinta-logos__list">
            {fichas.map((marca, index) => (
              <li
                className="cinta-logos__item"
                key={`${marca.nombre}-${index}`}
                style={marca.placa ? { '--placa': marca.placa } : undefined}
                aria-hidden={index >= marcas.length}
              >
                <img
                  className="cinta-logos__img"
                  src={marca.logo}
                  alt={index < marcas.length ? marca.nombre : ''}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
