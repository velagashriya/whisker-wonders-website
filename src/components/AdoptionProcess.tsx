
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, FileText, Heart, Home, Search } from 'lucide-react';

const AdoptionProcess = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-teal-DEFAULT" />,
      title: "Find Your Match",
      description: "Browse our available pets and find the one that steals your heart."
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-DEFAULT" />,
      title: "Submit Application",
      description: "Fill out our adoption application so we can learn about your home environment."
    },
    {
      icon: <Heart className="h-10 w-10 text-teal-DEFAULT" />,
      title: "Meet & Greet",
      description: "Visit our shelter to meet your potential pet and see if you're a good match."
    },
    {
      icon: <Home className="h-10 w-10 text-teal-DEFAULT" />,
      title: "Welcome Home",
      description: "Complete the adoption process and welcome your new family member home!"
    }
  ];

  return (
    <section id="adoption-process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Adopt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our adoption process is designed to ensure the best match between pets and their new families.
            Here's how it works:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center relative">
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <div className="absolute -top-3 -left-3 bg-teal-DEFAULT text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-teal-light/50 to-coral-light/30 rounded-xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-3">Ready to Give a Pet a Forever Home?</h3>
              <p className="text-gray-700">
                Our adoption counselors are ready to help you find the perfect pet for your family.
                Start your journey today!
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-dark mr-2" />
                  <span>All pets are vaccinated and health-checked</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-dark mr-2" />
                  <span>Post-adoption support available</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-teal-dark mr-2" />
                  <span>Adoption fees include spay/neuter and microchipping</span>
                </li>
              </ul>
            </div>
            <div>
              <Button className="bg-teal-DEFAULT hover:bg-teal-dark text-white px-8 py-3 rounded-lg text-lg font-medium">
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
