import React, { useEffect, useRef, useState } from 'react';
import Zoom from 'react-medium-image-zoom';

// Imágenes
import bienvenida from '../../assets/servicios/invitaciones-mockup.webp';
import boda from '../../assets/servicios/inv-boda.webp';
import quinces from '../../assets/servicios/inv-quinces.webp';
import primeraComunion from '../../assets/servicios/inv-comunion.webp';
import disco from '../../assets/servicios/inv-disco.webp';
import empresariales from '../../assets/servicios/inv-empresarial.webp';

import EncabezadoSeccion from '../../components/Panal/EncabezadoSeccion';
import {
  Accion,
  CierreServicio,
  HeroServicio,
  Preguntas,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE_DEMO =
  '¡Hola! 🎉 Me interesa una demo gratuita de una invitación digital. Quisiera conocer ejemplos de bodas, 15 años o eventos empresariales. ¿Podrían compartirme opciones interactivas?';

const MENSAJE_ASESORIA =
  '¡Hola! 🙋‍♀️ Me gustaría agendar una asesoría para crear una invitación digital personalizada para mi evento. ¿Cuándo podríamos conversar?';

const invitaciones = [
  {
    id: 'boda',
    pestana: 'Boda',
    img: boda,
    title: 'Invitación digital: Boda',
    items: [
      'Portada animada con nombres y fecha',
      'Música personalizada',
      'Galería de fotos',
      'Cuenta regresiva',
      'Mapa del evento',
      'Itinerario',
      'Mensajes a invitados',
      'Confirmación de asistencia',
      'Lista de regalos',
      'Dress code',
      'Diseño personalizado',
      'Acceso privado',
      'Compartible por redes',
    ],
  },
  {
    id: 'quinces',
    pestana: 'Quinceañera',
    img: quinces,
    title: 'Quinceañera',
    items: [
      'Animaciones brillantes',
      'Música pop moderna',
      'Fotos de infancia y preparación',
      'Itinerario: Vals, brindis, fiesta',
      'Mapa del salón',
      'Vestuario sugerido',
    ],
  },
  {
    id: 'comunion',
    pestana: 'Primera Comunión',
    img: primeraComunion,
    title: 'Primera Comunión',
    items: [
      'Diseño angelical',
      'Misa y recepción',
      'Lista de regalos religiosos',
      'Mapa de iglesia',
      'Confirmación con mensaje',
    ],
  },
  {
    id: 'fiesta',
    pestana: 'Fiesta electrónica',
    img: disco,
    title: 'Fiesta Electrónica',
    items: [
      'Visuales neon animados',
      'Playlist integrada',
      'QR para entrada',
      'Diseño estilo flyer',
    ],
  },
  {
    id: 'empresarial',
    pestana: 'Evento empresarial',
    img: empresariales,
    title: 'Evento Empresarial',
    items: [
      'Estilo elegante y profesional',
      'Agenda de actividades',
      'Botón de inscripción',
      'Link de videollamada',
      'Control de acceso',
    ],
  },
];

const preguntas = [
  {
    pregunta: '¿Cuánto tarda el desarrollo?',
    respuesta: 'Entre 2 y 5 días hábiles según el tipo de evento.',
  },
  {
    pregunta: '¿Puedo actualizar el contenido yo mismo?',
    respuesta: 'Sí. Incluimos acceso editable o servicio de cambios posteriores.',
  },
  {
    pregunta: '¿Incluye mantenimiento?',
    respuesta: '¡Sí! Mantenimiento gratuito los primeros 15 días.',
  },
  {
    pregunta: '¿Qué necesito para comenzar?',
    respuesta: 'Solo tus datos, fotos y tipo de evento. Nosotros hacemos el resto.',
  },
];

const InvitacionesDigitales = () => {
  const [activa, setActiva] = useState(0);
  const pestanas = useRef([]);
  const invitacion = invitaciones[activa];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flechas izquierda / derecha recorren las pestañas
  const alTeclear = (e) => {
    const paso = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!paso) return;
    e.preventDefault();
    const siguiente = (activa + paso + invitaciones.length) % invitaciones.length;
    setActiva(siguiente);
    pestanas.current[siguiente]?.focus();
  };

  return (
    <div className="inv-digital-wrapper">
      {/* HERO */}
      <HeroServicio
        titulo="Haz que tu evento comience"
        tono="desde la invitación."
        imagen={bienvenida}
        alt="Cuatro invitaciones digitales en pantallas de móvil"
        acciones={
          <>
            <Accion href={whatsappUrl(MENSAJE_DEMO)} primaria>
              Solicitar demo gratuita
            </Accion>
            <Accion to="/agendar">Agendar una asesoría</Accion>
          </>
        }
      >
        Invitaciones digitales elegantes, personalizadas y 100% interactivas para bodas,
        quinceañeras, primeras comuniones, fiestas y eventos empresariales.
      </HeroServicio>

      {/* GALERÍA */}
      <section id="galeria" className="section" aria-labelledby="inv-galeria-titulo">
        <div className="frame">
          <EncabezadoSeccion id="inv-galeria-titulo" titulo="Ejemplos" tono="de invitaciones." />

          <div className="sv-tabs" role="tablist" aria-label="Tipo de evento" onKeyDown={alTeclear}>
            {invitaciones.map((inv, i) => (
              <button
                type="button"
                key={inv.id}
                ref={(el) => {
                  pestanas.current[i] = el;
                }}
                className="sv-tab"
                role="tab"
                id={`inv-tab-${inv.id}`}
                aria-selected={i === activa}
                aria-controls="inv-panel"
                tabIndex={i === activa ? 0 : -1}
                onClick={() => setActiva(i)}
              >
                {inv.pestana}
              </button>
            ))}
          </div>

          {/* La clave remonta el panel y vuelve a correr su entrada */}
          <div
            key={invitacion.id}
            className="sv-tabpanel"
            role="tabpanel"
            id="inv-panel"
            aria-labelledby={`inv-tab-${invitacion.id}`}
          >
            <div>
              <Zoom>
                <img src={invitacion.img} alt={invitacion.title} />
              </Zoom>
            </div>
            <div>
              <h3>{invitacion.title}</h3>
              <ul className="sv-puntos">
                {invitacion.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <Preguntas items={preguntas} />

      {/* CTA FINAL */}
      <CierreServicio
        titulo="¿Listo para transformar"
        tono="tu evento?"
        acciones={
          <>
            <Accion href={whatsappUrl(MENSAJE_DEMO)} primaria>
              Solicitar demo gratuita
            </Accion>
            <Accion href={whatsappUrl(MENSAJE_ASESORIA)}>Agendar asesoría</Accion>
          </>
        }
      >
        Regístrate o agenda una asesoría personalizada. ¡Te guiamos paso a paso!
      </CierreServicio>
    </div>
  );
};

export default InvitacionesDigitales;
