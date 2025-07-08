import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-black text-gray-900">
              <span className="text-primary">Role</span>Raise
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('mentors')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Mentors
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Book a Call
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('mentors')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Mentors
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="block w-full text-left px-3 py-2 bg-primary text-white rounded-lg font-semibold mx-3 mt-2"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
