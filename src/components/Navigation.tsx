
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-blue-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-poppins font-bold text-2xl text-white">
            i-<span className="text-soft-gold">Drive</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-soft-gold transition-colors duration-300"
            >
              Reviews
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-whatsapp-green text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-deep-blue-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-white hover:text-soft-gold transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-white hover:text-soft-gold transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-white hover:text-soft-gold transition-colors duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-white hover:text-soft-gold transition-colors duration-300"
              >
                Fleet
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-white hover:text-soft-gold transition-colors duration-300"
              >
                Reviews
              </button>
              <button
                onClick={openWhatsApp}
                className="block bg-whatsapp-green text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 text-center"
              >
                📲 WhatsApp Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
