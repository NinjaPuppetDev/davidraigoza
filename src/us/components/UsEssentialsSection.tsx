export default function UsEssentialsSection() {
  const infraItems = [
    {
      num: '05',
      title: 'Responsive Mobile Experience',
      desc: 'Fluid layout calibrated across modern smartphones, tablets, and desktop displays.',
    },
    {
      num: '06',
      title: 'Publication & Configuration',
      desc: 'Full DNS setup, domain connection, security certificates, and live production deployment.',
    },
    {
      num: '07',
      title: 'Microsoft Clarity Analytics',
      desc: 'Integrated with Microsoft Clarity to track real visitor behavior, interaction heatmaps, and user journeys.',
      accent: '#2563EB',
    },
    {
      num: '08',
      title: 'Direct Client Collaboration',
      desc: 'Partner directly with David from initial architecture to delivery with zero intermediary disconnects.',
    },
  ];

  return (
    <section id="what-is-included" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          01 / ESSENTIAL STRUCTURE
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
            fontWeight: 500,
            color: '#121210',
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
            textWrap: 'balance',
            maxWidth: '24ch',
          }}
        >
          A digital presence that works for your business
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', maxWidth: '64ch', lineHeight: 1.6, textWrap: 'pretty' }}>
          A clear, professional digital presence designed for clients to find you, understand what you do, and initiate a conversation easily.
        </p>
      </div>

      {/* Asymmetrical Bauhaus Architectural Mosaic */}
      <div className="essentials-mosaic">
        {/* 01: Lead Cornerstone - Homepage */}
        <div
          id="us-feature-card-01"
          className="essentials-cell-lead card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '230px',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#121210', lineHeight: 1 }}>
                01
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: '#F0F0EC',
                  color: '#121210',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                ENTRY POINT
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 600, color: '#121210', marginBottom: '0.75rem', letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Homepage
            </h3>
          </div>
          <p style={{ fontSize: '0.98rem', color: '#444440', lineHeight: 1.6, margin: 0, maxWidth: '48ch', textWrap: 'pretty' }}>
            A clear entry point explaining who you are, what you do, and what you offer—engineered to establish authority and trust within seconds.
          </p>
        </div>

        {/* 02: Commercial Offer Anchor - Services & Products */}
        <div
          id="us-feature-card-02"
          className="essentials-cell-secondary card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: 'clamp(1.75rem, 3vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '230px',
            transitionDelay: '40ms',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#121210' }}>
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
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                OFFER
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#121210', marginBottom: '0.75rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              Services / Products
            </h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#444440', lineHeight: 1.58, margin: 0, textWrap: 'pretty' }}>
            A structured presentation of services, products, or professional offerings, organized transparently without jargon.
          </p>
        </div>

        {/* 03: Lead Capture Hub - Contact */}
        <div
          id="us-feature-card-03"
          className="essentials-cell-action-contact card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#FFFFFF',
            padding: '1.75rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '190px',
            transitionDelay: '70ms',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#666660' }}>
                03
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: '#F0F0EC',
                  color: '#121210',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                CONVERSATION
              </span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.6rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              Contact
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#444440', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            Clear contact information and appropriate tools for beginning a conversation, including discovery call scheduling and direct email.
          </p>
        </div>

        {/* 04: Integrated Process - Design + Development */}
        <div
          id="us-feature-card-04"
          className="essentials-cell-action-wa card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '1.75rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '190px',
            transitionDelay: '100ms',
            border: '1px solid #121210',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.75)' }}>
                04
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.2rem 0.55rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#60A5FA' }} />
                INTEGRATED DISCIPLINE
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.6rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              Design + Development
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#E2E2DE', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            Design and development are handled as one integrated process by a single specialist, with zero agency handoff friction.
          </p>
        </div>

        {/* Engineering Baseline Band: 05, 06, 07, 08 */}
        {infraItems.map((item, idx) => (
          <div
            key={item.num}
            id={`us-feature-card-${item.num}`}
            className="essentials-cell-infra card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '1.5rem 1.35rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '185px',
              borderTop: item.num === '07' ? '2px solid #2563EB' : 'none',
              transitionDelay: `${(idx + 4) * 30}ms`,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
                {item.accent && (
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: item.accent }} />
                )}
                <span className="bauhaus-num" style={{ fontSize: '0.75rem', color: item.num === '07' ? '#2563EB' : '#666660', fontWeight: item.num === '07' ? 600 : 400 }}>
                  {item.num}
                </span>
              </div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#121210', marginBottom: '0.55rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
                {item.title}
              </h3>
            </div>
            <p style={{ fontSize: '0.835rem', color: '#555550', lineHeight: 1.5, margin: 0, textWrap: 'pretty' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
