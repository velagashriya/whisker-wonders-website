
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedPets from '../components/FeaturedPets';
import AdoptionProcess from '../components/AdoptionProcess';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPets />
        <AdoptionProcess />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
