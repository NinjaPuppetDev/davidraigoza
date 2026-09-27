import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import NegociosCursor from './NegociosCursor';
import CookieBanner from './CookieBanner';

interface DraVictoriaCaseStudyProps {
  isUs?: boolean;
}

export default function DraVictoriaCaseStudy({ isUs }: DraVictoriaCaseStudyProps = {}) {
  const { language, setLanguage } = useLanguage();
  const isUsMode = Boolean(isUs || (typeof window !== 'undefined' && window.location.pathname.startsWith('/us')));
  const effectiveLang = isUsMode ? 'en' : language;
  const isEs = effectiveLang === 'es';

  // Use the proper translations strictly depending on effective language
  const t = TRANSLATIONS[effectiveLang];
  const cs = t.draVictoriaCase;
  const fwa = t.floatingWhatsApp;
  const [previewMode, setPreviewMode] = useState<'screenshot' | 'interactive'>('screenshot');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isEs
      ? `${cs.client} · Caso de Estudio | David Raigoza`
      : `${cs.client} · Case Study | David Raigoza`;
  }, [cs.client, isEs]);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  const backLinkPath = isUsMode ? '/us/' : '/';
  const backLinkLabel = isUsMode ? '← RETURN TO STUDIO' : cs.backToStudio;

  return (
    <>
      <CookieBanner />
      <div
        id="case-study-page-dra-victoria"
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

        {/* Dedicated Technical Sub-Page Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(248, 248, 246, 0.96)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #E2E2DE',
            padding: '0.85rem clamp(1rem, 3vw, 2rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Back to Studio Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              id="back-to-home-link"
              href={backLinkPath}
              onClick={(e) => navigateTo(e, backLinkPath)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#121210',
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
                padding: '0.5rem 0.95rem',
                letterSpacing: '0.04em',
                minHeight: '40px',
                transition: 'all 0.15s ease',
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
              {backLinkLabel}
            </a>

            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
                display: 'none',
              }}
              className="sm:inline"
            >
              {isUsMode ? '/ US / CASE-STUDIES / DRA-VICTORIA' : '/ CASE-STUDIES / DRA-VICTORIA'}
            </span>
          </div>

          {/* Right: Language Toggle (Removed on /us path to prevent translating to Spanish) */}
          {!isUsMode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  border: '1px solid #D4D4CE',
                  backgroundColor: '#EFEFEA',
                  padding: '2px',
                }}
              >
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  aria-label="Cambiar a Español"
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontFamily: 'ui-monospace, monospace',
                    fontWeight: isEs ? 700 : 500,
                    backgroundColor: isEs ? '#121210' : 'transparent',
                    color: isEs ? '#FFFFFF' : '#666660',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    minHeight: '36px',
                    minWidth: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s ease',
                  }}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-label="Switch to English"
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontFamily: 'ui-monospace, monospace',
                    fontWeight: !isEs ? 700 : 500,
                    backgroundColor: !isEs ? '#121210' : 'transparent',
                    color: !isEs ? '#FFFFFF' : '#666660',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    minHeight: '36px',
                    minWidth: '40px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s ease',
                  }}
                >
                  EN
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Main Case Study Editorial Canvas */}
        <main
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2rem) 5rem',
          }}
        >
          {/* Section Eyebrow (Clean Structural Tag, Green Status Removed) */}
          <div
            style={{
              marginBottom: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#121210',
                backgroundColor: '#EAEAE6',
                border: '1px solid #D4D4CE',
                padding: '0.3rem 0.75rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {cs.caseNumberTag}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              fontWeight: 700,
              color: '#121210',
              letterSpacing: '-0.03em',
              lineHeight: 1.14,
              marginBottom: '1rem',
              textWrap: 'balance',
            }}
          >
            {cs.client}: {cs.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.02rem, 2.2vw, 1.15rem)',
              color: '#444440',
              lineHeight: 1.65,
              maxWidth: '780px',
              marginBottom: '2.5rem',
              textWrap: 'pretty',
            }}
          >
            {cs.subtitle}
          </p>

          {/* Bauhaus Architectural Metadata Ledger */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1px',
              backgroundColor: '#E2E2DE',
              border: '1px solid #121210',
              marginBottom: '3.5rem',
            }}
          >
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem 1.25rem' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  display: 'block',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                {cs.metaPills.clientLabel}
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#121210' }}>
                {cs.metaPills.clientValue}
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem 1.25rem' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  display: 'block',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                {cs.metaPills.locationLabel}
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#121210' }}>
                {cs.metaPills.locationValue}
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem 1.25rem' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  display: 'block',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                {cs.metaPills.disciplineLabel}
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#121210' }}>
                {cs.metaPills.disciplineValue}
              </span>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem 1.25rem' }}>
              <span
                style={{
                  fontSize: '0.66rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  display: 'block',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                }}
              >
                {cs.metaPills.deploymentLabel}
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#2563EB' }}>
                {cs.metaPills.deploymentValue}
              </span>
            </div>
          </div>

          {/* Central Bauhaus Manifesto Quote Box */}
          <div
            style={{
              backgroundColor: '#121210',
              color: '#FFFFFF',
              border: '1px solid #121210',
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              marginBottom: '3.5rem',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#999990',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {isEs ? '// PRINCIPIO DE INGENIERÍA Y OFICIO (BAUHAUS METRICS)' : '// ARCHITECTURAL & CRAFT PRINCIPLE (BAUHAUS METRICS)'}
            </span>
            <blockquote
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 2rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                margin: '0 0 1rem 0',
                color: '#FFFFFF',
                textWrap: 'balance',
              }}
            >
              {cs.quote}
            </blockquote>
            <p
              style={{
                fontSize: '0.92rem',
                color: '#CCCCCC',
                margin: 0,
                fontFamily: 'ui-monospace, monospace',
                lineHeight: 1.5,
                textWrap: 'pretty',
              }}
            >
              {cs.quoteCaption}
            </p>
          </div>

          {/* 3-STEP PROCESS NARRATIVE FLOW */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* STEP 01: EL BOCETO (THE SKETCH) */}
            <section
              id="step-01-sketch"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
              }}
            >
              {/* Step Header */}
              <div
                style={{
                  padding: '1rem clamp(1rem, 3vw, 1.75rem)',
                  backgroundColor: '#FAFAF8',
                  borderBottom: '1px solid #E2E2DE',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    className="bauhaus-num"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#121210',
                      letterSpacing: '-0.02em',
                      borderRight: '1px solid #E2E2DE',
                      paddingRight: '0.75rem',
                    }}
                  >
                    {cs.step1.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cs.step1.tag}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#2563EB',
                    fontWeight: 700,
                    backgroundColor: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    padding: '0.25rem 0.65rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cs.step1.frictionBadge}
                </span>
              </div>

              {/* Step Narrative Text */}
              <div style={{ padding: 'clamp(1.15rem, 3vw, 2rem)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                    textWrap: 'balance',
                  }}
                >
                  {cs.step1.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#444440',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                    maxWidth: '780px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step1.desc}
                </p>

                {/* Hand-drawn wireframe visual asset */}
                <div
                  style={{
                    border: '1px solid #121210',
                    backgroundColor: '#F8F8F6',
                    overflow: 'hidden',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.45rem 0.85rem',
                      backgroundColor: '#121210',
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      fontFamily: 'ui-monospace, monospace',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>SOURCE ASSET: /public/dra-victoria/sketch-wireframe.png</span>
                    <span>RESOLUTION: VECTOR DRAFTING</span>
                  </div>
                  <img
                    src="/dra-victoria/sketch-wireframe.png"
                    alt="Boceto hand-drawn wireframe para Dra. Victoria"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      padding: '0.65rem 1rem',
                      backgroundColor: '#FFFFFF',
                      borderTop: '1px solid #E2E2DE',
                      fontSize: '0.78rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#666660',
                      textWrap: 'pretty',
                    }}
                  >
                    CAPTION: {cs.step1.caption}
                  </div>
                </div>

                {/* Engineering Notes on Friction Reduction & Mobile Hierarchy */}
                <div
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E2E2DE',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cs.step1.notesTitle}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.step1.notes.map((note, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.94rem',
                          color: '#262624',
                          lineHeight: 1.6,
                          textWrap: 'pretty',
                        }}
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* STEP 02: EL WIREFRAME (FIGMA STRUCTURE) */}
            <section
              id="step-02-wireframe"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
              }}
            >
              {/* Step Header */}
              <div
                style={{
                  padding: '1rem clamp(1rem, 3vw, 1.75rem)',
                  backgroundColor: '#FAFAF8',
                  borderBottom: '1px solid #E2E2DE',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    className="bauhaus-num"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#121210',
                      letterSpacing: '-0.02em',
                      borderRight: '1px solid #E2E2DE',
                      paddingRight: '0.75rem',
                    }}
                  >
                    {cs.step2.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cs.step2.tag}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#121210',
                    fontWeight: 700,
                    backgroundColor: '#F3F3F0',
                    border: '1px solid #D4D4CE',
                    padding: '0.25rem 0.65rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cs.step2.gridBadge}
                </span>
              </div>

              {/* Step Narrative Text */}
              <div style={{ padding: 'clamp(1.15rem, 3vw, 2rem)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                    textWrap: 'balance',
                  }}
                >
                  {cs.step2.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#444440',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                    maxWidth: '780px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step2.desc}
                </p>

                {/* Figma structure visual asset */}
                <div
                  style={{
                    border: '1px solid #121210',
                    backgroundColor: '#F8F8F6',
                    overflow: 'hidden',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.45rem 0.85rem',
                      backgroundColor: '#121210',
                      color: '#FFFFFF',
                      fontSize: '0.65rem',
                      fontFamily: 'ui-monospace, monospace',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>SOURCE ASSET: /public/dra-victoria/figma-structure.png</span>
                    <span>ATOMIC DESIGN TOKENS</span>
                  </div>
                  <img
                    src="/dra-victoria/figma-structure.png"
                    alt="Estructura modular Figma para Dra. Victoria"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      padding: '0.65rem 1rem',
                      backgroundColor: '#FFFFFF',
                      borderTop: '1px solid #E2E2DE',
                      fontSize: '0.78rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#666660',
                      textWrap: 'pretty',
                    }}
                  >
                    CAPTION: {cs.step2.caption}
                  </div>
                </div>

                {/* Specs Box */}
                <div
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E2E2DE',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cs.step2.specsTitle}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.step2.specs.map((spec, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.94rem',
                          color: '#262624',
                          lineHeight: 1.6,
                          textWrap: 'pretty',
                        }}
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* STEP 03: LA INTERFAZ (VERCEL DEPLOYMENT) */}
            <section
              id="step-03-interface"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
              }}
            >
              {/* Step Header with Refined High-Contrast Link */}
              <div
                style={{
                  padding: '1rem clamp(1rem, 3vw, 1.75rem)',
                  backgroundColor: '#FAFAF8',
                  borderBottom: '1px solid #E2E2DE',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    className="bauhaus-num"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#121210',
                      letterSpacing: '-0.02em',
                      borderRight: '1px solid #E2E2DE',
                      paddingRight: '0.75rem',
                    }}
                  >
                    {cs.step3.num}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cs.step3.tag}
                  </span>
                </div>

                <a
                  href={cs.step3.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#121210',
                    fontWeight: 700,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #121210',
                    padding: '0.35rem 0.8rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    minHeight: '36px',
                    transition: 'all 0.15s ease',
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
                  <span>{cs.step3.liveUrlLabel}</span>
                  <span style={{ fontWeight: 800 }}>↗</span>
                </a>
              </div>

              {/* Step Narrative Text */}
              <div style={{ padding: 'clamp(1.15rem, 3vw, 2rem)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 600,
                    color: '#121210',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                    textWrap: 'balance',
                  }}
                >
                  {cs.step3.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#444440',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                    maxWidth: '780px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step3.desc}
                </p>

                {/* PRODUCTION-READY LINK BLOCK & TECHNICAL METADATA (CLEAN ARCHITECTURAL STRIP) */}
                <div
                  id="dra-victoria-production-block"
                  style={{
                    border: '1px solid #121210',
                    backgroundColor: '#FAFAF8',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid #E2E2DE',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#121210',
                          backgroundColor: '#EAEAE6',
                          border: '1px solid #D4D4CE',
                          padding: '0.3rem 0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#121210',
                            display: 'inline-block',
                          }}
                        />
                        STATUS: 200 OK · PRODUCTION
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#666660',
                          letterSpacing: '0.04em',
                        }}
                      >
                        PROTOCOL: HTTPS // EDGE RUNTIME
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'ui-monospace, monospace',
                        color: '#444440',
                        letterSpacing: '0.03em',
                      }}
                    >
                      LATENCY: 42MS · ZERO BLOAT
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '220px', flex: '1 1 auto' }}>
                      <span
                        style={{
                          fontSize: '0.66rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#666660',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          fontWeight: 600,
                        }}
                      >
                        {isEs ? 'ENDPOINT DE PRODUCCIÓN ACTIVO' : 'ACTIVE PRODUCTION ENDPOINT'}
                      </span>
                      <code
                        style={{
                          fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#121210',
                          fontWeight: 700,
                          wordBreak: 'break-all',
                        }}
                      >
                        https://dra-victoria-mockup.vercel.app/
                      </code>
                    </div>

                    <a
                      id="btn-live-dra-victoria"
                      href="https://dra-victoria-mockup.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver sitio de Dra. Victoria en producción en Vercel"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        padding: '0.9rem 1.6rem',
                        backgroundColor: '#121210',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontFamily: 'ui-monospace, monospace',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        border: '1px solid #121210',
                        transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                        minHeight: '48px',
                        minWidth: '220px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#262624';
                        e.currentTarget.style.borderColor = '#262624';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#121210';
                        e.currentTarget.style.borderColor = '#121210';
                      }}
                    >
                      <span>{isEs ? 'VER SITIO EN VIVO' : 'VIEW LIVE SITE'}</span>
                      <span style={{ fontWeight: 800, fontSize: '1rem' }}>↗</span>
                    </a>
                  </div>
                </div>

                {/* Interactive Preview Banner with Mode Switcher */}
                <div
                  style={{
                    border: '1px solid #121210',
                    backgroundColor: '#F8F8F6',
                    overflow: 'hidden',
                    marginBottom: '1.75rem',
                  }}
                >
                  {/* Banner Sub-Header with Viewport Controls */}
                  <div
                    style={{
                      padding: '0.55rem 0.85rem',
                      backgroundColor: '#121210',
                      color: '#FFFFFF',
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>SOURCE: dra-victoria-mockup.vercel.app</span>
                      <span style={{ color: '#888880' }}>|</span>
                      <span>STATUS: 200 OK</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <button
                        type="button"
                        onClick={() => setPreviewMode('screenshot')}
                        style={{
                          padding: '0.3rem 0.65rem',
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          backgroundColor: previewMode === 'screenshot' ? '#FFFFFF' : '#262624',
                          color: previewMode === 'screenshot' ? '#121210' : '#CCCCCC',
                          border: '1px solid #444440',
                          cursor: 'pointer',
                          fontWeight: previewMode === 'screenshot' ? 700 : 500,
                          minHeight: '34px',
                        }}
                      >
                        {isEs ? '◉ CAPTURA' : '◉ CAPTURE'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewMode('interactive')}
                        style={{
                          padding: '0.3rem 0.65rem',
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          backgroundColor: previewMode === 'interactive' ? '#FFFFFF' : '#262624',
                          color: previewMode === 'interactive' ? '#121210' : '#CCCCCC',
                          border: previewMode === 'interactive' ? '1px solid #FFFFFF' : '1px solid #444440',
                          cursor: 'pointer',
                          fontWeight: previewMode === 'interactive' ? 700 : 500,
                          minHeight: '34px',
                        }}
                      >
                        {isEs ? '▷ VISTA INTERACTIVA' : '▷ LIVE EMBED'}
                      </button>
                    </div>
                  </div>

                  {previewMode === 'screenshot' ? (
                    <div>
                      <img
                        src="/dra-victoria/production-preview.png"
                        alt="Interfaz en producción desplegada en Vercel"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                      <div
                        style={{
                          padding: '0.75rem 1rem',
                          backgroundColor: '#FFFFFF',
                          borderTop: '1px solid #E2E2DE',
                          fontSize: '0.78rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#666660',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ textWrap: 'pretty' }}>CAPTION: {cs.step3.caption}</span>
                        <a
                          href="https://dra-victoria-mockup.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#121210',
                            textDecoration: 'underline',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            minHeight: '36px',
                          }}
                        >
                          {isEs ? 'ABRIR EN NUEVA PESTAÑA' : 'OPEN IN NEW TAB'} ↗
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div style={{ backgroundColor: '#FFFFFF' }}>
                      <div
                        style={{
                          height: 'clamp(420px, 60vh, 650px)',
                          width: '100%',
                          position: 'relative',
                        }}
                      >
                        <iframe
                          src="https://dra-victoria-mockup.vercel.app/"
                          title="Dra. Victoria Live Production Interface"
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            display: 'block',
                          }}
                          loading="lazy"
                        />
                      </div>
                      <div
                        style={{
                          padding: '0.75rem 1rem',
                          backgroundColor: '#FAFAF8',
                          borderTop: '1px solid #E2E2DE',
                          fontSize: '0.75rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#444440',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}
                      >
                        <span>LIVE VERCEL SESSION // SANDBOXED PREVIEW</span>
                        <a
                          href="https://dra-victoria-mockup.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#121210',
                            textDecoration: 'underline',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                            minHeight: '36px',
                          }}
                        >
                          {isEs ? 'EXPERIENCIA COMPLETA EN NUEVA PESTAÑA' : 'FULL EXPERIENCE IN NEW TAB'} ↗
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features & Production Architecture Box */}
                <div
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E2E2DE',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cs.step3.featuresTitle}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.step3.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.94rem',
                          color: '#262624',
                          lineHeight: 1.6,
                          textWrap: 'pretty',
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* INTERACTIVE CALL-TO-ACTION (BACK TO STUDIO OFFER & BOOKING) */}
          <section
            id="case-study-cta"
            style={{
              marginTop: '4.5rem',
              backgroundColor: '#121210',
              color: '#FFFFFF',
              border: '1px solid #121210',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#93C5FD',
                fontWeight: 700,
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              {cs.summary.tag}
            </span>

            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
                color: '#FFFFFF',
                textWrap: 'balance',
                lineHeight: 1.2,
              }}
            >
              {cs.summary.title}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#D4D4CE',
                lineHeight: 1.65,
                maxWidth: '720px',
                marginBottom: '2.5rem',
                textWrap: 'pretty',
              }}
            >
              {cs.summary.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              {/* Direct Link Back to Studio Offer & Contact */}
              <a
                id="cta-return-studio-consultation"
                href="/#contacto"
                onClick={(e) => navigateTo(e, '/#contacto')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.95rem 1.6rem',
                  backgroundColor: '#FFFFFF',
                  color: '#121210',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  border: '1px solid #FFFFFF',
                  transition: 'all 0.18s ease',
                  minHeight: '48px',
                  flex: '1 1 auto',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAEAE6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                {cs.summary.ctaConsultation}
              </a>

              {/* Instant WhatsApp Consultation */}
              <a
                id="cta-case-study-whatsapp"
                href={fwa.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.95rem 1.6rem',
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  border: '1px solid #555550',
                  transition: 'all 0.18s ease',
                  minHeight: '48px',
                  flex: '1 1 auto',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#555550';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span>{cs.summary.ctaWhatsApp}</span>
                <span>↗</span>
              </a>
            </div>
          </section>
        </main>

        {/* Minimal Bauhaus Sub-Page Footer */}
        <footer
          style={{
            borderTop: '1px solid #E2E2DE',
            padding: '1.75rem clamp(1rem, 3vw, 2rem)',
            backgroundColor: '#FAFAF8',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#121210' }}>
              David Raigoza
            </span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
              // Product Design Engineering · Medellín &amp; Global
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="/"
              onClick={(e) => navigateTo(e, '/')}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#121210',
                textDecoration: 'none',
                minHeight: '36px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              ESTUDIO / INICIO
            </a>
            <a
              href="/us"
              onClick={(e) => navigateTo(e, '/us')}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
                textDecoration: 'none',
                minHeight: '36px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              US CLIENTS
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
