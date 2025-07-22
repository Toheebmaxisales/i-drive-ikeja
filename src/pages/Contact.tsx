
import React from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageTransition>
        <Contact />
        <Footer />
      </PageTransition>
    </div>
  );
};

export default ContactPage;
