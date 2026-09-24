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
    title: string;
    titleLine1?: string;
    titleLine2?: string;
    categoryLabel: string;
    rotatingCategories: string[];
    lead?: string;
    sublead?: string;
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
  profile: {
    tag: string;
    name: string;
    role: string;
    paragraph1: string;
    paragraph2: string;
    location: string;
    focus: string;
    pillar1: string;
    pillar2: string;
    pillar3: string;
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
  caseStudies: {
    tag: string;
    title: string;
    subtitle: string;
    project1: {
      number: string;
      client: string;
      tag: string;
      description: string;
      action: string;
      liveAction: string;
      liveUrl: string;
      url: string;
      assetAlt: string;
      metaBadge: string;
      highlights: string[];
    };
    project2: {
      number: string;
      client: string;
      tag: string;
      description: string;
      action: string;
      liveAction: string;
      liveUrl: string;
      url: string;
      assetAlt: string;
      metaBadge: string;
      highlights: string[];
    };
    project3: {
      number: string;
      client: string;
      tag: string;
      description: string;
      action: string;
      liveAction: string;
      liveUrl: string;
      url: string;
      assetAlt: string;
      metaBadge: string;
      highlights: string[];
    };
  };
  draVictoriaCase: {
    backToStudio: string;
    caseNumberTag: string;
    client: string;
    title: string;
    subtitle: string;
    metaPills: {
      clientLabel: string;
      clientValue: string;
      locationLabel: string;
      locationValue: string;
      disciplineLabel: string;
      disciplineValue: string;
      deploymentLabel: string;
      deploymentValue: string;
      resultLabel: string;
      resultValue: string;
    };
    quote: string;
    quoteCaption: string;
    step1: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      notesTitle: string;
      notes: string[];
      frictionBadge: string;
      caption: string;
    };
    step2: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      specsTitle: string;
      specs: string[];
      gridBadge: string;
      caption: string;
    };
    step3: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      featuresTitle: string;
      features: string[];
      liveUrl: string;
      liveUrlLabel: string;
      caption: string;
    };
    summary: {
      tag: string;
      title: string;
      description: string;
      ctaConsultation: string;
      ctaWhatsApp: string;
    };
  };
  commonGroundCase: {
    backToStudio: string;
    caseNumberTag: string;
    client: string;
    title: string;
    subtitle: string;
    metaPills: {
      clientLabel: string;
      clientValue: string;
      locationLabel: string;
      locationValue: string;
      disciplineLabel: string;
      disciplineValue: string;
      deploymentLabel: string;
      deploymentValue: string;
      resultLabel: string;
      resultValue: string;
    };
    quote: string;
    quoteCaption: string;
    step1: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      notesTitle: string;
      notes: string[];
      vectorBadge: string;
      caption: string;
    };
    step2: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      specsTitle: string;
      specs: string[];
      hudBadge: string;
      caption: string;
    };
    step3: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      featuresTitle: string;
      features: string[];
      liveUrl: string;
      liveUrlLabel: string;
      caption: string;
    };
    summary: {
      tag: string;
      title: string;
      description: string;
      ctaConsultation: string;
      ctaWhatsApp: string;
    };
  };
  talentShowcaseCase: {
    backToStudio: string;
    caseNumberTag: string;
    client: string;
    title: string;
    subtitle: string;
    heroTag: string;
    heroDescription: string;
    metaPills: {
      clientLabel: string;
      clientValue: string;
      locationLabel: string;
      locationValue: string;
      disciplineLabel: string;
      disciplineValue: string;
      deploymentLabel: string;
      deploymentValue: string;
      resultLabel: string;
      resultValue: string;
    };
    quote: string;
    quoteCaption: string;
    step1: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      notesTitle: string;
      notes: string[];
      frictionBadge: string;
      caption: string;
    };
    step2: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      specsTitle: string;
      specs: string[];
      dualBadge: string;
      caption: string;
      talentTitle: string;
      talentDesc: string;
      talentPoints: string[];
      clientTitle: string;
      clientDesc: string;
      clientPoints: string[];
    };
    step3: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      featuresTitle: string;
      features: string[];
      liveUrl: string;
      liveUrlLabel: string;
      caption: string;
      systems: Array<{
        title: string;
        desc: string;
        badge: string;
      }>;
    };
    impact: {
      num: string;
      tag: string;
      title: string;
      desc: string;
      metrics: Array<{
        metric: string;
        label: string;
        desc: string;
      }>;
    };
    summary: {
      tag: string;
      title: string;
      description: string;
      ctaConsultation: string;
      ctaWhatsApp: string;
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
    message: string;
    accept: string;
    decline: string;
    closeAria: string;
  };
  floatingWhatsApp: {
    tooltip: string;
    ariaLabel: string;
    chatUrl: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  es: {
    header: {
      badge: 'Profesionales y Especialistas',
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
      title: 'Diseñamos productos digitales para profesionales y especialistas.',
      categoryLabel: 'Especialidad',
      rotatingCategories: ['médicos', 'arquitectos', 'consultores', 'marcas'],
      pricingLabel: 'Inversión inicial transparente',
      price: 'Desde $1.300.000 COP',
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
    profile: {
      tag: 'DIRECCIÓN & EJECUCIÓN DIRECTA',
      name: 'David Raigoza',
      role: 'Product Design Engineer',
      paragraph1: 'David trabaja directamente contigo para entender tu negocio, ordenar lo que necesitas comunicar y convertirlo en una experiencia digital clara, funcional y apropiada para tus clientes.',
      paragraph2: 'Diseña y desarrolla cada producto según el contexto de tu negocio, desde la estructura y el contenido hasta la experiencia y la implementación.',
      location: 'Medellín, Colombia',
      focus: 'Sitios web para profesionales y especialistas',
      pillar1: 'Diseñamos desde la claridad.',
      pillar2: 'Estructura, contenido y forma.',
      pillar3: 'Sitios que puedes entender y administrar.',
    },
    essentials: {
      tag: '01 / ESTRUCTURA ESENCIAL',
      title: 'Una presencia digital que trabaja para tu negocio',
      description: 'Una página profesional para que tus clientes te encuentren, entiendan lo que haces y puedan contactarte fácilmente.',
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
      bottomP2: 'No todos los profesionales y especialistas requieren las mismas herramientas. Por eso partimos de tus necesidades reales y añadimos funcionalidades cuando aportan valor concreto.',
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
      title: 'Construimos desde la claridad.',
      subtitle: '',
      baseCost: {
        concept: 'CONCEPTO 01 · TARIFA PRINCIPAL',
        badge: 'PAGO ÚNICO',
        title: 'Inversión base',
        amount: '$1.300.000 COP',
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
    caseStudies: {
      tag: '[ 06.5 // PROYECTOS & EVIDENCIA — SCROLL HORIZONTAL ↔ ]',
      title: 'Del concepto a la producción.',
      subtitle: 'Sistemas digitales construidos con rigor de ingeniería: donde el boceto manual, la estructura modular y la implementación en producción reducen fricción y maximizan conversión.',
      project1: {
        number: '01',
        client: 'Dra. Victoria (Colombia)',
        tag: '[ LOCAL EXECUTION // LANDING & BOOKING ]',
        description: 'De papel a interfaz en tiempo récord. Sistema digital con reservas optimizadas y arquitectura de conversión médica.',
        action: '[ VER CASO DE ESTUDIO // DRA. VICTORIA ]',
        liveAction: '[ ↗ VER SITIO EN VIVO ]',
        liveUrl: 'https://dra-victoria-mockup.vercel.app/',
        url: '/case-studies/dra-victoria',
        assetAlt: 'Interfaz médica de alta precisión para Dra. Victoria Cadavid',
        metaBadge: 'MEDICINA ESTÉTICA · MEDELLÍN',
        highlights: ['0 Fricción en Citas', 'Vercel Edge 42ms', 'WhatsApp API Sync'],
      },
      project2: {
        number: '02',
        client: 'CommonGround (B2B SaaS)',
        tag: '[ SYSTEMS & POSITIONING // INTELLIGENCE ]',
        description: 'Herramienta de navegación cartográfica e inteligencia relacional para evaluar posicionamiento y alineación semántica.',
        action: '[ VER CASO DE ESTUDIO // COMMONGROUND ]',
        liveAction: '[ ↗ VER SITIO EN VIVO ]',
        liveUrl: 'https://common-ground-studio-drab.vercel.app/',
        url: '/case-studies/common-ground',
        assetAlt: 'Herramienta de navegación cartográfica y posicionamiento CommonGround',
        metaBadge: 'B2B SAAS · RELATIONAL INTEL',
        highlights: ['Cartografía Semántica', 'Vector Embeddings', 'Diagnóstico Relacional'],
      },
      project3: {
        number: '03',
        client: 'Talent Showcase & Evaluation Hub',
        tag: '[ STAFFING & RECRUITMENT // AI WORKSPACE ]',
        description: 'Solución integral para agencias de reclutamiento: elaboración asistida por IA de perfiles desde notas en bruto y panel unificado de evaluación para clientes.',
        action: '[ VER CASO DE ESTUDIO // TALENT SHOWCASE ]',
        liveAction: '[ ↗ ABRIR APP EN VIVO ]',
        liveUrl: 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true',
        url: '/case-studies/talent-showcase-hub',
        assetAlt: 'Mockup de interfaz de Talent Showcase & Evaluation Hub con espacios de candidato y cliente',
        metaBadge: 'GEMINI AI · EVALUACIÓN DE TALENTO',
        highlights: ['Espacio Dual de Trabajo', 'Estructuración con Gemini', 'Evaluación Objetiva'],
      },
    },
    draVictoriaCase: {
      backToStudio: '← VOLVER AL ESTUDIO',
      caseNumberTag: 'CASO DE ESTUDIO 01 // SALUD & CONVERSIÓN',
      client: 'Dra. Victoria Cadavid',
      title: 'De papel a interfaz en tiempo récord.',
      subtitle: 'Sistema digital con reservas optimizadas y arquitectura de conversión médica para consulta privada en Medellín.',
      metaPills: {
        clientLabel: 'CLIENTE',
        clientValue: 'Dra. Victoria Cadavid',
        locationLabel: 'UBICACIÓN',
        locationValue: 'Medellín, Colombia',
        disciplineLabel: 'DISCIPLINA',
        disciplineValue: 'Product Design Engineering & Web Frontend',
        deploymentLabel: 'DESPLIEGUE',
        deploymentValue: 'Vercel Edge Runtime (48ms latencia)',
        resultLabel: 'IMPACTO',
        resultValue: 'Cero intermediación, 100% citas por canal verificado',
      },
      quote: '“No busco decorar la idea. Busco entenderla.”',
      quoteCaption: 'Principio metodológico Bauhaus: la forma sigue a la función clínica y a la conducta del paciente.',
      step1: {
        num: '01',
        tag: 'STEP 01 // EL BOCETO ANALÓGICO',
        title: 'El Boceto (The Sketch)',
        desc: 'El diseño no comienza en el software: comienza en el papel milimetrado diseccionando la ansiedad y fricción del paciente.',
        notesTitle: 'ANOTACIONES DE INGENIERÍA & JERARQUÍA MÓVIL',
        notes: [
          'Reducción de fricción radical: supresión de formularios extensos y registros previos; el embudo pasa de 5 pasos a 1 interacción.',
          'Jerarquía visual de pulgar (Thumb Reach): 89% del tráfico proviene de Instagram móvil; el botón de disponibilidad clínica se fija en la zona ergonómica activa.',
          'Indicadores de validación instantánea: número de registro médico y reputación visible sobre el pliegue sin requerir desplazamiento.',
        ],
        frictionBadge: 'REDUCCIÓN DE PASOS: 5 → 1',
        caption: 'Boceto original en papel milimetrado con diagramación de zonas táctiles y atajos de decisión rápida.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // LA ESTRUCTURA MODULAR',
        title: 'El Wireframe (Figma Structure)',
        desc: 'Traducción matemática a componentes de interfaz en Figma bajo una estricta cuadrícula modular de 8px.',
        specsTitle: 'LÓGICA DE COMPONENTES & SISTEMA DE DISEÑO',
        specs: [
          'Componentes puros y atómicos: arquitectura sin elementos decorativos superfluos para garantizar peso pluma de descarga.',
          'Matriz de estados de agenda: sincronización de slots horarios en bloques de 30 y 45 minutos con validación de horario comercial.',
          'Tipografía de alta legibilidad: combinación de sistema sans para cuerpos y monoespaciado para lecturas tabulares y certificados.',
        ],
        gridBadge: 'SISTEMA DE DISEÑO 8PT GRID',
        caption: 'Estructura modular de wireframe en Figma con tokens de espaciado y árboles de componentes reutilizables.',
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // PRODUCCIÓN & DESPLIEGUE',
        title: 'La Interfaz (Vercel Deployment)',
        desc: 'Código final en producción servido globalmente a través de la infraestructura de Vercel Edge.',
        featuresTitle: 'ARQUITECTURA DE PRODUCCIÓN & CONVERSIÓN',
        features: [
          'Despliegue serverless edge en Vercel con tiempos de primer renderizado inferiores a 50 milisegundos.',
          'Flujo de reserva interactivo con precarga de mensaje estructurado a WhatsApp para confirmación inmediata con el consultorio.',
          'Cumplimiento de estándares de contraste AA/AAA para accesibilidad en entornos clínicos y dispositivos con luz variable.',
        ],
        liveUrl: 'https://dra-victoria-mockup.vercel.app/',
        liveUrlLabel: 'VERCEL DEPLOYMENT // PROD READY',
        caption: 'Interfaz en producción desplegada en Vercel con sistema de reservas en tiempo real y enlace directo al consultorio.',
      },
      summary: {
        tag: 'RESULTADOS & CONTINUIDAD',
        title: 'Arquitectura que trabaja para el negocio.',
        description: 'La presencia de Dra. Victoria demuestra que un sitio web profesional no necesita semanas de deliberación ni plantillas genéricas sobrecargadas. Construimos exactamente lo que su práctica médica requería para convertir visitas en pacientes reales.',
        ctaConsultation: 'INICIAR PROYECTO CON DAVID RAIGOZA →',
        ctaWhatsApp: 'HABLAR POR WHATSAPP DIRECTO',
      },
    },
    commonGroundCase: {
      backToStudio: '← VOLVER AL ESTUDIO',
      caseNumberTag: 'CASO DE ESTUDIO 02 // B2B SAAS & CARTOGRAFÍA',
      client: 'CommonGround Studio',
      title: 'Cartografía semántica y diagnóstico de alineación.',
      subtitle: 'Herramienta analítica y lienzo de inteligencia relacional para mapear y evaluar el posicionamiento de mercado en empresas B2B.',
      metaPills: {
        clientLabel: 'CLIENTE',
        clientValue: 'CommonGround (B2B SaaS)',
        locationLabel: 'ENTORNO',
        locationValue: 'Global / B2B Technology',
        disciplineLabel: 'DISCIPLINA',
        disciplineValue: 'Spatial Systems & High-Density UI Engineering',
        deploymentLabel: 'DESPLIEGUE',
        deploymentValue: 'Vercel Edge Platform (38ms latencia)',
        resultLabel: 'PRECISIÓN',
        resultValue: '92.6% exactitud en proyección vectorial y grafos',
      },
      quote: '“La distancia visual es distancia semántica.”',
      quoteCaption: 'Principio de ingeniería cartográfica: traducir relaciones de mercado complejas en coordenadas espaciales navegables.',
      step1: {
        num: '01',
        tag: 'STEP 01 // EL MODELO SEMÁNTICO',
        title: 'El Espacio Vectorial (Semantic Vectors)',
        desc: 'Modelado analítico de discursos y categorías de mercado transformados en proyecciones vectoriales 2D.',
        notesTitle: 'ANOTACIONES DE MATRIZ VECTORIAL & NAVEGACIÓN',
        notes: [
          'Reducción dimensional rigurosa: transposición de clusters semánticos multidimensionales a un plano cartesiano interactivo.',
          'Cálculo de afinidad relacional: métricas de similitud de coseno convertidas en distancias euclidianas perceptibles en tiempo real.',
          'Jerarquía de visualización por capas: taxonomías primarias, secundarias y vectores de oportunidad identificables en un solo vistazo.',
        ],
        vectorBadge: 'PROYECCIÓN SEMÁNTICA // ACCURACY 92.6%',
        caption: 'Diagrama de dispersión semántica y proyección cartográfica de actores de la industria en el plano relacional.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // EL GRAFO RELACIONAL & HUD',
        title: 'El Lienzo Interactivo (Spatial Canvas)',
        desc: 'Ingeniería de renderizado a 60fps con cálculo de cuadrícula dinámica y HUD de telemetría en tiempo real.',
        specsTitle: 'ESPECIFICACIONES DE RENDIMIENTO & RENDERIZADO',
        specs: [
          'Lienzo de dibujo acelerado por hardware: capacidad de proyectar cientos de nodos y aristas de conexión sin caída de frames.',
          'HUD de telemetría Bauhaus: micro-paneles monoespaciados que despliegan coordenadas (X, Y) y distancias angulares con latencia imperceptible.',
          'Sistema modular de inspección: paneles laterales desplegables con desglose pormenorizado de la propuesta de valor.',
        ],
        hudBadge: 'CANVAS 60FPS // ZERO LATENCY',
        caption: 'Estructura modular del HUD vectorial con nodos interactivos, filtros de segmento y telemetría de posición.',
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // PRODUCCIÓN & DESPLIEGUE',
        title: 'La Interfaz (Vercel Deployment)',
        desc: 'Lienzo interactivo completamente funcional desplegado en Vercel Edge con capacidades analíticas en tiempo real.',
        featuresTitle: 'CAPACIDADES EN PRODUCCIÓN & SISTEMA ANALÍTICO',
        features: [
          'Despliegue distribuido de escala global en Vercel Edge con renderizado inmediato y tiempo de respuesta sub-40ms.',
          'Navegación espacial fluida con zoom infinito, pan reactivo y filtros de cuadrícula táctiles.',
          'Contraste estricto y legibilidad técnica de grado militar para salas de situación ejecutivas y tableros de control.',
        ],
        liveUrl: 'https://common-ground-studio-drab.vercel.app/',
        liveUrlLabel: 'VERCEL DEPLOYMENT // PROD READY',
        caption: 'Interfaz en producción desplegada en Vercel con motor cartográfico interactivo y diagnóstico de posicionamiento.',
      },
      summary: {
        tag: '[ INGENIERÍA DE SISTEMAS ]',
        title: 'Herramientas de alta densidad para decisiones complejas.',
        description: 'CommonGround demuestra cómo la conjunción de diseño analítico riguroso y arquitectura frontend moderna transforma datos dispersos en ventajas estratégicas legibles y operables al instante.',
        ctaConsultation: 'INICIAR PROYECTO CON DAVID RAIGOZA →',
        ctaWhatsApp: 'HABLAR POR WHATSAPP DIRECTO',
      },
    },
    talentShowcaseCase: {
      backToStudio: '← VOLVER AL ESTUDIO',
      caseNumberTag: 'CASO DE ESTUDIO 03 // RECLUTAMIENTO & IA GENERATIVA',
      client: 'Talent Showcase & Evaluation Hub',
      title: 'Talent Showcase Hub. Plataforma de perfiles de candidatos y evaluación para clientes con IA.',
      subtitle: 'Solución integral que ayuda a agencias de reclutamiento a transformar hojas de vida y notas en bruto en portafolios de talento estructurados y profesionales, brindando a las empresas cliente un panel estandarizado para evaluar candidatos contra perfiles de cargo.',
      heroTag: 'Full-Stack Platform · Gemini AI Integration · Talent Evaluation Systems',
      heroDescription: 'Una solución full-stack que ayuda a las agencias de empleo y reclutamiento a transformar notas y currículums desestructurados en portafolios profesionales estandarizados, mientras proporciona a las empresas clientes un espacio de trabajo unificado para comparar y evaluar candidatos objetivamente.',
      metaPills: {
        clientLabel: 'CLIENTE / SECTOR',
        clientValue: 'Empresas de Reclutamiento & Staffing',
        locationLabel: 'ENTORNO',
        locationValue: 'Global / B2B Staffing & Talent Tech',
        disciplineLabel: 'DISCIPLINA',
        disciplineValue: 'Full-Stack Systems & AI Product Architecture',
        deploymentLabel: 'DESPLIEGUE',
        deploymentValue: 'Google Cloud Platform · Gemini API · Next.js',
        resultLabel: 'IMPACTO',
        resultValue: '-75% tiempo de formato · 100% perfiles estandarizados',
      },
      quote: '“Las presentaciones de candidatos en el sector de reclutamiento son tradicionalmente fragmentadas y subjetivas. La IA estructura la información en bruto con supervisión humana para que los clientes tomen decisiones con rapidez y certeza.”',
      quoteCaption: 'Fundamento de diseño de sistemas de talento: automatizar la síntesis técnica sin desplazar el criterio evaluativo humano.',
      step1: {
        num: '01',
        tag: 'STEP 01 // EL DESAFÍO DE LA INDUSTRIA',
        title: 'El Desafío (The Challenge)',
        desc: 'Las presentaciones de candidatos en el sector de staffing están fragmentadas. Las agencias lidian con hojas de vida desordenadas, formatos discordantes y resúmenes inconsistentes que vuelven las revisiones de los clientes lentas, tediosas y profundamente subjetivas.',
        notesTitle: 'PUNTOS DE FRICCIÓN & ANÁLISIS DE FLUJO EN RECLUTAMIENTO',
        notes: [
          'Fragmentación de datos en bruto: los reclutadores invierten incontables horas transcribiendo y formateando notas desestructuradas de entrevistas y currículums dispares.',
          'Inconsistencia en la presentación: cada cuenta o consultor presenta a sus candidatos con estructuras y criterios divergentes, complicando la comparación por parte del cliente.',
          'Subjetividad y cuellos de botella: los clientes corporativos retrasan decisiones de contratación al recibir expedientes que no responden directamente a las matrices del perfil de cargo.',
        ],
        frictionBadge: 'PUNTOS CRÍTICOS: FORMATOS DISCORDANTES Y REVISIÓN LENTA',
        caption: 'Mapeo analítico del cuello de botella en agencias de staffing: de notas dispersas a horas perdidas en edición manual.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // LA SOLUCIÓN & FLUJO DUAL',
        title: 'La Solución (Dual-Sided Workflow)',
        desc: 'La IA asiste a ambos extremos del proceso. Los candidatos convierten sus notas en bruto en resúmenes profesionales estructurados (con edición con criterio humano en todo momento). Los clientes reciben perfiles normalizados con evaluaciones de encaje generadas por IA, conservando la autoridad decisoria final.',
        specsTitle: 'EXPERIENCIA DUAL CALIBRADA PARA EL FLUJO DE SELECCIÓN',
        specs: [
          'Espacio de Trabajo del Candidato (Talent Workspace): los candidatos ingresan notas sueltas, generan portafolios estructurados mediante Gemini, revisan y refinan el contenido antes de publicar, y pueden actualizarlo hasta el cierre de la convocatoria.',
          'Espacio de Trabajo del Cliente / Gerente (Client Workspace): los account managers y clientes acceden a resúmenes unificados, recomendaciones de encaje por IA, rúbricas de puntuación y seguimiento del pipeline.',
          'Supervisión Humana Permanente (Human-in-the-Loop): la IA propone y normaliza, pero el candidato y el evaluador mantienen control editorial y veto absoluto.',
        ],
        dualBadge: 'ARQUITECTURA DUAL: CANDIDATO + CLIENTE EMPRESARIAL',
        caption: 'Diagrama del flujo dual interactivo: generación asistida por Gemini y panel de decisión estandarizado para contrataciones.',
        talentTitle: 'TALENT WORKSPACE (CANDIDATOS)',
        talentDesc: 'Entorno de creación donde el talento convierte apuntes informales en una presentación profesional rigurosa sin fricción.',
        talentPoints: [
          'Carga ágil de notas sin formato previo',
          'Estructuración automatizada de competencias y logros con Gemini',
          'Edición en vivo y refinamiento previo a la publicación',
          'Gestión de versiones hasta el plazo límite de la vacante',
        ],
        clientTitle: 'CLIENT WORKSPACE (RECLUTADORES & CLIENTES)',
        clientDesc: 'Consola unificada para directores de talento y clientes que compara candidatos con criterios equivalentes y objetivos.',
        clientPoints: [
          'Dossier unificado de candidatos bajo un mismo estándar',
          'Evaluación automatizada de afinidad contra el perfil de cargo',
          'Rúbricas de calificación cuantitativa y cualitativa',
          'Seguimiento visual del estado del pipeline en tiempo real',
        ],
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // ARQUITECTURA DE SISTEMA & APP EN VIVO',
        title: 'Arquitectura del Sistema (System Architecture)',
        desc: 'Plataforma desplegada y operativa construida con Next.js, TypeScript y el SDK de Google Gemini para estructuración semántica de alta precisión en tiempo real.',
        featuresTitle: 'PILONES DE INGENIERÍA & CAPACIDADES NATIVAS',
        features: [
          'Redacción Asistida por IA: integración con Gemini API para descomponer textos libres en esquemas estructurados de perfiles profesionales.',
          'Edición Human-in-the-Loop: control exhaustivo para que el usuario edite, calibre y valide las sugerencias de la IA en cualquier etapa.',
          'Arquitectura de Interfaz Dual: separación estricta de rutas y experiencias para candidatos y revisores corporativos.',
          'Control Centralizado de Plazos: configuración de ventanas temporales de postulación y cierre automático de modificaciones.',
          'Motor de Coincidencia por IA: algoritmos de puntuación de encaje frente a los requerimientos puntuales de cada vacante.',
        ],
        liveUrl: 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true',
        liveUrlLabel: 'GOOGLE AI STUDIO // LIVE APP',
        caption: 'Captura funcional de la plataforma en producción: panel de creación para talento y panel de revisión y puntuación para clientes.',
        systems: [
          {
            title: 'AI-Assisted Authoring',
            desc: 'Modelado con Gemini para extraer trayectoria, habilidades técnicas y diferenciales a partir de notas no estructuradas.',
            badge: 'GEMINI SDK',
          },
          {
            title: 'Human-in-the-Loop Editing',
            desc: 'Control total sobre cada salida generada por la IA, permitiendo correcciones y añadidos manuales directos.',
            badge: 'FULL EDITABILITY',
          },
          {
            title: 'Dual Interface Architecture',
            desc: 'Rutas y vistas dedicadas que aíslan la perspectiva del postulante del panel evaluativo de los tomadores de decisiones.',
            badge: 'ROLE SEPARATION',
          },
          {
            title: 'Centralized Deadline Control',
            desc: 'Automatización de fechas límites de entrega y congelamiento de versiones para garantizar equidad en la evaluación.',
            badge: 'TIMELINE ENGINE',
          },
          {
            title: 'AI Match Recommendation',
            desc: 'Análisis de compatibilidad semántica entre los atributos del candidato y los criterios clave del perfil de vacante.',
            badge: 'MATCH ENGINE',
          },
        ],
      },
      impact: {
        num: '04',
        tag: 'STEP 04 // IMPACTO MEDIBLE',
        title: 'Impacto Comprobado en el Proceso de Selección',
        desc: 'Métricas de productividad y calidad que redefinen la relación operativa entre candidatos, agencias de reclutamiento y empresas contratantes.',
        metrics: [
          {
            metric: '-75%',
            label: 'Tiempo de Formato para Reclutadores',
            desc: 'Reducción drástica del tiempo invertido en transcribir, remaquetar y homogeneizar hojas de vida de candidatos.',
          },
          {
            metric: '100%',
            label: 'Estandarización de Perfiles',
            desc: 'Todos los clientes reciben carpetas digitales idénticas en estructura, facilitando una lectura comparativa sin sesgos visuales.',
          },
          {
            metric: '94%',
            label: 'Coherencia en Criterios de Evaluación',
            desc: 'Evaluación alineada con rúbricas objetivas basadas en los requisitos reales del brief de la vacante.',
          },
          {
            metric: '100%',
            label: 'Criterio Humano Soberano',
            desc: 'La IA potencia la síntesis de información, pero las decisiones finales de contratación permanecen enteramente en manos humanas.',
          },
        ],
      },
      summary: {
        tag: 'PLATAFORMAS CON PROPÓSITO',
        title: 'Tecnología inteligente al servicio del talento humano.',
        description: 'Talent Showcase & Evaluation Hub evidencia cómo la inteligencia artificial aplicada con precisión de diseño elimina fricción operativa en procesos de talento, devolviendo el foco a lo que realmente importa: la calidad de las personas.',
        ctaConsultation: 'INICIAR PROYECTO CON DAVID RAIGOZA →',
        ctaWhatsApp: 'HABLAR POR WHATSAPP DIRECTO',
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
      title: 'Proyectos desde $1.300.000 COP',
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
      sysTag: 'Aviso // 01',
      message: 'Usamos cookies para personalizar contenido y analizar el tráfico.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      closeAria: 'Cerrar diálogo',
    },
    floatingWhatsApp: {
      tooltip: 'Habla conmigo 👋',
      ariaLabel: 'Hablar por WhatsApp',
      chatUrl: 'https://wa.me/573007747638?text=Hola%20David%2C%20vi%20davidraigoza.design%20y%20quiero%20hablar%20de%20un%20proyecto',
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
      title: 'We design digital products for professionals and specialists.',
      categoryLabel: 'Specialty',
      rotatingCategories: ['doctors', 'architects', 'consultants', 'brands'],
      pricingLabel: 'Transparent initial investment',
      price: 'From $1,300,000 COP',
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
    profile: {
      tag: 'DIRECT PRACTICE & EXECUTION',
      name: 'David Raigoza',
      role: 'Product Design Engineer',
      paragraph1: 'David works directly with you to understand your business, clarify what you need to communicate, and turn it into a clear, functional digital experience that fits your clients.',
      paragraph2: 'He designs and develops each product according to your business context, from structure and content to the experience and implementation.',
      location: 'Medellín, Colombia',
      focus: 'Websites for professionals',
      pillar1: 'Designed for clarity.',
      pillar2: 'Structure, content, and form.',
      pillar3: 'Websites you can understand and manage.',
    },
    essentials: {
      tag: '01 / ESSENTIAL STRUCTURE',
      title: 'A digital presence that works for your business',
      description: 'A professional website that helps your clients find you, understand what you do, and get in touch easily.',
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
      title: 'We build from clarity.',
      subtitle: '',
      baseCost: {
        concept: 'CONCEPT 01 · CORE FEE',
        badge: 'ONE-TIME PAYMENT',
        title: 'Base investment',
        amount: '$1,300,000 COP',
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
    caseStudies: {
      tag: '[ 06.5 // PROJECTS & EVIDENCE — HORIZONTAL SCROLL ↔ ]',
      title: 'From concept to production.',
      subtitle: 'Real-world digital systems engineered with technical discipline: where hand sketching, modular architecture, and edge production minimize friction and maximize conversion.',
      project1: {
        number: '01',
        client: 'Dra. Victoria (Colombia)',
        tag: '[ LOCAL EXECUTION // LANDING & BOOKING ]',
        description: 'From paper to interface in record time. Digital system with optimized bookings and medical conversion architecture.',
        action: '[ VIEW CASE STUDY // DRA. VICTORIA ]',
        liveAction: '[ ↗ VIEW LIVE SITE ]',
        liveUrl: 'https://dra-victoria-mockup.vercel.app/',
        url: '/case-studies/dra-victoria',
        assetAlt: 'High-precision medical conversion interface for Dra. Victoria Cadavid',
        metaBadge: 'AESTHETIC MEDICINE · MEDELLÍN',
        highlights: ['Zero-Friction Booking', 'Vercel Edge 42ms', 'WhatsApp API Sync'],
      },
      project2: {
        number: '02',
        client: 'CommonGround (B2B SaaS)',
        tag: '[ SYSTEMS & POSITIONING // INTELLIGENCE ]',
        description: 'Cartographic navigation and relational intelligence tool evaluating company positioning and messaging alignment.',
        action: '[ VIEW CASE STUDY // COMMONGROUND ]',
        liveAction: '[ ↗ VIEW LIVE SITE ]',
        liveUrl: 'https://common-ground-studio-drab.vercel.app/',
        url: '/case-studies/common-ground',
        assetAlt: 'CommonGround cartographic navigation and positioning tool preview',
        metaBadge: 'B2B SAAS · RELATIONAL INTEL',
        highlights: ['Semantic Cartography', 'Vector Embeddings', 'Relational Diagnostics'],
      },
      project3: {
        number: '03',
        client: 'Talent Showcase & Evaluation Hub',
        tag: '[ STAFFING & RECRUITMENT // AI WORKSPACE ]',
        description: 'End-to-end turnkey platform for staffing agencies: AI-assisted candidate profiling from rough notes and standardized evaluation workspace for client hiring managers.',
        action: '[ VIEW CASE STUDY // TALENT SHOWCASE ]',
        liveAction: '[ ↗ OPEN LIVE APP ]',
        liveUrl: 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true',
        url: '/case-studies/talent-showcase-hub',
        assetAlt: 'Talent Showcase & Evaluation Hub platform mockup showing candidate builder and recruiter evaluation dashboard',
        metaBadge: 'GEMINI AI · TALENT EVALUATION',
        highlights: ['Dual-Sided Workspace', 'Gemini AI Structuring', 'Objective Fit Scoring'],
      },
    },
    draVictoriaCase: {
      backToStudio: '← RETURN TO STUDIO',
      caseNumberTag: 'CASE STUDY 01 // HEALTH & CONVERSION',
      client: 'Dra. Victoria Cadavid',
      title: 'From paper to interface in record time.',
      subtitle: 'Digital system with optimized booking workflows and medical conversion architecture for a high-precision private practice in Medellín.',
      metaPills: {
        clientLabel: 'CLIENT',
        clientValue: 'Dra. Victoria Cadavid',
        locationLabel: 'LOCATION',
        locationValue: 'Medellín, Colombia',
        disciplineLabel: 'DISCIPLINE',
        disciplineValue: 'Product Design Engineering & Web Frontend',
        deploymentLabel: 'DEPLOYMENT',
        deploymentValue: 'Vercel Edge Runtime (48ms latency)',
        resultLabel: 'OUTCOME',
        resultValue: 'Direct conversion, 100% verified appointment channel',
      },
      quote: '“I do not seek to decorate the idea. I seek to understand it.”',
      quoteCaption: 'Bauhaus engineering principle: form follows clinical function and human decision psychology.',
      step1: {
        num: '01',
        tag: 'STEP 01 // THE ANALOG SKETCH',
        title: 'The Sketch (Analog Blueprint)',
        desc: 'Design does not begin in software: it starts on millimeter grid paper, dissecting patient anxiety, decision triggers, and interaction friction.',
        notesTitle: 'ENGINEERING ANNOTATIONS & MOBILE HIERARCHY',
        notes: [
          'Radical friction reduction: removal of multi-step registration forms; the funnel collapses from 5 traditional steps into 1 seamless interaction.',
          'Thumb-Reach zone optimization: 89% of patient traffic originates from mobile Instagram; the consultation availability button is locked in the primary reach zone.',
          'Instant credibility signifiers: medical license registry and verified credentials positioned above the fold without requiring scroll.',
        ],
        frictionBadge: 'STEP COMPRESSION: 5 → 1',
        caption: 'Original millimeter grid blueprint mapping patient touch zones, priority cues, and quick-decision anchors.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // MODULAR STRUCTURE',
        title: 'The Wireframe (Modular Figma Architecture)',
        desc: 'Mathematical translation into modular interface components in Figma governed by a strict 8px spatial grid.',
        specsTitle: 'COMPONENT LOGIC & DESIGN SYSTEM TOKENS',
        specs: [
          'Pure atomic components: lean architecture without decorative bloat to ensure featherweight asset delivery and instant time-to-interactive.',
          'Appointment state matrix: live slot availability in calibrated 30 and 45-minute blocks with strict office hours validation.',
          'High-contrast typographic hierarchy: pairing crisp geometric sans for body readability with tabular monospace for clinical registries.',
        ],
        gridBadge: '8PT GRID DESIGN SYSTEM',
        caption: 'Figma modular wireframe architecture with precise spacing tokens, responsive atoms, and state trees.',
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // PRODUCTION INTERFACE',
        title: 'The Interface (Vercel Edge Deployment)',
        desc: 'Production-ready codebase served globally via high-performance Vercel Edge infrastructure.',
        featuresTitle: 'PRODUCTION ARCHITECTURE & CONVERSION FUNNEL',
        features: [
          'Global edge serverless deployment on Vercel delivering sub-50ms first contentful paint and rock-solid 100% uptime.',
          'Interactive booking workflow pre-populating formatted WhatsApp payloads for instant confirmation with clinic personnel.',
          'Strict WCAG AA/AAA color contrast standards for clinical environments and variable ambient mobile conditions.',
        ],
        liveUrl: 'https://dra-victoria-mockup.vercel.app/',
        liveUrlLabel: 'VERCEL DEPLOYMENT // PROD READY',
        caption: 'Live production interface deployed on Vercel with real-time appointment booking and direct clinic confirmation loop.',
      },
      summary: {
        tag: 'PERFORMANCE & CONTINUITY',
        title: 'Architecture that works for business.',
        description: 'Dra. Victoria’s digital presence proves that a professional web platform does not require endless agency delays or bloated templates. We engineered exactly what her medical practice needed to convert visitors into booked patients.',
        ctaConsultation: 'COMMENCE PROJECT WITH DAVID RAIGOZA →',
        ctaWhatsApp: 'DIRECT WHATSAPP CONSULTATION',
      },
    },
    commonGroundCase: {
      backToStudio: '← RETURN TO STUDIO',
      caseNumberTag: 'CASE STUDY 02 // B2B SAAS & CARTOGRAPHY',
      client: 'CommonGround Studio',
      title: 'Semantic cartography and positioning diagnostics.',
      subtitle: 'Relational intelligence canvas and analytical platform for mapping, stress-testing, and positioning B2B software enterprises.',
      metaPills: {
        clientLabel: 'CLIENT',
        clientValue: 'CommonGround (B2B SaaS)',
        locationLabel: 'ENVIRONMENT',
        locationValue: 'Global / B2B Technology',
        disciplineLabel: 'DISCIPLINE',
        disciplineValue: 'Spatial Systems & High-Density UI Engineering',
        deploymentLabel: 'DEPLOYMENT',
        deploymentValue: 'Vercel Edge Platform (38ms latency)',
        resultLabel: 'ACCURACY',
        resultValue: '92.6% positional accuracy across vector graphs',
      },
      quote: '“Visual distance is semantic distance.”',
      quoteCaption: 'Cartographic engineering principle: translating complex market positioning dynamics into navigable coordinate systems.',
      step1: {
        num: '01',
        tag: 'STEP 01 // SEMANTIC VECTOR SPACE',
        title: 'The Vector Space (Semantic Cartography)',
        desc: 'Analytical modeling of enterprise discourse transformed into interactive two-dimensional coordinate projections.',
        notesTitle: 'VECTOR MATRIX ANNOTATIONS & SPATIAL ANCHORS',
        notes: [
          'Rigorous dimensionality reduction: projecting high-dimensional narrative clusters onto an interactive Cartesian plane.',
          'Relational affinity calculations: converting cosine similarity metrics into immediately perceptible Euclidean distances.',
          'Layered visual hierarchy: distinguishing primary taxonomies, secondary signals, and uncontested market spaces in one glance.',
        ],
        vectorBadge: 'SEMANTIC PROJECTION // ACCURACY 92.6%',
        caption: 'Semantic dispersion matrix and cartographic coordinate system mapping industry competitors on a relational plane.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // RELATIONAL GRAPH & HUD',
        title: 'The Interactive Canvas (Spatial Graph Engine)',
        desc: '60fps hardware-accelerated canvas engine with dynamic coordinate grids and instant telemetry readout HUD.',
        specsTitle: 'PERFORMANCE BENCHMARKS & RENDERING ARCHITECTURE',
        specs: [
          'Hardware-accelerated viewport: rendering hundreds of nodes and connecting vectors simultaneously with zero frame-pacing lag.',
          'Bauhaus telemetry HUD: monospace micro-panels rendering live coordinates (X, Y) and angular vectors with imperceptible latency.',
          'Modular inspection drawer: collapsible drilldown panels revealing granular value proposition mechanics and messaging proof points.',
        ],
        hudBadge: '60FPS CANVAS // ZERO LATENCY',
        caption: 'Modular HUD vector architecture featuring responsive interaction nodes, segment filters, and telemetry dials.',
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // PRODUCTION INTERFACE',
        title: 'The Interface (Production Deployment)',
        desc: 'Production-grade spatial application deployed on Vercel Edge with live analytical calculation capabilities.',
        featuresTitle: 'PRODUCTION SPECIFICATIONS & ANALYTICAL CAPABILITIES',
        features: [
          'Globally distributed edge deployment on Vercel delivering instant paint times and sub-40ms computation response.',
          'Frictionless spatial navigation: infinite canvas zoom, reactive fluid panning, and tactile coordinate grid filters.',
          'Mission-critical typographic contrast and legibility engineered for executive war rooms and boardroom demonstrations.',
        ],
        liveUrl: 'https://common-ground-studio-drab.vercel.app/',
        liveUrlLabel: 'VERCEL DEPLOYMENT // PROD READY',
        caption: 'Live production application deployed on Vercel with real-time vector cartography engine and positioning diagnosis.',
      },
      summary: {
        tag: 'SYSTEMS ENGINEERING',
        title: 'High-density instruments for high-stakes decisions.',
        description: 'CommonGround demonstrates how pairing mathematical design discipline with modern frontend architecture transforms noisy data into decisive strategic clarity.',
        ctaConsultation: 'COMMENCE PROJECT WITH DAVID RAIGOZA →',
        ctaWhatsApp: 'DIRECT WHATSAPP CONSULTATION',
      },
    },
    talentShowcaseCase: {
      backToStudio: '← RETURN TO STUDIO',
      caseNumberTag: 'CASE STUDY 03 // STAFFING & GENERATIVE AI',
      client: 'Talent Showcase & Evaluation Hub',
      title: 'Talent Showcase Hub. AI-Assisted Candidate Profiling & Client Review Platform.',
      subtitle: 'A full-stack solution that helps staffing agencies transform rough candidate resumes and notes into structured, professional talent portfolios while giving client companies a standardized dashboard to review candidates against job requirements.',
      heroTag: 'Full-Stack Platform · Gemini AI Integration · Talent Evaluation Systems',
      heroDescription: 'A turnkey full-stack solution engineered for staffing and recruitment companies: candidate-facing AI authoring that transforms rough notes into standardized talent dossiers, paired with an executive client workspace for objective candidate evaluation.',
      metaPills: {
        clientLabel: 'TARGET SECTOR',
        clientValue: 'Staffing & Recruitment Agencies',
        locationLabel: 'ENVIRONMENT',
        locationValue: 'Global / B2B Staffing & Talent Tech',
        disciplineLabel: 'DISCIPLINE',
        disciplineValue: 'Full-Stack Systems & AI Product Architecture',
        deploymentLabel: 'DEPLOYMENT',
        deploymentValue: 'Google Cloud Platform · Gemini API · Next.js',
        resultLabel: 'MEASURED IMPACT',
        resultValue: '-75% formatting overhead · 100% dossier parity',
      },
      quote: '“Staffing submissions are traditionally fragmented and subjective. By integrating Gemini to structure raw candidate notes with human-in-the-loop validation, agencies present standardized, high-clarity portfolios that accelerate client hiring decisions.”',
      quoteCaption: 'Talent systems architecture brief: accelerating synthesis without compromising human hiring authority.',
      step1: {
        num: '01',
        tag: 'STEP 01 // INDUSTRY BOTTLENECK',
        title: 'The Challenge (The Fragmented Pipeline)',
        desc: 'Staffing submissions are fragmented. Agencies deal with messy resumes, inconsistent candidate summaries, and conflicting formats, making client reviews slow, tedious, and subjective.',
        notesTitle: 'FRICTION AUDIT & RECRUITMENT WORKFLOW BOTTLENECKS',
        notes: [
          'Unstructured raw input: recruiters spend hundreds of hours reformatting inconsistent resumes, messy LinkedIn exports, and disparate interview notes.',
          'Format variance: individual account managers present talent in conflicting styles, confusing corporate clients and obscuring key qualifications.',
          'Evaluation lag: hiring clients delay decisions because candidate submissions lack uniform scoring criteria matched to specific job briefs.',
        ],
        frictionBadge: 'CRITICAL FRICTION: FRAGMENTED DOSSIERS & SUBJECTIVE REVIEWS',
        caption: 'Analytical map of the traditional staffing bottleneck: unstructured resumes causing recruiter drag and delayed client evaluations.',
      },
      step2: {
        num: '02',
        tag: 'STEP 02 // DUAL WORKFLOW ARCHITECTURE',
        title: 'The Solution (Dual-Sided Experience)',
        desc: 'AI assists both sides. Candidates turn raw notes into structured professional summaries (with human-in-the-loop editing). Clients receive standardized profiles with AI-generated fit assessments, while keeping final hiring authority.',
        specsTitle: 'CALIBRATED DUAL-SIDED PIPELINE ARCHITECTURE',
        specs: [
          'Talent Workspace: candidates input rough notes, generate structured portfolios with Gemini, review/edit before publishing, and update until submission windows close.',
          'Client/Manager Workspace: account managers and hiring clients access standardized candidate summaries, AI match recommendations, scoring criteria, and status tracking.',
          'Human-in-the-Loop Sovereign Control: Gemini handles synthesis and structure; candidates and client stakeholders maintain total editorial control and final decision veto.',
        ],
        dualBadge: 'DUAL ARCHITECTURE: CANDIDATE PORTAL + CLIENT WORKSPACE',
        caption: 'Interactive dual-sided workflow diagram: Gemini AI candidate synthesis and structured client evaluation console.',
        talentTitle: 'TALENT WORKSPACE (CANDIDATES)',
        talentDesc: 'Zero-friction authoring canvas enabling candidates to convert rough notes into comprehensive portfolios without formatting stress.',
        talentPoints: [
          'Rapid unstructured text and notes input',
          'Automated skill extraction and narrative structuring via Gemini',
          'Live side-by-side editing prior to submission',
          'Revision capabilities until submission window deadline',
        ],
        clientTitle: 'CLIENT & MANAGER WORKSPACE',
        clientDesc: 'Standardized evaluation dashboard giving corporate clients objective candidate comparisons against job requirements.',
        clientPoints: [
          'Uniform candidate dossiers eliminating presentation bias',
          'AI-assisted match scores against specific job brief criteria',
          'Quantitative and qualitative evaluation rubrics',
          'Real-time pipeline tracking and status progression',
        ],
      },
      step3: {
        num: '03',
        tag: 'STEP 03 // SYSTEM ARCHITECTURE & LIVE APP',
        title: 'System Architecture & Live Deployment',
        desc: 'Production-ready platform built with Next.js, TypeScript, and the Google Gemini SDK for real-time structured profile synthesis and evaluation telemetry.',
        featuresTitle: 'CORE ARCHITECTURAL PILLARS & PRODUCTION CAPABILITIES',
        features: [
          'AI-Assisted Authoring: Gemini API integration for parsing unstructured notes into structured JSON schema profiles.',
          'Human-in-the-Loop Editing: Complete candidate and recruiter control to review, edit, and fine-tune AI drafts.',
          'Dual Interface Architecture: Separated talent and client experiences with distinct permissions and views.',
          'Centralized Deadline & Pipeline Control: Configurable submission windows and review deadlines.',
          'AI Match Recommendation Engine: Automated fit scoring against specific job briefs.',
        ],
        liveUrl: 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true',
        liveUrlLabel: 'GOOGLE AI STUDIO // LIVE APP',
        caption: 'Functional screenshot of live platform interface showing candidate profile authoring and recruiter candidate comparison dashboard.',
        systems: [
          {
            title: 'AI-Assisted Authoring',
            desc: 'Gemini integration structuring raw notes into verified skills, bio summaries, and career milestones.',
            badge: 'GEMINI SDK',
          },
          {
            title: 'Human-in-the-Loop Editing',
            desc: 'Full user control over AI-generated outputs, allowing line-by-line validation and custom edits.',
            badge: 'FULL EDITABILITY',
          },
          {
            title: 'Dual Interface Architecture',
            desc: 'Strict boundary between talent authoring portals and client-side hiring evaluation dashboards.',
            badge: 'ROLE SEPARATION',
          },
          {
            title: 'Centralized Deadline Control',
            desc: 'Automated submission windows, freeze states, and pipeline progression for hiring cycles.',
            badge: 'TIMELINE ENGINE',
          },
          {
            title: 'AI Match Recommendation Engine',
            desc: 'Semantic rubric scoring comparing candidate credentials against specific client job briefs.',
            badge: 'MATCH ENGINE',
          },
        ],
      },
      impact: {
        num: '04',
        tag: 'STEP 04 // MEASURABLE IMPACT',
        title: 'Proven Business Impact & Outcomes',
        desc: 'Quantifiable operational efficiencies delivered to staffing agencies, talent candidates, and corporate hiring teams.',
        metrics: [
          {
            metric: '-75%',
            label: 'Recruiter Formatting Overhead',
            desc: 'Dramatic reduction in hours wasted retyping, reformatting, and proofreading raw candidate submissions.',
          },
          {
            metric: '100%',
            label: 'Dossier Parity Across Clients',
            desc: 'Standardized profile summaries eliminating presentation discrepancy and unconscious visual bias.',
          },
          {
            metric: '94%',
            label: 'Evaluation Consistency',
            desc: 'Objective scoring criteria mapped directly to client job requirements rather than subjective impressions.',
          },
          {
            metric: '100%',
            label: 'Human-First Decision Authority',
            desc: 'AI handles data synthesis, while human recruiters and clients retain total authority over all hiring decisions.',
          },
        ],
      },
      summary: {
        tag: 'PURPOSE-BUILT ARCHITECTURE',
        title: 'Intelligent systems elevating human talent.',
        description: 'Talent Showcase & Evaluation Hub demonstrates how thoughtful AI architecture and minimalist design discipline remove administrative drag from staffing, returning focus to human potential.',
        ctaConsultation: 'COMMENCE PROJECT WITH DAVID RAIGOZA →',
        ctaWhatsApp: 'DIRECT WHATSAPP CONSULTATION',
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
      title: 'Projects starting at $1,300,000 COP',
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
      sysTag: 'Notice // 01',
      message: 'We use cookies to personalize content and analyze traffic.',
      accept: 'Accept',
      decline: 'Decline',
      closeAria: 'Close dialog',
    },
    floatingWhatsApp: {
      tooltip: 'Chat with me 👋',
      ariaLabel: 'Chat on WhatsApp',
      chatUrl: 'https://wa.me/573007747638?text=Hello%20David%2C%20I%20saw%20davidraigoza.design%20and%20would%20like%20to%20discuss%20a%20project',
    },
  },
};
