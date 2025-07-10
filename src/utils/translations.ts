// Bilingual translations for RMD Studios website

export interface Translations {
  // Navigation
  nav: {
    home: string;
    portfolio: string;
    services: string;
    about: string;
    testimonials: string;
    contact: string;
    bookNow: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bookConsultation: string;
    viewPortfolio: string;
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      bridal: string;
      photoshoots: string;
      events: string;
    };
    loadMore: string;
    imageDescriptions: {
      bridalMakeup: string;
      weddingHair: string;
      professionalMakeup: string;
      glamorousEvening: string;
      beautyCloseup: string;
      bridalUpdo: string;
      specialEvent: string;
      beautyShoot: string;
      weddingPrep: string;
      makeupArtist: string;
      fashionMakeup: string;
      editorialLook: string;
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    bridal: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    events: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    photoshoots: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    calculator: {
      title: string;
      serviceType: string;
      addOns: {
        airbrush: string;
        lashes: string;
        extraTime: string;
        touchUp: string;
      };
      location: string;
      travel: string;
      total: string;
      bookService: string;
    };
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string[];
    workTogether: string;
    viewCertificates: string;
    stats: {
      clients: string;
      experience: string;
      weddings: string;
      photoShoots: string;
    };
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      bridal: string;
      photoshoot: string;
    };
    rating: string;
    basedOn: string;
    trustedBy: string;
    nextClient: string;
    nextClientDescription: string;
    bookSession: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    contactInfo: string;
    bookOnline: string;
    followMe: string;
    form: {
      name: string;
      email: string;
      phone: string;
      eventType: string;
      eventTypes: {
        select: string;
        wedding: string;
        photoshoot: string;
        specialEvent: string;
      };
      message: string;
      messagePlaceholder: string;
      sendMessage: string;
    };
    info: {
      phone: string;
      email: string;
      location: string;
      hours: string;
      hoursValue: string;
    };
    consultation: {
      title: string;
      description: string;
      schedule: string;
    };
  };
  
  // Footer
  footer: {
    tagline: string;
    rights: string;
  };
  
  // Language
  language: {
    english: string;
    french: string;
  };
}

