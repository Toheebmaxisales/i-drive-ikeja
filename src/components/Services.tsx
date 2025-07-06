
import React from 'react';
import { Car, Users, Clock, Shield, Sparkles, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Premium Car Rental',
      description: 'Choose from our extensive fleet of luxury vehicles including sedans, SUVs, and sports cars.',
      features: ['Latest Models', 'Full Insurance', 'GPS Navigation']
    },
    {
      icon: Users,
      title: 'Chauffeur Service',
      description: 'Professional drivers available for business meetings, airport transfers, and special events.',
      features: ['Licensed Drivers', 'Multi-lingual', 'Discretion Assured']
    },
    {
      icon: Clock,
      title: 'Flexible Rentals',
      description: 'Hourly, daily, weekly, or monthly rentals to suit your specific needs and schedule.',
      features: ['No Hidden Fees', 'Easy Booking', 'Quick Delivery']
    },
    {
      icon: Shield,
      title: 'Airport Transfers',
      description: 'Reliable and punctual airport pickup and drop-off services with flight monitoring.',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance']
    },
    {
      icon: Sparkles,
      title: 'Wedding & Events',
      description: 'Make your special day unforgettable with our premium wedding and event car services.',
      features: ['Decorated Vehicles', 'Professional Service', 'Photo Opportunities']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and roadside assistance for complete peace of mind.',
      features: ['Emergency Support', 'Live Chat', 'Phone Support']
    }
  ];

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
              Comprehensive luxury transportation solutions tailored to your needs
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

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-whatsapp-green font-semibold text-sm hover:text-green-600 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-deep-blue-black to-deep-blue-black/90 rounded-2xl p-8 md:p-12">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
                Ready to Experience Luxury?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and let us create the perfect transportation solution for you.
              </p>
              <button className="bg-whatsapp-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
