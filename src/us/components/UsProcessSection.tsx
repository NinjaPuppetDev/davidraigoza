export default function UsProcessSection() {
  const phases = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We discuss your business, objectives, existing digital presence, and what needs to be achieved.',
      tag: 'DISCOVERY',
    },
    {
      num: '02',
      title: 'Scope',
      desc: 'We define what will be built, what is included, and the expected delivery timeline.',
      tag: 'SCOPE',
    },
    {
      num: '03',
      title: 'Design + Development',
      desc: 'The product is designed and developed as one integrated process, with progressive review.',
      tag: 'EXECUTION',
      accent: '#2563EB',
    },
    {
      num: '04',
      title: 'Review + Launch',
      desc: 'The final details are reviewed, the website is published, analytics are connected, and contact channels are activated. 3 review rounds included.',
      tag: 'DELIVERY',
      accent: '#16A34A',
    },
  ];

  return (
    <section id="process" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          09 / WORKING METHODOLOGY
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          Four-stage process
        </h2>
      </div>

      <div className="process-workflow-grid">
        {phases.map((p, idx) => (
          <div
            key={p.num}
            id={`us-process-step-${p.num}`}
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
                  PHASE {p.num}
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
