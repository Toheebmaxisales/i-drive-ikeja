
import React from 'react';
import Navigation from '../components/Navigation';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <Testimonials />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default ReviewsPage;
