
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react';

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
              <a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-soft-gold transition-colors duration-300">
                <Twitter size={20} />
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
                <a href="mailto:info@i-drive.ng" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@i-drive.ng
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
