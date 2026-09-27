import { useLanguage } from '../context/LanguageContext';

export default function ProcessSection() {
  const { t } = useLanguage();
  const pr = t.process;

  return (
    <section id="proceso" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          {pr.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {pr.title}
        </h2>
      </div>

      <div className="process-workflow-grid">
        {pr.phases.map((p, idx) => (
          <div
            key={p.num}
            id={`process-step-${p.num}`}
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.75rem, 2.5vw, 2.25rem) clamp(1.5rem, 2vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              minHeight: '230px',
              transitionDelay: `${idx * 50}ms`,
              position: 'relative',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span className="bauhaus-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#121210' }}>
                  {pr.phaseLabel} {p.num}
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: p.accent || '#666660',
                    letterSpacing: '0.05em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: p.accent ? 600 : 400,
                  }}
                >
                  {p.accent && (
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: p.accent }} />
                  )}
                  {p.tag}
                </span>
              </div>
              <div style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: '0.75rem', color: '#121210', letterSpacing: '-0.015em', textWrap: 'balance' }}>
                {p.title}
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#444440', lineHeight: 1.58, margin: 0, borderTop: '1px solid #F0F0EC', paddingTop: '1rem', textWrap: 'pretty' }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
