
import React from 'react';
import { Award, Users, Car, Clock, Target, Eye, Lightbulb, Briefcase, Rocket, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutProps {
  brief?: boolean;
}

const About: React.FC<AboutProps> = ({ brief = false }) => {
  const stats = [
    { icon: Car, number: '50+', label: 'Clean Vehicles' },
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '24/7', label: 'Always Available' },
    { icon: Award, number: '5★', label: 'Top Rated Service' },
  ];

  if (brief) {
    return (
      <section id="about" className="py-20 bg-light-slate-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
                About <span className="text-soft-gold">i-Drive</span>
              </h2>
              <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
                Lagos' Trusted Car Rental Partner - Your Road, Your Rules
              </p>
            </div>

            {/* Brief Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-charcoal-gray text-lg mb-6 leading-relaxed">
                At i-Drive Car Rentals, our journey began from a simple but powerful idea: to make quality self-drive car rental accessible and affordable in Lagos. We offer clean, well-maintained vehicles to those who need freedom of movement—whether for business meetings, vacations, weddings, or weekend adventures.
              </p>
              
              <div className="bg-soft-gold/10 p-6 rounded-lg mb-6">
                <p className="text-deep-blue-black font-semibold text-lg italic text-center">
                  "To provide our customers with personal transportation solutions that suit their business or leisure needs—with excellence, reliability, and peace of mind."
                </p>
              </div>

              <div className="text-center">
                <Link 
                  to="/about" 
                  className="inline-flex items-center bg-soft-gold text-deep-blue-black px-8 py-4 rounded-lg font-semibold hover:bg-soft-gold/90 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Learn More About Our Story
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mb-4">
                    <stat.icon className="text-soft-gold" size={32} />
                  </div>
                  <div className="font-poppins font-bold text-3xl text-deep-blue-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-charcoal-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-light-slate-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-deep-blue-black mb-4">
              About <span className="text-soft-gold">i-Drive</span>
            </h2>
            <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
              Lagos' Trusted Car Rental Partner - Your Road, Your Rules
            </p>
          </div>

          {/* The Start Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Car className="text-soft-gold mr-3" size={32} />
              <h3 className="font-poppins font-bold text-3xl text-deep-blue-black">The Start</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-4 text-charcoal-gray">
              <p>
                At i-Drive Car Rentals, our journey began from a simple but powerful idea: to make quality self-drive car rental accessible and affordable in Lagos. While many car owners dominate the roads, there's a growing need among individuals, organizations, and visitors for flexible, temporary transportation.
              </p>
              <p>
                Brooding over the emerging continental demand for self-drive solutions, i-Drive made a bold move into the labour market, offering clean, well-maintained vehicles to those who need freedom of movement—whether for business meetings, vacations, weddings, or weekend adventures.
              </p>
              <p>
                After years of market observation and hands-on experience in auto logistics and security, our founder, Ugochukwu Uche, decided to bridge the transportation gap by launching a service that puts the power back in the hands of the driver.
              </p>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="text-soft-gold mr-3" size={32} />
                <h3 className="font-poppins font-bold text-2xl text-deep-blue-black">Our Mission</h3>
              </div>
              <div className="bg-soft-gold/10 p-6 rounded-lg mb-6">
                <p className="text-deep-blue-black font-semibold text-lg italic">
                  "To provide our customers with personal transportation solutions that suit their business or leisure needs—with excellence, reliability, and peace of mind."
                </p>
              </div>
              <p className="text-charcoal-gray">
                Every i-Drive vehicle is fully serviced, road-safe, insured, and equipped with essentials to ensure your journey is smooth. Whether you're heading to a wedding or commuting across Lagos for work, our mission is to get you there in comfort, style, and safety.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="text-soft-gold mr-3" size={32} />
                <h3 className="font-poppins font-bold text-2xl text-deep-blue-black">Our Vision</h3>
              </div>
              <p className="text-charcoal-gray mb-6">
                We envision becoming Nigeria's most trusted self-drive rental brand, with a presence in every major city and a reputation for:
              </p>
              <ul className="space-y-3 text-charcoal-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Unmatched reliability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Transparent pricing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Friendly, efficient service
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Modern, diverse fleet of vehicles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Seamless digital booking experience via WhatsApp & website
                </li>
              </ul>
              <p className="text-charcoal-gray mt-6 font-medium">
                i-Drive is not just a car rental business—we are building a movement where convenience meets freedom, and transportation no longer needs to be a stress point.
              </p>
            </div>
          </div>

          {/* Concept Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Lightbulb className="text-soft-gold mr-3" size={32} />
              <h3 className="font-poppins font-bold text-3xl text-deep-blue-black">Our Concept</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-deep-blue-black text-white p-6 rounded-lg mb-6">
                <p className="text-xl font-semibold text-center">
                  "Rent a car, drive it yourself, and return it when you're done—with no hassle."
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-charcoal-gray mb-6">
                    We operate on both daily hire (for individuals needing short-term transport) and contract hire (ideal for businesses or corporate clients needing vehicles over a set period).
                  </p>
                  <h4 className="font-semibold text-deep-blue-black mb-4">Our model is built for flexibility:</h4>
                  <ul className="space-y-2 text-charcoal-gray">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Rentals available for a day, a week, a month—or even longer
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      No nationality restrictions — both Nigerians and foreigners can rent
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Packages for all types of clients: movers, travelers, bridal parties, professionals
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue-black mb-4">We've partnered with:</h4>
                  <ul className="space-y-2 text-charcoal-gray mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Local car owners to build a versatile fleet
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Nearby car wash stations to maintain quality returns
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Auto repair shops to ensure vehicles are in top condition
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                      Hotels & Airports to connect easily with clients
                    </li>
                  </ul>
                  <p className="text-charcoal-gray">
                    With 24/7 support, flexible pick-up options, and a fully transparent pricing structure, i-Drive is built to serve, built to scale, and built for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Management & Operations and Our Edge Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="text-soft-gold mr-3" size={32} />
                <h3 className="font-poppins font-bold text-2xl text-deep-blue-black">Management & Operations</h3>
              </div>
              <p className="text-charcoal-gray mb-4">
                i-Drive Car Rentals is independently owned and operated by <span className="font-semibold">Ugochukwu Uche</span>.
              </p>
              <p className="text-charcoal-gray mb-6">
                Ugo personally manages bookings, fleet coordination, client experience, and partnerships with hotels, drivers, vendors, and car owners.
              </p>
              <h4 className="font-semibold text-deep-blue-black mb-4">Our Professional Network:</h4>
              <ul className="space-y-2 text-charcoal-gray">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Car detailers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Mechanics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Accounting professionals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Software and advertising experts
                </li>
              </ul>
              <p className="text-charcoal-gray mt-4 font-medium">
                This lean but effective structure keeps the business agile, cost-efficient, and growth-ready.
              </p>
            </div>

            {/* Our Edge */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Rocket className="text-soft-gold mr-3" size={32} />
                <h3 className="font-poppins font-bold text-2xl text-deep-blue-black">Our Edge & Future Plans</h3>
              </div>
              <ul className="space-y-3 text-charcoal-gray mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Professional, courteous service
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Lowest long-term rental rates in Lagos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Pick-up and drop-off available
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Variety of vehicles for any need
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  24-hour access and WhatsApp support
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soft-gold rounded-full mr-3"></div>
                  Modern promotions: social media, billboards, airport ads
                </li>
              </ul>
              <div className="bg-soft-gold/10 p-4 rounded-lg mb-4">
                <p className="text-deep-blue-black font-semibold">
                  "Every week, i-Drive closes six-figure rentals — all from local marketing, personal networks, and great service. But we're just getting started."
                </p>
              </div>
              <p className="text-charcoal-gray">
                As we scale, we're welcoming investors who want to join a transparent, growing business that can reshape urban mobility in Nigeria.
              </p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Key className="text-soft-gold mr-3" size={32} />
              <h3 className="font-poppins font-bold text-3xl text-deep-blue-black">In Summary</h3>
            </div>
            <div className="bg-gradient-to-r from-deep-blue-black to-charcoal-gray text-white p-8 rounded-2xl">
              <p className="text-xl mb-4">
                i-Drive isn't just a car rental service. It's a platform for freedom, flexibility, and future-ready travel.
              </p>
              <p className="text-lg font-medium">
                We're here to help you go further—on your own terms.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mb-4">
                  <stat.icon className="text-soft-gold" size={32} />
                </div>
                <div className="font-poppins font-bold text-3xl text-deep-blue-black mb-2">
                  {stat.number}
                </div>
                <div className="text-charcoal-gray">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
