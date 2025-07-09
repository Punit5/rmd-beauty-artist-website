import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
  serviceType: string;
}

const EnhancedTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      message: "Bella made my wedding day absolutely perfect! She understood my vision completely and created a look that was both elegant and natural. I felt like the most beautiful version of myself.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b25d19b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      serviceType: "bridal"
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Fashion Model",
      message: "Working with Bella has been incredible. Her attention to detail and ability to create camera-ready looks consistently amazes me. She's become my go-to artist for all my shoots.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      serviceType: "photoshoot"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      role: "Bride",
      message: "I was so nervous about my wedding makeup, but Bella made me feel completely at ease. The trial was perfect, and on the wedding day, I looked exactly how I dreamed. Thank you!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      serviceType: "bridal"
    },
    {
      id: 4,
      name: "Amanda Thompson",
      role: "Event Planner",
      message: "I've worked with many makeup artists, but Bella is exceptional. She's professional, punctual, and creates stunning looks for every client. I recommend her to all my brides.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      serviceType: "bridal"
    },
    {
      id: 5,
      name: "Rachel Davis",
      role: "Photographer",
      message: "Bella's work photographs beautifully. She understands lighting and knows exactly how to make her clients look flawless on camera. It's always a pleasure working with her.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      serviceType: "photoshoot"
    },
    {
      id: 6,
      name: "Michelle Wilson",
      role: "Bride",
      message: "Bella did makeup for my entire bridal party. Everyone looked absolutely stunning and the makeup lasted all day and night. She's incredibly talented and so sweet to work with!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      serviceType: "bridal"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Reviews', icon: '⭐' },
    { id: 'bridal', name: 'Bridal', icon: '👰' },
    { id: 'photoshoot', name: 'Photoshoot', icon: '📸' },
  ];

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.serviceType === selectedFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [filteredTestimonials.length]);

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1rem',
    background: 'rgba(255, 255, 255, 0.8)',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    backdropFilter: 'blur(5px)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
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
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.2s',
  };

  const carouselStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    background: 'white',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
    border: '1px solid rgba(232, 180, 184, 0.2)',
  };

  const testimonialStyle: React.CSSProperties = {
    textAlign: 'center',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'scale(1)' : 'scale(0.9)',
    transition: 'all 0.8s ease-out 0.4s',
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? '#ffd700' : '#e0e0e0',
          fontSize: '1.5rem',
          margin: '0 0.1rem',
        }}
      >
        ★
      </span>
    ));
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <section id="testimonials" ref={testimonialsRef} style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>What Clients Say</h2>
        <p style={subtitleStyle}>
          Don't just take my word for it. Here's what my amazing clients have to say 
          about their experience working with me.
        </p>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setSelectedFilter(filter.id);
                setCurrentIndex(0);
              }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: selectedFilter === filter.id 
                  ? 'linear-gradient(45deg, #E8B4B8, #DCAE96)' 
                  : 'white',
                color: selectedFilter === filter.id ? 'white' : '#333',
                boxShadow: selectedFilter === filter.id 
                  ? '0 4px 15px rgba(232, 180, 184, 0.4)' 
                  : '0 2px 10px rgba(0,0,0,0.1)',
              }}
            >
              <span>{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Main Testimonial Carousel */}
        <div style={carouselStyle}>
          <div style={testimonialStyle}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 2rem auto',
              border: '4px solid #E8B4B8',
            }}>
              <img
                src={currentTestimonial?.image}
                alt={currentTestimonial?.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              {renderStars(currentTestimonial?.rating || 5)}
            </div>

            <blockquote style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '2rem',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                fontSize: '4rem',
                color: '#E8B4B8',
                opacity: 0.3,
                fontFamily: 'serif',
              }}>
                "
              </span>
              {currentTestimonial?.message}
            </blockquote>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '0.5rem',
                fontFamily: 'Playfair Display, serif',
              }}>
                {currentTestimonial?.name}
              </h4>
              <p style={{
                color: '#E8B4B8',
                fontSize: '1rem',
                fontWeight: 500,
              }}>
                {currentTestimonial?.role}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
          }}>
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentIndex ? '#E8B4B8' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div style={{
          background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
          color: 'white',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 15px 35px rgba(232, 180, 184, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}>
            {renderStars(5)}
          </div>
          <div style={{
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif',
          }}>
            5.0 out of 5
          </div>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1rem',
            opacity: 0.9,
          }}>
            Based on 200+ reviews
          </p>
          <div style={{
            fontSize: '1rem',
            opacity: 0.8,
          }}>
            Trusted by brides, models, and clients throughout Beverly Hills
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(232, 180, 184, 0.2)',
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#333',
            marginBottom: '1rem',
          }}>
            Ready to Be My Next Happy Client?
          </h3>
          <p style={{
            color: '#666',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}>
            Join hundreds of satisfied clients who trusted me with their special moments. 
            Let's create something beautiful together.
          </p>
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
          }}>
            Book Your Session ✨
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;