export const translations: { [key: string]: Translations } = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Services", 
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact",
      bookNow: "Book Now"
    },
    hero: {
      title: "Creating Timeless Beauty",
      subtitle: "Professional Hair & Makeup Artist",
      description: "Specializing in bridal beauty, special events, and photoshoots. Let me help you look and feel your absolute best for life's most important moments.",
      bookConsultation: "Book Consultation",
      viewPortfolio: "View Portfolio"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A showcase of my work across bridal, events, and photoshoots",
      categories: {
        all: "All Work",
        bridal: "Bridal",
        photoshoots: "Photoshoots", 
        events: "Events"
      },
      loadMore: "Load More",
      imageDescriptions: {
        bridalMakeup: "Natural bridal glow with soft pink tones",
        weddingHair: "Elegant updo with delicate accessories",
        professionalMakeup: "Bold editorial look for fashion shoot",
        glamorousEvening: "Smoky eyes perfect for evening events",
        beautyCloseup: "Flawless skin with natural enhancement",
        bridalUpdo: "Romantic loose waves with fresh flowers",
        specialEvent: "Glowing skin with subtle shimmer",
        beautyShoot: "Classic red lip and winged eyeliner",
        weddingPrep: "Behind-the-scenes bridal preparation",
        makeupArtist: "Professional makeup artistry in action",
        fashionMakeup: "High-fashion editorial beauty look",
        editorialLook: "Avant-garde creative makeup design"
      }
    },
    services: {
      title: "Services",
      subtitle: "Comprehensive beauty services for every occasion",
      bridal: {
        title: "Bridal Beauty",
        description: "Your wedding day deserves perfection. Comprehensive bridal packages including trial runs and day-of services.",
        features: [
          "Complimentary consultation",
          "Trial run included",
          "Day-of hair & makeup", 
          "Touch-up kit provided",
          "Bridal party discounts"
        ],
        price: "Starting at $350"
      },
      events: {
        title: "Special Events",
        description: "Look stunning for galas, parties, graduations, and other special occasions with professional styling.",
        features: [
          "Event-appropriate styling",
          "Long-lasting formulas",
          "Photo-ready finish",
          "Quick touch-ups included",
          "Group booking discounts"
        ],
        price: "Starting at $150"
      },
      photoshoots: {
        title: "Photo & Video",
        description: "Camera-ready looks for professional photoshoots, headshots, and video productions.",
        features: [
          "HD & 4K camera ready",
          "Multiple look changes",
          "On-set touch-ups",
          "Collaboration with photographers",
          "Portfolio usage rights"
        ],
        price: "Starting at $200"
      },
      calculator: {
        title: "Service Calculator",
        serviceType: "Service Type",
        addOns: {
          airbrush: "Airbrush Makeup (+$50)",
          lashes: "Premium Lashes (+$30)",
          extraTime: "Extra Time (+$75/hr)",
          touchUp: "Touch-up Kit (+$25)"
        },
        location: "Location",
        travel: "Travel Fee",
        total: "Total Estimate",
        bookService: "Book This Service"
      }
    },
    about: {
      title: "Meet Ria",
      subtitle: "Professional Makeup Artist & Hair Stylist",
      description: [
        "With over 8 years of experience in the beauty industry, I've had the privilege of working with hundreds of brides, models, and clients to create their perfect look. My passion lies in enhancing natural beauty while ensuring every client feels confident and radiant.",
        "I believe that makeup and hair styling are forms of artistry that should celebrate individuality. Whether you're preparing for your wedding day, a special event, or a professional photoshoot, I work closely with you to understand your vision and bring it to life."
      ],
      workTogether: "Let's Work Together",
      viewCertificates: "View Certificates",
      stats: {
        clients: "Happy Clients",
        experience: "Years Experience", 
        weddings: "Weddings",
        photoShoots: "Photo Shoots"
      }
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Don't just take my word for it. Here's what my amazing clients have to say about their experience working with me.",
      filters: {
        all: "All Reviews",
        bridal: "Bridal",
        photoshoot: "Photoshoot"
      },
      rating: "5.0 out of 5",
      basedOn: "Based on 200+ reviews",
      trustedBy: "Trusted by brides, models, and clients throughout Beverly Hills",
      nextClient: "Ready to Be My Next Happy Client?",
      nextClientDescription: "Join hundreds of satisfied clients who trusted me with their special moments. Let's create something beautiful together.",
      bookSession: "Book Your Session"
    },
    contact: {
      title: "Let's Create Something Beautiful",
      subtitle: "Ready to discuss your special event? I'd love to hear about your vision and how I can help make it a reality.",
      getInTouch: "Get In Touch",
      contactInfo: "Contact Information",
      bookOnline: "Book Online",
      followMe: "Follow Me",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Phone Number",
        eventType: "Event Type",
        eventTypes: {
          select: "Select Event Type",
          wedding: "Wedding",
          photoshoot: "Photoshoot",
          specialEvent: "Special Event"
        },
        message: "Message",
        messagePlaceholder: "Tell me about your event and vision...",
        sendMessage: "Send Message"
      },
      info: {
        phone: "Phone",
        email: "Email", 
        location: "Location",
        hours: "Hours",
        hoursValue: "Mon-Sat: 9AM-7PM"
      },
      consultation: {
        title: "Book Online",
        description: "Ready to book? Schedule your consultation directly.",
        schedule: "Schedule Consultation"
      }
    },
    footer: {
      tagline: "Creating timeless beauty for life's most precious moments.",
      rights: "© 2024 RMD Studios. All rights reserved."
    },
    language: {
      english: "English",
      french: "Français"
    }
  },
  
  fr: {
    nav: {
      home: "Accueil",
      portfolio: "Portfolio",
      services: "Services",
      about: "À Propos",
      testimonials: "Témoignages", 
      contact: "Contact",
      bookNow: "Réserver"
    },
    hero: {
      title: "Créer une Beauté Intemporelle",
      subtitle: "Artiste Professionnelle en Coiffure et Maquillage",
      description: "Spécialisée dans la beauté nuptiale, les événements spéciaux et les séances photo. Permettez-moi de vous aider à paraître et vous sentir au mieux pour les moments les plus importants de votre vie.",
      bookConsultation: "Réserver une Consultation",
      viewPortfolio: "Voir le Portfolio"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Une vitrine de mon travail dans le mariage, les événements et les séances photo",
      categories: {
        all: "Tous les Travaux",
        bridal: "Mariage",
        photoshoots: "Séances Photo",
        events: "Événements"
      },
      loadMore: "Charger Plus",
      imageDescriptions: {
        bridalMakeup: "Éclat nuptial naturel avec des tons roses doux",
        weddingHair: "Chignon élégant avec accessoires délicats",
        professionalMakeup: "Look éditorial audacieux pour séance mode",
        glamorousEvening: "Yeux fumés parfaits pour les événements de soirée",
        beautyCloseup: "Peau impeccable avec mise en valeur naturelle",
        bridalUpdo: "Vagues romantiques lâches avec fleurs fraîches",
        specialEvent: "Peau éclatante avec éclat subtil",
        beautyShoot: "Rouge à lèvres rouge classique et eye-liner ailé",
        weddingPrep: "Préparation nuptiale en coulisses",
        makeupArtist: "Artisanat de maquillage professionnel en action",
        fashionMakeup: "Look beauté éditorial haute couture",
        editorialLook: "Design de maquillage créatif avant-gardiste"
      }
    },
    services: {
      title: "Services",
      subtitle: "Services de beauté complets pour toutes les occasions",
      bridal: {
        title: "Beauté Nuptiale",
        description: "Votre jour de mariage mérite la perfection. Forfaits nuptiaux complets incluant essais et services le jour J.",
        features: [
          "Consultation gratuite",
          "Essai inclus",
          "Coiffure et maquillage le jour J",
          "Kit de retouches fourni",
          "Remises groupe nuptial"
        ],
        price: "À partir de 350$"
      },
      events: {
        title: "Événements Spéciaux", 
        description: "Soyez éblouissante pour les galas, fêtes, remises de diplômes et autres occasions spéciales avec un styling professionnel.",
        features: [
          "Styling adapté à l'événement",
          "Formules longue tenue",
          "Fini prêt pour photos",
          "Retouches rapides incluses",
          "Remises réservations groupe"
        ],
        price: "À partir de 150$"
      },
      photoshoots: {
        title: "Photo & Vidéo",
        description: "Looks prêts pour caméra pour séances photo professionnelles, portraits et productions vidéo.",
        features: [
          "Prêt pour caméra HD & 4K",
          "Changements de looks multiples",
          "Retouches sur plateau",
          "Collaboration avec photographes",
          "Droits d'usage portfolio"
        ],
        price: "À partir de 200$"
      },
      calculator: {
        title: "Calculateur de Service",
        serviceType: "Type de Service",
        addOns: {
          airbrush: "Maquillage Aérographe (+50$)",
          lashes: "Cils Premium (+30$)",
          extraTime: "Temps Supplémentaire (+75$/h)",
          touchUp: "Kit de Retouches (+25$)"
        },
        location: "Lieu",
        travel: "Frais de Déplacement",
        total: "Estimation Totale",
        bookService: "Réserver ce Service"
      }
    },
    about: {
      title: "Rencontrez Ria",
      subtitle: "Artiste Professionnelle en Maquillage et Coiffure",
      description: [
        "Avec plus de 8 ans d'expérience dans l'industrie de la beauté, j'ai eu le privilège de travailler avec des centaines de mariées, mannequins et clients pour créer leur look parfait. Ma passion réside dans la mise en valeur de la beauté naturelle tout en m'assurant que chaque client se sente confiant et radieux.",
        "Je crois que le maquillage et la coiffure sont des formes d'art qui devraient célébrer l'individualité. Que vous vous prépariez pour votre jour de mariage, un événement spécial ou une séance photo professionnelle, je travaille étroitement avec vous pour comprendre votre vision et la concrétiser."
      ],
      workTogether: "Travaillons Ensemble",
      viewCertificates: "Voir les Certificats",
      stats: {
        clients: "Clients Satisfaits",
        experience: "Années d'Expérience",
        weddings: "Mariages",
        photoShoots: "Séances Photo"
      }
    },
    testimonials: {
      title: "Ce que Disent les Clients",
      subtitle: "Ne vous fiez pas seulement à ma parole. Voici ce que mes merveilleux clients disent de leur expérience de travail avec moi.",
      filters: {
        all: "Tous les Avis",
        bridal: "Mariage", 
        photoshoot: "Séance Photo"
      },
      rating: "5,0 sur 5",
      basedOn: "Basé sur plus de 200 avis",
      trustedBy: "Fait confiance par les mariées, mannequins et clients de Beverly Hills",
      nextClient: "Prêt à Être Mon Prochain Client Heureux?",
      nextClientDescription: "Rejoignez des centaines de clients satisfaits qui m'ont fait confiance pour leurs moments spéciaux. Créons quelque chose de beau ensemble.",
      bookSession: "Réservez Votre Séance"
    },
    contact: {
      title: "Créons Quelque Chose de Beau",
      subtitle: "Prêt à discuter de votre événement spécial? J'aimerais entendre parler de votre vision et comment je peux aider à la concrétiser.",
      getInTouch: "Entrer en Contact",
      contactInfo: "Informations de Contact",
      bookOnline: "Réserver en Ligne",
      followMe: "Suivez-Moi",
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        phone: "Numéro de Téléphone",
        eventType: "Type d'Événement",
        eventTypes: {
          select: "Sélectionner le Type d'Événement",
          wedding: "Mariage",
          photoshoot: "Séance Photo",
          specialEvent: "Événement Spécial"
        },
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre événement et de votre vision...",
        sendMessage: "Envoyer le Message"
      },
      info: {
        phone: "Téléphone",
        email: "Email",
        location: "Localisation",
        hours: "Heures",
        hoursValue: "Lun-Sam: 9h-19h"
      },
      consultation: {
        title: "Réserver en Ligne",
        description: "Prêt à réserver? Planifiez votre consultation directement.",
        schedule: "Planifier une Consultation"
      }
    },
    footer: {
      tagline: "Créer une beauté intemporelle pour les moments les plus précieux de la vie.",
      rights: "© 2024 RMD Studios. Tous droits réservés."
    },
    language: {
      english: "English",
      french: "Français"
    }
  }
};