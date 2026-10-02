import { INTERNATIONAL_CONFIG } from '../config';

export default function UsTransparencySection() {
  return (
    <section id="investment" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          04 / ECONOMIC TRANSPARENCY
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.5rem', textWrap: 'balance' }}>
          We build from clarity.
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, textWrap: 'pretty', maxWidth: '64ch' }}>
          A transparent commercial framework with defined scope, visible starting investment, and clear ongoing maintenance or self-hosting options.
        </p>
      </div>

      <div className="economic-ledger-split">
        {/* Primary Ledger Card: Base Investment */}
        <div
          id="us-cost-base-investment"
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: 'clamp(0.58rem, 2vw, 0.7rem)', fontFamily: 'ui-monospace, monospace', color: '#999990', fontWeight: 600, textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
                CONCEPT 01 · BASE FEE
              </span>
              <span
                style={{
                  fontSize: 'clamp(0.56rem, 1.9vw, 0.65rem)',
                  fontFamily: 'ui-monospace, monospace',
                  padding: '0.15rem 0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#10B981', flexShrink: 0 }} />
                7 BUSINESS DAYS
              </span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              App Launch
            </h3>
            <p className="bauhaus-num" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.5rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              {INTERNATIONAL_CONFIG.startingPrice}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '0.94rem', color: '#D4D4D0', lineHeight: 1.6, margin: '0 0 1rem 0', borderTop: '1px solid #282824', paddingTop: '1.25rem', textWrap: 'pretty' }}>
              End-to-end design, engineering, and live production deployment.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#A3A39E', backgroundColor: '#1F1F1C', padding: '0.2rem 0.55rem', border: '1px solid #333330' }}>
                • 7 Business Days
              </span>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#A3A39E', backgroundColor: '#1F1F1C', padding: '0.2rem 0.55rem', border: '1px solid #333330' }}>
                • 2-Gate Approval
              </span>
              <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#A3A39E', backgroundColor: '#1F1F1C', padding: '0.2rem 0.55rem', border: '1px solid #333330' }}>
                • 100% Code Ownership
              </span>
            </div>
          </div>
        </div>

        {/* Ancillary External Costs Ledger & Contra */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Domain name */}
          <div
            id="us-cost-domain"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              transitionDelay: '40ms',
            }}
          >
            <div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'ui-monospace, monospace', color: '#666660', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                CONCEPT 02 · DIRECT ASSET
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
                Domain
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#444440', marginBottom: '0.75rem', lineHeight: 1.5, textWrap: 'pretty' }}>
                Web address registered under your name with total ownership. Pricing depends on TLD extension (.com, .co, .ai) and availability.
              </p>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#666660', lineHeight: 1.5, margin: 0, borderTop: '1px solid #E2E2DE', paddingTop: '0.85rem', textWrap: 'pretty' }}>
              External Resource
            </p>
          </div>

          {/* Hosting & cloud services */}
          <div
            id="us-cost-hosting"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              borderTop: '3px solid #2563EB',
              transitionDelay: '80ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: '0.35rem', marginBottom: '0.4rem', width: '100%', minWidth: 0 }}>
                <span style={{ fontSize: 'clamp(0.48rem, 1.45vw, 0.62rem)', fontFamily: 'ui-monospace, monospace', color: '#666660', textTransform: 'uppercase', letterSpacing: '-0.01em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
                  CONCEPT 03 · MANAGED INFRASTRUCTURE
                </span>
                <span
                  style={{
                    fontSize: 'clamp(0.48rem, 1.4vw, 0.58rem)',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#1D4ED8',
                    backgroundColor: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    padding: '0.1rem 0.32rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.22rem',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#2563EB', flexShrink: 0 }} />
                  $40 USD / month
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
                Managed Infrastructure
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#444440', marginBottom: '0.75rem', lineHeight: 1.5, textWrap: 'pretty' }}>
                High-performance hosting, daily backups, and continuous protection.
              </p>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#666660', lineHeight: 1.5, margin: 0, borderTop: '1px solid #E2E2DE', paddingTop: '0.85rem', textWrap: 'pretty' }}>
              Optional • Maintain 100% code ownership if opted out.
            </p>
          </div>

          {/* Optional Contra Payment Method */}
          <div
            id="us-cost-contra"
            className="card-hover scroll-reveal-scale"
            style={{
              backgroundColor: '#FFFFFF',
              padding: 'clamp(1.5rem, 2.5vw, 1.85rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E2DE',
              borderLeft: '3px solid #2563EB',
              transitionDelay: '120ms',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap', gap: '0.4rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: 'clamp(0.55rem, 1.85vw, 0.68rem)', fontFamily: 'ui-monospace, monospace', color: '#2563EB', textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
                  OPTIONAL PAYMENT METHOD
                </span>
                <span
                  style={{
                    fontSize: 'clamp(0.54rem, 1.8vw, 0.62rem)',
                    fontFamily: 'ui-monospace, monospace',
                    color: '#2563EB',
                    backgroundColor: '#EFF6FF',
                    border: '1px solid #DBEAFE',
                    padding: '0.1rem 0.4rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  FLEXIBLE
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
                {INTERNATIONAL_CONFIG.contraHeadline}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#444440', marginBottom: '0.85rem', lineHeight: 1.5, textWrap: 'pretty' }}>
                {INTERNATIONAL_CONFIG.contraCopy}
              </p>
            </div>
            <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '0.85rem' }}>
              <a
                id="contra-profile-link"
                href={INTERNATIONAL_CONFIG.contraUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#2563EB',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
              >
                {INTERNATIONAL_CONFIG.contraCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
