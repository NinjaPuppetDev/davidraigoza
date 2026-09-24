export default function UsCraftSection() {
  return (
    <section className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          06 / INTEGRATED CRAFT
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.5rem', textWrap: 'balance' }}>
          A deliberate approach to digital presence
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          David is a Product Design Engineer working comprehensively across design, user experience, and technical code execution.
        </p>
      </div>

      <div className="craft-editorial-layout">
        {/* Cell 1: 15+ Years Track Record */}
        <div
          id="us-craft-card-01"
          className="craft-cell-experience card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#1D4ED8',
            color: '#FFFFFF',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #1E40AF',
            minHeight: '230px',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.75)' }}>
                01
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                TRACK RECORD
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              15+ years of experience
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#DBEAFE', lineHeight: 1.6, margin: 0, maxWidth: '44ch', textWrap: 'pretty' }}>
            Proven background building digital products, web architectures, and interactive systems, from conversion websites to high-precision engineering tools.
          </p>
        </div>

        {/* Cell 2: Dual Discipline - Design + Development */}
        <div
          id="us-craft-card-02"
          className="craft-cell-unified card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(1.75rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #E2E2DE',
            minHeight: '230px',
            transitionDelay: '50ms',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#666660' }}>
                02
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: '#F0F0EC',
                  color: '#121210',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
                DUAL DISCIPLINE
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#121210', marginBottom: '0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              Design + development
            </h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#444440', lineHeight: 1.58, margin: 0, textWrap: 'pretty' }}>
            No need to coordinate between fragmented teams. Your project is conceived, designed, and coded under a single cohesive vision.
          </p>
        </div>

        {/* Cell 3: Recognitions */}
        <div
          id="us-craft-card-03"
          className="craft-cell-awards card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #E2E2DE',
            minHeight: '200px',
            transitionDelay: '100ms',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.75rem', color: '#666660' }}>
                03
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666660',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D97706' }} />
                DISTINCTION
              </span>
            </div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 600, color: '#121210', marginBottom: '0.55rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              Industry recognitions
            </h3>
          </div>
          <p style={{ fontSize: '0.865rem', color: '#444440', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            Recognized work across digital product design and innovation, including a Lápiz de Acero and Capital Semilla.
          </p>
        </div>

        {/* Cell 4: Direct Collaboration */}
        <div
          id="us-craft-card-04"
          className="craft-cell-direct card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #E2E2DE',
            minHeight: '200px',
            transitionDelay: '150ms',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.75rem', color: '#666660' }}>
                04
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', color: '#666660' }}>
                DIRECT CONTACT
              </span>
            </div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 600, color: '#121210', marginBottom: '0.55rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              Direct collaboration
            </h3>
          </div>
          <p style={{ fontSize: '0.865rem', color: '#444440', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            You partner directly with David throughout the entire process, with zero agency middlemen and zero communication loss.
          </p>
        </div>
      </div>
    </section>
  );
}
