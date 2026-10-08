import React, { useEffect } from 'react';
import ScrollToHash from '../../utils/ScrollToHash';
import AbejaFlotante from '../../components/Panal/AbejaFlotante';
import { Accion, CierreServicio, Citas, Galeria } from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

// Imágenes
import panaderiavip from '../../assets/proyectos/panaderiavip-1.jpeg';
import panaderiavip2 from '../../assets/proyectos/panaderiavip-2.jpeg';
import tiendaNaturista from '../../assets/proyectos/tienda-naturista (1).jpeg';
import tiendaNaturista2 from '../../assets/proyectos/tienda-naturista (2).jpeg';
import miel from '../../assets/servicios/ej-miel.webp';
import vinos from '../../assets/servicios/ej-vinos.webp';
import perros from '../../assets/servicios/ej-perros.webp';
import postres from '../../assets/servicios/ej-postres.webp';
import naturista from '../../assets/servicios/uiux-raiz-viva.webp';
import sabor from '../../assets/servicios/uiux-sabores-firmados.webp';
import veterinaria from '../../assets/servicios/uiux-veterinaria.webp';
import joyeria from '../../assets/servicios/uiux-brillante-eterno.webp';
import lashistas from '../../assets/servicios/pwa-3.webp';
import barberia1 from '../../assets/servicios/pwa-2.webp';
import barberia2 from '../../assets/servicios/pwa-1.webp';
import soyarte from '../../assets/servicios/ej-soyarte.webp';
import api1 from '../../assets/servicios/ej-api-1.webp';
import api2 from '../../assets/servicios/ej-api-2.webp';
import bio1 from '../../assets/servicios/ej-bio-restaurante.webp';
import bio2 from '../../assets/servicios/ej-bio-manicurista.webp';
import bio3 from '../../assets/servicios/bio-3.webp';
import invitacion1 from '../../assets/servicios/inv-boda.webp';
import invitacion2 from '../../assets/servicios/ej-invitacion-15.webp';

/* Una sección por servicio. El id es el ancla a la que enlazan las páginas de servicio. */
const categorias = [
  {
    id: 'web',
    indice: 'Desarrollo web',
    titulo: 'Desarrollo Web',
    tono: 'Personalizado.',
    descripcion: 'Sitios web únicos, adaptados a tus objetivos y optimizados para convertir.',
    formato: 'horizontal',
    imagenes: [
      panaderiavip,
      panaderiavip2,
      tiendaNaturista,
      tiendaNaturista2,
      miel,
      vinos,
      perros,
      postres,
    ],
    ctaTexto: '¿Te gustaría una web como esta?',
    ctaBoton: 'Quiero una web de alto impacto',
    ctaMensaje: 'Quiero una web de alto impacto',
  },
  {
    id: 'uiux',
    indice: 'Diseño UI/UX',
    titulo: 'Diseño UI/UX',
    tono: 'Profesional.',
    descripcion: 'Interfaces modernas, intuitivas y enfocadas en conversión.',
    imagenes: [naturista, sabor, veterinaria, joyeria],
    ctaTexto: '¿Listo para enamorar a tus usuarios?',
    ctaBoton: 'Agendar asesoría gratuita',
    ctaRuta: '/agendar',
  },
  {
    id: 'pwa',
    indice: 'Apps PWA',
    titulo: 'Aplicaciones Web Progresivas',
    tono: 'PWA.',
    descripcion: 'Apps instalables desde navegador, rápidas, funcionales y sin fricción.',
    imagenes: [lashistas, barberia1, barberia2, soyarte],
    ctaTexto: '¿Quieres una app ligera y sin tienda?',
    ctaBoton: 'Crear mi App Progresiva',
    ctaMensaje: 'Quiero una PWA para mi negocio',
  },
  {
    id: 'api',
    indice: 'Automatización',
    titulo: 'Automatización',
    tono: 'y APIs.',
    descripcion: 'Procesos inteligentes que ahorran tiempo y evitan errores.',
    columnas: 2,
    imagenes: [api1, api2],
    ctaTexto: '¿Quieres que tu negocio trabaje por ti?',
    ctaBoton: 'Automatizar mi empresa',
    ctaMensaje: 'Quiero automatizar mi empresa',
  },
  {
    id: 'bio-links',
    indice: 'Bio links',
    titulo: 'Bio Links',
    tono: 'Personalizados.',
    descripcion:
      'Creamos enlaces visuales, responsivos y únicos para destacar tus redes, productos o servicios desde Instagram, TikTok o tu firma digital. ¡Listos para impactar!',
    columnas: 3,
    imagenes: [bio1, bio2, bio3],
    ctaTexto: '¿Quieres uno así para tu perfil?',
    ctaBoton: 'Crear mi Bio Link',
    ctaMensaje: 'Estoy interesado en un Bio Link personalizado',
  },
  {
    id: 'invitaciones',
    indice: 'Invitaciones',
    titulo: 'Tarjetas Digitales',
    tono: 'para eventos.',
    descripcion:
      'Diseñamos invitaciones interactivas, hermosas y personalizadas para bodas, 15 años, primeras comuniones y más. Sorprende desde el primer clic.',
    columnas: 2,
    imagenes: [invitacion1, invitacion2],
    ctaTexto: '¿Quieres una invitación inolvidable?',
    ctaBoton: 'Solicitar diseño personalizado',
    ctaMensaje: 'Quiero una invitación digital personalizada',
  },
];

