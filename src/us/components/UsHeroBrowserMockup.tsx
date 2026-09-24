export default function UsHeroBrowserMockup() {
  return (
    <div
      id="hero-browser-mockup"
      className="floating-mockup"
      style={{
        position: 'relative',
        zIndex: 2,
        border: '1px solid #D8D8D4',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 18px 40px -12px rgba(18, 18, 16, 0.09)',
        overflow: 'hidden',
      }}
    >
      {/* Window Chrome */}
      <div
        style={{
          backgroundColor: '#F0F0EC',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid #E2E2DE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444', border: '1px solid #DC2626' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B', border: '1px solid #D97706' }}></div>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981', border: '1px solid #059669' }}></div>
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#666660',
            backgroundColor: '#FFFFFF',
            padding: '0.2rem 0.75rem',
            border: '1px solid #E2E2DE',
            borderRadius: '4px',
          }}
        >
          yourfirm.com
        </div>
        <div style={{ width: '28px' }} />
      </div>

      {/* Viewport Content Instrument */}
      <div style={{ padding: 'clamp(1.25rem, 3vw, 1.85rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '1.15rem', color: '#121210', letterSpacing: '-0.01em' }}>
              Professional Practice
            </div>
            <div style={{ fontSize: '0.82rem', color: '#666660', marginTop: '0.2rem' }}>
              Digital presence built from clarity
            </div>
          </div>
          <span
            style={{
              fontSize: '0.65rem',
              fontFamily: 'ui-monospace, monospace',
              padding: '0.2rem 0.55rem',
              border: '1px solid #A7F3D0',
              borderRadius: '999px',
              backgroundColor: '#ECFDF5',
              color: '#065F46',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 600,
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            LIVE
          </span>
        </div>

        {/* Structural Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              background: '#F8F8F6',
              border: '1px solid #E2E2DE',
              borderRadius: '6px',
              padding: '0.85rem',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: '#222220',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', color: '#666660', fontFamily: 'ui-monospace, monospace', marginBottom: '0.2rem' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
              [MODULE 01]
            </span>
            <div>Services & Offerings</div>
          </div>
          <div
            style={{
              background: '#F8F8F6',
              border: '1px solid #E2E2DE',
              borderRadius: '6px',
              padding: '0.85rem',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: '#222220',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', color: '#666660', fontFamily: 'ui-monospace, monospace', marginBottom: '0.2rem' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
              [MODULE 02]
            </span>
            <div>Clarity Analytics</div>
          </div>
        </div>

        {/* Action Triggers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <div
            style={{
              background: '#121210',
              color: '#FFFFFF',
              padding: '0.65rem 0.85rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Discovery Call
          </div>
          <div
            style={{
              background: '#2563EB',
              color: '#FFFFFF',
              padding: '0.65rem 0.85rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              textAlign: 'center',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
            }}
          >
            <span>Direct Email</span>
          </div>
        </div>
      </div>
    </div>
  );
}
