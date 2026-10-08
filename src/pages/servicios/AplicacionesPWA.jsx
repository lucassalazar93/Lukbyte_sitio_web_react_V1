import React, { useEffect } from 'react';

// Imágenes
import mockupPWA from '../../assets/servicios/pwa-mockup.webp';
import pwa1 from '../../assets/servicios/pwa-1.webp';
import pwa2 from '../../assets/servicios/pwa-2.webp';
import pwa3 from '../../assets/servicios/pwa-3.webp';

import {
  Accion,
  CierreServicio,
  Galeria,
  HeroServicio,
  Proceso,
  Puntos,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE = `¡Hola! Estoy interesad@ en desarrollar una Aplicación Web Progresiva (PWA) para mi negocio.

Me gustaría agendar una asesoría gratuita para conocer cómo funciona y qué beneficios puede aportar a mi proyecto.`;

const beneficios = [
  'Funciona como una app nativa',
  'Carga rápida incluso sin conexión',
  'Instalable desde el navegador',
  'Reduce costos de desarrollo móvil',
  'Accesible desde cualquier dispositivo',
  'Mejora el rendimiento y engagement',
];

const pasos = [
  'Análisis de necesidades y funcionalidades clave',
  'Arquitectura responsive y optimizada',
  'Implementación de Service Workers y App Shell',
  'Diseño UX centrado en mobile-first',
  'Pruebas offline, instalación y accesibilidad',
  'Lanzamiento y soporte continuo',
];

const ejemplos = [
  { img: pwa1, alt: 'PWA de una barbería en móvil y portátil' },
  { img: pwa2, alt: 'PWA de agenda para una barbería' },
  { img: pwa3, alt: 'PWA de reservas para un salón de belleza' },
];

export default function AplicacionesPWA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pwa-container">
      {/* 🔥 HERO */}
      <HeroServicio
        titulo="Aplicaciones Web Progresivas"
        tono="PWA."
        imagen={mockupPWA}
        alt="Aplicación web progresiva abierta en un móvil frente a un portátil"
        acciones={
          <>
            <Accion to="/agendar" primaria>
              Agendar una asesoría
            </Accion>
            <Accion href="#ejemplos-pwa">Ver ejemplos</Accion>
          </>
        }
      >
        Carga instantánea, experiencia nativa y acceso desde cualquier dispositivo. La tecnología
        que impulsa la nueva era del desarrollo web.
      </HeroServicio>

      {/* 🚀 BENEFICIOS */}
      <Puntos id="pwa-beneficios" titulo="¿Por qué elegir" tono="una PWA?" items={beneficios} />

      {/* 🛠 PROCESO */}
      <Proceso
        id="pwa-proceso"
        titulo="Nuestro proceso"
        tono="para desarrollar tu PWA."
        pasos={pasos}
      />

      {/* ✨ GALERÍA */}
      <Galeria
        id="ejemplos-pwa"
        titulo="Ejemplos de PWAs"
        tono="desarrolladas."
        items={ejemplos}
      />

      {/* CTA FINAL */}
      <CierreServicio
        titulo="Lleva tu producto web"
        tono="al siguiente nivel."
        acciones={
          <Accion href={whatsappUrl(MENSAJE)} primaria>
            Quiero una PWA para mi negocio
          </Accion>
        }
      >
        Agendemos una asesoría gratuita y descubre cómo una PWA puede transformar tu experiencia
        digital.
      </CierreServicio>
    </div>
  );
}
