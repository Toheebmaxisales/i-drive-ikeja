
import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <About />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default AboutPage;
