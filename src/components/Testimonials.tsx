import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      message: "Bella made my wedding day absolutely perfect! She understood my vision completely and created a look that was both elegant and natural. I felt like the most beautiful version of myself.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b25d19b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "Fashion Model",
      message: "Working with Bella has been incredible. Her attention to detail and ability to create camera-ready looks consistently amazes me. She's become my go-to artist for all my shoots.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      role: "Bride",
      message: "I was so nervous about my wedding makeup, but Bella made me feel completely at ease. The trial was perfect, and on the wedding day, I looked exactly how I dreamed. Thank you!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "Amanda Thompson",
      role: "Event Planner",
      message: "I've worked with many makeup artists, but Bella is exceptional. She's professional, punctual, and creates stunning looks for every client. I recommend her to all my brides.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
    },
    {
      id: 5,
      name: "Rachel Davis",
      role: "Photographer",
      message: "Bella's work photographs beautifully. She understands lighting and knows exactly how to make her clients look flawless on camera. It's always a pleasure working with her.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
    },
    {
      id: 6,
      name: "Michelle Wilson",
      role: "Bride",
      message: "Bella did makeup for my entire bridal party. Everyone looked absolutely stunning and the makeup lasted all day and night. She's incredibly talented and so sweet to work with!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my amazing clients have to say 
            about their experience working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.message}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <div className="bg-rose-gold text-white rounded-lg p-8 max-w-lg mx-auto">
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <div className="text-3xl font-bold mb-2">5.0 out of 5</div>
            <p className="text-rose-100 mb-4">Based on 200+ reviews</p>
            <div className="text-sm text-rose-100">
              Trusted by brides, models, and clients throughout Beverly Hills
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Ready to Be My Next Happy Client?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who trusted me with their special moments. 
              Let's create something beautiful together.
            </p>
            <button className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-dusty-rose transition-colors duration-300">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;