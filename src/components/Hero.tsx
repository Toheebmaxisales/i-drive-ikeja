
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-deep-blue-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
          alt="Car rental background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue-black via-deep-blue-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="text-soft-gold" size={16} />
            <span className="text-white text-sm font-medium">24/7 Car Rental Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Drive Lagos Your Way –{' '}
            <span className="text-soft-gold">Anytime, Anywhere</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Self-drive and chauffeur-driven car rental service available 24/7 in Ikeja, Lagos
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openWhatsApp}
              className="bg-whatsapp-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              📲 Book Now on WhatsApp
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-deep-blue-black transition-all duration-300"
            >
              View Our Fleet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="text-soft-gold mr-2" size={24} />
                <span className="text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-gray-300">Clean & Serviced</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-soft-gold mr-2" size={24} />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-gray-300">Available Always</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="text-soft-gold mr-2" size={24} />
                <span className="text-3xl font-bold text-white">5★</span>
              </div>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
