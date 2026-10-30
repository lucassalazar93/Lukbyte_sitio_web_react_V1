import React from 'react';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import './Testimonios.css';

// ✅ Importa las imágenes correctamente desde assets
// Sugerencia: Si no tienes las fotos reales, usa iniciales o logos circulares
import noreImg from '../../assets/clientes/cliente1.png';
import alimentImg from '../../assets/clientes/cliente2.png';
import pqrsImg from '../../assets/clientes/cliente3.png';

const clientes = [
  {
    nombre: 'Geral',
    cargo: 'Propietaria, Mandingas La 37 y Mundo Mandingas',
    texto:
      'Antes de MandiPOS, todo era en papel. Los domicilios se perdían, la cocina estaba desordenada y la administración era difícil de seguir. Hoy, en Mandingas La 37 y Mundo Mandingas, llevamos 8.281 pedidos entregados entre julio y octubre de 2026, con cada pedido registrado desde la caja hasta la cocina y el domicilio.',
    proyecto: 'Producto: MandiPOS',
    img: null,
    rating: 5,
  },
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
    <section className="section testimonios" id="testimonios" aria-labelledby="testimonios-titulo">
      <div className="frame">
        <EncabezadoSeccion
          id="testimonios-titulo"
          titulo="Testimonios."
          tono="Con impacto real."
        />

        <div className="testimonios-grid">
          {clientes.map((cli) => (
            <figure className="testimonio-celda" key={cli.nombre}>
              <div
                className="testimonio__nota"
                role="img"
                aria-label={`${cli.rating} de 5`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < cli.rating ? 'is-llena' : undefined} />
                ))}
              </div>

              <blockquote>
                <p>{cli.texto}</p>
              </blockquote>

              <figcaption>
                {cli.img ? (
                  <img src={cli.img} alt="" className="cliente-foto" loading="lazy" />
                ) : (
                  <span className="cliente-foto cliente-iniciales" aria-hidden="true">
                    {cli.nombre.charAt(0)}
                  </span>
                )}
                <div className="cliente-meta">
                  <strong>{cli.nombre}</strong>
                  <span>{cli.cargo}</span>
                </div>
                <small className="label proyecto-tag">{cli.proyecto}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
