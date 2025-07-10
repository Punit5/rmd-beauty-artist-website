import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  duration: string;
  features: string[];
  addOns: { name: string; price: number }[];
  image: string;
  category: string;
}

interface CalculatorState {
  selectedService: string;
  selectedAddOns: string[];
  eventDate: string;
  guestCount: number;
  location: string;
}

const EnhancedServices: React.FC = () => {
  const { t } = useLanguage();
  const [, setSelectedService] = useState<string>('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    selectedService: '',
    selectedAddOns: [],
    eventDate: '',
    guestCount: 1,
    location: '',
  });
  const [isIntersecting, setIsIntersecting] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 'bridal-makeup',
      title: t.services.bridal.title,
      description: t.services.bridal.description,
      basePrice: 350,
      duration: '3-4 hours',
      features: t.services.bridal.features,
      addOns: [
        { name: 'Additional trial session', price: 150 },
        { name: 'Travel fee (outside 20mi)', price: 50 },
        { name: 'Early morning start (before 7AM)', price: 100 },
        { name: 'Extended touch-up service', price: 75 }
      ],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      category: 'bridal'
    },
    {
      id: 'hair-styling',
      title: t.services.events.title,
      description: t.services.events.description,
      basePrice: 150,
      duration: '1-2 hours',
      features: t.services.events.features,
      addOns: [
        { name: 'Hair extensions styling', price: 100 },
        { name: 'Complex braiding work', price: 75 },
        { name: 'Hair accessories provided', price: 50 },
        { name: 'Same-day color touch-up', price: 125 }
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'hair'
    },
    {
      id: 'special-events',
      title: t.services.events.title,
      description: t.services.events.description,
      basePrice: 125,
      duration: '1-2 hours',
      features: t.services.events.features,
      addOns: [
        { name: 'Group rate (3+ people)', price: -25 },
        { name: 'Glitter & special effects', price: 30 },
        { name: 'Contouring & highlighting', price: 40 },
        { name: 'Lash application', price: 25 }
      ],
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'events'
    },
    {
      id: 'photoshoot',
      title: t.services.photoshoots.title,
      description: t.services.photoshoots.description,
      basePrice: 200,
      duration: '2-4 hours',
      features: t.services.photoshoots.features,
      addOns: [
        { name: 'Additional look change', price: 75 },
        { name: 'Body makeup', price: 100 },
        { name: 'Special effects makeup', price: 150 },
        { name: 'Wardrobe consultation', price: 50 }
      ],
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'photoshoot'
    },
    {
      id: 'group-bookings',
      title: 'Group Bookings',
      description: 'Perfect for bridal parties and group events',
      basePrice: 120,
      duration: '4-8 hours',
      features: [
        'Bridal party makeup',
        'Group hair styling',
        'Coordinated team service',
        'Timeline management',
        'Special group pricing',
        'Multiple artists available'
      ],
      addOns: [
        { name: 'Additional makeup artist', price: 200 },
        { name: 'Flower girl makeup', price: 75 },
        { name: 'Mother of bride/groom', price: 150 },
        { name: 'Group photos coordination', price: 50 }
      ],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'group'
    },
    {
      id: 'makeup-lessons',
      title: 'Makeup Lessons',
      description: 'Learn professional techniques for everyday beauty',
      basePrice: 100,
      duration: '1.5 hours',
      features: [
        'Personalized makeup lesson',
        'Product recommendations',
        'Technique demonstrations',
        'Take-home instructions',
        'Follow-up support',
        'Custom color matching'
      ],
      addOns: [
        { name: 'Makeup kit (basic)', price: 150 },
        { name: 'Makeup kit (professional)', price: 300 },
        { name: 'Follow-up session', price: 75 },
        { name: 'Video tutorial creation', price: 100 }
      ],
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      category: 'lessons'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const calculateTotal = () => {
    const service = services.find(s => s.id === calculatorState.selectedService);
    if (!service) return 0;

    let total = service.basePrice;
    
    // Add selected add-ons
    calculatorState.selectedAddOns.forEach(addOnName => {
      const addOn = service.addOns.find(a => a.name === addOnName);
      if (addOn) total += addOn.price;
    });

    // Group booking multiplier
    if (calculatorState.guestCount > 1 && service.category === 'group') {
      total *= calculatorState.guestCount;
    }

    return total;
  };

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '600px',
    margin: '0 auto 4rem auto',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.2s',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  };

  const serviceCardStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(232, 180, 184, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const serviceImageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginBottom: '1.5rem',
  };

  const calculatorStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #E8B4B8 0%, #DCAE96 100%)',
    borderRadius: '20px',
    padding: '2rem',
    color: 'white',
    marginTop: '3rem',
    boxShadow: '0 15px 35px rgba(232, 180, 184, 0.3)',
    transform: showCalculator ? 'translateY(0)' : 'translateY(20px)',
    opacity: showCalculator ? 1 : 0,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    maxHeight: showCalculator ? '1000px' : '0',
    overflow: 'hidden',
  };

  const priceDisplayStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#E8B4B8',
    textAlign: 'center',
    marginBottom: '1rem',
    fontFamily: 'Playfair Display, serif',
  };

  return (
    <section id="services" ref={servicesRef} style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>{t.services.title}</h2>
        <p style={subtitleStyle}>
          {t.services.subtitle}
        </p>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                ...serviceCardStyle,
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease-out ${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(232, 180, 184, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={serviceImageStyle}
              />
              
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#E8B4B8',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: '#666',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                fontSize: '1rem',
              }}>
                {service.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '0.5rem',
                }}>
                  What's Included:
                </h4>
                <ul style={{
                  color: '#666',
                  lineHeight: 1.6,
                  paddingLeft: '0',
                  listStyle: 'none',
                }}>
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#E8B4B8', marginRight: '0.5rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li style={{ color: '#E8B4B8', fontStyle: 'italic' }}>
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(232, 180, 184, 0.1)',
                borderRadius: '10px',
              }}>
                <div>
                  <span style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#E8B4B8',
                    fontFamily: 'Playfair Display, serif',
                  }}>
                    ${service.basePrice}
                  </span>
                  <span style={{ color: '#666', fontSize: '0.9rem', marginLeft: '0.5rem' }}>
                    starting
                  </span>
                </div>
                <span style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  background: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                }}>
                  {service.duration}
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(232, 180, 184, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Book Now
                </button>
                
                <button
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: 'transparent',
                    color: '#E8B4B8',
                    border: '2px solid #E8B4B8',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => {
                    setCalculatorState(prev => ({ ...prev, selectedService: service.id }));
                    setShowCalculator(true);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E8B4B8';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#E8B4B8';
                  }}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div style={calculatorStyle}>
          <h3 style={{
            fontSize: '2rem',
            fontFamily: 'Playfair Display, serif',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Pricing Calculator
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Select Service:
              </label>
              <select
                value={calculatorState.selectedService}
                onChange={(e) => setCalculatorState(prev => ({ ...prev, selectedService: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              >
                <option value="">Choose a service...</option>
                {services.map(service => (
                  <option key={service.id} value={service.id} style={{ color: '#333' }}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Event Date:
              </label>
              <input
                type="date"
                value={calculatorState.eventDate}
                onChange={(e) => setCalculatorState(prev => ({ ...prev, eventDate: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Number of People:
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={calculatorState.guestCount}
                onChange={(e) => setCalculatorState(prev => ({ ...prev, guestCount: parseInt(e.target.value) }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                Location:
              </label>
              <input
                type="text"
                placeholder="City, State"
                value={calculatorState.location}
                onChange={(e) => setCalculatorState(prev => ({ ...prev, location: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                }}
              />
            </div>
          </div>

          {calculatorState.selectedService && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Add-on Services:</h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}>
                {services.find(s => s.id === calculatorState.selectedService)?.addOns.map(addOn => (
                  <label key={addOn.name} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}>
                    <input
                      type="checkbox"
                      checked={calculatorState.selectedAddOns.includes(addOn.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCalculatorState(prev => ({
                            ...prev,
                            selectedAddOns: [...prev.selectedAddOns, addOn.name]
                          }));
                        } else {
                          setCalculatorState(prev => ({
                            ...prev,
                            selectedAddOns: prev.selectedAddOns.filter(name => name !== addOn.name)
                          }));
                        }
                      }}
                      style={{ transform: 'scale(1.2)' }}
                    />
                    <span style={{ flex: 1 }}>{addOn.name}</span>
                    <span style={{ fontWeight: 600 }}>
                      {addOn.price > 0 ? `+$${addOn.price}` : `$${addOn.price}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {calculatorState.selectedService && (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '15px',
            }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Estimated Total:</h4>
              <div style={priceDisplayStyle}>
                ${calculateTotal()}
              </div>
              <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                *Final pricing may vary based on specific requirements and consultation
              </p>
              <button
                style={{
                  padding: '1rem 2rem',
                  background: 'white',
                  color: '#E8B4B8',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Request Official Quote
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;