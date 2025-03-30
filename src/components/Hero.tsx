
import React from 'react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-teal-light/50 to-beige-light/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Find Your Perfect <span className="text-teal-dark">Furry</span> Companion
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Discover loving cats and dogs waiting for their forever homes. Start your adoption journey today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-DEFAULT hover:bg-teal-dark text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Browse Pets
              </Button>
              <Button variant="outline" className="border-teal-DEFAULT text-teal-dark hover:bg-teal-light/20 font-medium px-6 py-3 rounded-lg transition-colors">
                Learn How to Adopt
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-coral-light/30 rounded-full filter blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-teal-light/30 rounded-full filter blur-2xl animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1" 
                  alt="Happy dog" 
                  className="rounded-lg shadow-lg transform rotate-2 z-10 h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Cute cat" 
                  className="rounded-lg shadow-lg transform -rotate-3 h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2" 
                  alt="Dog looking up" 
                  className="rounded-lg shadow-lg transform -rotate-2 h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                  alt="Kitten" 
                  className="rounded-lg shadow-lg transform rotate-3 z-10 h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
