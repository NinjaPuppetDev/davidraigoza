import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import CookieBanner from './components/CookieBanner';
import NegociosCursor from './components/NegociosCursor';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import EssentialsSection from './components/EssentialsSection';
import JourneySection from './components/JourneySection';
import RespaldoSection from './components/RespaldoSection';
import TransparencySection from './components/TransparencySection';
import CollaborationSection from './components/CollaborationSection';
import CraftSection from './components/CraftSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import PostLaunchSection from './components/PostLaunchSection';
import ModularFeaturesSection from './components/ModularFeaturesSection';
import InvestmentSummarySection from './components/InvestmentSummarySection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import DraVictoriaCaseStudy from './components/DraVictoriaCaseStudy';
import CommonGroundCaseStudy from './components/CommonGroundCaseStudy';
import TalentShowcaseCaseStudy from './components/TalentShowcaseCaseStudy';
import UsApp from './us/UsApp';

function AppContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterIntersecting, setIsFooterIntersecting] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale');
    elements.forEach((el) => observer.observe(el));

    let rafId: number | null = null;

    const checkFooterIntersection = () => {
      const footer = document.getElementById('negocios-footer');
      const action = document.getElementById('floating-whatsapp-action');
      if (!footer || !action) return;

      const footerRect = footer.getBoundingClientRect();
      const actionRect = action.getBoundingClientRect();

      setIsFooterIntersecting(footerRect.top <= actionRect.bottom);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkFooterIntersection);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    checkFooterIntersection();

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <>
      <CookieBanner />
      <div
        id="negocios-page-container"
        className="negocios-page"
        style={{
          backgroundColor: '#F8F8F6',
          color: '#121210',
          minHeight: '100vh',
          fontFamily: 'var(--sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <NegociosCursor />
        <HeaderNav />

        <main
          id="negocios-main"
          className="negocios-main-content"
          style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}
        >
          <HeroSection isVisible={isVisible} />
          <ProfileSection />
          <EssentialsSection />
          <JourneySection />
          <RespaldoSection />
          <TransparencySection />
          <CollaborationSection />
          <CraftSection />
          <CaseStudiesSection />
          <PostLaunchSection />
          <ModularFeaturesSection />
          <InvestmentSummarySection />
          <ProcessSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingWhatsApp isFooterIntersecting={isFooterIntersecting} />
      </div>
    </>
  );
}

type AppRoute =
  | 'main'
  | 'us'
  | 'case-study-dra-victoria'
  | 'case-study-commonground'
  | 'case-study-talent-showcase'
  | 'us-case-study-dra-victoria'
  | 'us-case-study-commonground'
  | 'us-case-study-talent-showcase';

