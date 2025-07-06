
import React from 'react';
import { Award, Users, Car, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Car, number: '50+', label: 'Clean Vehicles' },
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '24/7', label: 'Always Available' },
    { icon: Award, number: '5★', label: 'Top Rated Service' },
  ];

  return (
    <section id="about" className="py-20 bg-light-slate-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              About <span className="text-soft-gold">i-Drive</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Lagos' Trusted Car Rental Partner - Your Road, Your Rules
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="animate-slide-in-left">
              <h3 className="font-poppins font-semibold text-2xl text-deep-blue-black mb-6">
                Welcome to i-Drive – Lagos' Trusted Car Rental Partner
              </h3>
              <div className="space-y-4 text-charcoal-gray">
                <p>
                  Whether you're visiting Lagos or need a ride for special occasions, i-Drive has got you covered. From luxury cars to Coaster buses, we offer both self-drive and chauffeur-driven rentals.
                </p>
                <p>
                  Operating 24/7, we pride ourselves on delivering comfort, affordability, and reliability. At i-Drive, we believe car rental should be simple, flexible, and always reliable.
                </p>
                <p>
                  Based in Ikeja, Lagos, we've been serving individuals, families, and businesses with clean, affordable, and well-maintained vehicles for every need.
                </p>
              </div>
              
              {/* Our Promise */}
              <div className="mt-8 space-y-4">
                <h4 className="font-poppins font-semibold text-xl text-deep-blue-black">Our Promise</h4>
                <p className="text-charcoal-gray font-medium">We don't just rent cars. We deliver peace of mind.</p>
                <ul className="space-y-2 text-charcoal-gray">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    24/7 availability — even on holidays
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Option for self-drive or professional drivers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Instant booking via WhatsApp
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                    Fast delivery & pickup across Lagos
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="/lovable-uploads/d263ecb5-20ba-41e2-a716-6e4db8344826.png"
                  alt="i-Drive luxury vehicle"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-whatsapp-green text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Always Available</div>
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
