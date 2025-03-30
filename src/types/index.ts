
export type PetType = 'cat' | 'dog';

export interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  gender: 'male' | 'female';
  type: PetType;
  description: string;
  image: string;
  adoptionFee: string;
  location: string;
  vaccinated: boolean;
  neutered: boolean;
  featured: boolean;
  goodWith?: {
    children?: boolean;
    otherPets?: boolean;
    smallHomes?: boolean;
  };
}
