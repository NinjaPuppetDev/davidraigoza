import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, TranslationData, TRANSLATIONS } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  isColombia: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const MANUAL_OVERRIDE_KEY = 'davidraigoza_manual_lang_override';

/**
 * Robust detection if client is located in Colombia:
 * 1. Timezone check (America/Bogota is the official standard IANA timezone for all Colombia)
 * 2. Locale / Accept-Language check (e.g., 'es-CO', 'en-CO', 'es_CO')
 */
export function isColombiaDetected(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // Check IANA TimeZone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && (tz === 'America/Bogota' || tz.toLowerCase().includes('bogota'))) {
      return true;
    }

    // Check navigator locales
    const locales = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
    if (locales.some((l) => /[-_]co\b/i.test(l))) {
      return true;
    }
  } catch {
    // Fail safely
  }
  return false;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isColombia, setIsColombia] = useState<boolean>(() => isColombiaDetected());

  // Rule: The site ALWAYS lands in Spanish ('es') by default
  const [language, setLanguageState] = useState<Language>('es');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(MANUAL_OVERRIDE_KEY, lang);
    }
  };

  // Secondary verification: fast non-blocking IP country check
  useEffect(() => {
    let isMounted = true;

    const verifyIpCountry = async () => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2200);

        const res = await fetch('https://api.country.is/', {
          signal: controller.signal,
        });
        clearTimeout(timer);

        if (res.ok && isMounted) {
          const data = await res.json();
          if (data?.country === 'CO') {
            setIsColombia(true);
            const manualOverride = sessionStorage.getItem(MANUAL_OVERRIDE_KEY);
            // If in Colombia and not explicitly manually toggled in this session, ensure Spanish
            if (!manualOverride) {
              setLanguageState('es');
              if (typeof document !== 'undefined') {
                document.documentElement.lang = 'es';
              }
            }
          }
        }
      } catch {
        // Silently continue if network check fails or is blocked
      }
    };

    verifyIpCountry();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
    isColombia,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
