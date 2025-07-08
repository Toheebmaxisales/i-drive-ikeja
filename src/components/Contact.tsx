
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
    // In real implementation, you'd send this to WhatsApp or email
    openWhatsApp();
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi i-Drive! I'm interested in your car rental services. Could you please provide more information?");
    window.open(`https://wa.me/2347030641515?text=${message}`, '_blank');
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
              Ready to drive? Contact i-Drive today and experience Lagos like never before
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
                    <p className="text-gray-300">07030641515</p>
                    <p className="text-gray-300">24/7 Customer Support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@i-drive.ng</p>
                    <p className="text-gray-300">Quick Response Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-300">162c Obafemi Awolowo Way</p>
                    <p className="text-gray-300">Oregun, Ikeja 101102, Lagos</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-whatsapp-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-whatsapp-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Availability</h4>
                    <p className="text-gray-300">24/7 - Always Available</p>
                    <p className="text-gray-300">Even on holidays</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-whatsapp-green/10 border border-whatsapp-green/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-whatsapp-green mr-3" size={24} />
                  <h4 className="font-poppins font-semibold text-white">Instant WhatsApp Booking</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Get instant responses and book your ride in seconds. We're always online!
                </p>
                <button
                  onClick={openWhatsApp}
                  className="bg-whatsapp-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 w-full justify-center"
                >
                  <MessageCircle size={20} />
                  📲 Book Now on WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                  Book on WhatsApp Now
                </h3>

                {isSubmitted && (
                  <div className="bg-whatsapp-green/20 border border-whatsapp-green/40 rounded-lg p-4 mb-6 flex items-center">
                    <CheckCircle className="text-whatsapp-green mr-3" size={20} />
                    <span className="text-white">Thank you! Redirecting to WhatsApp...</span>
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
                      <label className="block text-white mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green"
                        placeholder="Your phone number"
                      />
                    </div>
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
                      <option value="self-drive" className="text-gray-800">Self-Drive Rental</option>
                      <option value="chauffeur" className="text-gray-800">Chauffeur Service</option>
                      <option value="airport-transfer" className="text-gray-800">Airport Transfer</option>
                      <option value="wedding-events" className="text-gray-800">Wedding & Events</option>
                      <option value="corporate" className="text-gray-800">Corporate Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-whatsapp-green focus:ring-1 focus:ring-whatsapp-green resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-whatsapp-green text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-6 text-center">
              Find Us in Lagos
            </h3>
            <div className="rounded-lg overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8284834577154!2d3.3790893!3d6.5533533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c2aad3d8c1b%3A0x6b7e7f8f4c8d9e0a!2s162c%20Obafemi%20Awolowo%20Way%2C%20Oregun%2C%20Ikeja%20101102%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="i-Drive Lagos Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <button 
                onClick={() => window.open('https://maps.app.goo.gl/7kJmzxzZzvTV4vsQA', '_blank')}
                className="bg-whatsapp-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center gap-2 mx-auto"
              >
                <MapPin size={20} />
                Get Directions
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 mb-4">
              © 2025 i-Drive. All rights reserved. | 24/7 Car Rental Services in Lagos
            </p>
            <div className="flex justify-center space-x-8">
              <button 
                onClick={openWhatsApp}
                className="text-whatsapp-green hover:text-green-400 transition-colors"
              >
                WhatsApp
              </button>
              <span className="text-gray-400">|</span>
              <a href="tel:07030641515" className="text-whatsapp-green hover:text-green-400 transition-colors">
                Call Us: 07030641515
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
