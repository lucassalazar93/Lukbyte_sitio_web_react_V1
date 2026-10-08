// DesarrolloWeb.jsx
import React, { useEffect } from 'react';

import mockupImg from '../../assets/servicios/web-mockup.webp';

import portadaPanaderia from '../../assets/proyectos/panaderiavip-1.jpeg';
import internoPanaderia from '../../assets/proyectos/panaderiavip-2.jpeg';
import portadaNaturista from '../../assets/proyectos/tienda-naturista (1).jpeg';
import internoNaturista from '../../assets/proyectos/tienda-naturista (2).jpeg';
import portadaInspira from '../../assets/proyectos/cursos (1).jpeg';
import internoInspira from '../../assets/proyectos/cursos (2).jpeg';

import {
  Accion,
  CierreServicio,
  Galeria,
  HeroServicio,
  Preguntas,
  Proceso,
  Puntos,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE_DEMO =
  '¡Hola! Estoy interesada en una demo gratuita de sus servicios web. ¿Podemos agendar una? 💻';

const beneficios = [
  'SEO desde el primer código',
  'Rendimiento óptimo y mobile-first',
  'Escalabilidad garantizada',
  'Código limpio y modular',
  'Adaptación 100% a tu marca',
];

const pasos = [
  'Descubrimiento y estrategia',
  'Boceto y prototipado',
  'Diseño visual personalizado',
  'Desarrollo front y backend',
  'QA, optimización y SEO',
  'Entrega y acompañamiento',
];

const casos = [
  {
    imagenes: [portadaPanaderia, internoPanaderia],
    alt: 'Sitio de Panadería VIP',
    nombre: 'Panadería VIP',
    tecnologias: ['React', 'Tailwind', 'Firebase'],
    resultado: '+60% pedidos online en el primer mes',
    testimonio: 'Lukbyte nos diseñó una tienda que transmite nuestra esencia. Ahora vendemos 24/7.',
  },
  {
    imagenes: [portadaNaturista, internoNaturista],
    alt: 'Sitio de Tienda Natural Belleza',
    nombre: 'Tienda Natural Belleza',
    tecnologias: ['React', 'Firebase'],
    resultado: '+40% tráfico en 30 días',
    testimonio:
      'Gracias a Lukbyte lanzamos nuestra tienda en 15 días. Las clientas aman el diseño.',
  },
  {
    imagenes: [portadaInspira, internoInspira],
    alt: 'Sitio de Cursos Inspira',
    nombre: 'Cursos Inspira',
    tecnologias: ['WordPress', 'Stripe'],
    resultado: 'Automatización de pagos y matrícula',
    testimonio: 'Me ayudaron a escalar mi academia digital con eficiencia y estética.',
  },
];

const preguntas = [
  {
    pregunta: '¿Cuánto tarda el desarrollo?',
    respuesta: 'Entre 2 a 4 semanas dependiendo de la complejidad del sitio.',
  },
  {
    pregunta: '¿Puedo actualizar el contenido yo mismo?',
    respuesta: 'Sí, entregamos sitios autoadministrables o con panel personalizado.',
  },
  {
    pregunta: '¿Incluye mantenimiento?',
    respuesta: 'Ofrecemos planes opcionales de soporte técnico y actualizaciones mensuales.',
  },
  {
    pregunta: '¿Qué necesito tener para comenzar?',
    respuesta:
      'Solo tu idea, referencias visuales si tienes, y contenido inicial. Nosotros guiamos el resto.',
  },
];

export default function DesarrolloWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desarrollo-container">
      {/* HERO */}
      <HeroServicio
        titulo="Creamos experiencias web"
        tono="únicas y funcionales."
        imagen={mockupImg}
        alt="Sitio web de Lukbyte en un portátil"
        acciones={
          <>
            <Accion to="/agendar" primaria>
              Asesoría gratis
            </Accion>
            <Accion to="/servicios/ejemplos#web">Ver ejemplos</Accion>
          </>
        }
      >
        Transformamos tus ideas en sitios web modernos, optimizados y listos para convertir.
      </HeroServicio>

      {/* BENEFICIOS */}
      <Puntos
        id="web-beneficios"
        titulo="¿Por qué elegir"
        tono="desarrollo personalizado?"
        intro="En Lukbyte, no usamos plantillas genéricas. Diseñamos sitios desde cero, pensados para crecer contigo y diferenciarte en lo digital."
        items={beneficios}
      />

      {/* PROCESO */}
      <Proceso id="web-proceso" titulo="¿Cómo trabajamos" tono="tu sitio web?" pasos={pasos} />

      {/* CASOS DE ÉXITO */}
      <Galeria
        id="casos"
        titulo="Casos de éxito."
        items={casos}
        formato="horizontal"
      />

      {/* FAQ */}
      <Preguntas items={preguntas} />

      {/* CTA FINAL */}
      <CierreServicio
        titulo="¿Listo para transformar"
        tono="tu presencia online?"
        acciones={
          <>
            <Accion href={whatsappUrl(MENSAJE_DEMO)} primaria>
              Demo gratuita
            </Accion>
            <Accion to="/agendar">Agendar una asesoría</Accion>
          </>
        }
      />
    </div>
  );
}
