import { INTERNATIONAL_CONFIG } from '../config';

export default function UsContactSection() {
  return (
    <section id="contact" className="scroll-reveal" style={{ padding: '4.5rem 0 3.5rem', borderTop: '1px solid #E2E2DE', textAlign: 'center' }}>
      <span
        style={{
          fontSize: '0.7rem',
          fontFamily: 'ui-monospace, monospace',
          color: '#666660',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          display: 'block',
          marginBottom: '0.75rem',
        }}
      >
        10 / NEXT STEPS
      </span>
      <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.85rem', textWrap: 'balance' }}>
        We build from clarity.
      </h2>
      <p style={{ color: '#444440', fontSize: '1.02rem', marginBottom: '2.25rem', maxWidth: '58ch', margin: '0 auto 2.25rem', lineHeight: 1.6, textWrap: 'pretty' }}>
        Schedule a 15-minute discovery call to discuss your business, clarify your requirements, and determine the appropriate digital product for your needs.
      </p>

      <div className="negocios-cta-actions" style={{ justifyContent: 'center' }}>
        {/* Primary CTA */}
        <a
          id="us-cta-discovery-call"
          href={INTERNATIONAL_CONFIG.calComUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '0.9rem 1.85rem',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.92rem',
            minHeight: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            border: '1px solid #121210',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#262624';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121210';
          }}
        >
          Schedule a 15-minute discovery call <span>→</span>
        </a>
      </div>
    </section>
  );
}