function parseRoute(pathname: string): AppRoute {
  // Validación directa del subdominio de EE. UU.
  if (typeof window !== 'undefined' && window.location.hostname.toLowerCase() === 'us.davidraigoza.online') {
    const normalizedPath = (pathname || '/').toLowerCase().replace(/\/+$/, '') || '/';
    if (normalizedPath === '/case-studies/dra-victoria' || normalizedPath.startsWith('/case-studies/dra-victoria/')) {
      return 'us-case-study-dra-victoria';
    }
    if (normalizedPath === '/case-studies/common-ground' || normalizedPath.startsWith('/case-studies/common-ground/')) {
      return 'us-case-study-commonground';
    }
    if (
      normalizedPath === '/case-studies/talent-showcase-hub' ||
      normalizedPath.startsWith('/case-studies/talent-showcase-hub/') ||
      normalizedPath === '/case-studies/talent-showcase' ||
      normalizedPath.startsWith('/case-studies/talent-showcase/')
    ) {
      return 'us-case-study-talent-showcase';
    }
    return 'us';
  }

  const normalized = (pathname || '/').toLowerCase().replace(/\/+$/, '') || '/';

  // Specific /us case study routes (strictly in English, no translation toggle)
  if (normalized === '/us/case-studies/dra-victoria' || normalized.startsWith('/us/case-studies/dra-victoria/')) {
    return 'us-case-study-dra-victoria';
  }
  if (normalized === '/us/case-studies/common-ground' || normalized.startsWith('/us/case-studies/common-ground/')) {
    return 'us-case-study-commonground';
  }
  if (
    normalized === '/us/case-studies/talent-showcase-hub' ||
    normalized.startsWith('/us/case-studies/talent-showcase-hub/') ||
    normalized === '/us/case-studies/talent-showcase' ||
    normalized.startsWith('/us/case-studies/talent-showcase/')
  ) {
    return 'us-case-study-talent-showcase';
  }

  if (normalized === '/case-studies/dra-victoria' || normalized.startsWith('/case-studies/dra-victoria/')) {
    return 'case-study-dra-victoria';
  }
  if (normalized === '/case-studies/common-ground' || normalized.startsWith('/case-studies/common-ground/')) {
    return 'case-study-commonground';
  }
  if (
    normalized === '/case-studies/talent-showcase-hub' ||
    normalized.startsWith('/case-studies/talent-showcase-hub/') ||
    normalized === '/case-studies/talent-showcase' ||
    normalized.startsWith('/case-studies/talent-showcase/') ||
    normalized === '/work/talent-showcase-hub' ||
    normalized.startsWith('/work/talent-showcase-hub/')
  ) {
    return 'case-study-talent-showcase';
  }
  if (normalized === '/us' || normalized.startsWith('/us/')) {
    return 'us';
  }
  return 'main';
}

function getCurrentRoute(): AppRoute {
  if (typeof window === 'undefined') return 'main';
  return parseRoute(window.location.pathname);
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => getCurrentRoute());

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener('popstate', handleLocationChange);

    const handleLinkClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      if (target.target && target.target !== '_self') return;
      if (target.hasAttribute('download')) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) {
        return;
      }

      let destination: URL;
      try {
        destination = new URL(href, window.location.origin);
      } catch {
        return;
      }

      if (destination.origin !== window.location.origin) return;

      e.preventDefault();

      const nextRoute = parseRoute(destination.pathname);
      const nextHash = destination.hash ? destination.hash.substring(1) : '';
      const fullPath = destination.pathname + destination.search + destination.hash;

      if (nextRoute !== route) {
        window.history.pushState(null, '', fullPath);
        setRoute(nextRoute);
        if (nextHash) {
          const scrollToHash = (retries = 5) => {
            const el = document.getElementById(nextHash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else if (retries > 0) {
              setTimeout(() => scrollToHash(retries - 1), 60);
            }
          };
          setTimeout(() => scrollToHash(), 60);
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        if (fullPath !== window.location.pathname + window.location.search + window.location.hash) {
          window.history.pushState(null, '', fullPath);
        }
        if (nextHash) {
          const el = document.getElementById(nextHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, [route]);

  if (route === 'us') {
    return (
      <LanguageProvider forcedLanguage="en">
        <UsApp />
      </LanguageProvider>
    );
  }

  if (route === 'us-case-study-dra-victoria') {
    return (
      <LanguageProvider forcedLanguage="en">
        <DraVictoriaCaseStudy isUs={true} />
      </LanguageProvider>
    );
  }

  if (route === 'us-case-study-commonground') {
    return (
      <LanguageProvider forcedLanguage="en">
        <CommonGroundCaseStudy isUs={true} />
      </LanguageProvider>
    );
  }

  if (route === 'us-case-study-talent-showcase') {
    return (
      <LanguageProvider forcedLanguage="en">
        <TalentShowcaseCaseStudy isUs={true} />
      </LanguageProvider>
    );
  }

  if (route === 'case-study-dra-victoria') {
    return (
      <LanguageProvider>
        <DraVictoriaCaseStudy />
      </LanguageProvider>
    );
  }

  if (route === 'case-study-commonground') {
    return (
      <LanguageProvider>
        <CommonGroundCaseStudy />
      </LanguageProvider>
    );
  }

  if (route === 'case-study-talent-showcase') {
    return (
      <LanguageProvider>
        <TalentShowcaseCaseStudy />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}