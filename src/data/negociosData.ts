import { JourneyStep, TestimonialItem, AwardItem, ProcessPhase } from '../types';

export const JOURNEY_STEPS: JourneyStep[] = [
  { step: '01', label: 'Te encuentran', role: 'Visibilidad en buscadores y enlaces directos' },
  { step: '02', label: 'Te conocen', role: 'Identidad, propuesta y autoridad profesional' },
  { step: '03', label: 'Entienden lo que haces', role: 'Servicios explicados sin ambigüedad' },
  { step: '04', label: 'Te contactan', role: 'Conversación directa por WhatsApp y correo', isGoal: true },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-melissa',
    tag: '[01 / ÉXITO DE CLIENTE]',
    category: 'CASO REAL',
    quote: '“Fue un proceso fluido: David me entregó un sitio web completamente alineado con mi marca e identidad.”',
    author: 'Melissa Rendón',
    role: 'Artista Reborn',
    status: 'PROYECTO ACTIVO',
    accentColor: '#16A34A',
  },
  {
    id: 'testimonial-carlos',
    tag: '[02 / VALIDACIÓN TÉCNICA]',
    category: 'PEER REVIEW',
    quote: '“Hombre, este sistema es impecable. ¿Cómo lo haces?”',
    author: 'Carlos Mariño',
    role: 'Virtual Latinos',
    status: 'TALENTO GLOBAL',
    accentColor: '#2563EB',
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-lapiz-acero',
    tag: '[03 / LINAJE DE DISEÑO]',
    location: 'COLOMBIA',
    title: 'Lápiz de Acero',
    description: 'Reconocido por la excelencia en diseño industrial nacional y oficio de producto en Colombia.',
    institution: 'PREMIO NACIONAL DE DISEÑO · COLOMBIA',
    isFeatured: true,
    accentColor: '#121210',
  },
  {
    id: 'award-capital-semilla',
    tag: '[04 / LINAJE EMPRENDEDOR]',
    location: 'MEDELLÍN',
    title: 'Capital Semilla',
    description: 'Galardonado por innovación y emprendimiento tecnológico por la Alcaldía de Medellín.',
    institution: 'ALCALDÍA DE MEDELLÍN · FONDO DE INNOVACIÓN',
    isFeatured: false,
    accentColor: '#2563EB',
  },
];

export const MODULAR_FEATURES: string[] = [
  'Reservas y agenda',
  'Formularios personalizados',
  'Catálogos de productos',
  'Pasarelas de pago',
  'Integraciones de datos',
  'Automatizaciones',
  'Funcionalidades con IA',
  'Sitios bilingües',
  'Herramientas a la medida',
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    num: '01',
    title: 'Diagnóstico y conversación',
    desc: 'Hablamos sobre tu negocio, tus objetivos y lo que necesitas lograr con tu presencia digital.',
    tag: 'DIAGNÓSTICO',
  },
  {
    num: '02',
    title: 'Definición de alcance',
    desc: 'Estructuramos la propuesta con lo que vamos a construir, qué incluye y los tiempos de entrega.',
    tag: 'PROPUESTA',
  },
  {
    num: '03',
    title: 'Diseño y desarrollo',
    desc: 'Diseñamos y programamos el sitio con entregas progresivas y comunicación directa contigo.',
    tag: 'EJECUCIÓN',
    accent: '#2563EB',
  },
  {
    num: '04',
    title: 'Revisión y lanzamiento',
    desc: 'Contamos con tres sesiones de revisión para calibrar detalles. Publicamos el sitio y dejamos la analítica y canales de contacto activos.',
    tag: 'ENTREGA',
    accent: '#16A34A',
  },
];
