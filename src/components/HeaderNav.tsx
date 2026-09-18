import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

export default function HeaderNav() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('que-incluye');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active section scroll spy to highlight current tab
  useEffect(() => {
    const sections = ['que-incluye', 'respaldo', 'transparencia', 'proceso'];
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
    t.header.nav.essentials,
    t.header.nav.backing,
    t.header.nav.investment,
    t.header.nav.process,
  ];

  return (
    <header
      id="negocios-header-nav"
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
          id="nav-brand-link"
          href="/"
          aria-label="David Raigoza"
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
        id="header-section-tabs"
        className="header-desktop-tabs"
        aria-label="Navegación principal"
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
              id={`nav-tab-${item.id}`}
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

      {/* Right Controls: Bespoke Language Tabs & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Architectural Language Switcher Tabs */}
        <div
          id="header-language-tabs"
          role="tablist"
          aria-label={t.header.langSwitchAria}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid #121210',
            padding: '2px',
            gap: '2px',
            position: 'relative',
          }}
        >
          {/* Subtle technical corner accents */}
          <button
            type="button"
            role="tab"
            id="lang-tab-es"
            aria-selected={language === 'es'}
            onClick={() => setLanguage('es')}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.65rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: language === 'es' ? '#121210' : 'transparent',
              color: language === 'es' ? '#F8F8F6' : '#666660',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              if (language !== 'es') {
                e.currentTarget.style.backgroundColor = '#F0F0EC';
                e.currentTarget.style.color = '#121210';
              }
            }}
            onMouseLeave={(e) => {
              if (language !== 'es') {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#666660';
              }
            }}
          >
            {language === 'es' && (
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#16A34A',
                  display: 'inline-block',
                }}
              />
            )}
            ES
          </button>

          <button
            type="button"
            role="tab"
            id="lang-tab-en"
            aria-selected={language === 'en'}
            onClick={() => setLanguage('en')}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.65rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: language === 'en' ? '#121210' : 'transparent',
              color: language === 'en' ? '#F8F8F6' : '#666660',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              if (language !== 'en') {
                e.currentTarget.style.backgroundColor = '#F0F0EC';
                e.currentTarget.style.color = '#121210';
              }
            }}
            onMouseLeave={(e) => {
              if (language !== 'en') {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#666660';
              }
            }}
          >
            {language === 'en' && (
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#16A34A',
                  display: 'inline-block',
                }}
              />
            )}
            EN
          </button>
        </div>

        {/* Instagram Profile Link (Desktop) */}
        <a
          id="negocios-header-instagram-btn"
          className="instagram-header-btn"
          href="https://www.instagram.com/raigoza_david_design/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
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
            gap: '0.4rem',
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
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: 'inline-block' }}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="header-btn-text">{t.header.instagram}</span>
        </a>

        {/* Direct WhatsApp CTA */}
        <a
          id="nav-whatsapp-cta"
          className="whatsapp-header-btn"
          href={t.floatingWhatsApp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
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
              backgroundColor: '#16A34A',
              display: 'inline-block',
            }}
          />
          <span className="header-whatsapp-label">{t.header.whatsapp}</span>
        </a>

        {/* Mobile Section Menu Toggle */}
        <button
          type="button"
          id="header-mobile-toggle"
          className="header-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileMenuOpen}
          style={{
            display: 'none',
            padding: '0.45rem 0.65rem',
            backgroundColor: mobileMenuOpen ? '#121210' : '#FFFFFF',
            color: mobileMenuOpen ? '#FFFFFF' : '#121210',
            border: '1px solid #121210',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? '[✕]' : '[MENU]'}
        </button>
      </div>

      {/* Mobile Drawer Navigation Tabs */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-drawer"
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
            Secciones // Sections
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
        </div>
      )}
    </header>
  );
}
