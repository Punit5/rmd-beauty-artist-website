// Google Analytics 4 utility functions for RMD Studios

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Check if Google Analytics is loaded
const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (page_title: string, page_location?: string): void => {
  if (isGALoaded()) {
    window.gtag('event', 'page_view', {
      page_title,
      page_location: page_location || window.location.href,
      custom_parameter_1: 'beauty_services',
      custom_parameter_2: 'bridal_makeup'
    });
  }
};

// Track form submissions
export const trackFormSubmission = (form_type: string): void => {
  if (isGALoaded()) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: form_type,
      custom_parameter_1: 'contact_form',
      value: 1
    });
  }
};

// Track booking button clicks
export const trackBookingClick = (booking_type: string = 'general'): void => {
  if (isGALoaded()) {
    window.gtag('event', 'booking_click', {
      event_category: 'conversion',
      event_label: booking_type,
      custom_parameter_1: 'booking_intent',
      value: 1
    });
  }
};

// Track portfolio interactions
export const trackPortfolioView = (image_category: string, image_id: number): void => {
  if (isGALoaded()) {
    window.gtag('event', 'portfolio_view', {
      event_category: 'engagement',
      event_label: image_category,
      custom_parameter_1: 'portfolio_engagement',
      custom_parameter_2: image_category,
      value: image_id
    });
  }
};

// Track service interest
export const trackServiceInterest = (service_name: string): void => {
  if (isGALoaded()) {
    window.gtag('event', 'service_interest', {
      event_category: 'engagement',
      event_label: service_name,
      custom_parameter_1: 'service_engagement',
      value: 1
    });
  }
};

// Track navigation clicks
export const trackNavigation = (section_name: string): void => {
  if (isGALoaded()) {
    window.gtag('event', 'navigation_click', {
      event_category: 'navigation',
      event_label: section_name,
      custom_parameter_1: 'site_navigation',
      value: 1
    });
  }
};

// Track social media clicks
export const trackSocialClick = (platform: string): void => {
  if (isGALoaded()) {
    window.gtag('event', 'social_click', {
      event_category: 'social_engagement',
      event_label: platform,
      custom_parameter_1: 'social_media',
      value: 1
    });
  }
};

// Track phone calls
export const trackPhoneCall = (): void => {
  if (isGALoaded()) {
    window.gtag('event', 'phone_call', {
      event_category: 'conversion',
      event_label: 'phone_contact',
      custom_parameter_1: 'contact_method',
      value: 1
    });
  }
};

// Track email clicks
export const trackEmailClick = (): void => {
  if (isGALoaded()) {
    window.gtag('event', 'email_click', {
      event_category: 'conversion',
      event_label: 'email_contact',
      custom_parameter_1: 'contact_method',
      value: 1
    });
  }
};

// Track testimonial interactions
export const trackTestimonialView = (testimonial_id: number): void => {
  if (isGALoaded()) {
    window.gtag('event', 'testimonial_view', {
      event_category: 'engagement',
      event_label: 'testimonial_carousel',
      custom_parameter_1: 'social_proof',
      value: testimonial_id
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage: number): void => {
  if (isGALoaded()) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      custom_parameter_1: 'scroll_depth',
      value: percentage
    });
  }
};