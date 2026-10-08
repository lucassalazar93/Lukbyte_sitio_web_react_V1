import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PiCaretDoubleRightBold,
  PiEnvelopeSimpleLight,
  PiGithubLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiMapPinLight,
  PiPhoneLight,
} from 'react-icons/pi';
import AbejaFlotante from '../Panal/AbejaFlotante';
import { whatsappUrl } from '../../utils/contacto';
import {
  CIUDAD,
  EMAIL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PORTAFOLIO_URL,
  TELEFONO,
} from '../../data/sitio';
import './Footer.css';

// Imágenes
import logoLukbyte from '../../assets/logoLukbyte.webp';

const REDES = [
  { href: INSTAGRAM_URL, label: 'Instagram', Icono: PiInstagramLogoLight },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icono: PiLinkedinLogoLight },
  { href: GITHUB_URL, label: 'GitHub', Icono: PiGithubLogoLight },
];

export default function Footer() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const texto = `
Solicitud de cotización desde la web:

Nombre: ${nombre}
Correo: ${correo}

Esto es lo que necesita:
"${mensaje}"

Quedo super atent@ a la respuesta.
`;

    window.open(whatsappUrl(texto), '_blank');

    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <footer className="footer">
      {/* Contacto: formulario de cotización */}
      <section className="section contacto-seccion" id="contacto" aria-labelledby="contacto-titulo">
        <div className="frame">
          <AbejaFlotante className="footer-abeja" size={84} flip delay={-1} />

          <div className="contacto-grid">
            <div>
              <h2 className="h-display" id="contacto-titulo">
                Solicita tu cotización.
                <span className="tone">Te respondemos por WhatsApp.</span>
              </h2>

              <ul className="contacto-datos">
                <li>
                  <PiMapPinLight size={20} aria-hidden="true" />
                  {CIUDAD}
                </li>
                <li>
                  <PiPhoneLight size={20} aria-hidden="true" />
                  <a href={`tel:${TELEFONO.replace(/\s/g, '')}`}>{TELEFONO}</a>
                </li>
                <li>
                  <PiEnvelopeSimpleLight size={20} aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
              </ul>
            </div>

            <form className="contacto-form" onSubmit={enviarWhatsApp}>
              <label>
                <span>Nombre completo</span>
                <input
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>Correo electrónico</span>
                <input
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </label>
              <label>
                <span>¿Qué necesitas?</span>
                <textarea
                  name="message"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
              </label>
              <button type="submit" className="btn btn--primary">
                Enviar por WhatsApp
                <PiCaretDoubleRightBold size={13} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa de ubicación */}
      <div className="section footer-mapa">
        <div className="frame">
          <iframe
            title="Ubicación Lukbyte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.841011296049!2d-75.56359268573665!3d6.244198095478998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a1f7d2c3b1%3A0x4d9e8f9e8f9e8f9e!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1610000000000!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="section footer-pie">
        <div className="frame">
          <div className="footer-content">
            {/* Columna 1: Logo y descripción */}
            <div className="footer-col logo">
              <img src={logoLukbyte} alt="Lukbyte" className="footer-logo" loading="lazy" />
              <p>Soluciones digitales inteligentes para marcas que quieren destacar.</p>
            </div>

            {/* Columna 2: Enlaces */}
            <nav className="footer-col links" aria-label="Enlaces del sitio">
              <h3>Enlaces</h3>
              <ul>
                <li>
                  <Link to="/?scrollTo=inicio">Inicio</Link>
                </li>
                <li>
                  <Link to="/?scrollTo=servicios">Servicios</Link>
                </li>
                <li>
                  <Link to="/?scrollTo=proyectos">Proyectos</Link>
                </li>
                <li>
                  <Link to="/?scrollTo=testimonios">Testimonios</Link>
                </li>
                <li>
                  <Link to="/?scrollTo=contacto">Contacto</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
              </ul>
            </nav>

            {/* Columna 3: Redes y portafolio */}
            <div className="footer-col">
              <h3>Síguenos</h3>
              <ul className="redes">
                {REDES.map(({ href, label, Icono }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icono size={22} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={PORTAFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-portafolio"
              >
                Portafolio de Lucas Salazar
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Lukbyte. Todos los derechos reservados.</p>
            <p>
              <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
              <Link to="/politica-de-privacidad">Política de privacidad</Link>
            </p>
            <p>
              Diseñado por <strong>Lucas Salazar</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
