import React from 'react';
import EncabezadoSeccion from '../Panal/EncabezadoSeccion';
import { whatsappUrl } from '../../utils/contacto';
import './ComoTrabajamos.css';

const MENSAJE_MOCK =
  '¡Hola! Quiero un mock personalizado y gratuito para mi negocio. ¿Podemos empezar?';

const PASOS = [
  {
    numero: '01',
    titulo: 'Cuéntanos tu negocio',
    texto: 'Una videollamada de 20 minutos para entender tu operación, tus clientes y tu meta.',
  },
  {
    numero: '02',
    titulo: 'Recibes un mock gratuito',
    texto:
      'Un prototipo interactivo con tu marca y tus procesos, para que veas la solución antes de decidir.',
  },
  {
    numero: '03',
    titulo: 'Hablamos del precio por WhatsApp',
    texto:
      'Con el alcance claro y el mock aprobado, te enviamos la cotización por WhatsApp, sin sorpresas.',
  },
];

export default function ComoTrabajamos() {
  return (
    <section className="section proceso" id="proceso" aria-labelledby="proceso-titulo">
      <div className="frame">
        <EncabezadoSeccion
          id="proceso-titulo"
          titulo="Cómo trabajamos."
          tono="Primero lo ves, después decidimos."
        >
          Antes de hablar de precios, te mostramos cómo se vería tu proyecto. El precio lo
          conversamos por WhatsApp, con el alcance ya claro.
        </EncabezadoSeccion>

        <ol className="proceso-pasos">
          {PASOS.map((paso) => (
            <li className="proceso-paso" key={paso.numero}>
              <span className="proceso-numero" aria-hidden="true">
                {paso.numero}
              </span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>

        <div className="proceso-accion">
          <a
            className="proceso-boton"
            href={whatsappUrl(MENSAJE_MOCK)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir mi mock gratis
          </a>
        </div>
      </div>
    </section>
  );
}
