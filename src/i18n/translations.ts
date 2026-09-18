export type Language = 'es' | 'en';

export interface TranslationData {
  header: {
    badge: string;
    nav: {
      essentials: { id: string; num: string; label: string };
      backing: { id: string; num: string; label: string };
      investment: { id: string; num: string; label: string };
      process: { id: string; num: string; label: string };
    };
    instagram: string;
    whatsapp: string;
    langSwitchAria: string;
    langLabel: string;
  };
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    sublead: string;
    pricingLabel: string;
    price: string;
    priceNote?: string;
    cta: string;
    mockup: {
      domain: string;
      businessName: string;
      tagline: string;
      liveBadge: string;
      module1Tag: string;
      module1Title: string;
      module2Tag: string;
      module2Title: string;
      contactBtn: string;
      whatsappBtn: string;
    };
  };
  essentials: {
    tag: string;
    title: string;
    description: string;
    card1: {
      num: string;
      tag: string;
      title: string;
      desc: string;
    };
    card2: {
      num: string;
      tag: string;
      title: string;
      desc: string;
    };
    card3: {
      num: string;
      tag: string;
      title: string;
      desc: string;
    };
    card4: {
      num: string;
      tag: string;
      title: string;
      desc: string;
    };
    infraItems: Array<{
      num: string;
      title: string;
      desc: string;
      accent?: string;
    }>;
  };
  journey: {
    tag: string;
    title: string;
    subtitle: string;
    stepTag: string;
    goalBadge: string;
    steps: Array<{
      step: string;
      label: string;
      role: string;
      isGoal?: boolean;
    }>;
    bottomP1: string;
    bottomP2: string;
    footnote: string;
  };
  respaldo: {
    tag: string;
    title: string;
    subtitle: string;
    testimonials: Array<{
      id: string;
      tag: string;
      category: string;
      quote: string;
      author: string;
      role: string;
      status: string;
      accentColor: string;
    }>;
    awards: Array<{
      id: string;
      tag: string;
      location: string;
      title: string;
      description: string;
      institution: string;
      isFeatured?: boolean;
      accentColor?: string;
    }>;
  };
  transparency: {
    tag: string;
    title: string;
    subtitle: string;
    baseCost: {
      concept: string;
      badge: string;
      title: string;
      amount: string;
      desc: string;
    };
    domain: {
      concept: string;
      title: string;
      cost: string;
      desc: string;
    };
    hosting: {
      concept: string;
      title: string;
      desc: string;
    };
  };
  collaboration: {
    tag: string;
    title: string;
    subtitle: string;
    card1: {
      badge: string;
      title: string;
      desc: string;
    };
    card2: {
      badge: string;
      title: string;
      desc: string;
    };
  };
  craft: {
    tag: string;
    title: string;
    subtitle: string;
    card1: {
      badge: string;
      title: string;
      desc: string;
    };
    card2: {
      badge: string;
      title: string;
      desc: string;
    };
    card3: {
      badge: string;
      title: string;
      desc: string;
    };
    card4: {
      badge: string;
      title: string;
      desc: string;
    };
  };
  postLaunch: {
    tag: string;
    title: string;
    lead: string;
    desc: string;
    highlight: string;
  };
  modular: {
    tag: string;
    title: string;
    subtitle: string;
    features: string[];
    note: string;
  };
  investmentSummary: {
    tag: string;
    title: string;
    desc1: string;
    desc2: string;
    cta: string;
  };
  process: {
    tag: string;
    title: string;
    phaseLabel: string;
    phases: Array<{
      num: string;
      title: string;
      desc: string;
      tag: string;
      accent?: string;
    }>;
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    emailCta: string;
    whatsappCta: string;
  };
  footer: {
    title: string;
    subtitle: string;
    portfolioLink: string;
    copyright: string;
  };
  cookieBanner: {
    sysTag: string;
    title: string;
    desc: string;
    decline: string;
    accept: string;
    closeAria: string;
  };
  floatingWhatsApp: {
    tooltip: string;
    ariaLabel: string;
    chatUrl: string;
  };
  introOverlay: {
    title: string;
    subtitle: string;
    skip: string;
    ready: string;
    ariaLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  es: {
    header: {
      badge: 'Negocios',
      nav: {
        essentials: { id: 'que-incluye', num: '01', label: 'Qué incluye' },
        backing: { id: 'respaldo', num: '02', label: 'Respaldo' },
        investment: { id: 'transparencia', num: '03', label: 'Inversión' },
        process: { id: 'proceso', num: '04', label: 'Proceso' },
      },
      instagram: 'Instagram',
      whatsapp: 'WhatsApp directo',
      langSwitchAria: 'Cambiar idioma',
      langLabel: 'IDIOMA',
    },
    hero: {
      tag: 'Ingeniería de diseño de producto · Medellín, Colombia',
      titleLine1: 'Una presencia digital',
      titleLine2: 'que trabaja para tu negocio',
      lead: 'Una página profesional para que tus clientes te encuentren, entiendan lo que haces y puedan contactarte fácilmente.',
      sublead: 'Sitios web pensados para negocios que buscan una presencia sólida en internet, sin complicaciones innecesarias.',
      pricingLabel: 'Inversión inicial transparente',
      price: 'Desde $650.000 COP',
      cta: 'Cuéntame qué necesita tu negocio',
      mockup: {
        domain: 'tudominio.co',
        businessName: 'Tu Negocio Profesional',
        tagline: 'Presencia digital clara, rápida y efectiva',
        liveBadge: 'LIVE',
        module1Tag: '[MÓDULO 01]',
        module1Title: 'Servicios o Productos',
        module2Tag: '[MÓDULO 02]',
        module2Title: 'Analítica Web',
        contactBtn: 'Contacto',
        whatsappBtn: 'WhatsApp',
      },
    },
    essentials: {
      tag: '01 / ESTRUCTURA ESENCIAL',
      title: 'Todo lo esencial para estar en internet',
      description: 'Por $650.000 COP desarrollamos una presencia digital sólida y funcional, pensada para transmitir confianza y comenzar a convertir visitas en contactos.',
      card1: {
        num: '01',
        tag: 'PUNTO DE ENTRADA',
        title: 'Inicio',
        desc: 'Una página principal clara, diseñada para explicar rápidamente quién eres, qué haces y por qué un cliente debería elegirte.',
      },
      card2: {
        num: '02',
        tag: 'OFERTA',
        title: 'Servicios o productos',
        desc: 'Presenta tu oferta de manera organizada, clara y fácil de entender.',
      },
      card3: {
        num: '03',
        tag: 'CAPTACIÓN',
        title: 'Contacto',
        desc: 'Información de contacto, formulario y las herramientas que necesites para facilitar la conversación con tus clientes.',
      },
      card4: {
        num: '04',
        tag: 'RESPUESTA INMEDIATA',
        title: 'WhatsApp',
        desc: 'Un acceso directo para que tus visitantes puedan hablar contigo desde el sitio.',
      },
      infraItems: [
        { num: '05', title: 'Diseño y desarrollo', desc: 'Diseño y desarrollo a la medida de tu negocio, sin que tengas que preocuparte por la parte técnica.' },
        { num: '06', title: 'Adaptación móvil', desc: 'Tu sitio se adapta y funciona con fluidez en celulares, tablets y computadores.' },
        { num: '07', title: 'Publicación', desc: 'Configuración y puesta en marcha para que tu sitio quede en internet y listo para operar.' },
        { num: '08', title: 'Analítica', desc: 'Conectamos tu sitio con Microsoft Clarity para entender cómo interactúan tus visitantes, qué consultan y cómo navegan.', accent: '#2563EB' },
      ],
    },
    journey: {
      tag: '02 / RECORRIDO DEL CLIENTE',
      title: 'De conocerte a contactarte',
      subtitle: 'Tu presencia digital cumple un objetivo claro en cada etapa:',
      stepTag: 'PASO',
      goalBadge: 'OBJETIVO',
      steps: [
        { step: '01', label: 'Te encuentran', role: 'Visibilidad en buscadores y enlaces directos' },
        { step: '02', label: 'Te conocen', role: 'Identidad, propuesta y autoridad profesional' },
        { step: '03', label: 'Entienden lo que haces', role: 'Servicios explicados sin ambigüedad' },
        { step: '04', label: 'Te contactan', role: 'Conversación directa por WhatsApp y correo', isGoal: true },
      ],
      bottomP1: 'El sitio se construye alrededor de ese recorrido.',
      bottomP2: 'No todos los negocios requieren las mismas herramientas. Por eso partimos de tus necesidades reales y añadimos funcionalidades cuando aportan valor concreto.',
      footnote: 'ARQUITECTURA DE FLUJO: VISIBILIDAD → CONFIANZA → CONTACTO DIRECTO',
    },
    respaldo: {
      tag: '03 / RESPALDO Y RECONOCIMIENTOS',
      title: 'Calidad comprobada y rigor técnico',
      subtitle: 'Lo que dicen quienes ya han trabajado conmigo y los reconocimientos que respaldan mi trayectoria.',
      testimonials: [
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
      ],
      awards: [
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
      ],
    },
    transparency: {
      tag: '04 / TRANSPARENCIA ECONÓMICA',
      title: 'Construimos desde la claridad',
      subtitle: 'Sabes con precisión qué estás pagando. La inversión principal se define desde el inicio y los recursos externos se muestran con total transparencia.',
      baseCost: {
        concept: 'CONCEPTO 01 · TARIFA PRINCIPAL',
        badge: 'PAGO ÚNICO',
        title: 'Inversión base',
        amount: '$650.000 COP',
        desc: 'Cubre el diseño y desarrollo completo del sitio dentro del alcance acordado.',
      },
      domain: {
        concept: 'CONCEPTO 02 · RECURSO EXTERNO',
        title: 'Dominio',
        cost: 'Aprox. $60.000 - $80.000 COP / año',
        desc: 'Es la dirección de tu negocio en internet (ej. tunegocio.com). Lo adquieres directamente a tu nombre, garantizando que siempre sea de tu propiedad.',
      },
      hosting: {
        concept: 'CONCEPTO 03 · INFRAESTRUCTURA',
        title: 'Alojamiento web (Hosting)',
        desc: 'Opciones optimizadas según tu escala: desde infraestructura gratuita de alto rendimiento hasta servidores profesionales según tu volumen.',
      },
    },
    collaboration: {
      tag: '05 / METODOLOGÍA COLECTIVA',
      title: 'Lo construimos contigo',
      subtitle: 'No entregamos una primera versión sin dar seguimiento. Trabajamos contigo paso a paso hasta llegar a un resultado que funcione para tu negocio.',
      card1: {
        badge: 'CALIDAD CONTROLADA',
        title: '3 rondas de revisión incluidas',
        desc: 'Durante el desarrollo cuentas con tres sesiones de revisión, de hasta una hora cada una, para evaluar avances, solicitar ajustes y tomar decisiones sobre el resultado.',
      },
      card2: {
        badge: 'ALCANCE DEFINIDO',
        title: 'Sin sorpresas en el camino',
        desc: 'Cada ajuste se evalúa dentro del alcance inicial. Si necesitas algo adicional, lo cotizamos de forma transparente antes de implementarlo.',
      },
    },
    craft: {
      tag: '06 / OFICIO INTEGRADO',
      title: 'Una forma diferente de hacer presencia digital',
      subtitle: 'Soy Product Design Engineer y trabajo de forma integral en el diseño y la ingeniería de cada producto que construyo.',
      card1: {
        badge: 'TRAYECTORIA',
        title: '15+ años de experiencia',
        desc: 'Trayectoria construyendo productos e interfaces digitales, desde sitios web hasta sistemas interactivos de alta precisión.',
      },
      card2: {
        badge: 'DISCIPLINA DUAL',
        title: 'Diseño + desarrollo',
        desc: 'No necesitas coordinar diseñadores y programadores por separado. El proyecto se concibe, diseña y programa con una visión unificada.',
      },
      card3: {
        badge: 'DISTINCIÓN',
        title: 'Reconocimientos',
        desc: 'Trabajo distinguido en proyectos de diseño e innovación digital, incluyendo un premio Lápiz de Acero, uno de los máximos galardones de diseño en Colombia.',
      },
      card4: {
        badge: 'RELACIÓN DIRECTA',
        title: 'Proceso directo',
        desc: 'Trabajas directamente conmigo durante todo el proceso, sin intermediarios ni pérdidas de información.',
      },
    },
    postLaunch: {
      tag: '07 / EVOLUCIÓN CONTINUA',
      title: 'Tu sitio después del lanzamiento',
      lead: 'Un sitio web no tiene que quedarse estático.',
      desc: 'Con la analítica instalada puedes observar cómo interactúan tus visitantes y tomar decisiones fundamentadas sobre tu presencia digital. Si más adelante necesitas nuevas funcionalidades, ampliamos el sitio.',
      highlight: 'El objetivo no es acumular tecnología: es construir exactamente lo que tu negocio necesita.',
    },
    modular: {
      tag: '08 / MODULARIDAD',
      title: '¿Qué puede incluir tu proyecto?',
      subtitle: 'La presencia esencial cubre las necesidades fundamentales de un negocio. Si tu operación requiere herramientas específicas, las incorporamos de manera modular:',
      features: [
        'Reservas y agenda',
        'Formularios personalizados',
        'Catálogos de productos',
        'Pasarelas de pago',
        'Integraciones de datos',
        'Automatizaciones',
        'Funcionalidades con IA',
        'Sitios bilingües',
        'Herramientas a la medida',
      ],
      note: 'Estas funcionalidades pueden modificar el alcance y la cotización del proyecto. Siempre se definen y acuerdan antes de comenzar.',
    },
    investmentSummary: {
      tag: 'SÍNTESIS DE PROPUESTA',
      title: 'Proyectos desde $650.000 COP',
      desc1: 'La inversión base cubre el trabajo de diseño y desarrollo dentro del alcance pactado. Los recursos externos, como dominio o infraestructura según se requiera, se presentan con total independencia.',
      desc2: 'Sin costos ocultos ni mensualidades forzadas para mantener tu presencia activa.',
      cta: 'Cuéntame qué necesita tu negocio',
    },
    process: {
      tag: '09 / METODOLOGÍA DE TRABAJO',
      title: '¿Cómo funciona?',
      phaseLabel: 'FASE',
      phases: [
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
      ],
    },
    contact: {
      tag: '10 / PUNTO DE ACCIÓN',
      title: 'Tu negocio merece una presencia digital clara',
      desc: 'No necesitas comenzar con un proyecto sobredimensionado. Necesitas una presencia profesional que comunique con claridad lo que haces, facilite el contacto con tus clientes y pueda crecer con tu negocio.',
      emailCta: 'Cuéntame qué necesita tu negocio',
      whatsappCta: 'Escríbeme por WhatsApp',
    },
    footer: {
      title: 'davidraigoza.design',
      subtitle: 'Product Design Engineering · Diseño · Desarrollo web',
      portfolioLink: 'Ver portafolio principal →',
      copyright: '© David Raigoza',
    },
    cookieBanner: {
      sysTag: 'Sys.Consent // 01',
      title: 'Protocolo de Telemetría y Analítica',
      desc: 'Este entorno digital implementa telemetría de sesión (Microsoft Clarity) para analizar patrones de interacción y optimizar la arquitectura. La forma sigue a la función.',
      decline: 'Restringir',
      accept: 'Inicializar',
      closeAria: 'Cerrar banner',
    },
    floatingWhatsApp: {
      tooltip: 'Habla conmigo 👋',
      ariaLabel: 'Hablar por WhatsApp',
      chatUrl: 'https://wa.me/573007747638?text=Hola%20David%2C%20vi%20davidraigoza.design%20y%20quiero%20hablar%20de%20un%20proyecto',
    },
    introOverlay: {
      title: 'David Raigoza',
      subtitle: 'Ingeniería de diseño · Negocios',
      skip: 'Saltar intro',
      ready: 'Listo',
      ariaLabel: 'Introducción de David Raigoza',
    },
  },
  en: {
    header: {
      badge: 'Business',
      nav: {
        essentials: { id: 'que-incluye', num: '01', label: "What's included" },
        backing: { id: 'respaldo', num: '02', label: 'Backing' },
        investment: { id: 'transparencia', num: '03', label: 'Investment' },
        process: { id: 'proceso', num: '04', label: 'Process' },
      },
      instagram: 'Instagram',
      whatsapp: 'Direct WhatsApp',
      langSwitchAria: 'Switch language',
      langLabel: 'LANG',
    },
    hero: {
      tag: 'Product Design Engineering · Medellín, Colombia',
      titleLine1: 'A digital presence',
      titleLine2: 'that works for your business',
      lead: 'A professional website so your clients discover you, clearly understand what you do, and easily reach out.',
      sublead: 'Websites engineered for businesses seeking a solid online presence, without unnecessary friction or complexity.',
      pricingLabel: 'Transparent initial investment',
      price: 'From $650,000 COP (~$165 USD)',
      cta: 'Tell me what your business needs',
      mockup: {
        domain: 'yourbusiness.co',
        businessName: 'Your Professional Business',
        tagline: 'Clear, fast, and effective digital presence',
        liveBadge: 'LIVE',
        module1Tag: '[MODULE 01]',
        module1Title: 'Services & Products',
        module2Tag: '[MODULE 02]',
        module2Title: 'Web Analytics',
        contactBtn: 'Contact',
        whatsappBtn: 'WhatsApp',
      },
    },
    essentials: {
      tag: '01 / ESSENTIAL STRUCTURE',
      title: 'Everything essential to thrive online',
      description: 'Starting at $650,000 COP (~$165 USD), we craft a robust and functional digital presence engineered to build trust and convert visitors into active inquiries.',
      card1: {
        num: '01',
        tag: 'ENTRY POINT',
        title: 'Home',
        desc: 'A razor-sharp landing page designed to explain in seconds who you are, what you offer, and why clients should choose you.',
      },
      card2: {
        num: '02',
        tag: 'OFFER',
        title: 'Services or products',
        desc: 'Showcase your core offering in an organized, transparent, and effortlessly scannable architecture.',
      },
      card3: {
        num: '03',
        tag: 'LEAD CAPTURE',
        title: 'Contact',
        desc: 'Direct contact info, custom inquiry forms, and the exact touchpoints needed to spark customer conversations.',
      },
      card4: {
        num: '04',
        tag: 'INSTANT RESPONSE',
        title: 'WhatsApp',
        desc: 'Direct real-time integration allowing your visitors to initiate conversations straight from your website.',
      },
      infraItems: [
        { num: '05', title: 'Design & Development', desc: 'Bespoke design and clean engineering tailored to your brand, with zero technical headaches for you.' },
        { num: '06', title: 'Responsive Experience', desc: 'Fluid layout precision calibrated across modern smartphones, tablets, and high-res desktop monitors.' },
        { num: '07', title: 'Live Deployment', desc: 'Full DNS setup, domain connection, and launch configuration ready for production operations.' },
        { num: '08', title: 'User Analytics', desc: 'Integrated with Microsoft Clarity to track real visitor behavior, heatmap journeys, and interaction paths.', accent: '#2563EB' },
      ],
    },
    journey: {
      tag: '02 / CUSTOMER JOURNEY',
      title: 'From discovery to direct inquiry',
      subtitle: 'Your digital presence fulfills a deliberate objective at each stage:',
      stepTag: 'STEP',
      goalBadge: 'GOAL',
      steps: [
        { step: '01', label: 'They find you', role: 'Search engine visibility, social proof, and direct links' },
        { step: '02', label: 'They meet you', role: 'Visual identity, value proposition, and authority' },
        { step: '03', label: 'They understand you', role: 'Services explained with total clarity and zero jargon' },
        { step: '04', label: 'They contact you', role: 'Direct frictionless channels via WhatsApp and email', isGoal: true },
      ],
      bottomP1: 'The site is engineered around this exact conversion journey.',
      bottomP2: 'Not every business needs identical toolsets. We start from your real operational requirements and add modular features only when they create genuine business value.',
      footnote: 'FLOW ARCHITECTURE: DISCOVERY → CREDIBILITY → DIRECT CONVERSION',
    },
    respaldo: {
      tag: '03 / ENDORSEMENTS & RECOGNITIONS',
      title: 'Verified quality and technical rigor',
      subtitle: 'What clients who have partnered with me say, alongside honors backing my professional practice.',
      testimonials: [
        {
          id: 'testimonial-melissa',
          tag: '[01 / CLIENT SUCCESS]',
          category: 'REAL CASE',
          quote: '“It was a seamless process: David delivered a website completely aligned with my brand and artistic identity.”',
          author: 'Melissa Rendón',
          role: 'Reborn Artist',
          status: 'ACTIVE PROJECT',
          accentColor: '#16A34A',
        },
        {
          id: 'testimonial-carlos',
          tag: '[02 / TECHNICAL VALIDATION]',
          category: 'PEER REVIEW',
          quote: '“Man, this system is impeccable. How do you pull this off?”',
          author: 'Carlos Mariño',
          role: 'Virtual Latinos',
          status: 'GLOBAL TALENT',
          accentColor: '#2563EB',
        },
      ],
      awards: [
        {
          id: 'award-lapiz-acero',
          tag: '[03 / DESIGN HERITAGE]',
          location: 'COLOMBIA',
          title: 'Lápiz de Acero',
          description: 'Recognized for national industrial design excellence and product craftsmanship in Colombia.',
          institution: 'NATIONAL DESIGN AWARD · COLOMBIA',
          isFeatured: true,
          accentColor: '#121210',
        },
        {
          id: 'award-capital-semilla',
          tag: '[04 / ENTREPRENEURIAL HERITAGE]',
          location: 'MEDELLÍN',
          title: 'Capital Semilla',
          description: 'Awarded for technological innovation and venture development by the Mayor’s Office of Medellín.',
          institution: 'MAYOR’S OFFICE OF MEDELLÍN · INNOVATION FUND',
          isFeatured: false,
          accentColor: '#2563EB',
        },
      ],
    },
    transparency: {
      tag: '04 / ECONOMIC TRANSPARENCY',
      title: 'Built upon absolute clarity',
      subtitle: 'You know exactly what you are investing in. The core design and development fee is established from day one, and external infrastructure is outlined with total transparency.',
      baseCost: {
        concept: 'CONCEPT 01 · CORE FEE',
        badge: 'ONE-TIME PAYMENT',
        title: 'Base investment',
        amount: '$650,000 COP',
        desc: 'Covers the complete design, engineering, and delivery of the site within the agreed project scope.',
      },
      domain: {
        concept: 'CONCEPT 02 · EXTERNAL RESOURCE',
        title: 'Domain name',
        cost: 'Approx. $60,000 - $80,000 COP / year (~$15 - $20 USD)',
        desc: 'Your distinct digital address (e.g. yourbusiness.com). Purchased directly under your personal or company name, guaranteeing you retain permanent ownership.',
      },
      hosting: {
        concept: 'CONCEPT 03 · INFRASTRUCTURE',
        title: 'Web hosting & cloud services',
        desc: 'Calibrated specifically to your scale: from zero-cost ultra-fast edge platforms to dedicated cloud environments as your traffic expands.',
      },
    },
    collaboration: {
      tag: '05 / COLLABORATIVE METHODOLOGY',
      title: 'Engineered alongside you',
      subtitle: 'We don’t deliver a draft and disappear. We collaborate with you step-by-step until we achieve a solution that genuinely performs for your business.',
      card1: {
        badge: 'CONTROLLED QUALITY',
        title: '3 included review rounds',
        desc: 'During the build, you have three dedicated review sessions of up to one hour each to critique progress, refine details, and approve iterations.',
      },
      card2: {
        badge: 'DEFINED SCOPE',
        title: 'No unexpected surprises',
        desc: 'Every adjustment is evaluated within the initial project framework. If you need expanded capabilities, we quote them transparently before writing code.',
      },
    },
    craft: {
      tag: '06 / INTEGRATED CRAFT',
      title: 'A deliberate approach to digital presence',
      subtitle: 'I am a Product Design Engineer working comprehensively across design, user experience, and technical code execution.',
      card1: {
        badge: 'TRACK RECORD',
        title: '15+ years of experience',
        desc: 'Proven background building digital products and software interfaces, ranging from conversion websites to high-precision engineering tools.',
      },
      card2: {
        badge: 'DUAL DISCIPLINE',
        title: 'Design + development',
        desc: 'No need to coordinate between fragmented teams. Your project is conceived, designed, and coded under a single cohesive vision.',
      },
      card3: {
        badge: 'DISTINCTION',
        title: 'Industry recognitions',
        desc: 'Recognized work across digital product design, including a Lápiz de Acero, Colombia’s highest honor in industrial and product craft.',
      },
      card4: {
        badge: 'DIRECT CONTACT',
        title: 'Direct collaboration',
        desc: 'You partner directly with me throughout the entire process, with zero agency middlemen and zero communication loss.',
      },
    },
    postLaunch: {
      tag: '07 / CONTINUOUS EVOLUTION',
      title: 'Your website after launch',
      lead: 'A website never has to stay frozen in time.',
      desc: 'With live telemetry installed, you observe how real customers interact and make data-driven decisions. Whenever you require new modules down the line, we expand your architecture seamlessly.',
      highlight: 'The goal is never hoarding technology: it’s engineering exactly what your business requires.',
    },
    modular: {
      tag: '08 / MODULARITY',
      title: 'What can your project incorporate?',
      subtitle: 'The essential package covers the foundational pillars of business credibility. If your workflow requires custom extensions, we integrate them modularly:',
      features: [
        'Booking & Scheduling',
        'Custom Smart Forms',
        'Interactive Catalogs',
        'Payment Gateways',
        'Data & CRM Integrations',
        'Business Automations',
        'AI-Powered Tools',
        'Bilingual Architecture',
        'Bespoke Digital Utilities',
      ],
      note: 'These custom capabilities expand the project scope and pricing. They are always clearly defined and agreed upon prior to kickoff.',
    },
    investmentSummary: {
      tag: 'PROPOSAL SUMMARY',
      title: 'Projects starting at $650,000 COP',
      desc1: 'The base investment covers full design and engineering within the agreed scope. External necessities like domain registration and cloud infrastructure are handled transparently with zero markup.',
      desc2: 'No hidden recurring retainers or lock-ins required to keep your digital storefront active.',
      cta: 'Tell me what your business needs',
    },
    process: {
      tag: '09 / WORKING METHODOLOGY',
      title: 'How does it work?',
      phaseLabel: 'PHASE',
      phases: [
        {
          num: '01',
          title: 'Diagnosis & Dialogue',
          desc: 'We explore your business model, core goals, and what you need your digital presence to accomplish.',
          tag: 'DISCOVERY',
        },
        {
          num: '02',
          title: 'Scope Architecture',
          desc: 'We structure a transparent specification detailing features, deliverables, milestones, and delivery dates.',
          tag: 'PROPOSAL',
        },
        {
          num: '03',
          title: 'Design & Engineering',
          desc: 'We design and code your interface with progressive preview releases and direct, transparent communication.',
          tag: 'EXECUTION',
          accent: '#2563EB',
        },
        {
          num: '04',
          title: 'Review & Deployment',
          desc: 'Three focused review rounds calibrate every visual detail. We deploy to production and verify live telemetry.',
          tag: 'DELIVERY',
          accent: '#16A34A',
        },
      ],
    },
    contact: {
      tag: '10 / CALL TO ACTION',
      title: 'Your business deserves a razor-sharp digital presence',
      desc: 'You don’t need an over-engineered corporate monster. You need an articulate, professional presence that clearly demonstrates what you do, welcomes clients warmly, and scales alongside your growth.',
      emailCta: 'Tell me what your business needs',
      whatsappCta: 'Message me on WhatsApp',
    },
    footer: {
      title: 'davidraigoza.design',
      subtitle: 'Product Design Engineering · Design · Web Development',
      portfolioLink: 'View main design portfolio →',
      copyright: '© David Raigoza',
    },
    cookieBanner: {
      sysTag: 'Sys.Consent // 01',
      title: 'Telemetry & Analytics Protocol',
      desc: 'This digital environment implements session telemetry (Microsoft Clarity) to analyze interaction patterns and optimize architecture. Form follows function.',
      decline: 'Restrict',
      accept: 'Initialize',
      closeAria: 'Close banner',
    },
    floatingWhatsApp: {
      tooltip: 'Chat with me 👋',
      ariaLabel: 'Chat on WhatsApp',
      chatUrl: 'https://wa.me/573007747638?text=Hello%20David%2C%20I%20saw%20davidraigoza.design%20and%20would%20like%20to%20discuss%20a%20project',
    },
    introOverlay: {
      title: 'David Raigoza',
      subtitle: 'Product Design Engineering · Business',
      skip: 'Skip intro',
      ready: 'Ready',
      ariaLabel: 'David Raigoza introduction',
    },
  },
};
