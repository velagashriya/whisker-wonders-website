
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Cat, Dog, Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Whisker Wonders</h3>
            <p className="mb-4 text-gray-300">
              Finding loving homes for cats and dogs in need since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#featured-pets" className="text-gray-300 hover:text-white transition-colors">Available Pets</a></li>
              <li><a href="#adoption-process" className="text-gray-300 hover:text-white transition-colors">Adoption Process</a></li>
              <li><a href="#about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-teal-light" />
                <span className="text-gray-300">123 Adoption Lane, Pet City, PC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-light" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-light" />
                <span className="text-gray-300">adopt@whiskerwonders.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Hours:</h5>
              <p className="text-gray-300">Mon-Fri: 10am - 6pm</p>
              <p className="text-gray-300">Sat-Sun: 9am - 5pm</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated on new pets, events, and adoption specials.
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button className="bg-teal-DEFAULT hover:bg-teal-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center">
          <div className="flex items-center justify-center mb-4">
            <Cat size={20} className="text-teal-light mr-1" />
            <span className="mx-2 text-gray-400">•</span>
            <Heart size={20} className="text-coral-DEFAULT mx-1" />
            <span className="mx-2 text-gray-400">•</span>
            <Dog size={20} className="text-teal-light ml-1" />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Whisker Wonders. All rights reserved. Made with love for pets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
