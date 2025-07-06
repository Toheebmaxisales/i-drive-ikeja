
import React from 'react';
import { Award, Users, Car, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Car, number: '500+', label: 'Premium Vehicles' },
    { icon: Users, number: '10K+', label: 'Happy Customers' },
    { icon: MapPin, number: '50+', label: 'Locations' },
    { icon: Award, number: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-light-slate-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              About <span className="text-soft-gold">LuxDrive</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Your premier destination for luxury car rentals, delivering excellence since 2008
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="animate-slide-in-left">
              <h3 className="font-poppins font-semibold text-2xl text-deep-blue-black mb-6">
                Redefining Luxury Travel Experience
              </h3>
              <div className="space-y-4 text-charcoal-gray">
                <p>
                  At LuxDrive, we believe that every journey should be extraordinary. With over 15 years of experience in the luxury automotive industry, we've built our reputation on providing unmatched service and the finest collection of premium vehicles.
                </p>
                <p>
                  Our meticulously maintained fleet features the latest models from world-renowned manufacturers, ensuring that every drive is a perfect blend of comfort, performance, and style.
                </p>
                <p>
                  From business executives to special occasions, we cater to discerning clients who demand nothing but the best. Our commitment to excellence is reflected in every aspect of our service, from our pristine vehicles to our professional customer care.
                </p>
              </div>
              
              {/* Why Choose Us */}
              <div className="mt-8 space-y-4">
                <h4 className="font-poppins font-semibold text-xl text-deep-blue-black">Why Choose LuxDrive?</h4>
                <ul className="space-y-2 text-charcoal-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Premium fleet with latest luxury models
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    24/7 customer support and roadside assistance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Flexible rental options and competitive pricing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Professional chauffeur services available
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury car interior"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-whatsapp-green text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mb-4">
                  <stat.icon className="text-soft-gold" size={32} />
                </div>
                <div className="font-poppins font-bold text-3xl text-deep-blue-black mb-2">
                  {stat.number}
                </div>
                <div className="text-charcoal-gray">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
