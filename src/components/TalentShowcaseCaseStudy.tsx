import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import NegociosCursor from './NegociosCursor';
import CookieBanner from './CookieBanner';

interface TalentShowcaseCaseStudyProps {
  isUs?: boolean;
}

export default function TalentShowcaseCaseStudy({ isUs }: TalentShowcaseCaseStudyProps = {}) {
  const { language, setLanguage } = useLanguage();
  const isUsMode = Boolean(isUs || (typeof window !== 'undefined' && window.location.pathname.startsWith('/us')));
  const effectiveLang = isUsMode ? 'en' : language;
  const isEs = effectiveLang === 'es';

  // Use the proper translations strictly depending on effective language
  const t = TRANSLATIONS[effectiveLang];
  const cs = t.talentShowcaseCase;
  const fwa = t.floatingWhatsApp;
  const [previewMode, setPreviewMode] = useState<'screenshot' | 'interactive'>('screenshot');
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'talent' | 'client'>('talent');

  const liveAppUrl = 'https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a?fullscreenApplet=true';

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
        id="case-study-page-talent-showcase"
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
              id="back-to-home-link-talent-showcase"
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
              {isUsMode ? '/ US / CASE-STUDIES / TALENT-SHOWCASE-HUB' : '/ CASE-STUDIES / TALENT-SHOWCASE-HUB'}
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

          {/* HERO SECTION / MAIN HEADINGS */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
                padding: '0.25rem 0.65rem',
                backgroundColor: '#F0F0EB',
                border: '1px solid #D6D6D0',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#121210',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#16A34A',
                  display: 'inline-block',
                }}
              />
              {cs.heroTag}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.7rem)',
                fontWeight: 700,
                color: '#121210',
                letterSpacing: '-0.035em',
                lineHeight: 1.14,
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
                lineHeight: 1.62,
                maxWidth: '860px',
                marginBottom: '0.5rem',
                textWrap: 'pretty',
              }}
            >
              {cs.heroDescription}
            </p>
          </div>

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
                margin: '0 0 0.65rem 0',
                lineHeight: 1.45,
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

          {/* 4-STEP CHRONOLOGY & DEEP ARCHITECTURE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* STEP 01: THE CHALLENGE */}
            <section
              id="step-01-the-challenge"
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
                  gap: '0.75rem',
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
                  {cs.step1.frictionBadge}
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
                    maxWidth: '820px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step1.desc}
                </p>

                {/* Engineering Breakdown Box */}
                <div
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E2E2DE',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                    marginBottom: '1.5rem',
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

                {/* Analytical Diagram strip */}
                <div
                  style={{
                    border: '1px dashed #C2C2BC',
                    backgroundColor: '#FFFFFF',
                    padding: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  <div style={{ padding: '0.75rem', backgroundColor: '#F8F8F6', border: '1px solid #E2E2DE' }}>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#DC2626', fontWeight: 700, marginBottom: '0.35rem' }}>
                      [ 01 // INPUT INCONSISTENCY ]
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#444440' }}>
                      {isEs ? 'Hojas de vida en PDF, Word, emails informales y notas de llamada dispersas.' : 'PDFs, Word docs, informal emails, and disparate interview phone notes.'}
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: '#F8F8F6', border: '1px solid #E2E2DE' }}>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#DC2626', fontWeight: 700, marginBottom: '0.35rem' }}>
                      [ 02 // RECRUITER FRICTION ]
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#444440' }}>
                      {isEs ? 'Horas perdidas reescribiendo y remaquetando dossiers para igualar formatos.' : 'Recruiters wasting hours manually re-typing and re-formatting submissions.'}
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', backgroundColor: '#F8F8F6', border: '1px solid #E2E2DE' }}>
                    <div style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#DC2626', fontWeight: 700, marginBottom: '0.35rem' }}>
                      [ 03 // CLIENT DELAY ]
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#444440' }}>
                      {isEs ? 'Clientes retrasan feedback al no poder comparar talentos con criterios objetivos.' : 'Hiring managers delay feedback due to non-comparable candidate dossiers.'}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 02: THE SOLUTION & DUAL-SIDED WORKFLOW */}
            <section
              id="step-02-dual-sided-workflow"
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
                  gap: '0.75rem',
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
                  {cs.step2.dualBadge}
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
                    maxWidth: '820px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step2.desc}
                </p>

                {/* Workflow Selector Buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveWorkflowTab('talent')}
                    style={{
                      padding: '0.65rem 1.15rem',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      border: '1px solid #121210',
                      backgroundColor: activeWorkflowTab === 'talent' ? '#121210' : '#FFFFFF',
                      color: activeWorkflowTab === 'talent' ? '#FFFFFF' : '#121210',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    [ 01 // TALENT WORKSPACE ]
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveWorkflowTab('client')}
                    style={{
                      padding: '0.65rem 1.15rem',
                      fontFamily: 'ui-monospace, monospace',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      border: '1px solid #121210',
                      backgroundColor: activeWorkflowTab === 'client' ? '#121210' : '#FFFFFF',
                      color: activeWorkflowTab === 'client' ? '#FFFFFF' : '#121210',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    [ 02 // CLIENT & MANAGER WORKSPACE ]
                  </button>
                </div>

                {/* Interactive Workflow Card */}
                {activeWorkflowTab === 'talent' ? (
                  <div
                    style={{
                      backgroundColor: '#FAFAF8',
                      border: '1px solid #121210',
                      padding: 'clamp(1.2rem, 3vw, 1.85rem)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#121210',
                          fontFamily: 'ui-monospace, monospace',
                        }}
                      >
                        {cs.step2.talentTitle}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#16A34A',
                          backgroundColor: '#E8F5E9',
                          padding: '0.25rem 0.5rem',
                          border: '1px solid #C8E6C9',
                          fontWeight: 700,
                        }}
                      >
                        GEMINI AI ASSISTED
                      </span>
                    </div>
                    <p style={{ fontSize: '0.96rem', color: '#444440', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {cs.step2.talentDesc}
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '0.75rem',
                      }}
                    >
                      {cs.step2.talentPoints.map((point, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '0.85rem',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E2DE',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                          }}
                        >
                          <span style={{ color: '#16A34A', fontWeight: 800 }}>✓</span>
                          <span style={{ fontSize: '0.88rem', color: '#262624', lineHeight: 1.45 }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: '#FAFAF8',
                      border: '1px solid #121210',
                      padding: 'clamp(1.2rem, 3vw, 1.85rem)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h3
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#121210',
                          fontFamily: 'ui-monospace, monospace',
                        }}
                      >
                        {cs.step2.clientTitle}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#2563EB',
                          backgroundColor: '#EFF6FF',
                          padding: '0.25rem 0.5rem',
                          border: '1px solid #BFDBFE',
                          fontWeight: 700,
                        }}
                      >
                        STANDARDIZED WORKSPACE
                      </span>
                    </div>
                    <p style={{ fontSize: '0.96rem', color: '#444440', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {cs.step2.clientDesc}
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '0.75rem',
                      }}
                    >
                      {cs.step2.clientPoints.map((point, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '0.85rem',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E2DE',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                          }}
                        >
                          <span style={{ color: '#2563EB', fontWeight: 800 }}>✓</span>
                          <span style={{ fontSize: '0.88rem', color: '#262624', lineHeight: 1.45 }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

            {/* STEP 03: SYSTEM ARCHITECTURE & LIVE APP */}
            <section
              id="step-03-system-architecture"
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
                  href={liveAppUrl}
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
                    maxWidth: '820px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.step3.desc}
                </p>

                {/* PRODUCTION-READY LINK BLOCK & TECHNICAL METADATA */}
                <div
                  id="talent-showcase-production-block"
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
                            backgroundColor: '#16A34A',
                            display: 'inline-block',
                          }}
                        />
                        STATUS: 200 OK · RUNTIME ACTIVE
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#666660',
                          letterSpacing: '0.04em',
                        }}
                      >
                        PROTOCOL: HTTPS // GEMINI 2.5 ENGINE
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
                      LATENCY: 42MS · PARITY: 100%
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
                        {isEs ? 'ACCESO DIRECTO A LA PLATAFORMA EN PRODUCCIÓN' : 'ACTIVE PLATFORM APPLICATION ENDPOINT'}
                      </span>
                      <code
                        style={{
                          fontSize: 'clamp(0.8rem, 1.8vw, 0.92rem)',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#121210',
                          fontWeight: 700,
                          wordBreak: 'break-all',
                        }}
                      >
                        https://aistudio.google.com/apps/a6a43dcb-0f83-4b02-aed2-169360546c3a
                      </code>
                    </div>

                    <a
                      id="btn-live-talent-showcase"
                      href={liveAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Abrir aplicación Talent Showcase Hub en vivo"
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
                      <span>{isEs ? 'ABRIR APP EN VIVO' : 'OPEN LIVE APP'}</span>
                      <span style={{ fontWeight: 800, fontSize: '1rem' }}>↗</span>
                    </a>
                  </div>
                </div>

                {/* Visual Interface Preview Banner with Mode Switcher */}
                <div
                  style={{
                    border: '1px solid #121210',
                    backgroundColor: '#F8F8F6',
                    overflow: 'hidden',
                    marginBottom: '2rem',
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
                      <span>SOURCE: /public/talent-showcase-hub/workspace.png</span>
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
                        {isEs ? '◉ CAPTURA DE INTERFAZ' : '◉ UI SCREENSHOT'}
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
                        {isEs ? '▷ EMBED DIRECTO' : '▷ EMBED VIEW'}
                      </button>
                    </div>
                  </div>

                  {previewMode === 'screenshot' ? (
                    <div>
                      <img
                        src="/talent-showcase-hub/workspace.png"
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
                        <span>{cs.step3.caption}</span>
                        <span style={{ color: '#121210', fontWeight: 700 }}>AI MATCH: 94% · DUAL INTERFACE</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ position: 'relative', width: '100%', minHeight: '520px', backgroundColor: '#FAFAF8' }}>
                      <iframe
                        src={liveAppUrl}
                        title="Talent Showcase & Evaluation Hub Live Preview"
                        style={{
                          width: '100%',
                          height: '620px',
                          border: 'none',
                          display: 'block',
                        }}
                      />
                      <div
                        style={{
                          padding: '0.65rem 1rem',
                          backgroundColor: '#FFFFFF',
                          borderTop: '1px solid #E2E2DE',
                          fontSize: '0.76rem',
                          fontFamily: 'ui-monospace, monospace',
                          color: '#666660',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span>HOST: Google AI Studio Applet Runtime</span>
                        <a
                          href={liveAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#121210', fontWeight: 700, textDecoration: 'none' }}
                        >
                          {isEs ? 'Abrir en pestaña nueva ↗' : 'Open full window ↗'}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5 Core System Pillars */}
                <div style={{ marginBottom: '1.75rem' }}>
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

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {cs.step3.systems.map((system, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: '1.15rem',
                          backgroundColor: '#FAFAF8',
                          border: '1px solid #E2E2DE',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span
                            style={{
                              fontSize: '0.85rem',
                              fontFamily: 'ui-monospace, monospace',
                              fontWeight: 700,
                              color: '#121210',
                            }}
                          >
                            {system.title}
                          </span>
                          <span
                            style={{
                              fontSize: '0.66rem',
                              fontFamily: 'ui-monospace, monospace',
                              backgroundColor: '#EAEAE6',
                              padding: '0.2rem 0.45rem',
                              color: '#444440',
                              fontWeight: 600,
                            }}
                          >
                            {system.badge}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.88rem', color: '#444440', lineHeight: 1.5, margin: 0 }}>
                          {system.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Feature List */}
                <div
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid #E2E2DE',
                    padding: 'clamp(1rem, 3vw, 1.5rem)',
                  }}
                >
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {cs.step3.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.94rem',
                          color: '#262624',
                          lineHeight: 1.6,
                          textWrap: 'pretty',
                        }}
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* STEP 04: MEASURABLE IMPACT */}
            <section
              id="step-04-measurable-impact"
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
                  gap: '0.75rem',
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
                    {cs.impact.num}
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
                    {cs.impact.tag}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#16A34A',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  QUANTIFIABLE ROI
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
                  {cs.impact.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#444440',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                    maxWidth: '820px',
                    textWrap: 'pretty',
                  }}
                >
                  {cs.impact.desc}
                </p>

                {/* 4 Metrics Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {cs.impact.metrics.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.35rem',
                        backgroundColor: '#FAFAF8',
                        border: '1px solid #121210',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}
                    >
                      <div
                        className="bauhaus-num"
                        style={{
                          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                          fontWeight: 800,
                          color: '#121210',
                          lineHeight: 1,
                        }}
                      >
                        {item.metric}
                      </div>
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontFamily: 'ui-monospace, monospace',
                          fontWeight: 700,
                          color: '#121210',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.label}
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#444440', lineHeight: 1.5, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* SUMMARY & DIRECT CALL TO ACTION */}
          <section
            id="summary-talent-showcase"
            style={{
              marginTop: '4rem',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              backgroundColor: '#FAFAF8',
              border: '1px solid #121210',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                {cs.summary.tag}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#121210',
                  letterSpacing: '-0.025em',
                  marginBottom: '0.75rem',
                }}
              >
                {cs.summary.title}
              </h2>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#444440',
                  lineHeight: 1.65,
                  maxWidth: '820px',
                }}
              >
                {cs.summary.description}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}
            >
              <a
                href={fwa.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 1.6rem',
                  backgroundColor: '#121210',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  border: '1px solid #121210',
                  transition: 'all 0.15s ease',
                  minHeight: '48px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#262624';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#121210';
                }}
              >
                <span>{cs.summary.ctaConsultation}</span>
              </a>

              <a
                href={liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.9rem 1.6rem',
                  backgroundColor: '#FFFFFF',
                  color: '#121210',
                  textDecoration: 'none',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  border: '1px solid #121210',
                  transition: 'all 0.15s ease',
                  minHeight: '48px',
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
                <span>{isEs ? 'ABRIR APP EN VIVO ↗' : 'OPEN LIVE APP ↗'}</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
