import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedHero: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);

    // Auto-rotate background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [backgroundImages.length]);

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 1,
  };

  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 1s ease-in-out',
    zIndex: 0,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)',
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    maxWidth: '60rem',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#E8B4B8',
    display: 'block',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.3s',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
    marginBottom: '2rem',
    fontWeight: 300,
    lineHeight: 1.6,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.6s',
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: window.innerWidth > 640 ? 'row' : 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out 0.9s',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    minWidth: '200px',
    justifyContent: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    position: 'relative',
    overflow: 'hidden',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    backdropFilter: 'blur(10px)',
  };

  const floatingElementsStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  };

  const scrollIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-out 1.2s',
  };

  const handleScroll = (sectionId: string) => {
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
  };

  return (
    <section id="home" ref={heroRef} style={heroStyle} className="parallax">
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      
      {/* Floating Elements */}
      <div style={floatingElementsStyle}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '2rem',
          opacity: 0.6,
          animation: 'float 4s ease-in-out infinite'
        }}>
          ✨
        </div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '1.5rem',
          opacity: 0.4,
          animation: 'float 3s ease-in-out infinite 1s'
        }}>
          💄
        </div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          fontSize: '1.8rem',
          opacity: 0.5,
          animation: 'float 3.5s ease-in-out infinite 2s'
        }}>
          🌸
        </div>
      </div>
      
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          {t.hero.title}
          <span style={subtitleStyle}>{t.hero.subtitle}</span>
        </h1>
        
        <p style={descriptionStyle}>
          {t.hero.description}
        </p>
        
        <div style={buttonGroupStyle}>
          <button 
            style={primaryButtonStyle}
            onClick={() => handleScroll('portfolio')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 180, 184, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 180, 184, 0.4)';
            }}
          >
            <span>✨</span>
            {t.hero.viewPortfolio}
          </button>
          <button 
            style={secondaryButtonStyle}
            onClick={() => handleScroll('contact')}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>💬</span>
            {t.hero.bookConsultation}
          </button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div style={scrollIndicatorStyle}>
        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Scroll to explore</span>
        <div style={{ animation: 'bounce 2s infinite' }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;