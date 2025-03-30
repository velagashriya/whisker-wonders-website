
import React, { useState } from 'react';
import PetCard from './PetCard';
import { Button } from '@/components/ui/button';
import { Cat, Dog } from 'lucide-react';
import { Pet, PetType } from '@/types';
import { getFeaturedPets, getPetsByType } from '@/data/pets';

const FeaturedPets = () => {
  const [activeTab, setActiveTab] = useState<'all' | PetType>('all');
  const featuredPets = getFeaturedPets();
  
  const getFilteredPets = (): Pet[] => {
    if (activeTab === 'all') return featuredPets;
    return featuredPets.filter(pet => pet.type === activeTab);
  };

  return (
    <section id="featured-pets" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Adorable Pets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our amazing cats and dogs looking for their forever homes. Each one has a unique personality and lots of love to give.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={activeTab === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveTab('all')}
              className={`rounded-l-md rounded-r-none ${activeTab === 'all' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}`}
            >
              All Pets
            </Button>
            <Button
              variant={activeTab === 'cat' ? 'default' : 'outline'}
              onClick={() => setActiveTab('cat')}
              className={`rounded-none border-x-0 flex items-center gap-1 ${activeTab === 'cat' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}`}
            >
              <Cat size={16} />
              <span>Cats</span>
            </Button>
            <Button
              variant={activeTab === 'dog' ? 'default' : 'outline'}
              onClick={() => setActiveTab('dog')}
              className={`rounded-r-md rounded-l-none flex items-center gap-1 ${activeTab === 'dog' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}`}
            >
              <Dog size={16} />
              <span>Dogs</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getFilteredPets().map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-teal-DEFAULT hover:bg-teal-dark text-white px-8 py-3 rounded-lg text-lg font-medium"
          >
            View All Pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
