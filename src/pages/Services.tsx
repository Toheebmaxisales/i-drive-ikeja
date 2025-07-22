
import React from 'react';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <Services />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default ServicesPage;
