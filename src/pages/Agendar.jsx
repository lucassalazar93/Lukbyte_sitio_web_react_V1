import React, { useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { Spanish } from 'flatpickr/dist/l10n/es';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Confetti from 'react-confetti';
import {
  PiCaretDoubleRightBold,
  PiClockLight,
  PiGlobeHemisphereWestLight,
  PiSealCheckLight,
  PiVideoCameraLight,
} from 'react-icons/pi';
import AbejaFlotante from '../components/Panal/AbejaFlotante';
import { enviarCitaAGoogleCalendar } from '../utils/crearEventoGoogle';
import { enviarCorreoConfirmacion } from '../utils/enviarCorreo';
import { whatsappUrl } from '../utils/contacto';
import './Agendar.css';

const horas = [
  '9:00',
  '9:15',
  '9:30',
  '9:45',
  '10:00',
  '10:15',
  '10:30',
  '17:00',
  '17:15',
  '17:30',
];

const servicios = [
  'Desarrollo web',
  'Diseño UI-UX',
  'Aplicación web progresiva (PWA)',
  'Automatización y APIs',
  'Tarjetas digitales para eventos',
  'Bio link',
  'Otro',
];

const detalles = [
  { Icono: PiClockLight, texto: '20 minutos' },
  { Icono: PiVideoCameraLight, texto: 'Google Meet' },
  { Icono: PiSealCheckLight, texto: 'Requiere confirmación' },
  { Icono: PiGlobeHemisphereWestLight, texto: 'América/Bogotá' },
];

/* Qué pasa en la demo, en orden */
const pasos = [
  {
    titulo: 'Nos cuentas tu negocio',
    texto: 'En el formulario y al empezar la llamada: qué haces hoy y qué quieres resolver.',
  },
  {
    titulo: 'Te mostramos tu demo',
    texto: 'Una propuesta pensada para tu caso, explicada en pantalla y sin tecnicismos.',
  },
  {
    titulo: 'Tú decides',
    texto: 'Si te sirve, seguimos. Si no, no pagas nada ni quedas comprometido.',
  },
];

const formatoFecha = (f) =>
  f
    ? f.toLocaleDateString('es-CO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

export default function Agendar() {
  const [fecha, setFecha] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [mostrarGracias, setMostrarGracias] = useState(false);
  const [fechaConfirmada, setFechaConfirmada] = useState(null);
  const [horaConfirmada, setHoraConfirmada] = useState('');
  const [aviso, setAviso] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    numero: '',
    servicio: '',
    negocio: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const campo = (nombre) => (e) => setFormData({ ...formData, [nombre]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fecha || !horaSeleccionada) {
      setAviso('Selecciona una fecha y una hora.');
      return;
    }
    if (!formData.nombre || !formData.email || !formData.servicio) {
      setAviso('Completa tu nombre, tu email y el servicio que te interesa.');
      return;
    }
    setAviso('');

    const fechaFormateada = fecha.toISOString().split('T')[0];
    const descripcion = `Cita con ${formData.nombre} (${formData.email})\nServicio: ${formData.servicio}\nTeléfono: ${formData.numero}\nNegocio: ${formData.negocio}`;

    await enviarCitaAGoogleCalendar({
      titulo: `Cita - ${formData.servicio}`,
      descripcion,
      fecha: fechaFormateada,
      hora: horaSeleccionada,
    });

    await enviarCorreoConfirmacion({
      nombre: formData.nombre,
      email: formData.email,
      numero: formData.numero,
      servicio: formData.servicio,
      negocio: formData.negocio,
      fecha: fechaFormateada,
      hora: horaSeleccionada,
    });

    setFechaConfirmada(fecha);
    setHoraConfirmada(horaSeleccionada);
    setMostrarGracias(true);
    setFecha(null);
    setHoraSeleccionada('');
  };

  const generarLinkWhatsApp = () => {
    const mensaje = `Hola Lukbyte 👋\n\nHe agendado una demo gratuita para el *${formatoFecha(
      fechaConfirmada
    )}* a las *${horaConfirmada}*.\n\nAquí están mis datos:\n\n🧑‍💼 *Nombre:* ${formData.nombre}\n📧 *Email:* ${formData.email}\n📱 *WhatsApp:* ${formData.numero}\n💼 *Servicio:* ${formData.servicio}\n📝 *Negocio:* ${formData.negocio}\n\n¡Quedo atento a la reunión! 🚀`;
    return whatsappUrl(mensaje);
  };

  return (
    <section className="section scheduler" aria-labelledby="agendar-titulo">
      {mostrarGracias && (
        <>
          <Confetti colors={['#00bfff', '#7fdfff', '#8b6cff', '#eef4ff']} />
          <div className="gracias-modal" role="dialog" aria-modal="true" aria-labelledby="gracias">
            <div className="gracias-card">
              <h2 id="gracias">
                ¡Gracias por agendar, <span className="resaltar">{formData.nombre}</span>!
              </h2>
              <p>Tu demo gratis quedó reservada.</p>
              <div className="resumen-cita">
                <strong>{formatoFecha(fechaConfirmada)}</strong>
                <strong>{horaConfirmada}</strong>
              </div>
              <p className="nota-cita">
                Confirma la información que debes de tener para el día de la cita.
              </p>
              <a
                href={generarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Recibir detalles por WhatsApp
                <PiCaretDoubleRightBold size={13} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setMostrarGracias(false)}
                className="btn btn--ghost"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}

      <div className="frame">
        <AbejaFlotante className="scheduler-abeja" size={58} flip delay={-2} />

        <header className="scheduler-head">
          <h1 className="h-display" id="agendar-titulo">
            Demo gratis para tu negocio.
            <span className="tone">Sin costo y sin compromiso.</span>
          </h1>
          <p className="lede">
            Reserva una videollamada de 20 minutos. Antes de hablar de precios, te mostramos cómo se
            vería una solución hecha para tu negocio. Verla no te cuesta nada.
          </p>
          <a href="#reserva" className="btn btn--primary scheduler-saltar">
            Reservar mi demo gratis
            <PiCaretDoubleRightBold size={13} aria-hidden="true" />
          </a>
          <ol className="scheduler-pasos">
            {pasos.map((paso, i) => (
              <li key={paso.titulo}>
                <span className="scheduler-pasos__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h2>{paso.titulo}</h2>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
          <ul className="scheduler-detalles">
            {detalles.map(({ Icono, texto }) => (
              <li key={texto}>
                <Icono size={20} aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </header>

        <div className="scheduler-container" id="reserva">
          <div className="scheduler-info">
            <h2>Tus datos</h2>
            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>Tu nombre *</span>
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.nombre}
                  onChange={campo('nombre')}
                />
              </label>
              <label>
                <span>Email *</span>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={campo('email')}
                />
              </label>
              <label>
                <span>WhatsApp *</span>
                <PhoneInput
                  country={'co'}
                  value={formData.numero}
                  onChange={(phone) => setFormData({ ...formData, numero: phone })}
                  inputProps={{ name: 'phone', required: true }}
                />
              </label>
              <label>
                <span>Servicio *</span>
                <select required value={formData.servicio} onChange={campo('servicio')}>
                  <option value="">Selecciona un servicio</option>
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Cuéntanos un poco de qué trata tu negocio *</span>
                <textarea
                  rows={3}
                  required
                  value={formData.negocio}
                  onChange={campo('negocio')}
                ></textarea>
              </label>
            </form>
          </div>

          <div className="scheduler-calendar">
            <h2>Calendario</h2>
            <Flatpickr
              options={{
                inline: true,
                locale: Spanish,
                minDate: 'today',
                dateFormat: 'Y-m-d',
                disableMobile: true,
              }}
              value={fecha}
              onChange={([date]) => setFecha(date)}
            />
            <div className="selection-display">
              {fecha ? formatoFecha(fecha) : 'Selecciona una fecha'}
            </div>
          </div>

          <div className="scheduler-times">
            <h2>Horas disponibles</h2>
            <div className="time-buttons">
              {horas.map((hora) => (
                <button
                  type="button"
                  key={hora}
                  className={hora === horaSeleccionada ? 'active' : ''}
                  aria-pressed={hora === horaSeleccionada}
                  onClick={() => setHoraSeleccionada(hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
            <div className="selection-display">
              {horaSeleccionada ? horaSeleccionada : 'Selecciona una hora'}
            </div>
            {horaSeleccionada && fecha && (
              <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn--primary confirm-btn">
                  Reservar mi demo gratis: {formatoFecha(fecha)}, {horaSeleccionada}
                </button>
              </form>
            )}
            {aviso && (
              <p className="scheduler-aviso" role="alert">
                {aviso}
              </p>
            )}
          </div>
        </div>

        <p className="note">
          <a
            href={whatsappUrl('Hola Lukbyte, tengo un inconveniente para agendar mi demo.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿Tienes algún inconveniente? Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