const testimonios = [
  {
    texto: 'Desde que rediseñamos con Lukbyte, aumentamos 40% en conversiones.',
    autor: 'Claudia R., ecommerce',
  },
];

export default function Ejemplos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToHash />
      <div className="ejemplos-container">
        {/* Hero */}
        <section className="section sv-hero sv-hero--solo" aria-labelledby="ejemplos-titulo">
          <div className="frame">
            <AbejaFlotante className="sv-hero__abeja sv-hero__abeja--a" size={56} delay={-3} />

            <h1 className="h-display" id="ejemplos-titulo">
              Explora ejemplos
              <span className="tone">de nuestro trabajo.</span>
            </h1>
            <p className="lede">
              Inspiración real. Resultados medibles. Proyectos listos para replicarse en tu negocio.
            </p>
            <div className="sv-acciones">
              <Accion
                href={whatsappUrl('Hola! Quiero inspirarme con sus plantillas de ejemplo 🌟')}
                primaria
              >
                Solicitar por WhatsApp
              </Accion>
              <Accion to="/agendar">Agendar una demo</Accion>
            </div>

            <nav className="sv-indice" aria-label="Categorías de ejemplos">
              {categorias.map((c) => (
                <a key={c.id} href={`#${c.id}`}>
                  {c.indice}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Secciones por categoría */}
        {categorias.map((c) => (
          <Galeria
            key={c.id}
            id={c.id}
            titulo={c.titulo}
            tono={c.tono}
            intro={c.descripcion}
            columnas={c.columnas ?? 4}
            formato={c.formato}
            items={c.imagenes.map((img, i) => ({
              img,
              alt: `Ejemplo de ${c.indice.toLowerCase()} ${i + 1}`,
            }))}
            pie={
              <>
                <p>{c.ctaTexto}</p>
                {c.ctaRuta ? (
                  <Accion to={c.ctaRuta}>{c.ctaBoton}</Accion>
                ) : (
                  <Accion href={whatsappUrl(c.ctaMensaje)}>{c.ctaBoton}</Accion>
                )}
              </>
            }
          />
        ))}

        {/* Testimonios */}
        <Citas
          id="ejemplos-testimonios"
          titulo="Lo que dicen"
          tono="nuestros clientes."
          items={testimonios}
        />

        {/* CTA Final */}
        <CierreServicio
          titulo="Tu proyecto puede ser"
          tono="el próximo caso de éxito."
          acciones={
            <>
              <Accion href={whatsappUrl('Hola! Quiero una asesoría rápida')} primaria>
                Quiero asesoría rápida
              </Accion>
              <Accion to="/agendar">Agendar una demo</Accion>
            </>
          }
        >
          Agenda una demo o contáctanos por WhatsApp. Resolvemos tus dudas en minutos y empezamos
          hoy.
        </CierreServicio>
      </div>
    </>
  );
}
