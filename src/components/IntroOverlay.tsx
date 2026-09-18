import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface IntroOverlayProps {
  onComplete?: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const { t } = useLanguage();
  const io = t.introOverlay;

  const [phase, setPhase] = useState<'entering' | 'active' | 'exiting' | 'removed'>('entering');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase('removed');
      onComplete?.();
      return;
    }

    // Lock body scroll while overlay is active
    document.body.style.overflow = 'hidden';

    // Phase 1: enter immediately
    const enterTimer = setTimeout(() => {
      setPhase('active');
    }, 40);

    // Progress bar animation
    const startTime = Date.now();
    const duration = 1400; // 1.4s progress fill

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(progressInterval);
      }
    }, 25);

    // Auto-transition to exit after progress completes
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 1600);

    // Complete and remove from DOM
    const removeTimer = setTimeout(() => {
      setPhase('removed');
      document.body.style.overflow = '';
      onComplete?.();
    }, 2200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const skipIntro = () => {
    if (phase === 'removed' || phase === 'exiting') return;
    setPhase('exiting');
    setTimeout(() => {
      setPhase('removed');
      document.body.style.overflow = '';
      onComplete?.();
    }, 450);
  };

  if (phase === 'removed') {
    return null;
  }

  const isExiting = phase === 'exiting';
  const isActive = phase === 'active' || phase === 'exiting';

  return (
    <div
      id="negocios-intro-overlay"
      role="dialog"
      aria-label={io.ariaLabel}
      aria-modal="true"
      onClick={skipIntro}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F6',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
        userSelect: 'none',
      }}
    >
      {/* Background architectural grid accents */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(#E2E2DE 1px, transparent 1px), radial-gradient(#E2E2DE 1px, #F8F8F6 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative framing corners */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '2rem',
          pointerEvents: 'none',
          border: '1px solid rgba(226, 226, 222, 0.6)',
        }}
      >
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '12px', height: '12px', borderTop: '2px solid #121210', borderLeft: '2px solid #121210' }} />
        <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '12px', height: '12px', borderTop: '2px solid #121210', borderRight: '2px solid #121210' }} />
        <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '12px', height: '12px', borderBottom: '2px solid #121210', borderLeft: '2px solid #121210' }} />
        <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', borderBottom: '2px solid #121210', borderRight: '2px solid #121210' }} />
      </div>

      {/* Main emblem and typography block */}
      <div
        id="intro-center-badge"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '380px',
          padding: '2.5rem 1.5rem',
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Halo circle framing logo */}
        <div
          style={{
            position: 'relative',
            width: '124px',
            height: '124px',
            display: 'grid',
            placeItems: 'center',
            marginBottom: '1.75rem',
          }}
        >
          {/* Subtle concentric orbit ring */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              border: '1px dashed #D4D4D0',
              opacity: 0.85,
              animation: 'spinOrbit 28s linear infinite',
            }}
          />

          {/* Ambient color reflection */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(254, 83, 0, 0.12) 0%, rgba(10, 107, 181, 0.08) 60%, transparent 80%)',
              filter: 'blur(16px)',
              pointerEvents: 'none',
            }}
          />

          {/* The Official Logo */}
          <img
            src="/logo/logo.svg"
            alt="David Raigoza Logo"
            width="112"
            height="112"
            style={{
              position: 'relative',
              width: '112px',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 10px 24px rgba(18, 18, 16, 0.14))',
              transform: isActive ? 'scale(1)' : 'scale(0.88)',
              transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* Brand Name & Headline */}
        <h2
          id="intro-brand-title"
          style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#121210',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.2,
          }}
        >
          {io.title}
        </h2>

        {/* Descriptor Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#555550',
            backgroundColor: '#FFFFFF',
            padding: '0.28rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid #E2E2DE',
            marginBottom: '1.75rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#FE5300',
              display: 'inline-block',
            }}
          />
          {io.subtitle}
        </div>

        {/* Elegant hairline loading track */}
        <div
          style={{
            width: '180px',
            height: '2px',
            backgroundColor: '#E2E2DE',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '0.75rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #121210 0%, #FE5300 100%)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        {/* Tabular counter */}
        <div
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.68rem',
            color: '#888880',
            letterSpacing: '0.04em',
          }}
        >
          {progress < 100 ? `${progress}%` : io.ready}
        </div>
      </div>

      {/* Floating skip button */}
      <button
        type="button"
        id="intro-skip-button"
        onClick={(e) => {
          e.stopPropagation();
          skipIntro();
        }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          fontFamily: 'ui-monospace, monospace',
          fontSize: '0.72rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#666660',
          background: 'rgba(255, 255, 255, 0.85)',
          border: '1px solid #E2E2DE',
          padding: '0.4rem 0.95rem',
          borderRadius: '999px',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#121210';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.borderColor = '#121210';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
          e.currentTarget.style.color = '#666660';
          e.currentTarget.style.borderColor = '#E2E2DE';
        }}
      >
        {io.skip} <span style={{ opacity: 0.6, marginLeft: '4px' }}>[Esc]</span>
      </button>

      {/* Keyframe animation for subtle ring orbit */}
      <style>{`
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
