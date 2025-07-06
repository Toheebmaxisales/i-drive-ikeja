
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'LuxDrive exceeded all my expectations. The BMW 7 Series I rented for my business meetings was immaculate, and the service was absolutely professional. The chauffeur was punctual and courteous. Highly recommend!'
    },
    {
      name: 'Michael Chen',
      role: 'Wedding Planner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'We used LuxDrive for a high-profile wedding, and they delivered perfection. The Range Rover was beautifully decorated, and the service was flawless. Our clients were thrilled with the luxury experience.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Entertainment Executive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The Tesla Model S was the perfect choice for our eco-conscious event. Clean, luxurious, and the booking process was seamless. LuxDrive really understands premium service. Will definitely use again!'
    },
    {
      name: 'David Thompson',
      role: 'Investment Banker',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Outstanding service from start to finish. The Mercedes S-Class was in pristine condition, and their 24/7 support gave me complete peace of mind during my week-long business trip. Truly premium experience.'
    },
    {
      name: 'Amanda Foster',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'LuxDrive has been our go-to for VIP transportation. Their attention to detail and reliability is unmatched. The Porsche Panamera for our product launch was absolutely perfect and made a great impression.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-light-slate-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              What Our Clients <span className="text-soft-gold">Say</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative mb-12">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                {/* Quote Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mb-6">
                  <Quote className="text-soft-gold" size={32} />
                </div>

                {/* Rating */}
                <div className="flex justify-center items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-soft-gold fill-current" size={24} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-charcoal-gray mb-8 leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div className="text-left">
                    <div className="font-poppins font-semibold text-deep-blue-black">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-charcoal-gray">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-deep-blue-black p-3 rounded-full hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-deep-blue-black p-3 rounded-full hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentTestimonial === index ? 'bg-whatsapp-green' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'ring-2 ring-whatsapp-green scale-105'
                    : 'hover:shadow-xl hover:scale-105'
                }`}
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-soft-gold fill-current" size={16} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-charcoal-gray mb-4 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 120)}..."
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-deep-blue-black text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-charcoal-gray text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
