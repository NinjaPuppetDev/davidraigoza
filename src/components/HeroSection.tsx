import NegociosHeroVisual from './NegociosHeroVisual';
import HeroBrowserMockup from './HeroBrowserMockup';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="negocios-hero" className="negocios-hero-grid" style={{ padding: '2.5rem 0 4.5rem', position: 'relative' }}>
      {/* Preserved Three.js Generative Visual Field */}
      <NegociosHeroVisual mockupId="hero-browser-mockup" />

      <div
        id="hero-content-block"
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h1
          id="hero-heading"
          style={{
            fontSize: 'clamp(2.35rem, 4.7vw, 3.4rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: '#121210',
            marginBottom: '1.75rem',
            letterSpacing: '-0.028em',
            textWrap: 'balance',
            maxWidth: '22ch',
          }}
        >
          <span style={{ display: 'block' }}>{t.hero.titleLine1}</span>
          <span style={{ display: 'block' }}>{t.hero.titleLine2}</span>
        </h1>

        {/* Bauhaus Editorial Typography Structure */}
        <div
          id="hero-editorial-body"
          style={{
            marginBottom: '2.25rem',
            maxWidth: '46ch',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          <p
            style={{
              fontSize: '1.12rem',
              fontWeight: 500,
              color: '#1A1A18',
              lineHeight: 1.48,
              margin: 0,
              letterSpacing: '-0.01em',
              textWrap: 'pretty',
            }}
          >
            {t.hero.lead}
          </p>

          <p
            style={{
              fontSize: '0.95rem',
              fontWeight: 400,
              color: '#5A5A54',
              lineHeight: 1.6,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            {t.hero.sublead}
          </p>
        </div>

        {/* Economic Clarity: Structured Ledger Tile */}
        <div
          id="hero-pricing-tile"
          style={{
            borderLeft: '2px solid #121210',
            paddingLeft: '1.25rem',
            marginBottom: '2.25rem',
          }}
        >
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#666660',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              marginBottom: '0.25rem',
            }}
          >
            <span style={{ width: '4px', height: '4px', backgroundColor: '#D97706', display: 'inline-block' }} />
            {t.hero.pricingLabel}
          </span>
          <span
            className="bauhaus-num"
            style={{
              fontSize: '1.85rem',
              fontWeight: 600,
              color: '#121210',
              letterSpacing: '-0.02em',
            }}
          >
            {t.hero.price}
          </span>
        </div>

        <div>
          <a
            id="hero-primary-cta"
            href="#contacto"
            className="negocios-btn-mobile-full"
            style={{
              backgroundColor: '#121210',
              color: '#FFFFFF',
              padding: '0.9rem 1.95rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              minHeight: '48px',
              border: '1px solid #121210',
              transition: 'background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            {t.hero.cta} <span>→</span>
          </a>
        </div>
      </div>

      {/* Functional Browser Mockup */}
      <HeroBrowserMockup />
    </section>
  );
}
