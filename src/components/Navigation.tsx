
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-deep-blue-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-poppins font-bold text-2xl text-white">
            i-<span className="text-soft-gold">Drive</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-300 ${
                isActive('/') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-300 ${
                isActive('/about') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors duration-300 ${
                isActive('/services') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              Services
            </Link>
            <Link
              to="/fleet"
              className={`transition-colors duration-300 ${
                isActive('/fleet') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              Fleet
            </Link>
            <Link
              to="/reviews"
              className={`transition-colors duration-300 ${
                isActive('/reviews') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 ${
                isActive('/contact') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
              }`}
            >
              Contact
            </Link>
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/about') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/services') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                Services
              </Link>
              <Link
                to="/fleet"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/fleet') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                Fleet
              </Link>
              <Link
                to="/reviews"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/reviews') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                Reviews
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  isActive('/contact') ? 'text-soft-gold' : 'text-white hover:text-soft-gold'
                }`}
              >
                Contact
              </Link>
              <button
                onClick={openWhatsApp}
                className="block bg-whatsapp-green text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 text-center w-full"
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
