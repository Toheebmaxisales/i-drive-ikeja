import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  return (
    <footer className="bg-deep-blue-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-poppins font-bold text-2xl">
              i-<span className="text-soft-gold">Drive</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Lagos' trusted car rental partner offering 24/7 self-drive and chauffeur-driven services. Your road, your rules.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1Fn36KdLd6/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/i_drive_car_rentals?igsh=ajc4OTd6Zjc0ZHZo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@i_drive_car_rental?_t=ZM-8yFXXKJ0vBw&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://x.com/_car_rental?t=bcSSO56NwXaeHT6K9J2mbg&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-soft-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-soft-gold">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Self-Drive Rentals</li>
              <li>Chauffeur-Driven Service</li>
              <li>Corporate Rentals</li>
              <li>Event Transportation</li>
              <li>Airport Transfers</li>
              <li>Wedding Car Rentals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-soft-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-soft-gold flex-shrink-0" />
                <a href="tel:+2347030641515" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +234 703 064 1515
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-soft-gold flex-shrink-0" />
              <a href="mailto:idriveselfdrive247@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  idriveselfdrive247@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-soft-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Ikeja, Lagos State, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-soft-gold flex-shrink-0" />
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
            <button
              onClick={openWhatsApp}
              className="bg-whatsapp-green text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 mt-4"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 i-Drive. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;