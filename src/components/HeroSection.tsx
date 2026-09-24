import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NegociosHeroVisual from './NegociosHeroVisual';
import HeroBrowserMockup from './HeroBrowserMockup';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const { t } = useLanguage();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const categories = t.hero.rotatingCategories || ['médicos', 'arquitectos', 'consultores', 'marcas'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [categories.length]);

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
            lineHeight: 1.12,
            color: '#121210',
            marginBottom: '1.5rem',
            letterSpacing: '-0.028em',
            textWrap: 'balance',
            maxWidth: '22ch',
          }}
        >
          {t.hero.title}
        </h1>

        {/* Subtle rotating word/category treatment */}
        <div
          id="hero-category-treatment"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: '2.25rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid #121210',
              padding: '0.35rem 0.8rem',
              gap: '0.6rem',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#666660',
                fontWeight: 600,
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {t.hero.categoryLabel} //
            </span>

            <div
              style={{
                position: 'relative',
                minWidth: '120px',
                height: '22px',
                display: 'inline-flex',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${currentCategoryIndex}-${categories[currentCategoryIndex % categories.length]}`}
                  initial={{ opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -7 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'ui-monospace, monospace',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.015em',
                    lineHeight: '1.2',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    whiteSpace: 'nowrap',
                    paddingBottom: '1px',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#2563EB',
                      display: 'inline-block',
                      flexShrink: 0,
                      transform: 'translateY(-0.5px)',
                    }}
                  />
                  <span>{categories[currentCategoryIndex % categories.length]}</span>
                </motion.span>
              </AnimatePresence>
            </div>

            <span
              style={{
                fontSize: '0.65rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#888880',
                borderLeft: '1px solid #E2E2DE',
                paddingLeft: '0.55rem',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              0{(currentCategoryIndex % categories.length) + 1}/04
            </span>
          </div>
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
