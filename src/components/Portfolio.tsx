import React, { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "Bridal makeup application",
      category: "bridal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Wedding hair styling",
      category: "bridal"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Professional makeup photoshoot",
      category: "photoshoots"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Glamorous evening makeup",
      category: "events"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      alt: "Beauty makeup close-up",
      category: "photoshoots"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      alt: "Bridal hair updo",
      category: "bridal"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      alt: "Special event makeup",
      category: "events"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Professional beauty shoot",
      category: "photoshoots"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1621951653409-0d4c0e9a1e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Wedding day preparation",
      category: "bridal"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'photoshoots', name: 'Photoshoots' },
    { id: 'events', name: 'Special Events' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const sectionStyle: React.CSSProperties = {
    padding: '5rem 1rem',
    backgroundColor: '#f8f9fa'
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#333'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
    textAlign: 'center',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto'
  };

  const filterStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const filterButtonStyle: React.CSSProperties = {
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s ease'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const imageCardStyle: React.CSSProperties = {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  };

  const lightboxStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '2rem'
  };

  const lightboxImageStyle: React.CSSProperties = {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer'
  };

  return (
    <section id="portfolio" style={sectionStyle}>
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
              onClick={() => setActiveCategory(category.id)}
              style={{
                ...filterButtonStyle,
                backgroundColor: activeCategory === category.id ? '#E8B4B8' : '#fff',
                color: activeCategory === category.id ? 'white' : '#333'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={gridStyle}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              style={imageCardStyle}
              onClick={() => setSelectedImage(image)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={imageStyle}
              />
              <div className="overlay" style={overlayStyle}>
                <div style={{ color: 'white', fontSize: '2rem' }}>🔍</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div style={lightboxStyle} onClick={() => setSelectedImage(null)}>
            <button
              style={closeButtonStyle}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={lightboxImageStyle}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;