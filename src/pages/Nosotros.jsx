import React, { useEffect } from 'react';
import {
  PiArrowUpRightBold,
  PiLightbulbFilamentLight,
  PiLightningLight,
  PiRocketLaunchLight,
  PiStackLight,
  PiTargetLight,
  PiUsersThreeLight,
} from 'react-icons/pi';

import EncabezadoSeccion from '../components/Panal/EncabezadoSeccion';
import AbejaFlotante from '../components/Panal/AbejaFlotante';
import BandaPanal from '../components/Panal/BandaPanal';
import PanalEnConstruccion from '../components/Panal/PanalEnConstruccion';
import { Accion, Proceso } from '../components/Servicio/BloquesServicio';
import { PORTAFOLIO_URL, tecnologias } from '../data/sitio';
import { whatsappUrl } from '../utils/contacto';

import './Nosotros.css';

const MENSAJE = '¡Hola Lukbyte! Quiero trabajar con ustedes en mi proyecto digital 💻📲';

/* Lo que define cómo trabajamos */
const claves = [
  {
    nombre: 'Rapidez',
    texto: 'Ciclos cortos y entregas continuas para llegar antes a producción.',
    Icono: PiLightningLight,
  },
  {
    nombre: 'Innovación',
    texto: 'Inteligencia artificial y automatización aplicadas a tu operación.',
    Icono: PiLightbulbFilamentLight,
  },
  {
    nombre: 'Escalabilidad',
    texto: 'Arquitectura limpia y modular que crece con tu empresa.',
    Icono: PiStackLight,
  },
  {
    nombre: 'Trabajo en equipo',
    texto: 'Diseño, desarrollo y estrategia en una sola colmena, contigo dentro.',
    Icono: PiUsersThreeLight,
  },
];

const pasos = [
  'Descubrimiento y estrategia',
  'Arquitectura y prototipo',
  'Diseño de la experiencia',
  'Desarrollo en ciclos cortos',
  'Pruebas y optimización',
  'Despliegue y acompañamiento',
];

