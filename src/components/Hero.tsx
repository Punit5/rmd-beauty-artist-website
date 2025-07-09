import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="Bridal makeup artistry"
        className={styles.backgroundImage}
      />
      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Effortless Beauty for Life's Most
          <span className={styles.subtitle}>Memorable Moments</span>
        </h1>
        
        <p className={styles.description}>
          Professional hair and makeup artistry for weddings, photoshoots, and special events
        </p>
        
        <div className={styles.buttonGroup}>
          <button className="btn btn-primary">
            View Portfolio
          </button>
          <button className="btn btn-secondary">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;