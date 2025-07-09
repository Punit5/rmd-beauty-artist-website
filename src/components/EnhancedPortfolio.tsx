import React, { useState, useEffect, useRef } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  category: string;
  aspectRatio: number;
  beforeSrc?: string;
  description?: string;
}

const EnhancedPortfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setShowBeforeAfter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const imagesPerPage = 9;

  const images: ImageData[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bridal makeup application",
      category: "bridal",
      aspectRatio: 1.2,
      beforeSrc: "https://images.unsplash.com/photo-1494790108755-2616b25d19b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Natural bridal glow with soft pink tones"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding hair styling",
      category: "bridal",
      aspectRatio: 0.8,
      description: "Elegant updo with delicate accessories"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional makeup photoshoot",
      category: "photoshoots",
      aspectRatio: 1.5,
      description: "Bold editorial look for fashion shoot"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Glamorous evening makeup",
      category: "events",
      aspectRatio: 1.1,
      description: "Smoky eyes perfect for evening events"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beauty makeup close-up",
      category: "photoshoots",
      aspectRatio: 0.9,
      description: "Flawless skin with natural enhancement"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bridal hair updo",
      category: "bridal",
      aspectRatio: 1.3,
      description: "Romantic loose waves with fresh flowers"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Special event makeup",
      category: "events",
      aspectRatio: 1.4,
      description: "Glowing skin with subtle shimmer"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Professional beauty shoot",
      category: "photoshoots",
      aspectRatio: 1.0,
      description: "Classic red lip and winged eyeliner"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1621951653409-0d4c0e9a1e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding day preparation",
      category: "bridal",
      aspectRatio: 0.7,
      description: "Behind-the-scenes bridal preparation"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Makeup artist at work",
      category: "photoshoots",
      aspectRatio: 1.1,
      description: "Professional makeup application process"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Evening glamour look",
      category: "events",
      aspectRatio: 0.9,
      description: "Dramatic evening makeup with golden highlights"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Natural wedding look",
      category: "bridal",
      aspectRatio: 1.2,
      description: "Soft and natural bridal makeup"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', icon: '🎨' },
    { id: 'bridal', name: 'Bridal', icon: '👰' },
    { id: 'photoshoots', name: 'Photoshoots', icon: '📸' },
    { id: 'events', name: 'Special Events', icon: '🎉' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    // Simulate loading - reduced time and force visible
    setTimeout(() => {
      setIsLoading(false);
      setIsIntersecting(true); // Force visibility
    }, 500);

    return () => observer.disconnect();
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const paginatedImages = filteredImages.slice(0, currentPage * imagesPerPage);

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 10,
    boxShadow: '0 -10px 20px rgba(0,0,0,0.1)',
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
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    opacity: isIntersecting ? 1 : 0,
    transform: isIntersecting ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease-out 0.2s',
  };

  const filterStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '4rem',
    flexWrap: 'wrap',
  };

  const filterButtonStyle: React.CSSProperties = {
    padding: '0.75rem 1.5rem',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    position: 'relative',
    overflow: 'hidden',
  };

  const masonryGridStyle: React.CSSProperties = {};

  const imageCardStyle: React.CSSProperties = {
    borderRadius: '15px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '300px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'block',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(232, 180, 184, 0.9) 0%, rgba(220, 174, 150, 0.9) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  };

  const lightboxStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '2rem',
    opacity: selectedImage ? 1 : 0,
    visibility: selectedImage ? 'visible' : 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const beforeAfterContainerStyle: React.CSSProperties = {
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const loadMoreButtonStyle: React.CSSProperties = {
    display: 'block',
    margin: '3rem auto 0',
    padding: '1rem 2rem',
    background: 'linear-gradient(45deg, #E8B4B8, #DCAE96)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(232, 180, 184, 0.4)',
  };

  const skeletonStyle: React.CSSProperties = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200px 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '15px',
  };

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    setShowBeforeAfter(false);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  if (isLoading) {
    return (
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={titleStyle}>Portfolio</div>
          <div style={masonryGridStyle}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                style={{
                  ...skeletonStyle,
                  height: `${200 + Math.random() * 200}px`,
                  gridRowEnd: `span ${Math.floor(Math.random() * 20) + 10}`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" ref={portfolioRef} style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Portfolio</h2>
        <p style={subtitleStyle}>
          Discover my passion for creating timeless beauty through carefully curated work 
          spanning bridal, editorial, and special event makeup artistry.
        </p>

        {/* Category Filter */}
        <div style={filterStyle}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1);
              }}
              style={{
                ...filterButtonStyle,
                background: activeCategory === category.id 
                  ? 'linear-gradient(45deg, #E8B4B8, #DCAE96)' 
                  : 'white',
                color: activeCategory === category.id ? 'white' : '#333',
                boxShadow: activeCategory === category.id 
                  ? '0 4px 15px rgba(232, 180, 184, 0.4)' 
                  : '0 2px 10px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 180, 184, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="portfolio-grid" style={masonryGridStyle}>
          {paginatedImages.map((image, index) => (
            <div
              key={image.id}
              style={{
                ...imageCardStyle,
                opacity: 1,
                transform: 'translateY(0)',
                transition: `all 0.8s ease-out ${index * 0.1}s`,
              }}
              onClick={() => handleImageClick(image)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (overlay && img) {
                  overlay.style.opacity = '1';
                  img.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                const img = e.currentTarget.querySelector('img') as HTMLElement;
                if (overlay && img) {
                  overlay.style.opacity = '0';
                  img.style.transform = 'scale(1)';
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={imageStyle}
                loading="lazy"
              />
              <div className="overlay" style={overlayStyle}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {image.alt}
                </h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {image.description}
                </p>
                {image.beforeSrc && (
                  <button
                    style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '20px',
                      color: 'white',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(image);
                      setShowBeforeAfter(true);
                    }}
                  >
                    View Before/After
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {paginatedImages.length < filteredImages.length && (
          <button
            style={loadMoreButtonStyle}
            onClick={handleLoadMore}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 180, 184, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 180, 184, 0.4)';
            }}
          >
            Load More ✨
          </button>
        )}

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div style={lightboxStyle} onClick={() => setSelectedImage(null)}>
            <div style={beforeAfterContainerStyle} onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
              }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  {selectedImage.alt}
                </h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {selectedImage.description}
                </p>
              </div>
            </div>
            <button
              className="lightbox-close"
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setSelectedImage(null)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedPortfolio;