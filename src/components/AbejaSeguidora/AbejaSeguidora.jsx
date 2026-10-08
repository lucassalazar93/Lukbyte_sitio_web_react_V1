// src/components/AbejaSeguidora/AbejaSeguidora.jsx
import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import abejaImg from '../../assets/abejas/abeja-tech.webp';

import './abejaSeguidora.css';

const VUELO = { stiffness: 130, damping: 17, mass: 0.7 };
const GESTO = { stiffness: 260, damping: 20 };
const INTERACTIVO = 'a, button, [role="button"], input, textarea, select, summary';

/* Abeja que acompaña al cursor: mira hacia donde vuela, se inclina con la
   velocidad y se acerca cuando pasa sobre algo que se puede pulsar. */
export default function AbejaSeguidora() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const sx = useSpring(x, VUELO);
  const sy = useSpring(y, VUELO);

  const velocidad = useVelocity(sx);
  const inclinacion = useTransform(velocidad, (v) => Math.min(Math.abs(v) / 70, 20));

  const sentido = useSpring(1, GESTO);
  const escala = useSpring(1, GESTO);

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const alMover = (e) => {
      x.set(e.clientX + 16);
      y.set(e.clientY + 18);
      if (Math.abs(e.movementX) > 2) sentido.set(e.movementX > 0 ? 1 : -1);
      escala.set(e.target.closest?.(INTERACTIVO) ? 1.35 : 1);
      setVisible(true);
    };
    const alSalir = () => setVisible(false);

    window.addEventListener('pointermove', alMover, { passive: true });
    document.documentElement.addEventListener('pointerleave', alSalir);
    return () => {
      window.removeEventListener('pointermove', alMover);
      document.documentElement.removeEventListener('pointerleave', alSalir);
    };
  }, [reduce, x, y, sentido, escala]);

  if (reduce) return null;

  return (
    <motion.div
      className="abeja-seguidora"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
    >
      <motion.span className="abeja-seguidora__giro" style={{ scaleX: sentido }}>
        <motion.img
          src={abejaImg}
          alt=""
          width={46}
          height={46}
          style={{ rotate: inclinacion, scale: escala }}
        />
      </motion.span>
    </motion.div>
  );
}
