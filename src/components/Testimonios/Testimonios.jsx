import React from 'react';
import { motion } from 'framer-motion';
import './Testimonios.css';

// ✅ Importa las imágenes correctamente desde assets
// Sugerencia: Si no tienes las fotos reales, usa iniciales o logos circulares
import noreImg from '../../assets/clientes/cliente1.png';
import alimentImg from '../../assets/clientes/cliente2.png';
import pqrsImg from '../../assets/clientes/cliente3.png';

const clientes = [
  {
    nombre: 'Nore Quintero',
    cargo: 'Emprendedora & Consultora Gastronómica',
    texto:
      'Lukbyte logró capturar la esencia premium de mi marca. La landing page no solo es visualmente impactante, sino que optimizó el flujo de clientes que buscan mis servicios de consultoría gourmet.',
    proyecto: 'Proyecto: Landing Page Premium',
    img: noreImg,
    rating: 5,
  },
  {
    nombre: 'Juan pablo Martínez',
    cargo: 'Especialista en Seguridad Alimentaria',
    texto:
      'Necesitábamos una plataforma para ofrecer nuestros cursos de manipulación de alimentos. Lukbyte desarrolló un sitio web ágil que facilita la inscripción y mejora la visibilidad de nuestros servicios.',
    proyecto: 'Servicio: Web de Servicios Profesionales',
    img: alimentImg,
    rating: 5,
  },
  {
    nombre: 'María Gómez',
    cargo: 'Sector Logística / Retail',
    texto:
      'El sistema de recepción de PQRS que implementaron transformó nuestra atención al cliente. Pasamos de procesos manuales a una gestión centralizada, eficiente y con trazabilidad total de los requerimientos.',
    proyecto: 'Software: Sistema de Gestión de PQRS',
    img: pqrsImg,
    rating: 5,
  },
];

export default function Testimonios() {
  return (
    <section className="testimonios" id="testimonios">
      <h2 className="testimonios-title">
        Testimonios <span className="lukbyte">Con Impacto Real</span>
      </h2>

      <div className="testimonios-grid">
        {clientes.map((cli, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="cliente-header">
              <img src={cli.img} alt={cli.nombre} className="cliente-foto" />
              <div className="cliente-meta">
                <h3>{cli.nombre}</h3>
                <span className="cliente-cargo">{cli.cargo}</span>
              </div>
            </div>

            <p className="testimonial-text">"{cli.texto}"</p>

            <div className="proyecto-tag">
              <small>{cli.proyecto}</small>
            </div>

            <div className="estrellas">{'★'.repeat(cli.rating)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
