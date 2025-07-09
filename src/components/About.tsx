import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                alt="Bella - Professional Makeup Artist"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-gold rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                  Meet Bella
                </h2>
                <p className="text-xl text-rose-gold font-medium">
                  Professional Makeup Artist & Hair Stylist
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 8 years of experience in the beauty industry, I've had the privilege 
                  of working with hundreds of brides, models, and clients to create their perfect look. 
                  My passion lies in enhancing natural beauty while ensuring every client feels 
                  confident and radiant.
                </p>

                <p>
                  I believe that makeup and hair styling are forms of artistry that should celebrate 
                  individuality. Whether you're preparing for your wedding day, a special event, 
                  or a professional photoshoot, I work closely with you to understand your vision 
                  and bring it to life.
                </p>

                <p>
                  My approach combines classic techniques with modern trends, using only premium 
                  products to ensure long-lasting, camera-ready results. I'm dedicated to making 
                  your beauty experience as enjoyable and stress-free as possible.
                </p>
              </div>

              {/* Certifications & Awards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-gray-800">
                    Certifications
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Professional Makeup Artist Certification
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced Airbrush Techniques
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Bridal Specialist Certificate
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-gray-800">
                    Recognition
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Top Rated Bridal Artist 2023
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Featured in Bridal Magazine
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-rose-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      500+ Happy Clients
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button className="bg-rose-gold text-white px-8 py-3 rounded-full font-medium hover:bg-dusty-rose transition-colors duration-300">
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-rose-gold">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-rose-gold">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-rose-gold">300+</div>
              <div className="text-gray-600">Weddings</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-rose-gold">100+</div>
              <div className="text-gray-600">Photo Shoots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;