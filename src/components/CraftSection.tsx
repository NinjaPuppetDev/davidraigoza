import { useLanguage } from '../context/LanguageContext';

export default function CraftSection() {
  const { t } = useLanguage();
  const cr = t.craft;

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
          {cr.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.5rem', textWrap: 'balance' }}>
          {cr.title}
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          {cr.subtitle}
        </p>
      </div>

      <div className="craft-editorial-layout">
        {/* Cell 1: 15+ Años de Trayectoria (Anchor Lead - Active Cobalt Blue Field) */}
        <div
          id="craft-card-01"
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
                {cr.card1.badge}
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              {cr.card1.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#DBEAFE', lineHeight: 1.6, margin: 0, maxWidth: '44ch', textWrap: 'pretty' }}>
            {cr.card1.desc}
          </p>
        </div>

        {/* Cell 2: Diseño + Desarrollo Unificado */}
        <div
          id="craft-card-02"
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
                {cr.card2.badge}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#121210', marginBottom: '0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              {cr.card2.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#444440', lineHeight: 1.58, margin: 0, textWrap: 'pretty' }}>
            {cr.card2.desc}
          </p>
        </div>

        {/* Cell 3: Reconocimientos */}
        <div
          id="craft-card-03"
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
                {cr.card3.badge}
              </span>
            </div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 600, color: '#121210', marginBottom: '0.55rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              {cr.card3.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.865rem', color: '#444440', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            {cr.card3.desc}
          </p>
        </div>

        {/* Cell 4: Proceso Directo */}
        <div
          id="craft-card-04"
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
                {cr.card4.badge}
              </span>
            </div>
            <h3 style={{ fontSize: '1.12rem', fontWeight: 600, color: '#121210', marginBottom: '0.55rem', letterSpacing: '-0.01em', textWrap: 'balance' }}>
              {cr.card4.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.865rem', color: '#444440', lineHeight: 1.55, margin: 0, textWrap: 'pretty' }}>
            {cr.card4.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
