import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '0.25rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    border: 'none',
    background: 'transparent',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '35px',
  };

  const activeButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'rgba(232, 180, 184, 0.8)',
    color: 'white',
    boxShadow: '0 2px 8px rgba(232, 180, 184, 0.3)',
  };

  return (
    <div style={toggleStyle}>
      <button
        style={language === 'en' ? activeButtonStyle : buttonStyle}
        onClick={() => setLanguage('en')}
        onMouseEnter={(e) => {
          if (language !== 'en') {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (language !== 'en') {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        EN
      </button>
      <button
        style={language === 'fr' ? activeButtonStyle : buttonStyle}
        onClick={() => setLanguage('fr')}
        onMouseEnter={(e) => {
          if (language !== 'fr') {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (language !== 'fr') {
            e.currentTarget.style.background = 'transparent';
          }
        }}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;