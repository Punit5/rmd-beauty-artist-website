import React from 'react';
import EnhancedNavigation from './components/EnhancedNavigation';
import EnhancedHero from './components/EnhancedHero';
import EnhancedPortfolio from './components/EnhancedPortfolio';
import EnhancedServices from './components/EnhancedServices';
import EnhancedAbout from './components/EnhancedAbout';
import EnhancedTestimonials from './components/EnhancedTestimonials';

function App() {
  const appStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    padding: 0
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 120; // Increased offset for better visibility
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div style={appStyle}>
      <EnhancedNavigation />
      <EnhancedHero />
      <EnhancedPortfolio />
      <EnhancedServices />
      <EnhancedAbout />
      <EnhancedTestimonials />

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', position: 'relative', zIndex: 10, backdropFilter: 'blur(5px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', fontWeight: 700, textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
            Let's Create Something Beautiful
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Ready to discuss your special event? I'd love to hear about your vision and how I can help make it a reality.
          </p>
          
          <div className="responsive-grid-2" style={{ gap: '3rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', color: '#333' }}>
                Get In Touch
              </h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                />
                <select style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}>
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="photoshoot">Photoshoot</option>
                  <option value="special-event">Special Event</option>
                </select>
                <textarea
                  placeholder="Tell me about your event and vision..."
                  rows={4}
                  style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{ padding: '0.75rem', backgroundColor: '#E8B4B8', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', color: '#333' }}>
                  Contact Information
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>📞</span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#333', margin: 0 }}>Phone</p>
                      <a href="tel:555-123-4567" style={{ color: '#E8B4B8', textDecoration: 'none' }}>(555) 123-4567</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#333', margin: 0 }}>Email</p>
                      <a href="mailto:hello@rmdstudios.ca" style={{ color: '#E8B4B8', textDecoration: 'none' }}>hello@rmdstudios.ca</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>📍</span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#333', margin: 0 }}>Location</p>
                      <p style={{ color: '#666', margin: 0 }}>Beverly Hills, CA</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>🕐</span>
                    <div>
                      <p style={{ fontWeight: 500, color: '#333', margin: 0 }}>Hours</p>
                      <p style={{ color: '#666', margin: 0 }}>Mon-Sat: 9AM-7PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem', color: '#333' }}>
                  Book Online
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  Ready to book? Schedule your consultation directly.
                </p>
                <button style={{ width: '100%', padding: '0.75rem', backgroundColor: '#E8B4B8', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 500 }}>
                  Schedule Consultation
                </button>
                
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Follow Me</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://instagram.com/rmd.studios" style={{ color: '#E8B4B8', textDecoration: 'none', fontSize: '1.5rem' }}>
                      📷 Instagram
                    </a>
                    <a href="https://pinterest.com/rmdstudios" style={{ color: '#E8B4B8', textDecoration: 'none', fontSize: '1.5rem' }}>
                      📌 Pinterest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '3rem 1rem', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', color: '#E8B4B8', marginBottom: '1rem' }}>
            RMD Studios
          </h3>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>
            Creating timeless beauty for life's most precious moments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a href="#home" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a>
            <a href="#portfolio" style={{ color: '#ccc', textDecoration: 'none' }}>Portfolio</a>
            <a href="#services" style={{ color: '#ccc', textDecoration: 'none' }}>Services</a>
            <a href="#about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
          </div>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>
            © 2024 RMD Studios. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Booking Button - Calendar Style */}
      <button
        className="mobile-fixed-button"
        onClick={scrollToContact}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '15px',
          padding: '8px 10px',
          borderRadius: '12px',
          border: 'none',
          background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
          color: 'white',
          fontWeight: 600,
          boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
          cursor: 'pointer',
          width: '70px',
          height: '50px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '1',
          zIndex: 999,
          fontSize: '9px',
          gap: '2px'
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
        <span style={{ fontSize: '8px', marginTop: '1px' }}>Book Now</span>
      </button>
    </div>
  );
}

export default App;
