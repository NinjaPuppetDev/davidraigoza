import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NegociosHeroVisual from './NegociosHeroVisual';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const { t } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = t.hero.rotatingWords || [
    'médicos',
    'arquitectos',
    'profesionales',
    'marcas',
    'especialistas',
  ];
  const titleLine1 = t.hero.titleLine1 || 'Diseñamos productos digitales';
  const preposition = t.hero.preposition || 'para';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const currentWord = rotatingWords[currentWordIndex % rotatingWords.length];

  return (
    <section
      id="negocios-hero"
      className="negocios-hero-grid"
      style={{
        padding: '3.5rem 0 clamp(6rem, 10vw, 8.5rem)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '480px',
      }}
    >
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
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          id="hero-heading"
          style={{
            fontSize: 'clamp(2.35rem, 4.8vw, 3.85rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            color: '#121210',
            marginBottom: '2.25rem',
            letterSpacing: '-0.038em',
            maxWidth: '100%',
            textAlign: 'center',
          }}
        >
          <span className="hero-heading-line-1" style={{ fontWeight: 800 }}>{titleLine1}</span>{' '}
          <span className="hero-heading-line-2">
            <span className="hero-static-preposition" style={{ fontWeight: 800 }}>{preposition}&nbsp;</span>
            <span className="hero-rotating-word-container">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'inline-block',
                    textAlign: 'left',
                    color: '#121210',
                    fontWeight: 800,
                  }}
                >
                  {currentWord}.
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </h1>

        {/* Economic Clarity: Structured Ledger Tile */}
        <div
          id="hero-pricing-tile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '2.25rem',
            padding: '0 1rem',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#666660',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              marginBottom: '0.35rem',
            }}
          >
            <span style={{ width: '5px', height: '5px', backgroundColor: '#D97706', display: 'inline-block' }} />
            {t.hero.pricingLabel}
          </span>
          <span
            className="bauhaus-num"
            style={{
              fontSize: '1.95rem',
              fontWeight: 600,
              color: '#121210',
              letterSpacing: '-0.02em',
            }}
          >
            {t.hero.price}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <a
            id="hero-primary-cta"
            href="#contacto"
            className="negocios-btn-mobile-full"
            style={{
              backgroundColor: '#121210',
              color: '#FFFFFF',
              padding: '0.9rem 2.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
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

      {/* Three.js Generative Field Anchor */}
      <div
        id="hero-browser-mockup"
        className="hero-threejs-stage"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(640px, 90vw)',
          height: '420px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </section>
  );
}
