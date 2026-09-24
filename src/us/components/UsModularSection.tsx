export default function UsModularSection() {
  const modularFeatures = [
    'Booking systems',
    'Custom forms',
    'Product catalogues',
    'Payment systems',
    'Data integrations',
    'Automations',
    'AI functionality',
    'Bilingual websites',
    'Custom tools',
  ];

  return (
    <>
      {/* Post Launch Framework */}
      <section className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
        <div style={{ marginBottom: '1.5rem' }}>
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
            07 / CONTINUOUS EVOLUTION
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
            Your website after launch
          </h2>
        </div>

        <div
          id="us-post-launch-framework"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E2DE',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            maxWidth: '820px',
          }}
        >
          <p style={{ color: '#121210', fontSize: '1.05rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.5, textWrap: 'pretty' }}>
            A website never has to stay frozen in time.
          </p>
          <p style={{ color: '#444440', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6, textWrap: 'pretty' }}>
            With Microsoft Clarity analytics connected, you observe how real visitors navigate and interact with your site, enabling data-informed decisions. Whenever you require new modules down the line, we expand your architecture seamlessly.
          </p>
          <div
            style={{
              borderLeft: '3px solid #2563EB',
              paddingLeft: '1.15rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#121210',
              lineHeight: 1.5,
              textWrap: 'pretty',
            }}
          >
            The goal is never hoarding technology: it’s engineering exactly what your business requires.
          </div>
        </div>
      </section>

      {/* Modular Expansions */}
      <section className="scroll-reveal" style={{ padding: '3.5rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
            08 / MODULAR EXPANSIONS
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
            What can your project incorporate?
          </h2>
          <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
            The essential package covers foundational credibility and clarity. Additional functionality can be added when it provides concrete business value:
          </p>
        </div>

        {/* Modular Badges Framework */}
        <div
          id="us-modular-features-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.75rem',
          }}
        >
          {modularFeatures.map((feat) => (
            <span
              key={feat}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D8D8D4',
                padding: '0.55rem 0.95rem',
                fontSize: '0.82rem',
                color: '#121210',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {feat}
            </span>
          ))}
        </div>

        <p style={{ fontSize: '0.85rem', color: '#666660', fontFamily: 'ui-monospace, monospace', margin: 0, display: 'flex', alignItems: 'flex-start', gap: '0.45rem', textWrap: 'pretty' }}>
          <span style={{ color: '#2563EB', fontWeight: 700 }}>*</span>
          <span>Additional functionality may change scope and pricing. All additions are clearly scoped and agreed upon prior to implementation.</span>
        </p>
      </section>
    </>
  );
}
