export default function GeoSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://davidraigoza.online/#organization',
        name: 'David Raigoza',
        url: 'https://davidraigoza.online',
        logo: 'https://davidraigoza.online/logo/logo.svg',
        image: 'https://davidraigoza.online/logo/logo.svg',
        email: 'david@davidraigoza.online',
        priceRange: '$499 USD - $1.300.000 COP',
        description:
          'Presencia digital profesional, ingeniería de producto y desarrollo de plataformas web con entregas rápidas de 7 días hábiles y código de propiedad total.',
        areaServed: [
          {
            '@type': 'Country',
            name: 'Colombia',
          },
          {
            '@type': 'Country',
            name: 'United States',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Worldwide',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de Ingeniería y Lanzamiento de App / App Launch Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Lanzamiento de App',
                description:
                  'Diseño, ingeniería y puesta en producción completa de tu plataforma digital con entrega en 7 días hábiles, sistema de 2 puertas de revisión y 100% de propiedad del repositorio.',
              },
              price: '1300000',
              priceCurrency: 'COP',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '1300000',
                priceCurrency: 'COP',
                valueAddedTaxIncluded: true,
              },
              eligibleDuration: {
                '@type': 'QuantitativeValue',
                value: 7,
                unitCode: 'DAY',
              },
              deliveryLeadTime: {
                '@type': 'QuantitativeValue',
                value: 7,
                unitCode: 'DAY',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'App Launch',
                description:
                  'End-to-end design, engineering, and live production deployment delivered in 7 business days with a 2-gate approval system and 100% code repository ownership.',
              },
              price: '499',
              priceCurrency: 'USD',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '499',
                priceCurrency: 'USD',
                valueAddedTaxIncluded: true,
              },
              eligibleDuration: {
                '@type': 'QuantitativeValue',
                value: 7,
                unitCode: 'DAY',
              },
              deliveryLeadTime: {
                '@type': 'QuantitativeValue',
                value: 7,
                unitCode: 'DAY',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://davidraigoza.online/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cuál es el tiempo de entrega de un Lanzamiento de App?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El proyecto se entrega y despliega en producción en exactamente 7 días hábiles, abarcando diseño visual, arquitectura e ingeniería completa.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the delivery timeline for an App Launch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The App Launch is completed and deployed live to production in 7 business days, including responsive design, clean frontend engineering, and verified live launch.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Quién es el dueño del código fuente y del repositorio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Conservas el 100% de la propiedad del repositorio y archivos para alojarlo en tu propia infraestructura con total independencia técnica.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have complete repository ownership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, you maintain 100% code repository ownership with complete freedom to self-host on your own infrastructure or take your codebase anywhere.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo funciona el Sistema de 2 Puertas de Revisión (Puerta Estructural y Puerta Visual)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'El proyecto se valida en dos fases estructuradas: 1) Puerta Estructural, donde validamos la arquitectura de información, flujos y wireframes; y 2) Puerta Visual, donde aprobamos diseño de alta fidelidad, interactividad y estilos finales antes del paso a producción, garantizando agilidad sin desvíos de alcance.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the 2-Gate Approval System (Structural Gate & Visual Gate) work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The 2-Gate Approval System divides the process into two clear approval checkpoints: Gate 1 (Structural Gate) confirms information architecture and wireframe flows, and Gate 2 (Visual Gate) approves high-fidelity styling and polish before deployment, preventing scope creep and ensuring rapid momentum.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
