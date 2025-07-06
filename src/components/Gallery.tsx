
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const cars = [
    {
      name: 'Mercedes S-Class',
      category: 'Luxury Sedan',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      price: '$200',
      rating: 5,
      features: ['Premium Interior', 'Chauffeur Available', 'GPS Navigation']
    },
    {
      name: 'BMW 7 Series',
      category: 'Executive Sedan',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      price: '$180',
      rating: 5,
      features: ['Leather Seats', 'Wi-Fi Enabled', 'Premium Sound']
    },
    {
      name: 'Audi Q8',
      category: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      price: '$220',
      rating: 5,
      features: ['Spacious Interior', 'All-Wheel Drive', 'Advanced Safety']
    },
    {
      name: 'Porsche Panamera',
      category: 'Sports Sedan',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      price: '$280',
      rating: 5,
      features: ['Sport Mode', 'Carbon Fiber', 'Track Ready']
    },
    {
      name: 'Range Rover',
      category: 'Luxury SUV',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      price: '$250',
      rating: 5,
      features: ['Off-Road Capable', 'Luxury Interior', 'Panoramic Roof']
    },
    {
      name: 'Tesla Model S',
      category: 'Electric Luxury',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      price: '$190',
      rating: 5,
      features: ['Zero Emissions', 'Autopilot', 'Supercharging']
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % cars.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              Our Premium <span className="text-soft-gold">Fleet</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Discover our collection of meticulously maintained luxury vehicles
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

                  <button className="bg-whatsapp-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 self-start">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="border-2 border-deep-blue-black text-deep-blue-black px-8 py-4 rounded-full font-semibold hover:bg-deep-blue-black hover:text-white transition-all duration-300">
              View Complete Fleet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
