import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NegociosHeroVisual from '../../components/NegociosHeroVisual';
import { INTERNATIONAL_CONFIG } from '../config';

interface UsHeroSectionProps {
  isVisible: boolean;
}

export default function UsHeroSection({ isVisible }: UsHeroSectionProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const rotatingWords = [
    'consultants',
    'architects',
    'professionals',
    'brands',
    'specialists',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const currentWord = rotatingWords[currentWordIndex % rotatingWords.length];

  return (
    <section
      id="international-hero"
      className="negocios-hero-grid"
      style={{
        padding: '2rem 0 3.5rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'visible',
      }}
    >
      {/* Preserved Three.js Generative Visual Field */}
      <NegociosHeroVisual mockupId="hero-browser-mockup" />

      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          id="us-hero-content-block"
          style={{
            position: 'relative',
            zIndex: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            maxWidth: '1080px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            id="us-hero-heading"
            style={{
              fontSize: 'clamp(2.65rem, 5.4vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#121210',
              marginBottom: '2.25rem',
              letterSpacing: '-0.042em',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            <span className="hero-heading-line-1" style={{ fontWeight: 900 }}>We design digital products</span>
            <span className="hero-heading-line-2">
              <span className="hero-static-preposition" style={{ fontWeight: 900 }}>for</span>
              <span
                className="hero-rotating-word-container"
                style={{
                  fontSize: '0.62em',
                  fontWeight: 400,
                  padding: '0.13em 0.5em 0.17em 0.42em',
                  minWidth: '12ch',
                }}
              >
                <span className="hero-pill-indicator-dot" aria-hidden="true" />
                <span className="hero-pill-word-slot">
                  {rotatingWords.map((word) => (
                    <span
                      key={`sizer-${word}`}
                      aria-hidden="true"
                      className="hero-pill-word-sizer"
                      style={{ fontWeight: 400 }}
                    >
                      {word}.
                    </span>
                  ))}
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 5, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.985 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="hero-pill-word-text"
                      style={{ fontWeight: 400, color: '#FFFFFF' }}
                    >
                      {currentWord}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </span>
          </h1>

          {/* Economic Ledger Tile (USD Only, Centered) */}
          <div
            id="us-hero-pricing-tile"
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
              <span style={{ width: '5px', height: '5px', backgroundColor: '#2563EB', display: 'inline-block' }} />
              {INTERNATIONAL_CONFIG.pricingLabel}
            </span>
            <span
              className="bauhaus-num"
              style={{
                fontSize: 'clamp(1.35rem, 2.2vw, 1.6rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                color: '#121210',
                letterSpacing: '-0.02em',
              }}
            >
              From {INTERNATIONAL_CONFIG.startingPrice}
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                color: '#666660',
                fontFamily: 'ui-monospace, monospace',
                display: 'block',
                marginTop: '0.2rem',
              }}
            >
              {INTERNATIONAL_CONFIG.pricingSubtext}
            </span>
          </div>

          {/* Action CTAs (Centered) */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <a
              id="us-hero-primary-cta"
              href={INTERNATIONAL_CONFIG.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#262624';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#121210';
              }}
            >
              Schedule a discovery call <span>→</span>
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
      </div>
    </section>
  );
}
