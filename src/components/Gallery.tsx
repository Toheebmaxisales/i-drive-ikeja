import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const cars = [
    {
      name: 'Toyota Hiace Bus',
      category: 'Passenger Bus',
      image: '/lovable-uploads/a3404735-a71d-4b05-9df5-e3e22258493d.png',
      price: '₦25,000',
      rating: 5,
      features: ['14-Seater', 'AC Fitted', 'Group Transport']
    },
    {
      name: 'Toyota Hiace Premium',
      category: 'Luxury Bus',
      image: '/lovable-uploads/9c7a0710-94a1-4235-9584-ae4526b9d743.png',
      price: '₦30,000',
      rating: 5,
      features: ['Premium Interior', 'Chauffeur Available', 'Event Ready']
    },
    {
      name: 'Toyota Hiace Executive',
      category: 'Executive Transport',
      image: '/lovable-uploads/55226278-bb7d-478b-9f50-087abec92265.png',
      price: '₦28,000',
      rating: 5,
      features: ['Executive Class', 'Corporate Events', 'Airport Transfer']
    },
    {
      name: 'Acura MDX',
      category: 'Luxury SUV',
      image: '/lovable-uploads/19435a02-2cbb-4a47-b5cf-c07bbfa7fe27.png',
      price: '₦35,000',
      rating: 5,
      features: ['7-Seater SUV', 'Luxury Interior', 'All-Wheel Drive']
    },
    {
      name: 'Toyota Tacoma',
      category: 'Pickup Truck',
      image: '/lovable-uploads/2b2b56a8-9a0b-41e6-a560-43193155d0a5.png',
      price: '₦30,000',
      rating: 5,
      features: ['Pickup Truck', 'Cargo Space', 'Rugged Design']
    },
    {
      name: 'Toyota Hilux Revolution',
      category: 'Premium Pickup',
      image: '/lovable-uploads/c5c3d75e-9ee6-499b-ab0b-5088577e0d74.png',
      price: '₦40,000',
      rating: 5,
      features: ['Premium Pickup', 'Luxury Features', 'Off-Road Ready']
    },
    {
      name: 'Toyota Land Cruiser Prado',
      category: 'Premium SUV',
      image: '/lovable-uploads/6db0a83b-9580-46f2-9aa6-42e6b3eb12d9.png',
      price: '₦45,000',
      rating: 5,
      features: ['Premium SUV', 'Luxury Interior', 'Executive Class']
    },
    {
      name: 'Toyota Land Cruiser V8',
      category: 'Luxury SUV',
      image: '/lovable-uploads/d6d8ab4a-2ac8-4789-9f74-bdc36951201d.png',
      price: '₦50,000',
      rating: 5,
      features: ['V8 Engine', 'Premium Features', 'VIP Transport']
    },
    {
      name: 'Mercedes GLS 550',
      category: 'Luxury SUV',
      image: '/lovable-uploads/75382f74-514f-43d3-a0a6-15e8f45dac2a.png',
      price: '₦60,000',
      rating: 5,
      features: ['Mercedes Luxury', 'Premium Interior', 'Executive Transport']
    },
    {
      name: 'Toyota Land Cruiser 300',
      category: 'Ultra Luxury SUV',
      image: '/lovable-uploads/d263ecb5-20ba-41e2-a716-6e4db8344826.png',
      price: '₦70,000',
      rating: 5,
      features: ['Latest Model', 'Ultra Luxury', 'VIP Class']
    },
    {
      name: 'Toyota Highlander',
      category: 'Premium SUV',
      image: '/lovable-uploads/e9fc3fad-d270-4b20-9baa-428a04c880b5.png',
      price: '₦32,000',
      rating: 5,
      features: ['7-Seater SUV', 'Family Friendly', 'Comfortable Ride']
    },
    {
      name: 'Toyota Corolla',
      category: 'Executive Sedan',
      image: '/lovable-uploads/ab2ddd7e-81f0-46fc-b2d7-358d59a0dc22.png',
      price: '₦20,000',
      rating: 5,
      features: ['Fuel Efficient', 'Comfortable', 'City Drive']
    },
    {
      name: 'Toyota Land Cruiser Prado VX',
      category: 'Premium SUV',
      image: '/lovable-uploads/ee039c65-730d-4fe3-874a-9d4c1484710e.png',
      price: '₦48,000',
      rating: 5,
      features: ['VX Package', 'Premium Features', 'Luxury SUV']
    },
    {
      name: 'Lexus GX 460',
      category: 'Luxury SUV',
      image: '/lovable-uploads/3e1f1b74-0343-4f24-ae12-465161df00e9.png',
      price: '₦55,000',
      rating: 5,
      features: ['Lexus Luxury', 'Off-Road Capable', 'Premium Comfort']
    },
    {
      name: 'Toyota Camry',
      category: 'Executive Sedan',
      image: '/lovable-uploads/c1d991f8-8543-4dc9-ae47-a74abca66646.png',
      price: '₦22,000',
      rating: 5,
      features: ['Executive Sedan', 'Spacious Interior', 'Smooth Drive']
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % cars.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2347030641515', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              Our <span className="text-soft-gold">Fleet</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Explore our wide range of well-maintained vehicles
            </p>
          </div>

          {/* Featured Car Display */}
          <div className="mb-12">
            <div className="relative bg-light-slate-gray rounded-2xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-2/3 relative">
                  <img
                    src={cars[selectedImage].image}
                    alt={cars[selectedImage].name}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-whatsapp-green text-white px-4 py-2 rounded-full font-semibold">
                    {cars[selectedImage].price}/day
                  </div>
                </div>

                {/* Details */}
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-soft-gold text-sm font-medium uppercase tracking-wide">
                      {cars[selectedImage].category}
                    </span>
                  </div>
                  
                  <h3 className="font-poppins font-bold text-2xl text-deep-blue-black mb-4">
                    {cars[selectedImage].name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(cars[selectedImage].rating)].map((_, i) => (
                      <Star key={i} className="text-soft-gold fill-current" size={20} />
                    ))}
                    <span className="ml-2 text-charcoal-gray">({cars[selectedImage].rating}.0)</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {cars[selectedImage].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-charcoal-gray">
                        <div className="w-2 h-2 bg-whatsapp-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={openWhatsApp}
                    className="bg-whatsapp-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 self-start"
                  >
                    📲 Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cars.map((car, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedImage === index
                    ? 'ring-4 ring-whatsapp-green shadow-lg scale-105'
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-24 md:h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <div className="text-white text-left">
                    <div className="font-semibold text-sm">{car.name}</div>
                    <div className="text-xs opacity-80">{car.price}/day</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={openWhatsApp}
              className="bg-whatsapp-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              📲 WhatsApp for More Cars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
