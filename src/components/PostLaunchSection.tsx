import { useLanguage } from '../context/LanguageContext';

export default function PostLaunchSection() {
  const { t } = useLanguage();
  const pl = t.postLaunch;

  return (
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
          {pl.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {pl.title}
        </h2>
      </div>

      <div
        id="post-launch-framework"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E2DE',
          padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          maxWidth: '820px',
        }}
      >
        <p style={{ color: '#121210', fontSize: '1.05rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.5, textWrap: 'pretty' }}>
          {pl.lead}
        </p>
        <p style={{ color: '#444440', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          {pl.desc}
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
          {pl.highlight}
        </div>
      </div>
    </section>
  );
}
