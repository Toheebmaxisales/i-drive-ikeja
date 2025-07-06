
import React from 'react';
import { Car, Users, Clock, Shield, Sparkles, Plane } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Self-Drive Rentals',
      description: 'Get the freedom to explore Lagos at your own pace. Choose from our wide range of vehicles and drive yourself, your way.',
      features: ['Latest Models', 'Full Insurance', 'GPS Available']
    },
    {
      icon: Users,
      title: 'Chauffeur-Driven Rentals',
      description: 'Need a professional driver? Our trained chauffeurs ensure comfort, safety, and punctuality for personal or corporate use.',
      features: ['Professional Drivers', 'Punctual Service', 'Safe & Reliable']
    },
    {
      icon: Shield,
      title: 'Corporate & Executive Rentals',
      description: 'Business meetings, office shuttles, VIP guests—we handle it all with class and discretion.',
      features: ['Executive Vehicles', 'Professional Service', 'Flexible Packages']
    },
    {
      icon: Sparkles,
      title: 'Event Rentals',
      description: 'From Coaster buses for guests to luxury rides for couples, we help you make a grand entrance at weddings and parties.',
      features: ['Wedding Cars', 'Event Buses', 'Special Occasions']
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Punctual pickups and drop-offs to Murtala Muhammed Airport — stress-free and reliable transportation.',
      features: ['Flight Tracking', 'On-time Service', 'Comfortable Rides']
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service with instant WhatsApp booking. We\'re always ready when you need us.',
      features: ['Always Available', 'WhatsApp Booking', 'Quick Response']
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              Our <span className="text-soft-gold">Services</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Flexible Car Rental Services to Fit Every Journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-light-slate-gray rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in border border-transparent hover:border-soft-gold/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-whatsapp-green/10 rounded-xl mb-6 group-hover:bg-whatsapp-green/20 transition-colors duration-300">
                  <service.icon className="text-whatsapp-green" size={32} />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-semibold text-xl text-deep-blue-black mb-4 group-hover:text-whatsapp-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-charcoal-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-charcoal-gray">
                      <div className="w-1.5 h-1.5 bg-soft-gold rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-deep-blue-black to-deep-blue-black/90 rounded-2xl p-8 md:p-12">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
                Need a Ride? Book Instantly on WhatsApp
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether it's a last-minute trip or a planned event, i-Drive is ready. We're online 24/7.
              </p>
              <button 
                onClick={openWhatsApp}
                className="bg-whatsapp-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                📲 Book Now on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
