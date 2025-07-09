import React from 'react';

const SimpleHero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    maxWidth: '60rem',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    marginBottom: '1.5rem',
    lineHeight: 1.2
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#E8B4B8',
    display: 'block'
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    fontWeight: 300,
    lineHeight: 1.6
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    minWidth: '200px'
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#E8B4B8',
    color: 'white'
  };

  const secondaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white'
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          Effortless Beauty for Life's Most
          <span style={subtitleStyle}>Memorable Moments</span>
        </h1>
        
        <p style={descriptionStyle}>
          Professional hair and makeup artistry for weddings, photoshoots, and special events
        </p>
        
        <div style={buttonGroupStyle}>
          <button style={primaryButtonStyle}>
            View Portfolio
          </button>
          <button style={secondaryButtonStyle}>
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;