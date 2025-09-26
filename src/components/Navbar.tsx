import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-gradient bg-gradient-to-r from-purple-600 to-pink-600 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">IELTS Pro</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Courses</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Mock Tests</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Contact</a>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Courses</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Mock Tests</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">Contact</a>
            <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;