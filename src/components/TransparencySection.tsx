import { useLanguage } from '../context/LanguageContext';

export default function TransparencySection() {
  const { t } = useLanguage();
  const tr = t.transparency;

  return (
    <section id="transparencia" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          {tr.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: tr.subtitle ? '0.5rem' : '0', textWrap: 'balance' }}>
          {tr.title}
        </h2>
        {tr.subtitle ? (
          <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, textWrap: 'pretty' }}>
            {tr.subtitle}
          </p>
        ) : null}
      </div>

      <div className="economic-ledger-split">
        {/* Primary Ledger Card: Direct Design & Development Investment */}
        <div
          id="cost-base-investment"
          className="card-hover scroll-reveal-scale"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid #121210',
            minHeight: '260px',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontFamily: 'ui-monospace, monospace', color: '#999990', fontWeight: 600, textTransform: 'uppercase' }}>
                {tr.baseCost.concept}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                {tr.baseCost.badge}
              </span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              {tr.baseCost.title}
            </h3>
            <p className="bauhaus-num" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.5rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              {tr.baseCost.amount}
            </p>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#D4D4D0', lineHeight: 1.6, margin: 0, borderTop: '1px solid #282824', paddingTop: '1.25rem', textWrap: 'pretty' }}>
            {tr.baseCost.desc}
          </p>
        </div>

        {/* Ancillary External Costs Ledger: Dominio & Hosting */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            id="cost-domain"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              transitionDelay: '60ms',
            }}
          >
            <div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#666660', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                {tr.domain.concept}
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
                {tr.domain.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#444440', marginBottom: '0.75rem', lineHeight: 1.5, textWrap: 'pretty' }}>
                {tr.domain.desc}
              </p>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#666660', lineHeight: 1.5, margin: 0, borderTop: '1px solid #E2E2DE', paddingTop: '0.85rem', textWrap: 'pretty' }}>
              {tr.domain.cost}
            </p>
          </div>

          <div
            id="cost-hosting"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              borderTop: '3px solid #EF4444',
              transitionDelay: '120ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#666660', textTransform: 'uppercase' }}>
                  {tr.hosting.concept}
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#B91C1C',
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FECACA',
                    padding: '0.1rem 0.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  {t.header.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
                {tr.hosting.title}
              </h3>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#666660', lineHeight: 1.5, margin: 0, borderTop: '1px solid #E2E2DE', paddingTop: '0.85rem', textWrap: 'pretty' }}>
              {tr.hosting.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
