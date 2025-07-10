import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedAbout: React.FC = () => {
  const { t } = useLanguage();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {};

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'all 0.8s ease-out',
  };

  const contentStyle: React.CSSProperties = {
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateX(0)' : 'translateX(50px)',
    transition: 'all 0.8s ease-out 0.2s',
  };


  return (
    <section id="about" ref={aboutRef} style={sectionStyle}>
      <div style={containerStyle}>
        <div className="responsive-grid-2" style={gridStyle}>
          <div style={imageContainerStyle}>
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                alt="Ria Minhas - Professional Makeup Artist"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  filter: 'brightness(1.1) saturate(1.1)',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(232, 180, 184, 0.9)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                animation: 'pulse 2s infinite',
              }}>
                ✨ 8+ Years Experience
              </div>
            </div>
          </div>

          <div style={contentStyle}>
            <h2 style={{
              fontSize: '3rem',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              marginBottom: '1rem',
              color: '#333',
            }}>
              {t.about.title}
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#E8B4B8',
              fontWeight: 500,
              marginBottom: '2rem',
              fontFamily: 'Playfair Display, serif',
            }}>
              {t.about.subtitle}
            </p>

            <div style={{
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '3rem',
              fontSize: '1.1rem',
            }}>
              {t.about.description.map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1.5rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="responsive-button-group" style={{
              marginTop: '2rem',
            }}>
              <button style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
              }}>
{t.about.workTogether}
              </button>
              
              <button style={{
                padding: '1rem 2rem',
                background: 'transparent',
                color: '#E8B4B8',
                border: '2px solid #E8B4B8',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}>
{t.about.viewCertificates}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '5rem',
          textAlign: 'center',
        }}>
          {[
            { number: '500+', label: t.about.stats.clients, icon: '❤️' },
            { number: '8+', label: t.about.stats.experience, icon: '⭐' },
            { number: '300+', label: t.about.stats.weddings, icon: '💍' },
            { number: '100+', label: t.about.stats.photoShoots, icon: '📸' },
          ].map((stat, index) => (
            <div key={stat.label} style={{
              opacity: isIntersecting ? 1 : 0,
              transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.8s ease-out ${index * 0.1}s`,
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem',
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#E8B4B8',
                fontFamily: 'Playfair Display, serif',
                marginBottom: '0.5rem',
              }}>
                {stat.number}
              </div>
              <div style={{
                color: '#666',
                fontSize: '1.1rem',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;