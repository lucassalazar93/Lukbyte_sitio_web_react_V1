import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCaretDoubleRightBold, PiListLight, PiXLight } from 'react-icons/pi';
import { whatsappUrl } from '../../utils/contacto';
import './Navbar.css';

const ENLACES = [
  { to: '/?scrollTo=inicio', label: 'Inicio' },
  { to: '/?scrollTo=servicios', label: 'Servicios' },
  { to: '/?scrollTo=proyectos', label: 'Proyectos' },
  { to: '/?scrollTo=contacto', label: 'Contacto' },
  { to: '/nosotros', label: 'Nosotros' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const handleClick = () => setMenuOpen(false);

  return (
    <header className={`navbar-container ${scrolled || menuOpen ? 'shrink' : ''}`}>
      <nav className="navbar frame" aria-label="Principal">
        {/* Logo */}
        <Link to="/?scrollTo=inicio" onClick={handleClick} className="navbar-logo">
          <svg viewBox="0 0 22 24" width="20" height="22" aria-hidden="true">
            <path d="M11 1.2l9 5.2v11.2l-9 5.2-9-5.2V6.4z" />
            <path d="M11 7.4l4 2.3v4.6l-4 2.3-4-2.3V9.7z" />
          </svg>
          <span>
            <span className="logo-luk">Luk</span>
            <span className="logo-byte">byte</span>
          </span>
        </Link>

        {/* Menú de navegación con scroll desde cualquier ruta */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`} id="menu-principal">
          {ENLACES.map((enlace) => (
            <li key={enlace.to}>
              <Link to={enlace.to} onClick={handleClick}>
                {enlace.label}
              </Link>
            </li>
          ))}
          <li className="navbar-menu__cta">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              onClick={handleClick}
            >
              Solicitar cotización
              <PiCaretDoubleRightBold size={13} aria-hidden="true" />
            </a>
          </li>
        </ul>

        {/* Botón de acción principal */}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost cotizar-btn"
        >
          Solicitar cotización
          <PiCaretDoubleRightBold size={13} aria-hidden="true" />
        </a>

        {/* Botón hamburguesa */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
        >
          {menuOpen ? <PiXLight size={24} /> : <PiListLight size={24} />}
        </button>
      </nav>
    </header>
  );
}
