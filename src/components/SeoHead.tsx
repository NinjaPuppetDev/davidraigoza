import { useEffect } from 'react';

interface SeoHeadProps {
  route: string;
}

export default function SeoHead({ route }: SeoHeadProps) {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    const hostname = window.location.hostname.toLowerCase();
    const isUsDomain =
      hostname === 'us.davidraigoza.online' ||
      window.location.search.includes('lang=en') ||
      window.location.search.includes('us=true') ||
      route === 'us' ||
      route.startsWith('us-');

    const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';

    // Helper to find or create a <link> tag
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) {
        selector += `[hreflang="${hreflang}"]`;
      } else {
        selector += ':not([hreflang])';
      }
      let linkEl = document.querySelector<HTMLLinkElement>(selector);
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.rel = rel;
        if (hreflang) linkEl.hreflang = hreflang;
        document.head.appendChild(linkEl);
      }
      linkEl.href = href;
    };

    // Helper to remove a <link> tag
    const removeLinkTag = (rel: string, hreflang?: string) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) selector += `[hreflang="${hreflang}"]`;
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => el.remove());
    };

    // Helper to set or create a <meta> tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
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

    if (isDraVictoria || isCommonGround || isTalentShowcase) {
      let slug = 'dra-victoria';
      if (isCommonGround) slug = 'common-ground';
      if (isTalentShowcase) slug = 'talent-showcase-hub';

      const isEnglishCaseStudy = isUsDomain || route.startsWith('us-');
      const caseStudyDomain = isEnglishCaseStudy
        ? 'https://us.davidraigoza.online'
        : 'https://www.davidraigoza.online';

      document.documentElement.lang = isEnglishCaseStudy ? 'en' : 'es';

      // 3. Every case-study page gets a self-referencing canonical pointing to its own URL in its own language
      // Never point a page's canonical at the homepage or at the other language.
      setLinkTag('canonical', `${caseStudyDomain}/case-studies/${slug}`);
      removeLinkTag('alternate', 'en-US');
      removeLinkTag('alternate', 'es');
      return;
    }

    if (isUsDomain || route === 'us') {
      // 1. In the ENGLISH homepage <head>, add exactly:
      // <link rel="canonical" href="https://us.davidraigoza.online/" />
      // <link rel="alternate" hreflang="en-US" href="https://us.davidraigoza.online/" />
      // <link rel="alternate" hreflang="es" href="https://www.davidraigoza.online/" />
      document.documentElement.lang = 'en';
      document.title = 'David Raigoza - Digital Products for Professionals';
      const enDesc = 'High-performance digital products, web platforms, and engineering for professionals and businesses.';
      setMetaTag('name', 'description', enDesc);
      setMetaTag('property', 'og:title', 'David Raigoza - Digital Products for Professionals');
      setMetaTag('property', 'og:description', enDesc);

      setLinkTag('canonical', 'https://us.davidraigoza.online/');
      setLinkTag('alternate', 'https://us.davidraigoza.online/', 'en-US');
      setLinkTag('alternate', 'https://www.davidraigoza.online/', 'es');
    } else {
      // 2. In the SPANISH homepage <head>, add exactly:
      // <link rel="canonical" href="https://www.davidraigoza.online/" />
      // <link rel="alternate" hreflang="es" href="https://www.davidraigoza.online/" />
      // <link rel="alternate" hreflang="en-US" href="https://us.davidraigoza.online/" />
      document.documentElement.lang = 'es';
      document.title = 'David Raigoza - Profesionales y Especialistas';
      const esDesc = 'Presencia digital profesional e ingeniería de diseño de producto para profesionales y especialistas.';
      setMetaTag('name', 'description', esDesc);
      setMetaTag('property', 'og:title', 'David Raigoza - Profesionales y Especialistas');
      setMetaTag('property', 'og:description', esDesc);

      setLinkTag('canonical', 'https://www.davidraigoza.online/');
      setLinkTag('alternate', 'https://www.davidraigoza.online/', 'es');
      setLinkTag('alternate', 'https://us.davidraigoza.online/', 'en-US');
    }
  }, [route]);

  return null;
}
