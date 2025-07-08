import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoWithText } from './Logo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <LogoWithText size="md" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('mentors')}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              Mentors
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-200"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Call
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-all duration-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('mentors')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              Mentors
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="block w-full text-center mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
