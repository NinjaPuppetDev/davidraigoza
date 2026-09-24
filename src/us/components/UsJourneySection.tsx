export default function UsJourneySection() {
  const steps = [
    { step: '01', label: 'They find you', role: 'Search engine visibility, professional presence, and direct links' },
    { step: '02', label: 'They meet you', role: 'Visual identity, value proposition, and professional authority' },
    { step: '03', label: 'They understand you', role: 'Services explained with total clarity and zero ambiguity' },
    { step: '04', label: 'They contact you', role: 'Direct scheduling via discovery call and email inquiry', isGoal: true },
  ];

  return (
    <section className="scroll-reveal-left" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
      <div style={{ marginBottom: '2rem' }}>
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
          02 / CUSTOMER JOURNEY
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          From discovery to direct inquiry
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
          Your digital presence fulfills a deliberate objective at each stage:
        </p>
      </div>

      {/* Unified 4-Step Journey Matrix */}
      <div className="journey-grid-container" style={{ marginBottom: '2rem' }}>
        {steps.map((st, i) => (
          <div
            key={st.step}
            id={`us-journey-step-${st.step}`}
            style={{
              backgroundColor: i === 3 ? '#121210' : '#FAFAFA',
              color: i === 3 ? '#FFFFFF' : '#121210',
              padding: '1.75rem 1.5rem',
              borderTop: i === 3 ? '2px solid #2563EB' : '2px solid transparent',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.8rem', fontWeight: 600, color: i === 3 ? '#A3A39E' : '#888880' }}>
                STEP {st.step}
              </span>
              {i < 3 ? (
                <span style={{ color: '#AAAAA0', fontSize: '0.85rem' }}>→</span>
              ) : (
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'ui-monospace, monospace',
                    padding: '0.15rem 0.5rem',
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#93C5FD' }} />
                  GOAL
                </span>
              )}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: i === 3 ? '#FFFFFF' : '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
              {st.label}
            </div>
            <div style={{ fontSize: '0.82rem', color: i === 3 ? '#D4D4D0' : '#555550', lineHeight: 1.45, textWrap: 'pretty' }}>
              {st.role}
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '68ch' }}>
        <p style={{ color: '#444440', fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          The site is engineered around this exact conversion journey.
        </p>
        <p style={{ color: '#444440', fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          Not every business needs identical toolsets. We start from your real operational requirements and add modular features only when they create genuine business value.
        </p>
        <div
          style={{
            fontSize: '0.85rem',
            color: '#555550',
            fontFamily: 'ui-monospace, monospace',
            marginTop: '1.25rem',
            padding: '0.85rem 1.15rem',
            borderLeft: '3px solid #2563EB',
            borderTop: '1px solid #E2E2DE',
            borderRight: '1px solid #E2E2DE',
            borderBottom: '1px solid #E2E2DE',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
          }}
        >
          <span style={{ color: '#2563EB', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.4 }}>ℹ</span>
          <span style={{ lineHeight: 1.5, textWrap: 'pretty' }}>
            FLOW ARCHITECTURE: DISCOVERY → CREDIBILITY → DIRECT CONVERSION
          </span>
        </div>
      </div>
    </section>
  );
}
