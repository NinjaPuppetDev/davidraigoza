import { useEffect } from 'react';

interface SeoHeadProps {
  route: string;
}

export default function SeoHead({ route }: SeoHeadProps) {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const hostname = window.location.hostname.toLowerCase();
    const isUsHost =
      hostname === 'us.davidraigoza.online' ||
      hostname.startsWith('us.') ||
      window.location.search.includes('lang=en') ||
      window.location.search.includes('us=true') ||
      route === 'us' ||
      route.startsWith('us-');

    const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';

    // Helper: Set or create the single canonical link
    const setCanonical = (href: string) => {
      // Remove any existing canonical links to ensure no duplicate or conflicting tags
      const existing = document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
      existing.forEach((el) => el.remove());

      const linkEl = document.createElement('link');
      linkEl.rel = 'canonical';
      linkEl.href = href;
      document.head.appendChild(linkEl);
    };

    // Helper: Remove all hreflang alternate links
    const removeHreflangs = () => {
      const alternates = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
      alternates.forEach((el) => el.remove());
    };

    // Helper: Set exact hreflang alternate links
    const setHreflangs = (pairs: Array<{ hreflang: string; href: string }>) => {
      removeHreflangs();
      for (const pair of pairs) {
        const linkEl = document.createElement('link');
        linkEl.rel = 'alternate';
        linkEl.hreflang = pair.hreflang;
        linkEl.href = pair.href;
        document.head.appendChild(linkEl);
      }
    };

    // Helper: Set or create a meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrVal: string, content: string) => {
      let metaEl = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrVal}"]`);
      if (!metaEl) {
        metaEl = document.createElement('meta');
        metaEl.setAttribute(attrName, attrVal);
        document.head.appendChild(metaEl);
      }
      metaEl.content = content;
    };

    // Case study page detection
    const isDraVictoria = route.includes('dra-victoria') || pathname.includes('dra-victoria');
    const isCommonGround = route.includes('commonground') || pathname.includes('common-ground');
    const isTalentShowcase = route.includes('talent-showcase') || pathname.includes('talent-showcase');
    const isCaseStudy = isDraVictoria || isCommonGround || isTalentShowcase;

    if (isCaseStudy) {
      let slug = 'dra-victoria';
      if (isCommonGround) slug = 'common-ground';
      if (isTalentShowcase) slug = 'talent-showcase-hub';

      const isEnglishCaseStudy = isUsHost || route.startsWith('us-');
      const caseStudyDomain = isEnglishCaseStudy
        ? 'https://us.davidraigoza.online'
        : 'https://www.davidraigoza.online';

      document.documentElement.lang = isEnglishCaseStudy ? 'en' : 'es';

      // Self-referencing canonical to its own full URL on the matching host
      // Never point a case-study canonical at the homepage or other language
      setCanonical(`${caseStudyDomain}/case-studies/${slug}`);
      removeHreflangs();

      if (isDraVictoria) {
        document.title = isEnglishCaseStudy
          ? 'Dra. Victoria · Case Study | David Raigoza'
          : 'Dra. Victoria · Caso de Estudio | David Raigoza';
        const desc = isEnglishCaseStudy
          ? 'Case study: Digital medical conversion architecture and zero-friction booking system for Dra. Victoria Cadavid.'
          : 'Caso de estudio: Sistema digital de conversión médica y reservas sin fricción para la Dra. Victoria Cadavid.';
        setMetaTag('name', 'description', desc);
        setMetaTag('property', 'og:title', document.title);
        setMetaTag('property', 'og:description', desc);
      } else if (isCommonGround) {
        document.title = isEnglishCaseStudy
          ? 'CommonGround · Case Study | David Raigoza'
          : 'CommonGround · Caso de Estudio | David Raigoza';
        const desc = isEnglishCaseStudy
          ? 'Case study: Cartographic navigation and relational intelligence system for B2B SaaS positioning.'
          : 'Caso de estudio: Herramienta de navegación cartográfica e inteligencia relacional para posicionamiento B2B SaaS.';
        setMetaTag('name', 'description', desc);
        setMetaTag('property', 'og:title', document.title);
        setMetaTag('property', 'og:description', desc);
      } else if (isTalentShowcase) {
        document.title = isEnglishCaseStudy
          ? 'Talent Showcase & Hub · Case Study | David Raigoza'
          : 'Talent Showcase & Hub · Caso de Estudio | David Raigoza';
        const desc = isEnglishCaseStudy
          ? 'Case study: Turnkey candidate evaluation workspace and AI-assisted profiling platform for staffing agencies.'
          : 'Caso de estudio: Plataforma integral de evaluación de candidatos y workspace asistido por IA para agencias de empleo.';
        setMetaTag('name', 'description', desc);
        setMetaTag('property', 'og:title', document.title);
        setMetaTag('property', 'og:description', desc);
      }
      return;
    }

    if (isUsHost) {
      // English homepage (us.davidraigoza.online)
      document.documentElement.lang = 'en';
      document.title = 'David Raigoza - Digital Products for Professionals';
      const enDesc = 'High-performance digital products, web platforms, and engineering for professionals and businesses.';
      setMetaTag('name', 'description', enDesc);
      setMetaTag('property', 'og:title', 'David Raigoza - Digital Products for Professionals');
      setMetaTag('property', 'og:description', enDesc);

      // Rule: us.davidraigoza.online homepage -> canonical https://us.davidraigoza.online/, hreflang en-US + es
      setCanonical('https://us.davidraigoza.online/');
      setHreflangs([
        { hreflang: 'en-US', href: 'https://us.davidraigoza.online/' },
        { hreflang: 'es', href: 'https://www.davidraigoza.online/' },
      ]);
    } else {
      // Spanish homepage (www.davidraigoza.online)
      document.documentElement.lang = 'es';
      document.title = 'David Raigoza - Profesionales y Especialistas';
      const esDesc = 'Presencia digital profesional e ingeniería de diseño de producto para profesionales y especialistas.';
      setMetaTag('name', 'description', esDesc);
      setMetaTag('property', 'og:title', 'David Raigoza - Profesionales y Especialistas');
      setMetaTag('property', 'og:description', esDesc);

      // Rule: www.davidraigoza.online homepage -> canonical https://www.davidraigoza.online/, hreflang es + en-US
      setCanonical('https://www.davidraigoza.online/');
      setHreflangs([
        { hreflang: 'es', href: 'https://www.davidraigoza.online/' },
        { hreflang: 'en-US', href: 'https://us.davidraigoza.online/' },
      ]);
    }
  }, [route]);

  return null;
}
