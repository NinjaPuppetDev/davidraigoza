import { useEffect, useState } from 'react';
import UsCookieBanner from './components/UsCookieBanner';
import NegociosCursor from '../components/NegociosCursor';
import UsHeaderNav from './components/UsHeaderNav';
import UsHeroSection from './components/UsHeroSection';
import UsProfileSection from './components/UsProfileSection';
import UsEssentialsSection from './components/UsEssentialsSection';
import UsJourneySection from './components/UsJourneySection';
import UsExperienceSection from './components/UsExperienceSection';
import UsTransparencySection from './components/UsTransparencySection';
import UsCollaborationSection from './components/UsCollaborationSection';
import UsCraftSection from './components/UsCraftSection';
import UsCaseStudiesSection from './components/UsCaseStudiesSection';
import UsModularSection from './components/UsModularSection';
import UsProcessSection from './components/UsProcessSection';
import UsContactSection from './components/UsContactSection';
import UsFooter from './components/UsFooter';

export default function UsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
      document.title = 'David Raigoza - Digital Products for Professionals';
    }

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <UsCookieBanner />
      <div
        id="us-page-container"
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
        <UsHeaderNav />

        <main
          id="us-main"
          className="negocios-main-content"
          style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}
        >
          <UsHeroSection isVisible={isVisible} />
          <UsProfileSection />
          <UsEssentialsSection />
          <UsJourneySection />
          <UsExperienceSection />
          <UsTransparencySection />
          <UsCollaborationSection />
          <UsCraftSection />
          <UsCaseStudiesSection />
          <UsModularSection />
          <UsProcessSection />
          <UsContactSection />
        </main>

        <UsFooter />
      </div>
    </>
  );
}