const valores = [
  { nombre: 'Cercanía', texto: 'Escuchamos con atención y hablamos con el corazón.' },
  {
    nombre: 'Profesionalismo',
    texto: 'Cuidamos cada detalle para ofrecer soluciones de calidad.',
  },
  {
    nombre: 'Creatividad',
    texto: 'Nos encanta transformar ideas en experiencias visuales y funcionales.',
  },
  { nombre: 'Compromiso', texto: 'Nos tomamos cada proyecto como si fuera propio.' },
  {
    nombre: 'Evolución',
    texto: 'Aprendemos, crecemos y nos adaptamos constantemente para ofrecer siempre lo mejor.',
  },
];

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nosotros-container">
      {/* HERO */}
      <section className="section hero-nosotros" aria-labelledby="nosotros-titulo">
        <div className="frame">
          <AbejaFlotante className="abeja top-center" size={52} delay={-3} />

          <div className="nosotros-intro">
            <h1 className="h-display" id="nosotros-titulo">
              Somos un panal
              <span className="tone">que construye tecnología.</span>
            </h1>
            <p className="lede">
              Lukbyte es un equipo de desarrollo de software. Trabajamos como una colmena: cada
              especialidad aporta su celda y el resultado es un producto digital rápido, innovador
              y listo para escalar.
            </p>
            <div className="sv-acciones">
              <Accion href={whatsappUrl(MENSAJE)} primaria>
                Hablemos por WhatsApp
              </Accion>
              <Accion to="/?scrollTo=proyectos">Ver proyectos</Accion>
            </div>
          </div>

          <PanalEnConstruccion />
        </div>
      </section>

      {/* CLAVES */}
      <section className="section" aria-labelledby="claves-titulo">
        <div className="frame">
          <EncabezadoSeccion
            id="claves-titulo"
            titulo="Lo que nos mueve."
            tono="Rapidez, innovación y trabajo en equipo."
          >
            No improvisamos: cada proyecto sigue un método que combina velocidad de entrega con una
            arquitectura pensada para durar.
          </EncabezadoSeccion>

          <ul className="nosotros-claves">
            {claves.map(({ nombre, texto, Icono }) => (
              <li key={nombre}>
                <Icono size={28} aria-hidden="true" />
                <h3>{nombre}</h3>
                <p>{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESO */}
      <Proceso id="nosotros-proceso" titulo="Así construimos" tono="cada celda." pasos={pasos} />

      <BandaPanal />

      {/* QUIÉN LIDERA */}
      <section className="section autor" aria-labelledby="autor-titulo">
        <div className="frame">
          <h2 className="h-display" id="autor-titulo">
            Quién lidera el desarrollo.
            <span className="tone">Lucas Salazar, fullstack developer.</span>
          </h2>

          <figure className="autor__cita">
            <blockquote>
              <p>
                Soy Lucas, desarrollador fullstack con mentalidad emprendedora que equilibra lógica,
                diseño y agilidad técnica. Trabajo de punta a punta: frontend, backend, bases de
                datos y despliegue. Mi experiencia en entornos industriales y proyectos freelance
                me ha enseñado que un producto digital solo es valioso cuando es funcional,
                intuitivo y escalable.
              </p>
              <p>
                Mi enfoque no es crear “sitios web”, sino desarrollar ecosistemas digitales con
                propósito. Utilizo la inteligencia artificial como aliada estratégica para
                optimizar procesos, acelerar el desarrollo y construir soluciones de alto impacto
                que generan valor real.
              </p>
            </blockquote>
            <figcaption>
              <a
                href={PORTAFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                Ver portafolio
                <PiArrowUpRightBold size={14} aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="section mision-vision-section" aria-label="Misión y visión">
        <div className="frame">
          <div className="mision-box">
            <PiTargetLight size={30} aria-hidden="true" />
            <h2>Misión</h2>
            <p>
              Impulsar el crecimiento de empresas y emprendedores con software a medida,
              plataformas web y automatización que agilizan procesos, fortalecen la identidad de
              marca y permiten operar y vender de manera constante y profesional.
            </p>
          </div>
          <div className="vision-box">
            <PiRocketLaunchLight size={30} aria-hidden="true" />
            <h2>Visión</h2>
            <p>
              Ser una marca reconocida por la rapidez, la innovación y el compromiso con que
              construye tecnología, y un referente en soluciones digitales que generan impacto real
              y sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES CORPORATIVOS */}
      <section className="section valores-section" aria-labelledby="valores-titulo">
        <div className="frame">
          <EncabezadoSeccion
            id="valores-titulo"
            titulo="Valores corporativos."
            tono="Cinco formas de trabajar."
          />

          <dl className="valores-lista">
            {valores.map((valor) => (
              <div key={valor.nombre}>
                <dt>{valor.nombre}</dt>
                <dd>{valor.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="section tecnologias-section" aria-labelledby="tecnologias-titulo">
        <div className="frame">
          <EncabezadoSeccion
            id="tecnologias-titulo"
            titulo="Tecnologías."
            tono="El panal por dentro."
          >
            Transformamos ideas complejas en soluciones digitales robustas y escalables.
          </EncabezadoSeccion>

          <div className="tecnologias-grid">
            {tecnologias.map((bloque) => (
              <div className="tecnologias-grupo" key={bloque.grupo}>
                <h3>{bloque.grupo}</h3>
                <ul>
                  {bloque.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-nosotros" aria-labelledby="cta-nosotros-titulo">
        <div className="frame">
          <h2 className="h-display" id="cta-nosotros-titulo">
            ¿Listos para crear algo increíble juntos?
          </h2>
          <p className="lede">
            Somos la combinación perfecta de diseño, desarrollo y estrategia. Si quieres una marca
            que impacte, este es tu momento.
          </p>
          <div className="sv-acciones">
            <Accion href={whatsappUrl(MENSAJE)} primaria>
              Comienza tu proyecto con Lukbyte
            </Accion>
          </div>
        </div>
      </section>
    </div>
  );
}
