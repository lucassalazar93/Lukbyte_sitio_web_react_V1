import React, { useEffect } from 'react';

// Imágenes
import mockupUIUX from '../../assets/servicios/uiux-mockup.webp';
import raizViva from '../../assets/servicios/uiux-raiz-viva.webp';
import brillanteEterno from '../../assets/servicios/uiux-brillante-eterno.webp';
import veterinaria from '../../assets/servicios/uiux-veterinaria.webp';
import saboresFirmados from '../../assets/servicios/uiux-sabores-firmados.webp';

import {
  Accion,
  CierreServicio,
  Citas,
  Galeria,
  HeroServicio,
  Preguntas,
  Proceso,
  Puntos,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE_IMPACTO =
  '¡Hola Lukbyte! Me gustaría crear una interfaz moderna, atractiva y efectiva para mi negocio. 🎨';

const beneficios = [
  'Mejora la tasa de conversión',
  'Aumenta el tiempo de permanencia',
  'Reduce errores y frustración',
  'Refuerza tu identidad visual',
  'Mejora la accesibilidad y el SEO',
];

const pasos = [
  'Brief de necesidades y análisis UX',
  'Wireframes y arquitectura',
  'Diseño visual UI (Figma, Adobe XD)',
  'Prototipado interactivo',
  'Pruebas de usabilidad',
  'Entrega optimizada para desarrollo',
];

const proyectos = [
  { img: raizViva, alt: 'Interfaz de la tienda natural Raíz Viva' },
  { img: brillanteEterno, alt: 'Interfaz de la joyería Brillante Eterno' },
  { img: veterinaria, alt: 'Interfaz de una clínica veterinaria' },
  { img: saboresFirmados, alt: 'Interfaz del restaurante Sabores Firmados' },
];

const principios = [
  'Jerarquía visual',
  'Psicología del color',
  'Tipografía legible',
  'Accesibilidad (WCAG)',
  'Diseño modular y responsive',
  'Microinteracciones',
];

const testimonios = [
  {
    texto:
      'Nuestra app se volvió mucho más clara e intuitiva. Las clientas entienden al instante cómo usarla.',
    autor: 'Karla R., BeautyApp',
  },
  {
    texto: 'Antes la gente se perdía. Hoy nos felicitan por lo fácil que es usar nuestro sistema.',
    autor: 'Pedro S., Gestión360',
  },
];

const preguntas = [
  {
    pregunta: '¿Puedo pedir solo el diseño sin desarrollo?',
    respuesta:
      '¡Claro! Ofrecemos diseño como servicio independiente para que lo uses con cualquier equipo de desarrollo.',
  },
  {
    pregunta: '¿Con qué herramientas trabajan?',
    respuesta: 'Figma, Adobe XD, Notion, Zeplin y más según el proyecto.',
  },
  {
    pregunta: '¿Incluye tests de accesibilidad?',
    respuesta: 'Sí, aplicamos criterios WCAG para garantizar interfaces inclusivas.',
  },
  {
    pregunta: '¿Puedo dar feedback durante el proceso?',
    respuesta: '¡Por supuesto! Es clave para crear un producto alineado contigo.',
  },
];

export default function DisenoUIUX() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="uiux-container">
      {/* 🎯 Hero emocional */}
      <HeroServicio
        titulo="Interfaces que aumentan conversiones"
        tono="y fidelizan usuarios."
        imagen={mockupUIUX}
        alt="Interfaz de una joyería en móvil, tableta y portátil"
        acciones={
          <>
            <Accion to="/agendar" primaria>
              Agendar una asesoría
            </Accion>
            <Accion to="/servicios/ejemplos#uiux">Ver ejemplos</Accion>
          </>
        }
      >
        Convertimos tu visión en productos digitales que impactan, enamoran y hacen crecer tu
        negocio.
      </HeroServicio>

      {/* ⭐ Beneficios */}
      <Puntos
        id="uiux-beneficios"
        titulo="¿Por qué el diseño UI/UX"
        tono="es esencial?"
        intro="El diseño UI/UX no es solo estética. Es la clave para crear experiencias fluidas, memorables y eficaces."
        items={beneficios}
      />

      {/* 🛠 Proceso */}
      <Proceso id="uiux-proceso" titulo="Nuestro proceso" tono="de diseño UI/UX." pasos={pasos} />

      {/* 🖼 Galería UI/UX visual */}
      <Galeria
        id="uiux-proyectos"
        titulo="Algunos proyectos"
        tono="que transformaron negocios."
        items={proyectos}
        columnas={4}
      />

      {/* 💡 Principios */}
      <Puntos
        id="uiux-principios"
        titulo="Diseño centrado"
        tono="en el usuario."
        items={principios}
      />

      {/* 🗣 Testimonios */}
      <Citas
        id="uiux-testimonios"
        titulo="Lo que dicen"
        tono="nuestros clientes."
        items={testimonios}
      />

      {/* ❓ FAQ */}
      <Preguntas items={preguntas} />

      {/* 🔥 CTA Final */}
      <CierreServicio
        titulo="Diseñemos una experiencia que tu cliente no olvide."
        tono="¿Empezamos hoy?"
        acciones={
          <>
            <Accion href={whatsappUrl(MENSAJE_IMPACTO)} primaria>
              Quiero una interfaz que impacte
            </Accion>
            <Accion to="/agendar">Agendar una asesoría gratis</Accion>
          </>
        }
      />
    </div>
  );
}
