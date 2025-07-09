import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    color: '#E8B4B8',
    textDecoration: 'none'
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyle: React.CSSProperties = {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease'
  };

  const bookButtonStyle: React.CSSProperties = {
    backgroundColor: '#E8B4B8',
    color: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <a href="#home" style={logoStyle} onClick={() => handleLinkClick('home')}>
          Bella Beauty
        </a>
        
        <ul style={{ ...navLinksStyle, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <li><a href="#home" style={linkStyle} onClick={() => handleLinkClick('home')}>Home</a></li>
          <li><a href="#portfolio" style={linkStyle} onClick={() => handleLinkClick('portfolio')}>Portfolio</a></li>
          <li><a href="#services" style={linkStyle} onClick={() => handleLinkClick('services')}>Services</a></li>
          <li><a href="#about" style={linkStyle} onClick={() => handleLinkClick('about')}>About</a></li>
          <li><a href="#testimonials" style={linkStyle} onClick={() => handleLinkClick('testimonials')}>Testimonials</a></li>
          <li><a href="#contact" style={linkStyle} onClick={() => handleLinkClick('contact')}>Contact</a></li>
        </ul>

        <button 
          style={bookButtonStyle}
          onClick={() => handleLinkClick('contact')}
        >
          Book Now
        </button>

        <button 
          style={{ 
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      <div style={mobileMenuStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#home" style={linkStyle} onClick={() => handleLinkClick('home')}>Home</a>
          <a href="#portfolio" style={linkStyle} onClick={() => handleLinkClick('portfolio')}>Portfolio</a>
          <a href="#services" style={linkStyle} onClick={() => handleLinkClick('services')}>Services</a>
          <a href="#about" style={linkStyle} onClick={() => handleLinkClick('about')}>About</a>
          <a href="#testimonials" style={linkStyle} onClick={() => handleLinkClick('testimonials')}>Testimonials</a>
          <a href="#contact" style={linkStyle} onClick={() => handleLinkClick('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;