import React, { useEffect } from 'react';

// Imágenes
import mockupBio from '../../assets/servicios/bio-mockup.webp';
import ejemplo1 from '../../assets/servicios/bio-1.webp';
import ejemplo2 from '../../assets/servicios/bio-2.webp';
import ejemplo3 from '../../assets/servicios/bio-3.webp';
import ejemplo4 from '../../assets/servicios/bio-4.webp';

import {
  Accion,
  CierreServicio,
  Galeria,
  HeroServicio,
  Preguntas,
  Puntos,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE_BIO =
  '¡Hola Lukbyte! Quiero un Bio Link visual, profesional y adaptado a mi marca. 💫';

const publicos = [
  'Creadoras de contenido',
  'Emprendedoras digitales',
  'Modelos y artistas',
  'Negocios locales y tiendas online',
  'Portafolios personales',
];

const ejemplos = [
  { img: ejemplo1, alt: 'Bio link de un spa' },
  { img: ejemplo2, alt: 'Bio link de un restaurante' },
  { img: ejemplo3, alt: 'Bio link de una creadora de contenido' },
  { img: ejemplo4, alt: 'Bio link de un centro de bienestar' },
];

const preguntas = [
  {
    pregunta: '¿Puedo elegir los colores e íconos?',
    respuesta: 'Sí, personalizamos cada bio link a tu marca o estilo.',
  },
  {
    pregunta: '¿En qué dispositivos funciona?',
    respuesta: 'Funciona en todos los navegadores móviles y de escritorio.',
  },
  {
    pregunta: '¿Puedo actualizarlo luego?',
    respuesta: 'Sí, puedes solicitar cambios o rediseños posteriores.',
  },
];

export default function BioLinks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bio-container">
      {/* 🎯 Hero */}
      <HeroServicio
        titulo="Tu identidad digital"
        tono="en un solo enlace."
        imagen={mockupBio}
        alt="Cinco bio links personalizados en pantallas de móvil"
        acciones={
          <>
            <Accion href={whatsappUrl(MENSAJE_BIO)} primaria>
              Solicitar mi Bio Link
            </Accion>
            <Accion to="/servicios/ejemplos#bio-links">Ver ejemplos</Accion>
          </>
        }
      >
        Creamos bio links impactantes, responsivos y adaptados a tu estilo para brillar en redes
        sociales.
      </HeroServicio>

      {/* 🎨 Beneficios */}
      <Puntos id="bio-publicos" titulo="¿Para quién es" tono="un bio link?" items={publicos} />

      {/* 🖼 Galería */}
      <Galeria
        id="bio-galeria"
        titulo="Ejemplos de bio links"
        tono="personalizados."
        items={ejemplos}
        columnas={4}
      />

      {/* ❓ FAQ */}
      <Preguntas items={preguntas} />

      {/* 🔥 CTA Final */}
      <CierreServicio
        titulo="Potencia tu presencia en redes"
        tono="con un bio link inolvidable."
        acciones={
          <Accion href={whatsappUrl(MENSAJE_BIO)} primaria>
            Crear mi Bio Link
          </Accion>
        }
      />
    </div>
  );
}
