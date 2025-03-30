
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin } from 'lucide-react';
import { Pet } from '@/types';

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card className="overflow-hidden pet-card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pet.image} 
          alt={pet.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white"
          >
            <Heart size={16} className="text-coral-DEFAULT" />
          </Button>
        </div>
        <div className="absolute bottom-2 left-2 flex gap-1">
          <Badge className="bg-teal-dark">{pet.type === 'cat' ? 'Cat' : 'Dog'}</Badge>
          {pet.gender === 'male' ? (
            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">Male</Badge>
          ) : (
            <Badge variant="outline" className="bg-pink-100 text-pink-700 border-pink-200">Female</Badge>
          )}
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{pet.name}</h3>
          <span className="font-medium text-green-600">{pet.adoptionFee}</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">{pet.breed} • {pet.age}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={14} className="mr-1" />
          <span>{pet.location}</span>
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{pet.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button className="w-full bg-teal-DEFAULT hover:bg-teal-dark">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
