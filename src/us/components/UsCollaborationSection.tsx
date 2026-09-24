export default function UsCollaborationSection() {
  return (
    <section className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          05 / COLLABORATIVE METHODOLOGY
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          Engineered alongside you
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
          We don’t deliver a mockup and disappear. We collaborate directly with you step-by-step until we achieve a solution that genuinely performs for your business.
        </p>
      </div>

      <div
        id="us-review-rounds-container"
        className="colaboracion-split"
      >
        <div
          className="card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E2DE',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                padding: '0.2rem 0.6rem',
                backgroundColor: '#F0F0EC',
                color: '#121210',
                marginBottom: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
              CONTROLLED QUALITY
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#121210', marginBottom: '0.85rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              3 review rounds included
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#444440', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
            During the build, you have three dedicated review rounds to critique progress, refine details, and approve iterations before deployment.
          </p>
        </div>

        <div
          className="card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E2DE',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
            transitionDelay: '60ms',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                padding: '0.2rem 0.6rem',
                backgroundColor: '#121210',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              DEFINED SCOPE
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#121210', marginBottom: '0.85rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              No unexpected surprises
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#444440', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
            Every adjustment is evaluated within the initial project framework. If you need expanded capabilities, we quote them transparently before writing code.
          </p>
        </div>
      </div>
    </section>
  );
}
