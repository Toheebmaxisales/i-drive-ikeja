
import React from 'react';
import Navigation from '../components/Navigation';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const FleetPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <Gallery />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default FleetPage;
