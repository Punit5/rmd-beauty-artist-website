import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Bridal Makeup",
      description: "Complete bridal beauty experience for your special day",
      features: [
        "Bridal consultation & trial",
        "Wedding day makeup application",
        "Touch-up kit provided",
        "Airbrush makeup option",
        "False lashes included",
        "Photography-ready finish"
      ],
      price: "Starting at $350",
      duration: "3-4 hours",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 2,
      title: "Hair Styling",
      description: "Professional hair styling for any occasion",
      features: [
        "Consultation & styling",
        "Updos & formal styles",
        "Blow-dry & styling",
        "Hair accessories placement",
        "Travel to your location",
        "Touch-up appointments"
      ],
      price: "Starting at $150",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Special Events",
      description: "Glamorous makeup for proms, galas, and special occasions",
      features: [
        "Event makeup consultation",
        "Custom look creation",
        "Long-lasting formulas",
        "Photo-ready application",
        "Group booking discounts",
        "On-location service"
      ],
      price: "Starting at $125",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Photoshoot Makeup",
      description: "Professional makeup for photography and media",
      features: [
        "High-definition makeup",
        "Camera-ready application",
        "Multiple look changes",
        "Collaboration with photographers",
        "Editorial & commercial work",
        "Retouching consultation"
      ],
      price: "Starting at $200",
      duration: "2-4 hours",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Group Bookings",
      description: "Perfect for bridal parties and group events",
      features: [
        "Bridal party makeup",
        "Group hair styling",
        "Coordinated team service",
        "Timeline management",
        "Special group pricing",
        "Multiple artists available"
      ],
      price: "Inquire for Rates",
      duration: "4-8 hours",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 6,
      title: "Makeup Lessons",
      description: "Learn professional techniques for everyday beauty",
      features: [
        "Personalized makeup lesson",
        "Product recommendations",
        "Technique demonstrations",
        "Take-home instructions",
        "Follow-up support",
        "Custom color matching"
      ],
      price: "Starting at $100",
      duration: "1.5 hours",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive beauty services tailored to make you look and feel your absolute best 
            for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-rose-gold">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {service.duration}
                  </div>
                </div>
                
                <button className="w-full bg-rose-gold text-white py-3 px-6 rounded-full font-medium hover:bg-dusty-rose transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Custom Packages Available
            </h3>
            <p className="text-gray-600 mb-6">
              Need something specific? I create custom packages tailored to your unique needs and budget. 
              Let's discuss your vision and create the perfect beauty experience for your special day.
            </p>
            <button className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-dusty-rose transition-colors duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;