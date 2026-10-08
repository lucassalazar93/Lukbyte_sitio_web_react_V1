import tiendaFuturo from '../../assets/portafolio/proyectos/tienda-futuro-multibrand.webp';
import pqrs from '../../assets/portafolio/proyectos/pqrs-multibrand.webp';
import crystal from '../../assets/portafolio/marcas/crystal.webp';
import orix from '../../assets/portafolio/proyectos/orix-glow.webp';
import mandipos from '../../assets/portafolio/proyectos/mandipos-glow.webp';
import soyArte from '../../assets/portafolio/proyectos/soy-arte.webp';
import noreQuintero from '../../assets/portafolio/proyectos/sabor-a-felicidad.webp';
import lukbyte from '../../assets/portafolio/proyectos/lukbyte.webp';
import ia from '../../assets/portafolio/proyectos/ia.webp';
import quickflow from '../../assets/portafolio/proyectos/quickflow.webp';
import primotos from '../../assets/portafolio/proyectos/primotos.webp';
import patient360 from '../../assets/portafolio/proyectos/patient360.webp';
import elvore from '../../assets/portafolio/proyectos/elvore.webp';

/* ─── Data de proyectos ───────────────────────
   Misma fuente que el portafolio (lucas-portfolio/src/data/proyectos.js):
   al actualizar un proyecto allá, replica el cambio aquí.
   destacado: celda grande del panal (en este orden).
   placa: color de fondo del emblema cuando el logo trae fondo propio.
   enlace: sitio público, muestra el enlace "Ver en vivo".
   flujo: pasos de la arquitectura, se dibujan como una línea. */
