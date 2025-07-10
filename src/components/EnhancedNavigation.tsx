import React, { useState, useEffect } from 'react';
import { trackNavigation, trackBookingClick } from '../utils/analytics';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const EnhancedNavigation: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', name: t.nav.home, icon: '🏠' },
    { id: 'portfolio', name: t.nav.portfolio, icon: '📸' },
    { id: 'services', name: t.nav.services, icon: '💼' },
    { id: 'about', name: t.nav.about, icon: '👩‍🎨' },
    { id: 'testimonials', name: t.nav.testimonials, icon: '⭐' },
    { id: 'contact', name: t.nav.contact, icon: '📞' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      let currentSection = sections[0]; // default to home
      let maxVisibleHeight = 0;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const navHeight = 120;
          const viewportHeight = window.innerHeight;
          
          // Calculate visible height of this section
          const visibleTop = Math.max(rect.top, navHeight);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // If this section has more visible area, make it active
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: isScrolled ? '0.5rem 0' : '1rem 0',
    background: isScrolled 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderBottom: isScrolled 
      ? '1px solid rgba(232, 180, 184, 0.2)' 
      : '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isScrolled 
      ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
      : '0 2px 10px rgba(0, 0, 0, 0.05)',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    minHeight: '70px',
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    color: isScrolled ? '#E8B4B8' : '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    whiteSpace: 'nowrap',
  };

  const desktopNavStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    flexShrink: 1,
  };

  const navLinkStyle: React.CSSProperties = {
    color: isScrolled ? '#333' : '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.3rem 0.6rem',
    borderRadius: '20px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',
  };

  const activeNavLinkStyle: React.CSSProperties = {
    ...navLinkStyle,
    background: 'rgba(232, 180, 184, 0.2)',
    color: '#E8B4B8',
    boxShadow: '0 2px 10px rgba(232, 180, 184, 0.3)',
  };

  const bookButtonStyle: React.CSSProperties = {
    background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: 'block',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: isScrolled ? '#333' : '#fff',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    minWidth: '44px',
    minHeight: '44px',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    padding: '1rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '0 0 15px 15px',
    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
    opacity: isMobileMenuOpen ? 1 : 0,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
  };

  const mobileNavLinkStyle: React.CSSProperties = {
    display: 'flex',
    color: '#333',
    textDecoration: 'none',
    padding: '1rem',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: 500,
    alignItems: 'center',
    gap: '1rem',
    margin: '0.2rem 0',
  };

  const handleLinkClick = (sectionId: string) => {
    // Track navigation click
    trackNavigation(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 120; // Increased offset for better visibility
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };


  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo Section - Fixed width */}
        <div style={{ 
          flex: '0 0 160px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <a href="#home" style={logoStyle} onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <span style={{ fontSize: '1rem' }}>✨</span>
            RMD Studios
          </a>
        </div>
        
        {/* Center Navigation - Flexible */}
        <div className="desktop-nav" style={{ 
          flex: '1 1 auto',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0.5rem',
          overflow: 'hidden'
        }}>
          <LanguageToggle />
          <ul style={{...desktopNavStyle, margin: 0}}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  style={activeSection === item.id ? activeNavLinkStyle : navLinkStyle}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'rgba(232, 180, 184, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span className="nav-icon" style={{ fontSize: '1rem' }}>{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Side - Book Button - Fixed width */}
        <div className="book-button-desktop" style={{ 
          flex: '0 0 120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
          <button 
          style={{
            ...bookButtonStyle,
            flexDirection: 'row',
            height: '40px',
            minWidth: '100px',
            fontSize: '12px',
            padding: '6px 12px',
            gap: '6px'
          }}
          onClick={() => {
            trackBookingClick('header_button');
            handleLinkClick('contact');
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 180, 184, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 180, 184, 0.4)';
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '2px 4px',
            borderRadius: '4px',
            minWidth: '24px'
          }}>
            <div style={{ fontSize: '6px', opacity: 0.9, lineHeight: '1' }}>
              {new Date().toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
            </div>
            <div style={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '1' }}>
              {new Date().getDate()}
            </div>
          </div>
          <span>{t.nav.bookNow}</span>
        </button>
        </div>

        <button 
          className="mobile-menu-button"
          style={mobileMenuButtonStyle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(232, 180, 184, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={mobileNavLinkStyle}
              onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232, 180, 184, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              {item.name}
            </a>
          ))}
          <div style={{ padding: '1rem 0', borderTop: '1px solid rgba(232, 180, 184, 0.2)' }}>
            <button 
              style={{ 
                ...bookButtonStyle, 
                width: '100%', 
                justifyContent: 'center',
                flexDirection: 'row',
                height: '50px',
                fontSize: '14px',
                gap: '8px'
              }}
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '4px 6px',
                borderRadius: '6px',
                minWidth: '32px'
              }}>
                <div style={{ fontSize: '8px', opacity: 0.9, lineHeight: '1' }}>
                  {new Date().toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: '1' }}>
                  {new Date().getDate()}
                </div>
              </div>
              <span>{t.nav.bookNow}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;