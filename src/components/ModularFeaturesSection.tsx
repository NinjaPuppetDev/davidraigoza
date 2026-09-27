import { useLanguage } from '../context/LanguageContext';

export default function ModularFeaturesSection() {
  const { t } = useLanguage();
  const m = t.modular;

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
          {m.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {m.title}
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
          {m.subtitle}
        </p>
      </div>

      {/* Modular Badges Framework */}
      <div
        id="modular-features-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.75rem',
        }}
      >
        {m.features.map((feat) => (
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
        <span style={{ color: '#D97706', fontWeight: 700 }}>*</span>
        <span>{m.note}</span>
      </p>
    </section>
  );
}
