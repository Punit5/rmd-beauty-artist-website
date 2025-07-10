import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Translations } from '../utils/translations';

interface LanguageContextType {
  language: string;
  t: Translations;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Try to get saved language from localStorage, default to English
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rmd-language');
      if (saved && (saved === 'en' || saved === 'fr')) {
        return saved;
      }
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('fr')) {
        return 'fr';
      }
    }
    return 'en';
  });

  const setLanguage = (lang: string) => {
    if (lang === 'en' || lang === 'fr') {
      setLanguageState(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('rmd-language', lang);
      }
    }
  };

  // Update document language attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};