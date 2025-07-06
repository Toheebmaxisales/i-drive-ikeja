
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your luxury car rental services. Could you please provide more information?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-deep-blue-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
              Get In <span className="text-soft-gold">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to experience luxury? Contact us today and let's make your journey extraordinary
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="font-poppins font-semibold text-2xl text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@luxdrive.com</p>
                    <p className="text-gray-300">bookings@luxdrive.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">123 Luxury Avenue</p>
                    <p className="text-gray-300">Downtown District, City 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sat - Sun: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-whatsapp-green/10 border border-whatsapp-green/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-whatsapp-green mr-3" size={24} />
                  <h4 className="font-poppins font-semibold text-white">Quick WhatsApp Contact</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Get instant responses to your queries through WhatsApp. We're here to help!
                </p>
                <button
                  onClick={openWhatsApp}
                  className="bg-whatsapp-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                  Send us a Message
                </h3>

                {isSubmitted && (
                  <div className="bg-whatsapp-green/20 border border-whatsapp-green/40 rounded-lg p-4 mb-6 flex items-center">
                    <CheckCircle className="text-whatsapp-green mr-3" size={20} />
                    <span className="text-white">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Service Type</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green"
                      >
                        <option value="" className="text-gray-800">Select a service</option>
                        <option value="car-rental" className="text-gray-800">Car Rental</option>
                        <option value="chauffeur" className="text-gray-800">Chauffeur Service</option>
                        <option value="airport-transfer" className="text-gray-800">Airport Transfer</option>
                        <option value="wedding-events" className="text-gray-800">Wedding & Events</option>
                        <option value="corporate" className="text-gray-800">Corporate Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-whatsapp-green text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              © 2024 LuxDrive. All rights reserved. | Premium Car Rental Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
