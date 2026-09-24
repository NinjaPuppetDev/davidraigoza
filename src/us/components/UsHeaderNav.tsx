import { useEffect, useState } from 'react';
import { INTERNATIONAL_CONFIG } from '../config';

export default function UsHeaderNav() {
  const [activeSection, setActiveSection] = useState<string>('what-is-included');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active section scroll spy
  useEffect(() => {
    const sections = ['what-is-included', 'experience', 'investment', 'process'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'what-is-included', num: '01', label: "What's included" },
    { id: 'experience', num: '02', label: 'Experience' },
    { id: 'investment', num: '03', label: 'Investment' },
    { id: 'process', num: '04', label: 'Process' },
  ];

  return (
    <header
      id="international-header-nav"
      className="negocios-header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(248, 248, 246, 0.94)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        borderBottom: '1px solid #E2E2DE',
      }}
    >
      {/* Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <a
          id="us-nav-brand-link"
          href="/us/"
          aria-label="David Raigoza - International"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/logo/logo.svg"
            alt="David Raigoza Logo"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </a>
      </div>

      {/* Desktop Section Navigation Tabs (Architectural Ledger Design) */}
      <nav
        id="us-header-section-tabs"
        className="header-desktop-tabs"
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          backgroundColor: '#EFEFEA',
          border: '1px solid #E2E2DE',
          padding: '2px',
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              id={`us-nav-tab-${item.id}`}
              className="header-arch-tab"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: isActive ? '#121210' : '#666660',
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                borderBottom: isActive ? '2px solid #121210' : '2px solid transparent',
                fontWeight: isActive ? 600 : 450,
                transition: 'all 0.18s ease',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#121210';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#666660';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  color: isActive ? '#2563EB' : '#888880',
                  fontWeight: 600,
                }}
              >
                [{item.num}]
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Right Controls: LinkedIn & Primary CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* LinkedIn Profile Link (Replaces Instagram in primary navigation) */}
        <a
          id="us-header-linkedin-btn"
          className="instagram-header-btn"
          href={INTERNATIONAL_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile: David Raigoza"
          style={{
            color: '#121210',
            textDecoration: 'none',
            padding: '0.45rem 0.85rem',
            borderRadius: '999px',
            fontWeight: 500,
            fontSize: '0.82rem',
            minHeight: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            justifyContent: 'center',
            border: '1px solid #D4D4D0',
            backgroundColor: '#FFFFFF',
            transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F4F4F2';
            e.currentTarget.style.borderColor = '#121210';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#D4D4D0';
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: 'inline-block', flexShrink: 0 }}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span className="header-btn-text">LinkedIn</span>
        </a>

        {/* Primary CTA: Schedule a 15-minute discovery call */}
        <a
          id="us-header-discovery-cta"
          className="us-discovery-header-btn"
          href={INTERNATIONAL_CONFIG.calComUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule a 15-minute discovery call"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '0.45rem 1.05rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.82rem',
            minHeight: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            justifyContent: 'center',
            border: '1px solid #121210',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#262624';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121210';
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#2563EB',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span>Schedule call →</span>
        </a>


        {/* Mobile Menu Toggle */}
        <button
          type="button"
          id="us-header-mobile-toggle"
          className="header-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.45rem 0.65rem',
            backgroundColor: mobileMenuOpen ? '#121210' : '#FFFFFF',
            color: mobileMenuOpen ? '#FFFFFF' : '#121210',
            border: '1px solid #121210',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            minHeight: '36px',
            transition: 'background-color 0.15s ease, color 0.15s ease',
          }}
        >
          {mobileMenuOpen ? '[✕]' : '[MENU]'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="us-header-mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#F8F8F6',
            borderBottom: '2px solid #121210',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            zIndex: 49,
          }}
        >
          <div
            style={{
              fontSize: '0.68rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#888880',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.25rem',
            }}
          >
            Sections
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                backgroundColor: activeSection === item.id ? '#FFFFFF' : '#F0F0EC',
                border: activeSection === item.id ? '1px solid #121210' : '1px solid #E2E2DE',
                color: '#121210',
                textDecoration: 'none',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <span>{item.label}</span>
              <span style={{ color: '#2563EB', fontSize: '0.75rem' }}>[{item.num}]</span>
            </a>
          ))}

          <div
            style={{
              fontSize: '0.68rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#888880',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginTop: '0.5rem',
              marginBottom: '0.15rem',
            }}
          >
            Direct Channels
          </div>

          <a
            id="us-mobile-drawer-cta-btn"
            href={INTERNATIONAL_CONFIG.calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#121210',
              color: '#FFFFFF',
              border: '1px solid #121210',
              textDecoration: 'none',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2563EB',
                display: 'inline-block',
              }}
            />
            <span>Schedule discovery call →</span>
          </a>

          <a
            id="us-mobile-drawer-linkedin-btn"
            href={INTERNATIONAL_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#FFFFFF',
              color: '#121210',
              border: '1px solid #121210',
              textDecoration: 'none',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'inline-block' }}
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn Profile</span>
          </a>

          <a
            id="us-mobile-drawer-email-btn"
            href={`mailto:${INTERNATIONAL_CONFIG.email}?subject=Project%20Discovery`}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#F0F0EC',
              color: '#121210',
              border: '1px solid #E2E2DE',
              textDecoration: 'none',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <span>Email David →</span>
          </a>

        </div>
      )}
    </header>
  );
}
