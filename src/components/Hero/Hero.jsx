import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import styles from './Hero.module.css';
import HiveCanvas from './HiveCanvas';

const MOVIL = '(max-width: 768px)';

// Punto del encuadre donde está la abeja: desde ahí despierta el panal
const ESCRITORIO_ORIGEN = { x: 0.7, y: 0.48 };
const MOVIL_ORIGEN = { x: 0.62, y: 0.36 };

const Hero = () => {
  const reduce = useReducedMotion();
  const mediaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOVIL).matches);

  useEffect(() => {
    const mq = window.matchMedia(MOVIL);
    const checkMobile = () => setIsMobile(mq.matches);
    mq.addEventListener('change', checkMobile);
    return () => mq.removeEventListener('change', checkMobile);
  }, []);

  // La escena de la abeja se desplaza apenas con el cursor
  const handleMove = (e) => {
    if (reduce || isMobile || !mediaRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mediaRef.current.style.setProperty('--px', ((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mediaRef.current.style.setProperty('--py', ((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  // Retraso de cada pieza de la entrada, en segundos
  const tras = (delay) => ({ style: { '--d': `${delay}s` } });

  return (
    <section className={styles.hero} id="inicio" onPointerMove={handleMove}>
      {/* ✅ Video de fondo o imagen fallback */}
      <div className={styles.media} ref={mediaRef}>
        {isMobile || reduce ? (
          <img
            src={isMobile ? '/videos/fallback-tech.webp' : '/videos/videoHero-tech-poster.jpg'}
            alt="Abeja cibernética volando sobre una retícula iluminada"
            fetchPriority="high"
          />
        ) : (
          <video
            src="/videos/videoHero-tech.mp4"
            poster="/videos/videoHero-tech-poster.jpg"
            aria-label="Abeja cibernética volando sobre una retícula iluminada"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      <div className={styles.shade} aria-hidden="true" />
      <HiveCanvas className={styles.hive} origen={isMobile ? MOVIL_ORIGEN : ESCRITORIO_ORIGEN} />

      <div className={`frame ${styles.inner}`}>
        <h1 className={styles.heroTitle}>
          <span className={styles.line}>
            <span {...tras(0.15)}>Software a medida</span>
          </span>
          <span className={`${styles.line} ${styles.tone}`}>
            <span {...tras(0.27)}>que crece con tu empresa.</span>
          </span>
        </h1>

        <p className={`${styles.heroSubtitle} ${styles.rise}`} {...tras(0.5)}>
          Combinamos arquitectura limpia, inteligencia artificial y experiencia de usuario para
          crear productos digitales que generan resultados reales.
        </p>

        <div className={`${styles.actions} ${styles.rise}`} {...tras(0.62)}>
          <Link to="/agendar" className="btn btn--primary">
            Agendar demo gratis
            <PiCaretDoubleRightBold size={13} aria-hidden="true" />
          </Link>
          <Link to="/?scrollTo=proyectos" className="btn btn--ghost">
            Ver proyectos
          </Link>
        </div>
        <p className={`${styles.nota} ${styles.rise}`} {...tras(0.7)}>
          Una videollamada de 20 minutos para tu negocio. Sin costo y sin compromiso.
        </p>

        <p className={`${styles.proof} ${styles.rise}`} {...tras(0.78)}>
          Productos en operación como <strong>MandiPOS</strong> y <strong>Quick Flow</strong>, y
          experiencia corporativa con <strong>Gef</strong>, <strong>Punto Blanco</strong> y{' '}
          <strong>Baby Fresh</strong>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
