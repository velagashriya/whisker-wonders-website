
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cat, Dog, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-teal-dark font-display">Whisker Wonders</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Home</a>
          <a href="#featured-pets" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Adopt</a>
          <a href="#adoption-process" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">How It Works</a>
          <a href="#about-us" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Contact</a>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex items-center space-x-1">
              <Cat size={16} />
              <span>Cats</span>
            </Button>
            <Button size="sm" variant="outline" className="flex items-center space-x-1">
              <Dog size={16} />
              <span>Dogs</span>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Home</a>
            <a href="#featured-pets" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Adopt</a>
            <a href="#adoption-process" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">How It Works</a>
            <a href="#about-us" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-dark transition-colors font-medium">Contact</a>
            <div className="flex space-x-2 pt-2">
              <Button size="sm" variant="outline" className="flex items-center space-x-1">
                <Cat size={16} />
                <span>Cats</span>
              </Button>
              <Button size="sm" variant="outline" className="flex items-center space-x-1">
                <Dog size={16} />
                <span>Dogs</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
