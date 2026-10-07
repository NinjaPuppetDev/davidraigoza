import React, { useState, useEffect, useRef } from 'react';

/**
 * =========================================================================
 * DIGITAL BUSINESS CARD CONFIGURATION
 * Easily change the destinations for the two actions here.
 * =========================================================================
 */
export const CARD_CONFIG = {
  // Primary contact destination ("HABLEMOS")
  talkToMeUrl: 'https://wa.me/573007747638',

  // Website destination ("VISITA MI SITIO WEB")
  websiteUrl: 'https://davidraigoza.online',
};

// Procedural SVG paper texture: dual-octave micro-fiber grain + subtle organic pulp tooth
const PAPER_TEXTURE_DATA_URI =
  "data:image/svg+xml;utf8,<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><filter id='paperPulp'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 0.15  0 0 0 0 0.12  0 0 0 0 0.08  0 0 0 0.07 0'/></filter><rect width='100%' height='100%' filter='url(%23paperPulp)'/></svg>";

export default function DigitalBusinessCard() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [forcePreview, setForcePreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cardRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Settling trigger on initial load
    const timer = setTimeout(() => setMounted(true), 40);
    const originalTitle = document.title;
    document.title = 'David Raigoza - Tarjeta Digital';

    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Desktop: width > 640px and height > 520px
      const desktopDetected = width > 640 && height > 520;
      setIsDesktop(desktopDetected);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    // High-performance continuous animation loop: runs at native refresh rate (60/120fps)
    // Mathematical exponential smoothing (lerp) eliminates sensor jitter and lag
    const updateMotion = () => {
      // 0.18 lerp factor: ultra-snappy and responsive, zero lag, smooth settling
      const factor = 0.18;
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * factor;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * factor;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `rotateX(${currentTilt.current.x.toFixed(2)}deg) rotateY(${currentTilt.current.y.toFixed(2)}deg)`;
      }

      if (cardRef.current) {
        const lightX = 50 + currentTilt.current.y * 2.2;
        const lightY = 30 - currentTilt.current.x * 2.2;
        cardRef.current.style.setProperty('--light-x', `${lightX.toFixed(1)}%`);
        cardRef.current.style.setProperty('--light-y', `${lightY.toFixed(1)}%`);
      }

      rafId.current = requestAnimationFrame(updateMotion);
    };

    rafId.current = requestAnimationFrame(updateMotion);

    // Device orientation motion when rotating the cellphone
    let isListening = false;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      // beta: front/back tilt (natural holding angle ~45deg)
      // gamma: left/right tilt (-90 to 90deg)
      const deltaBeta = e.beta - 45;
      targetTilt.current = {
        x: Math.max(-16, Math.min(16, -deltaBeta * 0.6)),
        y: Math.max(-16, Math.min(16, e.gamma * 0.6)),
      };
    };

    const startOrientation = () => {
      if (isListening) return;
      isListening = true;
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    };

    const DeviceOrientationWithPerm = window.DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<'granted' | 'denied'>;
    };

    if (DeviceOrientationWithPerm && typeof DeviceOrientationWithPerm.requestPermission === 'function') {
      // iOS 13+ requires user gesture to enable motion sensors
      const enableOnGesture = async () => {
        try {
          const res = await DeviceOrientationWithPerm.requestPermission!();
          if (res === 'granted') {
            startOrientation();
          }
        } catch {
          // Gracefully fallback
        }
        window.removeEventListener('touchstart', enableOnGesture);
        window.removeEventListener('pointerdown', enableOnGesture);
      };

      window.addEventListener('touchstart', enableOnGesture, { once: true, passive: true });
      window.addEventListener('pointerdown', enableOnGesture, { once: true, passive: true });
    } else {
      // Android / Chrome / modern mobile browsers
      startOrientation();
    }

    return () => {
      clearTimeout(timer);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      document.title = originalTitle;
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // Subtle interactive pointer move for desktop preview or touch dragging
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2; // -1 to 1
    const normY = (y / rect.height - 0.5) * 2; // -1 to 1

    targetTilt.current = {
      x: Math.max(-14, Math.min(14, -normY * 11)),
      y: Math.max(-14, Math.min(14, normX * 11)),
    };
  };

  const handlePointerLeave = () => {
    targetTilt.current = { x: 0, y: 0 };
  };

  const handleTalkToMe = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(CARD_CONFIG.talkToMeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCheckWebsite = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(CARD_CONFIG.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="paper-environment" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <style>{`
        /* ====================================================
           PAPER MORPHISM SYSTEM
           Tactile physical paper brought to life
           ==================================================== */

        .paper-environment {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          /* Warm physical tabletop / surface background */
          background-color: #E6E2D8;
          background-image: 
            radial-gradient(circle at 50% 20%, #F2EFE7 0%, #D8D3C5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          user-select: none;
          -webkit-user-select: none;
          perspective: 1200px;
          box-sizing: border-box;
        }

        /* Desktop Notice State */
        .card-desktop-container {
          text-align: center;
          padding: 2.75rem 2.25rem;
          max-width: 380px;
          background: #FAF8F4;
          background-image: url("${PAPER_TEXTURE_DATA_URI}");
          border-radius: 4px;
          border: 1px solid rgba(45, 38, 30, 0.12);
          box-shadow: 
            0 1px 2px rgba(35, 30, 25, 0.05),
            0 8px 24px rgba(35, 30, 25, 0.08);
          position: relative;
        }

        .card-desktop-container::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(40, 35, 28, 0.06);
          border-radius: 2px;
          pointer-events: none;
        }

        .card-desktop-msg {
          font-size: 0.98rem;
          color: #383630;
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
          letter-spacing: -0.01em;
          font-weight: 480;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .card-desktop-preview-link {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #55524A;
          background: #F4F1EA;
          border: 1px solid rgba(45, 38, 30, 0.22);
          padding: 0.5rem 1.1rem;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .card-desktop-preview-link:hover {
          color: #1A1916;
          border-color: rgba(45, 38, 30, 0.4);
          background: #FFFFFF;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        /* ----------------------------------------------------
           PHYSICAL PAPER STOCK CONTAINER
           Simulating heavy 420gsm warm cotton business card
           ---------------------------------------------------- */
        .paper-card-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          will-change: transform;
        }

        /* Realistic bottom corner lift shadow underneath paper */
        .paper-card-wrapper::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 5%;
          right: 5%;
          height: 18px;
          background: rgba(28, 22, 16, 0.14);
          filter: blur(8px);
          border-radius: 50%;
          transform: translateZ(-20px);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .paper-card {
          position: relative;
          /* Warm archival cotton paper color */
          background-color: #FAF8F4;
          background-image: 
            /* Dynamic specular light sheen */
            radial-gradient(circle at var(--light-x, 35%) var(--light-y, 25%), rgba(255, 255, 255, 0.65) 0%, rgba(250, 248, 244, 0.1) 60%),
            /* Warm paper gradient from top to bottom */
            linear-gradient(175deg, #FCFAF6 0%, #F6F3EB 100%),
            /* Tangible tactile paper fiber grain */
            url("${PAPER_TEXTURE_DATA_URI}");
          border-radius: 4px;
          box-sizing: border-box;
          
          /* Physical cardstock edge: beveled razor highlight on top/left, soft shadow on bottom/right */
          box-shadow:
            /* Top & left micro-bevel highlight */
            inset 1px 1px 0px rgba(255, 255, 255, 0.95),
            /* Bottom & right paper cut edge */
            inset -1px -1px 0px rgba(45, 36, 26, 0.1),
            /* Tight direct contact shadow */
            0 1px 2px rgba(25, 20, 15, 0.08),
            /* Close surface shadow */
            0 4px 10px rgba(25, 20, 15, 0.07),
            /* Mid ambient diffused card shadow */
            0 12px 28px -4px rgba(25, 20, 15, 0.09),
            /* Deep soft lift shadow */
            0 24px 44px -8px rgba(25, 20, 15, 0.06);

          border: 1px solid rgba(48, 40, 30, 0.09);
          opacity: 0;
          transform: translateY(14px) scale(0.985);
          overflow: hidden;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Initial settle physics: card dropping gently onto the surface */
        .paper-card.is-settled {
          opacity: 1;
          transform: translateY(0) scale(1);
          animation: paperSettleDown 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes paperSettleDown {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
          }
          60% {
            opacity: 1;
            transform: translateY(-1.5px) scale(1.002);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ----------------------------------------------------
           BLIND DEBOSS PLATE MARK (Intaglio indentation frame)
           Authentic tactile indentation pressed into the card
           ---------------------------------------------------- */
        .paper-deboss-frame {
          position: absolute;
          inset: 10px;
          border-radius: 2px;
          pointer-events: none;
          /* Sunk deboss edge: subtle dark shadow at top, crisp white highlight at bottom */
          border: 1px solid rgba(40, 32, 22, 0.08);
          box-shadow:
            inset 0 1px 1px rgba(35, 28, 20, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.85);
        }

        /* Subtle blind debossed crest mark at top */
        .paper-blind-stamp {
          width: 14px;
          height: 14px;
          margin: 0 auto 1.25rem auto;
          border: 1.5px solid rgba(45, 38, 28, 0.22);
          border-radius: 1px;
          transform: rotate(45deg);
          box-shadow: 
            inset 0 1px 1px rgba(35, 28, 20, 0.1),
            0 1px 0 rgba(255, 255, 255, 0.9);
          position: relative;
        }

        .paper-blind-stamp::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: rgba(45, 38, 28, 0.08);
          border-radius: 0.5px;
        }

        /* ----------------------------------------------------
           LETTERPRESS TYPOGRAPHY
           Warm oil ink physically pressed into cotton paper
           ---------------------------------------------------- */

        .letterpress-title {
          font-size: 1.38rem;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          color: #1A1916;
          margin: 0 0 0.45rem 0;
          line-height: 1.2;
          /* Letterpress ink indentation highlight */
          text-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.9),
            0 -0.5px 0 rgba(0, 0, 0, 0.15);
        }

        .letterpress-sub {
          font-size: clamp(0.66rem, 2.6vw, 0.74rem);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #635F56;
          margin: 0 auto;
          line-height: 1.45;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.75);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .letterpress-line {
          white-space: nowrap;
          display: block;
        }

        .paper-crease-rule {
          width: 36px;
          height: 1px;
          background: rgba(45, 38, 28, 0.15);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
          margin: 1.75rem auto 1.85rem auto;
        }

        .letterpress-pitch {
          font-size: 1.05rem;
          font-weight: 420;
          color: #2E2D28;
          line-height: 1.5;
          margin: 0 0 2.4rem 0;
          text-wrap: balance;
          max-width: 255px;
          letter-spacing: -0.015em;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.85);
        }

        /* ----------------------------------------------------
           PORTRAIT COMPOSITION
           ---------------------------------------------------- */
        .portrait-layout {
          width: 100%;
          max-width: 335px;
          padding: 2.5rem 1.85rem 2.25rem 1.85rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .portrait-actions {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        /* ----------------------------------------------------
           LANDSCAPE COMPOSITION
           ---------------------------------------------------- */
        .landscape-layout {
          width: 100%;
          max-width: 590px;
          padding: 2rem 2.4rem;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          align-items: center;
          gap: 2rem;
          text-align: left;
          position: relative;
          z-index: 2;
        }

        .landscape-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .landscape-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          justify-content: center;
          padding-left: 1.5rem;
          border-left: 1px solid rgba(45, 38, 28, 0.12);
          box-shadow: -1px 0 0 rgba(255, 255, 255, 0.7);
        }

        .landscape-layout .letterpress-sub {
          align-items: flex-start;
          margin: 0 0 1.25rem 0;
        }

        /* ----------------------------------------------------
           TACTILE PAPER BUTTONS
           Physical stamped ink chip & debossed cardstock
           ---------------------------------------------------- */
        .paper-action-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 48px;
          padding: 0.75rem 1.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 3px;
          text-decoration: none;
          cursor: pointer;
          outline: none;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.12s ease, background-color 0.15s ease;
        }

        /* PRIMARY: Heavy black letterpress stamp block */
        .paper-btn-stamp {
          background-color: #1A1916;
          color: #FAF8F4;
          border: 1px solid #141311;
          /* Sunk ink press shadow with crisp top highlight */
          box-shadow: 
            0 1.5px 3px rgba(18, 16, 13, 0.22),
            0 4px 8px rgba(18, 16, 13, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            inset 0 -1.5px 0 rgba(0, 0, 0, 0.35);
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.6);
        }

        .paper-btn-stamp:hover {
          background-color: #272521;
          box-shadow: 
            0 2px 5px rgba(18, 16, 13, 0.26),
            0 6px 12px rgba(18, 16, 13, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.26);
        }

        .paper-btn-stamp:active {
          transform: translateY(2px) scale(0.99);
          background-color: #0F0E0C;
          /* Deep physical depression into paper stock */
          box-shadow: 
            0 0.5px 1px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(0, 0, 0, 0.6);
        }

        /* SECONDARY: Blind-embossed thick cardstock chip */
        .paper-btn-chip {
          background-color: #F5F2EB;
          background-image: url("${PAPER_TEXTURE_DATA_URI}");
          color: #1C1B17;
          border: 1px solid rgba(48, 40, 28, 0.24);
          box-shadow: 
            0 1px 2px rgba(35, 28, 20, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(40, 32, 22, 0.08);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .paper-btn-chip:hover {
          background-color: #FCFAF6;
          border-color: rgba(48, 40, 28, 0.38);
          box-shadow: 
            0 2px 4px rgba(35, 28, 20, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .paper-btn-chip:active {
          transform: translateY(2px) scale(0.99);
          background-color: #ECE8DD;
          box-shadow: 
            inset 0 1.5px 3px rgba(35, 28, 20, 0.15),
            0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* ----------------------------------------------------
           RESPONSIVE ORIENTATIONS
           ---------------------------------------------------- */
        @media (orientation: landscape) and (max-height: 520px) {
          .portrait-layout {
            display: none !important;
          }
          .landscape-layout {
            display: grid !important;
          }
        }

        @media (orientation: portrait) {
          .portrait-layout {
            display: flex !important;
          }
          .landscape-layout {
            display: none !important;
          }
        }
      `}</style>

      {isDesktop && !forcePreview ? (
        /* Mobile-only philosophy: minimal message on desktop */
        <div className="card-desktop-container">
          <p className="card-desktop-msg">Esta tarjeta está diseñada para abrirse en tu teléfono.</p>
          <button
            type="button"
            onClick={() => setForcePreview(true)}
            className="card-desktop-preview-link"
          >
            Ver tarjeta
          </button>
        </div>
      ) : (
        /* Interactive Physical Paper Object */
        <div
          ref={wrapperRef}
          className="paper-card-wrapper"
        >
          <main
            ref={cardRef}
            className={`paper-card ${mounted ? 'is-settled' : ''}`}
            role="region"
            aria-label="David Raigoza - Tarjeta de Presentación Digital"
          >
            {/* Blind Debossed Intaglio Boundary Frame */}
            <div className="paper-deboss-frame" aria-hidden="true" />

            {/* Portrait Layout */}
            <div className="portrait-layout">
              <div className="paper-blind-stamp" aria-hidden="true" />

              <header>
                <h1 className="letterpress-title">David Raigoza</h1>
                <div className="letterpress-sub">
                  <span className="letterpress-line">Ingeniero de Diseño de Producto</span>
                  <span className="letterpress-line">Magíster en Artes</span>
                </div>
              </header>

              <div className="paper-crease-rule" aria-hidden="true" />

              <p className="letterpress-pitch">
                Construyo aplicaciones para que te enfoques en tu negocio.
              </p>

              <nav className="portrait-actions" aria-label="Acciones de la tarjeta">
                <button
                  type="button"
                  className="paper-action-btn paper-btn-stamp"
                  onClick={handleTalkToMe}
                >
                  Hablemos
                </button>
                <button
                  type="button"
                  className="paper-action-btn paper-btn-chip"
                  onClick={handleCheckWebsite}
                >
                  Visita mi sitio web
                </button>
              </nav>
            </div>

            {/* Landscape Layout */}
            <div className="landscape-layout" style={{ display: 'none' }}>
              <div className="landscape-content">
                <div className="paper-blind-stamp" style={{ margin: '0 0 0.85rem 0' }} aria-hidden="true" />
                <h1 className="letterpress-title" style={{ fontSize: '1.25rem' }}>David Raigoza</h1>
                <div className="letterpress-sub">
                  <span className="letterpress-line">Ingeniero de Diseño de Producto</span>
                  <span className="letterpress-line">Magíster en Artes</span>
                </div>
                <p className="letterpress-pitch" style={{ fontSize: '0.94rem', margin: 0, maxWidth: '100%' }}>
                  Construyo aplicaciones para que te enfoques en tu negocio.
                </p>
              </div>

              <nav className="landscape-actions" aria-label="Acciones de la tarjeta">
                <button
                  type="button"
                  className="paper-action-btn paper-btn-stamp"
                  onClick={handleTalkToMe}
                >
                  Hablemos
                </button>
                <button
                  type="button"
                  className="paper-action-btn paper-btn-chip"
                  onClick={handleCheckWebsite}
                >
                  Visita mi sitio web
                </button>
              </nav>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
