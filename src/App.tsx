import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import IntroOverlay from './components/IntroOverlay';
import CookieBanner from './components/CookieBanner';
import NegociosCursor from './components/NegociosCursor';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import EssentialsSection from './components/EssentialsSection';
import JourneySection from './components/JourneySection';
import RespaldoSection from './components/RespaldoSection';
import TransparencySection from './components/TransparencySection';
import CollaborationSection from './components/CollaborationSection';
import CraftSection from './components/CraftSection';
import PostLaunchSection from './components/PostLaunchSection';
import ModularFeaturesSection from './components/ModularFeaturesSection';
import InvestmentSummarySection from './components/InvestmentSummarySection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function AppContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
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

      // The WhatsApp icon changes to white when it enters the footer area
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
      <IntroOverlay onComplete={() => setIsIntroComplete(true)} />
      <NegociosCursor />
      <CookieBanner isIntroComplete={isIntroComplete} />
      <HeaderNav />

      <main
        id="negocios-main"
        className="negocios-main-content"
        style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}
      >
        <HeroSection isVisible={isVisible} />
        <EssentialsSection />
        <JourneySection />
        <RespaldoSection />
        <TransparencySection />
        <CollaborationSection />
        <CraftSection />
        <PostLaunchSection />
        <ModularFeaturesSection />
        <InvestmentSummarySection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp isFooterIntersecting={isFooterIntersecting} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

