export default function UsExperienceSection() {
  return (
    <section id="experience" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#666660',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          03 / PROFESSIONAL EXPERIENCE & RECOGNITIONS
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          Verified background and technical rigor
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', maxWidth: '64ch', lineHeight: 1.6, textWrap: 'pretty' }}>
          Factual track record across digital product engineering, specialized consulting collaboration, and recognized design craft.
        </p>
      </div>

      <div className="respaldo-editorial-layout">
        {/* Left Column: Professional Experience & Client Testimonial */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Card 01: Professional Experience */}
          <div
            id="us-exp-bloominari"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#2563EB',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
                  [01 / PROFESSIONAL EXPERIENCE]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
                  EXPERTISE-DRIVEN
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#121210', marginBottom: '0.75rem', letterSpacing: '-0.015em' }}>
                Experience with expertise-driven businesses
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#444440',
                  lineHeight: 1.6,
                  margin: '0 0 0.85rem 0',
                  textWrap: 'pretty',
                }}
              >
                David has professional experience designing for businesses where expertise, trust, and professional credibility are central to the customer relationship.
              </p>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#444440',
                  lineHeight: 1.6,
                  margin: 0,
                  textWrap: 'pretty',
                }}
              >
                His professional experience includes working with <strong>Bloominari, the parent company behind Virtual Latinos</strong>, as well as experience with consulting, coaching, and other professional services.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '1rem', marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'ui-monospace, monospace', color: '#666660' }}>
                Bloominari · Virtual Latinos
              </span>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#2563EB', fontWeight: 600 }}>
                VERIFIED RELATIONSHIP
              </span>
            </div>
          </div>

          {/* Card 02: Technical Validation / Peer Review */}
          <div
            id="us-exp-coaching"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              transitionDelay: '60ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#16A34A',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
                  [02 / TECHNICAL VALIDATION]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
                  PEER REVIEW
                </span>
              </div>
              <blockquote
                style={{
                  fontSize: '1.08rem',
                  color: '#121210',
                  lineHeight: 1.55,
                  fontStyle: 'normal',
                  margin: '0 0 1.5rem 0',
                  letterSpacing: '-0.01em',
                  textWrap: 'pretty',
                }}
              >
                “Hey man, this is flawless. How did you do it?”
              </blockquote>
            </div>
            <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.94rem', color: '#121210' }}>Carlos Mariño</div>
                <div style={{ fontSize: '0.82rem', color: '#666660' }}>Virtual Latinos</div>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#16A34A', fontWeight: 600 }}>
                VERIFIED PEER
              </span>
            </div>
          </div>

          {/* Melissa Rendón Client Testimonial */}
          <div
            id="testimonial-melissa"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              transitionDelay: '100ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#16A34A',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
                  [03 / CLIENT TESTIMONIAL]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
                  REAL CASE
                </span>
              </div>
              <blockquote
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.18rem)',
                  color: '#121210',
                  lineHeight: 1.5,
                  fontStyle: 'normal',
                  margin: '0 0 1.5rem 0',
                  letterSpacing: '-0.015em',
                  fontWeight: 450,
                  textWrap: 'pretty',
                }}
              >
                “It was a seamless process: David delivered a website completely aligned with my brand and artistic identity.”
              </blockquote>
            </div>
            <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.96rem', color: '#121210' }}>Melissa Rendón</div>
                <div style={{ fontSize: '0.82rem', color: '#666660' }}>Reborn Artist</div>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#16A34A', fontWeight: 600 }}>
                ACTIVE PROJECT
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Background & Honors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Professional Background Card */}
          <div
            id="us-bg-engineer"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#121210',
              color: '#FFFFFF',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #121210',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#93C5FD',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60A5FA' }} />
                  [04 / PROFESSIONAL BACKGROUND]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#A3A39E' }}>
                  EXPERTISE
                </span>
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#FFFFFF', margin: '0 0 0.75rem', letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Product Design Engineer
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#D4D4D0', lineHeight: 1.6, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                15+ years of experience across product design, digital interfaces, websites, and interactive systems.
              </p>
            </div>
            <div
              style={{
                borderTop: '1px solid #282824',
                paddingTop: '1rem',
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#93C5FD',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              DUAL DISCIPLINE: DESIGN + DEVELOPMENT EXECUTION
            </div>
          </div>

          {/* Lápiz de Acero */}
          <div
            id="award-lapiz-acero"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FDE047',
              color: '#121210',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #EAB308',
              transitionDelay: '80ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#121210',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#121210', display: 'inline-block' }} />
                  [05 / DESIGN HERITAGE]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#121210', fontWeight: 700 }}>
                  COLOMBIA
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#121210', margin: '0 0 0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
                Lápiz de Acero
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#262624', lineHeight: 1.6, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                Recognized for national industrial design excellence and product craftsmanship in Colombia.
              </p>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(18, 18, 16, 0.2)',
                paddingTop: '1rem',
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#121210',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              PREMIO NACIONAL DE DISEÑO · COLOMBIA
            </div>
          </div>

          {/* Capital Semilla */}
          <div
            id="award-capital-semilla"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              transitionDelay: '120ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#2563EB',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#2563EB', display: 'inline-block' }} />
                  [06 / ENTREPRENEURIAL HERITAGE]
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#121210', fontWeight: 600 }}>
                  MEDELLÍN
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#121210', margin: '0 0 0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
                Capital Semilla
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#444440', lineHeight: 1.6, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                Awarded for technological innovation and venture development by the Mayor’s Office of Medellín.
              </p>
            </div>
            <div
              style={{
                borderTop: '1px solid #E2E2DE',
                paddingTop: '1rem',
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#121210',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}
            >
              MAYOR’S OFFICE OF MEDELLÍN · INNOVATION FUND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
