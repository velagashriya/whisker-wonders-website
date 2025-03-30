
import { Pet } from '../types';

export const pets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    age: "2 years",
    breed: "Domestic Shorthair",
    gender: "female",
    type: "cat",
    description: "Luna is a playful and affectionate cat who loves to cuddle. She enjoys chasing toys and basking in sunlight. Luna gets along well with other cats and is good with children.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    adoptionFee: "$85",
    location: "Main Shelter",
    vaccinated: true,
    neutered: true,
    featured: true,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: true
    }
  },
  {
    id: 2,
    name: "Buddy",
    age: "3 years",
    breed: "Golden Retriever",
    gender: "male",
    type: "dog",
    description: "Buddy is an energetic and friendly dog who loves outdoor activities. He's well-trained, loves to play fetch, and is great with families. Buddy needs a home with a yard where he can run and play.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    adoptionFee: "$120",
    location: "Main Shelter",
    vaccinated: true,
    neutered: true,
    featured: true,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: false
    }
  },
  {
    id: 3,
    name: "Oliver",
    age: "1 year",
    breed: "Tabby",
    gender: "male",
    type: "cat",
    description: "Oliver is a curious and playful young cat. He loves exploring and is always up for a game. Oliver would do well in a home with plenty of toys and scratching posts.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    adoptionFee: "$75",
    location: "Foster Home",
    vaccinated: true,
    neutered: true,
    featured: true,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: true
    }
  },
  {
    id: 4,
    name: "Bella",
    age: "4 years",
    breed: "Beagle",
    gender: "female",
    type: "dog",
    description: "Bella is a sweet and gentle beagle who loves to sniff and explore. She's house-trained and enjoys leisurely walks. Bella would be perfect for a family looking for a laid-back companion.",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2",
    adoptionFee: "$100",
    location: "Foster Home",
    vaccinated: true,
    neutered: true,
    featured: true,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: true
    }
  },
  {
    id: 5,
    name: "Max",
    age: "5 years",
    breed: "Labrador Retriever",
    gender: "male",
    type: "dog",
    description: "Max is a loyal and obedient lab who loves swimming and playing fetch. He's great with kids and other dogs, making him perfect for an active family.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    adoptionFee: "$110",
    location: "Main Shelter",
    vaccinated: true,
    neutered: true,
    featured: false,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: false
    }
  },
  {
    id: 6,
    name: "Whiskers",
    age: "7 years",
    breed: "Maine Coon",
    gender: "male",
    type: "cat",
    description: "Whiskers is a majestic Maine Coon with a gentle temperament. He enjoys lounging and occasional play sessions. Whiskers would be ideal for a quiet home where he can be pampered.",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
    adoptionFee: "$90",
    location: "Foster Home",
    vaccinated: true,
    neutered: true,
    featured: false,
    goodWith: {
      children: false,
      otherPets: true,
      smallHomes: true
    }
  },
  {
    id: 7,
    name: "Daisy",
    age: "2 years",
    breed: "Border Collie",
    gender: "female",
    type: "dog",
    description: "Daisy is an intelligent and agile border collie who loves learning new tricks. She thrives with mental stimulation and exercise. Daisy would be great for an active person or family.",
    image: "https://images.unsplash.com/photo-1517423738875-5ce310acd3da",
    adoptionFee: "$125",
    location: "Main Shelter",
    vaccinated: true,
    neutered: true,
    featured: false,
    goodWith: {
      children: true,
      otherPets: true,
      smallHomes: false
    }
  },
  {
    id: 8,
    name: "Sophie",
    age: "3 years",
    breed: "Siamese",
    gender: "female",
    type: "cat",
    description: "Sophie is a vocal and affectionate Siamese who enjoys being the center of attention. She's playful and interactive, making her a wonderful companion for a cat lover.",
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
    adoptionFee: "$95",
    location: "Main Shelter",
    vaccinated: true,
    neutered: true,
    featured: false,
    goodWith: {
      children: true,
      otherPets: false,
      smallHomes: true
    }
  }
];

export const getFeaturedPets = () => {
  return pets.filter(pet => pet.featured);
};

export const getPetsByType = (type: 'cat' | 'dog' | 'all') => {
  if (type === 'all') return pets;
  return pets.filter(pet => pet.type === type);
};

export const getPetById = (id: number) => {
  return pets.find(pet => pet.id === id);
};
