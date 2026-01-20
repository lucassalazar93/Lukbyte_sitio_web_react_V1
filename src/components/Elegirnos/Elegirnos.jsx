import React from 'react';
import { motion } from 'framer-motion';
import './Elegirnos.css';

// ✅ Importar imágenes directamente
import iconoTrofeo from '../../assets/icons/trofeo.png';
import iconoDiseno from '../../assets/icons/diseño.png';
import iconoSoporte from '../../assets/icons/soporte.png';
import iconoTecnologia from '../../assets/icons/tecnologia.png';

// 🧠 Lista de razones
const razones = [
  {
    titulo: 'Experiencia Profesional',
    texto:
      'Especialista en soluciones digitales para marcas líderes. No improvisamos, ejecutamos con estándares industriales.',
    icono: iconoTrofeo,
  },
  {
    titulo: 'Diseño Personalizado',
    texto:
      'Diseños hechos desde cero, únicos para cada cliente. Nada de plantillas genéricas ni copias.',
    icono: iconoDiseno,
  },
  {
    titulo: 'Soporte Continuo',
    texto:
      'Soporte real y humano 24/7 para resolver dudas, emergencias y mantener tu negocio siempre online.',
    icono: iconoSoporte,
  },
  {
    titulo: 'Tecnologías Modernas',
    texto:
      'React, APIs, PWA, inteligencia digital. Usamos tecnología actual, no sistemas anticuados.',
    icono: iconoTecnologia,
  },
];

export default function Elegirnos() {
  return (
    <section className="elegirnos" id="elegirnos">
      <h2 className="elegirnos-title">
        ¿Por Qué Elegir A <span className="lukbyte">Lukbyte</span>?
      </h2>

      <div className="elegirnos-grid">
        {razones.map((razon, index) => (
          <motion.div
            className="razon-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={razon.icono} alt={razon.titulo} className="razon-icon" />
            <h3>{razon.titulo}</h3>
            <p>{razon.texto}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
