import React, { useEffect } from 'react';

// Imágenes
import mockupAPI from '../../assets/servicios/api-mockup.webp';
import caso1 from '../../assets/servicios/api-crm.webp';
import caso2 from '../../assets/servicios/api-facturas.webp';
import caso3 from '../../assets/servicios/api-notificaciones.webp';

import {
  Accion,
  CierreServicio,
  Galeria,
  HeroServicio,
  Proceso,
  Puntos,
} from '../../components/Servicio/BloquesServicio';
import { whatsappUrl } from '../../utils/contacto';

const MENSAJE = `¡Hola! Estoy interesad@ en automatizar procesos de mi negocio mediante APIs.

Me gustaría agendar un diagnóstico gratuito para identificar oportunidades de integración y eficiencia.`;

const beneficios = [
  'Integración entre sistemas',
  'Eliminación de tareas repetitivas',
  'Automatización de envíos y notificaciones',
  'Reportes automáticos en tiempo real',
  'Seguridad y control en el flujo de datos',
  'Inteligencia en decisiones con menos esfuerzo',
];

const pasos = [
  'Diagnóstico de procesos repetitivos o ineficientes',
  'Diseño de arquitectura con APIs seguras',
  'Desarrollo y conexión entre plataformas (CRM, ERPs, eCommerce, etc.)',
  'Validación, pruebas de carga y seguridad',
  'Despliegue y monitoreo automatizado',
];

const casos = [
  {
    img: caso1,
    alt: 'Integración entre sitio web y CRM',
    texto: 'Sincronización automática de leads entre sitio web y CRM en tiempo real.',
  },
  {
    img: caso2,
    alt: 'Bot de facturación automática',
    texto: 'Bot de generación de facturas y envío automático a clientes cada mes.',
  },
  {
    img: caso3,
    alt: 'Sistema de recordatorios por WhatsApp y SMS',
    texto: 'Sistema de recordatorios por WhatsApp y SMS conectado a calendario interno.',
  },
];

export default function AutomatizacionAPIs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="api-container">
      {/* 🔥 HERO */}
      <HeroServicio
        titulo="Automatización"
        tono="y APIs inteligentes."
        imagen={mockupAPI}
        alt="Panel de automatización con flujos conectados entre sistemas"
        acciones={
          <>
            <Accion to="/agendar" primaria>
              Agendar una asesoría gratis
            </Accion>
            <Accion href="#casos-api">Ver casos de uso</Accion>
          </>
        }
      >
        Integra, conecta y automatiza procesos clave de tu negocio con soluciones a medida. Aumenta
        tu eficiencia sin complicaciones.
      </HeroServicio>

      {/* 🔄 Beneficios */}
      <Puntos
        id="api-beneficios"
        titulo="¿Qué puedes lograr"
        tono="con automatización?"
        items={beneficios}
      />

      {/* 🛠 Proceso */}
      <Proceso
        id="api-proceso"
        titulo="Cómo abordamos"
        tono="tu proyecto de automatización."
        pasos={pasos}
      />

      {/* 📌 Casos de uso */}
      <Galeria
        id="casos-api"
        titulo="Ejemplos de automatización"
        tono="aplicados a negocios."
        items={casos}
      />

      {/* CTA final */}
      <CierreServicio
        titulo="Deja que tu negocio"
        tono="trabaje por ti."
        acciones={
          <Accion href={whatsappUrl(MENSAJE)} primaria>
            Quiero automatizar mi negocio
          </Accion>
        }
      >
        Agenda una asesoría y descubre cómo automatizar procesos te permite ahorrar tiempo, dinero y
        errores humanos.
      </CierreServicio>
    </div>
  );
}
