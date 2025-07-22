
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <Hero />
        <About brief />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Home;
