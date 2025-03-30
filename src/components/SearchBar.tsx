
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Cat, Dog, Search } from 'lucide-react';

const SearchBar = () => {
  const [petType, setPetType] = useState<'all' | 'cat' | 'dog'>('all');
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex gap-2 md:w-auto w-full">
          <Button
            variant={petType === 'all' ? 'default' : 'outline'}
            onClick={() => setPetType('all')}
            className={petType === 'all' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}
          >
            All Pets
          </Button>
          <Button
            variant={petType === 'cat' ? 'default' : 'outline'}
            onClick={() => setPetType('cat')}
            className={`flex items-center gap-1 ${petType === 'cat' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}`}
          >
            <Cat size={16} />
            <span>Cats</span>
          </Button>
          <Button
            variant={petType === 'dog' ? 'default' : 'outline'}
            onClick={() => setPetType('dog')}
            className={`flex items-center gap-1 ${petType === 'dog' ? 'bg-teal-DEFAULT hover:bg-teal-dark' : ''}`}
          >
            <Dog size={16} />
            <span>Dogs</span>
          </Button>
        </div>
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Search by name, breed, or location..."
            className="w-full pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Button className="bg-teal-DEFAULT hover:bg-teal-dark">
          Find a Pet
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
