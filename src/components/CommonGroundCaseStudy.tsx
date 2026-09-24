import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import NegociosCursor from './NegociosCursor';
import CookieBanner from './CookieBanner';

interface CommonGroundCaseStudyProps {
  isUs?: boolean;
}

export default function CommonGroundCaseStudy({ isUs }: CommonGroundCaseStudyProps = {}) {
  const { language, setLanguage } = useLanguage();
  const isUsMode = Boolean(isUs || (typeof window !== 'undefined' && window.location.pathname.startsWith('/us')));
  const effectiveLang = isUsMode ? 'en' : language;
  const isEs = effectiveLang === 'es';

  // Use the proper translations strictly depending on effective language
  const t = TRANSLATIONS[effectiveLang];
  const cs = t.commonGroundCase;
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
        id="case-study-page-commonground"
        className="negocios-page"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#121210',
          minHeight: '100vh',
          fontFamily: 'var(--sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <NegociosCursor />

        {/* TOP TECHNICAL LEDGER / HEADER */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #121210',
            padding: '0.85rem clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              id="back-to-home-link-commonground"
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
              {isUsMode ? '/ US / CASE-STUDIES / COMMONGROUND-STUDIO' : '/ CASE-STUDIES / COMMONGROUND-STUDIO'}
            </span>
          </div>

          {/* Language Switcher (Removed on /us path to prevent translating to Spanish) */}
          {!isUsMode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  border: '1px solid #121210',
                  backgroundColor: '#FAFAF8',
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

        {/* MAIN BODY CONTAINER */}
        <main
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem) 5rem',
          }}
        >
          {/* CASE IDENTIFIER BADGE */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#FFFFFF',
                backgroundColor: '#121210',
                padding: '0.3rem 0.75rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {cs.caseNumberTag}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
                letterSpacing: '0.04em',
              }}
            >
              CLIENT: {cs.client}
            </span>
          </div>

          {/* MAIN HEADINGS */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: '#121210',
              letterSpacing: '-0.035em',
              lineHeight: 1.12,
              marginBottom: '1.25rem',
              textWrap: 'balance',
            }}
          >
            {cs.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              color: '#444440',
              lineHeight: 1.6,
              maxWidth: '820px',
              marginBottom: '2.5rem',
              textWrap: 'pretty',
            }}
          >
            {cs.subtitle}
          </p>

          {/* METADATA GRID TABLE */}
          <div
            style={{
              border: '1px solid #121210',
              backgroundColor: '#FAFAF8',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              marginBottom: '3rem',
            }}
          >
            <div style={{ padding: '1.15rem 1.25rem', borderRight: '1px solid #E2E2DE', borderBottom: '1px solid #E2E2DE' }}>
              <div style={{ fontSize: '0.66rem', fontFamily: 'ui-monospace, monospace', color: '#666660', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cs.metaPills.clientLabel}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121210' }}>
                {cs.metaPills.clientValue}
              </div>
            </div>

            <div style={{ padding: '1.15rem 1.25rem', borderRight: '1px solid #E2E2DE', borderBottom: '1px solid #E2E2DE' }}>
              <div style={{ fontSize: '0.66rem', fontFamily: 'ui-monospace, monospace', color: '#666660', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cs.metaPills.locationLabel}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121210' }}>
                {cs.metaPills.locationValue}
              </div>
            </div>

            <div style={{ padding: '1.15rem 1.25rem', borderRight: '1px solid #E2E2DE', borderBottom: '1px solid #E2E2DE' }}>
              <div style={{ fontSize: '0.66rem', fontFamily: 'ui-monospace, monospace', color: '#666660', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cs.metaPills.disciplineLabel}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121210' }}>
                {cs.metaPills.disciplineValue}
              </div>
            </div>

            <div style={{ padding: '1.15rem 1.25rem', borderRight: '1px solid #E2E2DE', borderBottom: '1px solid #E2E2DE' }}>
              <div style={{ fontSize: '0.66rem', fontFamily: 'ui-monospace, monospace', color: '#666660', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cs.metaPills.deploymentLabel}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121210' }}>
                {cs.metaPills.deploymentValue}
              </div>
            </div>

            <div style={{ padding: '1.15rem 1.25rem', borderBottom: '1px solid #E2E2DE' }}>
              <div style={{ fontSize: '0.66rem', fontFamily: 'ui-monospace, monospace', color: '#666660', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                {cs.metaPills.resultLabel}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121210' }}>
                {cs.metaPills.resultValue}
              </div>
            </div>
          </div>

          {/* ARCHITECTURAL QUOTE BANNER */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #121210',
              borderLeft: '6px solid #121210',
              marginBottom: '3.5rem',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2.4vw, 1.55rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#121210',
                margin: '0 0 0.5rem 0',
                lineHeight: 1.4,
                textWrap: 'balance',
              }}
            >
              {cs.quote}
            </p>
            <span
              style={{
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
                letterSpacing: '0.04em',
                display: 'block',
                textWrap: 'pretty',
              }}
            >
              — {cs.quoteCaption}
            </span>
          </div>

          {/* 3-STEP ENGINEERING CHRONOLOGY */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* STEP 01: EL MODELO SEMÁNTICO */}
            <section
              id="step-01-semantic-space"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
              }}
            >
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
                    color: '#666660',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cs.step1.vectorBadge}
                </span>
              </div>

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
                    marginBottom: '1.75rem',
                    maxWidth: '800px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step1.desc}
                </p>

                {/* Notes Box */}
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

            {/* STEP 02: EL GRAFO RELACIONAL & HUD */}
            <section
              id="step-02-hud-graph"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
              }}
            >
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
                    color: '#666660',
                    letterSpacing: '0.04em',
                  }}
                >
                  {cs.step2.hudBadge}
                </span>
              </div>

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
                    marginBottom: '1.75rem',
                    maxWidth: '800px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step2.desc}
                </p>

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

              {/* Step Narrative */}
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
                    maxWidth: '800px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step3.desc}
                </p>

                {/* PRODUCTION-READY LINK BLOCK & TECHNICAL METADATA (CLEAN ARCHITECTURAL STRIP) */}
                <div
                  id="commonground-production-block"
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
                      LATENCY: 38MS · CANVAS 60FPS
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
                        https://common-ground-studio-drab.vercel.app/
                      </code>
                    </div>

                    <a
                      id="btn-live-commonground"
                      href="https://common-ground-studio-drab.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver sitio de CommonGround en producción en Vercel"
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
                      <span>SOURCE: common-ground-studio-drab.vercel.app</span>
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
                        src="/common-ground/cartographic-preview.png"
                        alt={cs.step3.caption}
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
                          href="https://common-ground-studio-drab.vercel.app/"
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
                          src="https://common-ground-studio-drab.vercel.app/"
                          title="CommonGround Live Production Interface"
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
                        <span>LIVE VERCEL SESSION // CARTOGRAPHIC ENGINE</span>
                        <a
                          href="https://common-ground-studio-drab.vercel.app/"
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

          {/* SUMMARY CALL-TO-ACTION SECTION */}
          <section
            id="commonground-summary-cta"
            style={{
              marginTop: '4.5rem',
              backgroundColor: '#121210',
              color: '#FFFFFF',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              border: '1px solid #121210',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#93C5FD',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {cs.summary.tag}
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                margin: 0,
                textWrap: 'balance',
              }}
            >
              {cs.summary.title}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#D4D4CE',
                lineHeight: 1.65,
                maxWidth: '740px',
                margin: 0,
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
                marginTop: '0.5rem',
              }}
            >
              <a
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
                  transition: 'all 0.15s ease',
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

              <a
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
                  transition: 'all 0.15s ease',
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
            padding: '1.75rem clamp(1rem, 3vw, 2.5rem)',
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