export const proyectos = [
  {
    id: 'mandipos',
    icono: mandipos,
    titulo: 'MandiPOS',
    bajada: 'Ecosistema POS para restaurantes',
    descripcion:
      'Ecosistema para restaurantes ya en operación: POS, app de domicilios, catálogo para clientes y un robot que controla los sistemas de impresión.',
    nota: 'En operación en dos sedes: Mandingas La 37 y Mundo Mandingas.',
    detalles: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Multi-tenant', 'Tiempo real'],
    estado: 'En el mercado',
    enlace: 'https://pos.mandingas.online',
    destacado: true,
  },
  {
    id: 'quickflow',
    icono: quickflow,
    titulo: 'Quick Flow',
    bajada: 'Catálogos inteligentes y geolocalización',
    descripcion:
      'Recuerda los datos de tus clientes, recomienda los productos más vendidos y sugiere adicionales. Cotiza domicilios por zonas y envía el pedido a WhatsApp o directo al POS.',
    detalles: [
      'Catálogo inteligente',
      'Geolocalización',
      'Cotizador por zonas',
      'WhatsApp',
      'Pedidos al POS',
    ],
    estado: 'En el mercado',
    enlace: 'https://quickflow-tau.vercel.app/',
    destacado: true,
    placa: '#ffffff',
  },
  {
    id: 'primotos-asistencia',
    icono: primotos,
    titulo: 'Asistencia y Horas Extras',
    bajada: 'Primotos · Control biométrico de asistencia',
    descripcion:
      'Convierte marcaciones biométricas ZKTeco y BioTime en horas trabajadas, retrasos, ausencias y horas extras. Agente local offline-first que sincroniza sin duplicados.',
    flujo: ['ZKTeco', 'Agente local', 'API', 'Motor de asistencia', 'Dashboard'],
    detalles: ['ZKTeco', 'BioTime', 'Offline-first', 'Idempotencia', 'Multi-sede', 'Auditoría'],
    estado: 'En desarrollo',
    destacado: true,
    placa: '#ffffff',
  },
  {
    id: 'patient360',
    icono: patient360,
    titulo: 'Patient 360',
    bajada: 'CRM para clínicas odontológicas premium',
    descripcion:
      'Une recepción, odontólogos y administración: agenda, atención clínica, planes de tratamiento, pagos y seguimiento. Cada paciente con estado claro y próxima acción.',
    detalles: [
      'SaaS Healthcare',
      'CRM Dental',
      'Agenda inteligente',
      'Automatización',
      'Patient Journey',
    ],
    estado: 'En desarrollo',
    destacado: true,
    placa: '#ffffff',
  },
  {
    id: 'tienda-futuro',
    icono: tiendaFuturo,
    titulo: 'Tienda del Futuro Multimarca',
    descripcion:
      'Experiencia omnicanal para Gef, Punto Blanco y Baby Fresh con visualización de outfits mediante IA y checkout unificado.',
    detalles: ['React', 'IA Generativa', 'Shopify API', 'Arquitectura Multimarca', 'QR Payments'],
    estado: 'Proyecto Corporativo',
    destacado: true,
    placa: '#000000',
  },
  {
    id: 'primotos-workspace',
    icono: primotos,
    titulo: 'Gestión Documental',
    bajada: 'Primotos · Google Workspace',
    descripcion:
      'Migración del correo corporativo, unidades compartidas, permisos y estándares de archivo para Administración, Comercial y Gestión Humana. Una sola fuente de información, con manuales operativos.',
    detalles: [
      'Google Workspace',
      'Gestión documental',
      'Gobierno de información',
      'Migración',
      'Gestión del cambio',
    ],
    estado: 'Finalizado',
    destacado: true,
    placa: '#ffffff',
  },
  {
    id: 'elvore',
    icono: elvore,
    titulo: 'ELVORÉ',
    descripcion: 'Tienda virtual de joyería: accesorios de lujo en oro 18k.',
    detalles: ['E-commerce', 'Tienda virtual', 'Joyería de lujo'],
    estado: 'En desarrollo',
    placa: '#ffffff',
  },
  {
    id: 'nore-quintero',
    icono: noreQuintero,
    titulo: 'Nore Quintero',
    descripcion: 'Tienda virtual de repostería gourmet.',
    detalles: ['JavaScript (ES Modules)', 'Arquitectura por capas', 'WhatsApp', 'Google Maps'],
    estado: 'Finalizado',
    enlace: 'https://nore-quintero.vercel.app/',
  },
  {
    id: 'pqrs',
    icono: pqrs,
    titulo: 'Sistema PQRS Multimarca',
    descripcion:
      'Plataforma centralizada de atención al cliente para el ecosistema de marcas de Crystal (Gef, Punto Blanco, Baby Fresh, Galax).',
    detalles: ['React', 'Omnicanalidad', 'UI Dinámica', 'Gestión de Datos'],
    estado: 'Proyecto Corporativo',
  },
  {
    id: 'eficiencia-crystal',
    icono: crystal,
    titulo: 'Eficiencia Crystal',
    descripcion:
      'Sistema industrial para la digitalización de KPIs y monitoreo de rendimiento de producción en tiempo real.',
    detalles: ['React', 'Data Visualization', 'PWA', 'Industrial UX'],
    estado: 'Proyecto Corporativo',
    placa: '#ffffff',
  },
  {
    id: 'orix',
    icono: orix,
    titulo: 'ORIX',
    bajada: 'Agenda Inteligente',
    descripcion:
      'Ecosistema SaaS para centros de estética, spas y barberías. Permite la creación de tiendas y gestión multicanal de agendas profesionales.',
    detalles: ['React', 'Node.js', 'Multi-tenant', 'SaaS', 'PWA', 'Smart Scheduling'],
    estado: 'En desarrollo',
  },
  {
    id: 'soy-arte',
    icono: soyArte,
    titulo: 'Soy Arte',
    descripcion: 'Plataforma que mezcla tecnología, empoderamiento y alma.',
    detalles: ['Node', 'React', 'MySQL', 'CSS', 'Framer Motion'],
    estado: 'En desarrollo',
  },
  {
    id: 'hackea-la-ia',
    icono: ia,
    titulo: 'Hackea la IA',
    descripcion: 'Una landing que convirtió curiosidad en acción.',
    detalles: ['React', 'Vite', 'EmailJS'],
    nota: '300+ leads en la primera semana.',
    estado: 'Finalizado',
  },
  {
    id: 'lukbyte',
    icono: lukbyte,
    titulo: 'Lukbyte',
    descripcion: 'Este sitio: la agencia de soluciones digitales detrás de los proyectos.',
    detalles: ['React', 'Vite', 'Framer Motion'],
    estado: 'Finalizado',
  },
];

export const destacados = proyectos.filter((p) => p.destacado);
export const otros = proyectos.filter((p) => !p.destacado);

export const ESTADO_EN_MERCADO = 'En el mercado';
export const enElMercado = proyectos.filter((p) => p.estado === ESTADO_EN_MERCADO);

/* Variante visual de la etiqueta de estado */
export function claseEstado(estado) {
  const e = String(estado || '')
    .trim()
    .toLowerCase();

  if (e === 'en el mercado') return 'estado--mercado';
  if (e === 'finalizado') return 'estado--finalizado';
  if (e === 'proyecto corporativo') return 'estado--corporativo';

  return 'estado--en-curso';
}
