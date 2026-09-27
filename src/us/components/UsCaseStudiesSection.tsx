import { useRef } from 'react';

export default function UsCaseStudiesSection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;
    const scrollAmount = Math.min(galleryRef.current.clientWidth * 0.85, 540);
    galleryRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Modular, future-proof data array for infinite horizontal expansion
  const projects = [
    {
      id: 'us-case-study-dra-victoria',
      number: '[ 01 ]',
      client: 'Dra. Victoria (Colombia)',
      tag: '[ LOCAL EXECUTION // LANDING & BOOKING ]',
      description: 'From paper to interface in record time. Digital system with optimized bookings and medical conversion architecture.',
      action: '[ VIEW CASE STUDY // DRA. VICTORIA ]',
      liveAction: '[ ↗ VIEW LIVE SITE ]',
      liveUrl: 'https://dra-victoria-mockup.vercel.app/',
      url: '/us/case-studies/dra-victoria',
      assetSrc: '/dra-victoria/hero-preview.png',
      assetAlt: 'High-precision medical conversion interface for Dra. Victoria Cadavid',
      assetRef: 'REF: /public/dra-victoria/hero-preview.png',
      assetStatus: 'STATUS: MEDICAL_PRECISION',
      calibrationOverlay: 'LATENCY: 42MS · NO BLOAT',
      highlights: ['Zero-Friction Booking', 'Vercel Edge 42ms', 'WhatsApp API Sync'],
    },
    {
      id: 'us-case-study-commonground',
      number: '[ 02 ]',
      client: 'CommonGround (B2B SaaS)',
      tag: '[ SYSTEMS & POSITIONING // INTELLIGENCE ]',
      description: 'Cartographic navigation and relational intelligence tool evaluating company positioning and messaging alignment.',
      action: '[ VIEW CASE STUDY // COMMONGROUND ]',
      liveAction: '[ ↗ VIEW LIVE SITE ]',
      liveUrl: 'https://common-ground-studio-drab.vercel.app/',
      url: '/us/case-studies/common-ground',
      assetSrc: '/common-ground/cartographic-preview.png',
      assetAlt: 'CommonGround cartographic navigation and positioning tool preview',
      assetRef: 'REF: /public/common-ground/cartographic-preview.png',
      assetStatus: 'STATUS: VECTOR_CARTOGRAPHY',
      calibrationOverlay: 'POSITIONING ACCURACY: 92.6%',
      highlights: ['Semantic Cartography', 'Vector Embeddings', 'Relational Diagnostics'],
    },
    {
      id: 'us-case-study-talent-showcase',
      number: '[ 03 ]',
      client: 'Talent Showcase & Evaluation Hub',
      tag: '[ STAFFING & RECRUITMENT // AI WORKSPACE ]',
      description: 'End-to-end turnkey platform for staffing agencies: AI-assisted candidate profiling from rough notes and standardized evaluation workspace for client hiring managers.',
      action: '[ VIEW CASE STUDY // TALENT SHOWCASE ]',
      liveAction: '[ ↗ OPEN LIVE APP ]',
      liveUrl: 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true',
      url: '/us/case-studies/talent-showcase-hub',
      assetSrc: '/talent-showcase-hub/workspace.png',
      assetAlt: 'Talent Showcase & Evaluation Hub platform mockup showing candidate builder and recruiter evaluation dashboard',
      assetRef: 'REF: /public/talent-showcase-hub/workspace.png',
      assetStatus: 'STATUS: AI_EVALUATION_ACTIVE',
      calibrationOverlay: 'MODEL: GEMINI 2.5 · PARITY 100%',
      highlights: ['Dual-Sided Workspace', 'Gemini AI Structuring', 'Objective Fit Scoring'],
    },
  ];

  return (
    <section
      id="us-case-studies"
      className="scroll-reveal"
      style={{
        padding: '4rem 0 3.5rem',
        borderTop: '1px solid #E2E2DE',
      }}
    >
      {/* Technical Section Header - Strict Bauhaus Monochrome */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          {/* Horizontal movement visual cue & metadata tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.65rem',
            }}
          >
            <span
              id="us-case-studies-tag-cue"
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#121210',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                backgroundColor: '#EFEFEA',
                padding: '0.22rem 0.6rem',
                border: '1px solid #E2E2DE',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              [ 06.5 // PROJECTS &amp; EVIDENCE — HORIZONTAL SCROLL ↔ ]
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              [ EVIDENCE &amp; PRODUCT ARCHITECTURE ]
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.4vw, 2.35rem)',
              fontWeight: 600,
              color: '#121210',
              letterSpacing: '-0.025em',
              marginBottom: '0.5rem',
              textWrap: 'balance',
            }}
          >
            From concept to production.
          </h2>
          <p
            style={{
              color: '#444440',
              fontSize: '1.02rem',
              lineHeight: 1.6,
              textWrap: 'pretty',
            }}
          >
            Real-world digital systems engineered with technical discipline: where hand sketching, modular architecture, and edge production minimize friction and maximize conversion.
          </p>
        </div>

        {/* Technical Hardware-Style Navigation Buttons */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <button
            type="button"
            onClick={() => scrollGallery('left')}
            aria-label="Scroll left gallery"
            style={{
              padding: '0.55rem 0.85rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #121210',
              color: '#121210',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#121210';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#121210';
            }}
          >
            <span>[ ← ]</span>
          </button>
          <button
            type="button"
            onClick={() => scrollGallery('right')}
            aria-label="Scroll right gallery"
            style={{
              padding: '0.55rem 0.85rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #121210',
              color: '#121210',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#121210';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#121210';
            }}
          >
            <span>[ → ]</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Gallery Container */}
      <div
        ref={galleryRef}
        id="us-case-studies-gallery-track"
        className="case-studies-gallery-track"
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '0.25rem 0.15rem 1.25rem 0.15rem',
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="case-studies-gallery-card card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#121210',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              position: 'relative',
              flex: '0 0 clamp(290px, 85vw, 540px)',
              width: 'clamp(290px, 85vw, 540px)',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Top Card Metadata Ledger - Minimal, Monochrome, Sharp */}
            <div
              style={{
                padding: 'clamp(0.9rem, 2.5vw, 1.15rem) clamp(1rem, 3vw, 1.5rem)',
                borderBottom: '1px solid #E2E2DE',
                backgroundColor: '#FAFAF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                <span
                  className="bauhaus-num"
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: '#121210',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.number}
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    padding: '0.15rem 0.5rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E2DE',
                    color: '#121210',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {project.tag}
                </span>
              </div>
            </div>

            {/* Visual Asset Reference Frame */}
            <div
              style={{
                padding: 'clamp(1rem, 3vw, 1.4rem) clamp(1rem, 3vw, 1.5rem) 0',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  border: '1px solid #121210',
                  backgroundColor: '#F8F8F6',
                  overflow: 'hidden',
                }}
              >
                {/* Asset Header Ledger */}
                <div
                  style={{
                    padding: '0.35rem 0.65rem',
                    backgroundColor: '#121210',
                    color: '#FFFFFF',
                    fontSize: '0.62rem',
                    fontFamily: 'ui-monospace, monospace',
                    display: 'flex',
                    justifyContent: 'space-between',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {project.assetRef}
                  </span>
                  <span style={{ whiteSpace: 'nowrap' }}>{project.assetStatus}</span>
                </div>

                {/* Preview Graphic */}
                <div
                  style={{
                    aspectRatio: '16 / 10',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FFFFFF',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={project.assetSrc}
                    alt={project.assetAlt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Technical Calibration Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    border: '1px solid #121210',
                    padding: '0.2rem 0.45rem',
                    fontSize: '0.6rem',
                    fontFamily: 'ui-monospace, monospace',
                    fontWeight: 600,
                    color: '#121210',
                  }}
                >
                  {project.calibrationOverlay}
                </div>
              </div>
            </div>

            {/* Card Body Copy */}
            <div
              style={{
                padding: 'clamp(1.1rem, 3vw, 1.4rem) clamp(1rem, 3vw, 1.5rem) 1.25rem',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.6rem',
                  }}
                >
                  {project.client}
                </h3>

                <p
                  style={{
                    color: '#444440',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    textWrap: 'pretty',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}
              >
                {project.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      padding: '0.2rem 0.5rem',
                      backgroundColor: '#F3F3F0',
                      border: '1px solid #E2E2DE',
                      color: '#121210',
                      fontWeight: 500,
                    }}
                  >
                    + {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link Footer: Direct Live Site + Case Study Deep Dive */}
            <div
              style={{
                padding: 'clamp(0.9rem, 2.5vw, 1.15rem) clamp(1rem, 3vw, 1.5rem)',
                borderTop: '1px solid #E2E2DE',
                backgroundColor: '#FAFAF8',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {/* High-Contrast Direct External Live Deployment Button */}
              <a
                id={`live-site-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.client} - View live production deployment`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.8rem 1.15rem',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  border: '1px solid #111111',
                  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                  minHeight: '44px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#15803D';
                  e.currentTarget.style.borderColor = '#16A34A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#111111';
                  e.currentTarget.style.borderColor = '#111111';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#4ADE80',
                      boxShadow: '0 0 6px rgba(74, 222, 128, 0.8)',
                      display: 'inline-block',
                    }}
                  />
                  <span>{project.liveAction}</span>
                </div>
                <span style={{ fontSize: '0.88rem', color: '#4ADE80', fontWeight: 800 }}>↗</span>
              </a>

              {/* Dedicated Case Study In-Depth Analysis Link */}
              <a
                id={`action-${project.id}`}
                href={project.url}
                onClick={(e) => navigateTo(e, project.url)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.75rem 1.15rem',
                  backgroundColor: '#FFFFFF',
                  color: '#121210',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  transition: 'all 0.18s ease',
                  border: '1px solid #121210',
                  minHeight: '42px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#121210';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#121210';
                }}
              >
                <span>{project.action}</span>
                <span style={{ fontSize: '0.9rem' }}>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
