
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                alt="Volunteers with pets" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 h-full w-full bg-teal-DEFAULT rounded-lg"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Whisker Wonders, we believe every pet deserves a loving home. Our mission is to rescue, rehabilitate, and rehome cats and dogs in need, while educating the community about responsible pet ownership.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since 2015, we've helped over 2,000 animals find their forever homes. Our team of dedicated volunteers and staff work tirelessly to ensure each pet receives the care and attention they need.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-teal-DEFAULT">2,000+</h3>
                <p className="text-gray-600">Pets Adopted</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-teal-DEFAULT">50+</h3>
                <p className="text-gray-600">Dedicated Volunteers</p>
              </div>
            </div>
            <Button className="bg-teal-DEFAULT hover:bg-teal-dark text-white px-6 py-3 rounded-lg">
              Join Our Team
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Adopters Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from families who have found their perfect pet companions through our adoption program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Adopted Luna</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Adopting Luna was the best decision we made. The staff at Whisker Wonders made the process so easy and were incredibly helpful throughout."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Smith" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Smith</h4>
                  <p className="text-gray-500 text-sm">Adopted Buddy</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Buddy has brought so much joy to our family. We're grateful to Whisker Wonders for helping us find the perfect addition to our home."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Emma Davis" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emma Davis</h4>
                  <p className="text-gray-500 text-sm">Adopted Oliver</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The adoption process was smooth and the staff truly cared about finding the right match. Oliver is now my best friend and I couldn't be happier!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
