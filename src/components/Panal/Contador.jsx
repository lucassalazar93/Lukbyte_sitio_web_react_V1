import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

/* Cifra que sube desde cero al entrar en pantalla. La copia final,
   invisible, reserva el ancho para que el texto no salte al contar. */
export default function Contador({ valor, formato, duracion = 2.4 }) {
  const ref = useRef(null);
  const enVista = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const actual = useMotionValue(reduce ? valor : 0);
  const texto = useTransform(actual, (v) => formato(Math.round(v)));

  useEffect(() => {
    if (reduce) {
      actual.set(valor);
      return undefined;
    }
    if (!enVista) return undefined;
    const control = animate(actual, valor, { duration: duracion, ease: EASE });
    return () => control.stop();
  }, [enVista, reduce, valor, duracion, actual]);

  return (
    <span className="contador" ref={ref}>
      <span className="sr-only">{formato(valor)}</span>
      <span className="contador__reserva" aria-hidden="true">
        {formato(valor)}
      </span>
      <motion.span className="contador__cifra" aria-hidden="true">
        {texto}
      </motion.span>
    </span>
  );
}

Contador.propTypes = {
  valor: PropTypes.number.isRequired,
  formato: PropTypes.func.isRequired,
  duracion: PropTypes.number,
};
