import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NegociosHeroVisual from '../../components/NegociosHeroVisual';
import UsHeroBrowserMockup from './UsHeroBrowserMockup';
import { INTERNATIONAL_CONFIG } from '../config';

interface UsHeroSectionProps {
  isVisible: boolean;
}

export default function UsHeroSection({ isVisible }: UsHeroSectionProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const categories = ['consultants', 'architects', 'professionals', 'brands'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [categories.length]);
  return (
    <section id="international-hero" className="negocios-hero-grid" style={{ padding: '2.5rem 0 4.5rem', position: 'relative' }}>
      {/* Preserved Three.js Generative Visual Field */}
      <NegociosHeroVisual mockupId="hero-browser-mockup" />

      <div
        id="us-hero-content-block"
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h1
          id="us-hero-heading"
          style={{
            fontSize: 'clamp(2.35rem, 4.7vw, 3.4rem)',
            fontWeight: 600,
            lineHeight: 1.12,
            color: '#121210',
            marginBottom: '1.25rem',
            letterSpacing: '-0.028em',
            textWrap: 'balance',
            maxWidth: '24ch',
          }}
        >
          We design digital products for professionals and specialists.
        </h1>

        {/* Core Concept */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p
            style={{
              color: '#444440',
              fontSize: '1.02rem',
              lineHeight: 1.58,
              maxWidth: '54ch',
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            David works directly with you to understand your business, clarify your offer, structure your digital presence, design the experience, and build the appropriate digital product.
          </p>
        </div>

        {/* Architectural classification tag - strictly single row on all mobile and desktop viewports */}
        <div
          id="us-hero-category-treatment"
          className="us-hero-tag-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <div
            id="us-hero-category-badge"
            className="us-hero-tag-box"
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid #121210',
              padding: '0.34rem clamp(0.5rem, 2vw, 0.75rem)',
              gap: 'clamp(0.45rem, 1.8vw, 0.65rem)',
              boxSizing: 'border-box',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Label Prefix */}
            <span
              className="us-hero-tag-prefix"
              style={{
                fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#666660',
                fontWeight: 600,
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Tailored for //
            </span>

            {/* Rotating Word Segment */}
            <div
              className="us-hero-tag-word-wrapper"
              style={{
                position: 'relative',
                minWidth: 'clamp(112px, 30vw, 136px)',
                height: '22px',
                display: 'inline-flex',
                alignItems: 'center',
                overflow: 'hidden',
                flexShrink: 0,
                lineHeight: 1,
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
                    fontSize: 'clamp(0.85rem, 2.4vw, 1.02rem)',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.015em',
                    lineHeight: '1.2',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.42rem',
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

            {/* 01/ Tag Index */}
            <span
              className="us-hero-tag-index"
              style={{
                fontSize: 'clamp(0.62rem, 1.8vw, 0.68rem)',
                fontFamily: 'ui-monospace, monospace',
                color: '#888880',
                borderLeft: '1px solid #E2E2DE',
                paddingLeft: 'clamp(0.42rem, 1.5vw, 0.55rem)',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                fontWeight: 500,
                letterSpacing: '0.04em',
              }}
            >
              0{(currentCategoryIndex % categories.length) + 1}/
            </span>
          </div>
        </div>

        {/* Economic Ledger Tile (USD Only) */}
        <div
          id="us-hero-pricing-tile"
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
            <span style={{ width: '4px', height: '4px', backgroundColor: '#2563EB', display: 'inline-block' }} />
            {INTERNATIONAL_CONFIG.pricingLabel}
          </span>
          <span
            className="bauhaus-num"
            style={{
              fontSize: '1.85rem',
              fontWeight: 600,
              color: '#121210',
              letterSpacing: '-0.02em',
              display: 'block',
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

        {/* Action CTAs */}
        <div className="negocios-cta-actions">
          <a
            id="us-hero-primary-cta"
            href={INTERNATIONAL_CONFIG.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="negocios-btn-mobile-full"
            style={{
              backgroundColor: '#121210',
              color: '#FFFFFF',
              padding: '0.9rem 1.85rem',
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
            Schedule a 15-minute discovery call <span>→</span>
          </a>
        </div>
      </div>

      {/* Functional Browser Mockup */}
      <UsHeroBrowserMockup />
    </section>
  );
}
