import React, { useMemo } from 'react';
import './CintaLogos.css';

const LOGOS = [
  { src: '/logos/crystal.png', alt: 'Crystal' },
  { src: '/logos/gef.logo.png', alt: 'Gef' },
  { src: '/logos/puntoblanco.logo.png', alt: 'Punto Blanco' },
  { src: '/logos/babyfresh.logo.png', alt: 'Baby Fresh' },
  { src: '/logos/galax.logo.png', alt: 'Galax' },
  { src: '/logos/lukasexpress.png', alt: 'Lukas Express' },
  { src: '/logos/norequintero.png', alt: 'Norequintero' },
  { src: '/logos/orix.png', alt: 'Orix' },
  { src: '/logos/saborafelicidad.png', alt: 'Sabor a Felicidad' },
];

export default function CintaLogos() {
  const logos = useMemo(() => LOGOS, []);
  // duplicamos la lista para un scroll continuo sin parpadeos
  const logosDoble = [...logos, ...logos];

  return (
    <section className="cinta-logos" aria-label="Marcas con las que he trabajado">
      <div className="cinta-logos__wrap">
        <div
          className="cinta-logos__marquesina"
          role="region"
          aria-label="Carrusel infinito de logos"
        >
          <span className="cinta-logos__fade cinta-logos__fade--izq" aria-hidden="true" />
          <span className="cinta-logos__fade cinta-logos__fade--der" aria-hidden="true" />

          <div className="cinta-logos__track" aria-hidden={false}>
            <div className="cinta-logos__list">
              {logosDoble.map((logo, index) => (
                <div className="cinta-logos__slide" key={`${logo.alt}-${index}`}>
                  <div className="cinta-logos__item">
                    <img
                      className="cinta-logos__img"
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
