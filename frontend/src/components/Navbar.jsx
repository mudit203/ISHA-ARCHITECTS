import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();

  // const isActive = (path) => {
  //   return location.pathname === path ? 'text-yellow-500' : 'text-gray-700';
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-yellow-400 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png" 
              alt="Logo"
              className="h-8 w-auto"
            />
            <a to="/" className="ml-2 text-xl font-bold text-black">
              ISHA ARCHITECTS
            </a>
          </div>
          
          {/* Burger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a 
                to="/"
                className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                to="/gallery"
                className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </a>
              <a
                to="/about"
                className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a 
                to="/contact"
                className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-400">
            <a 
              to="/"
              className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              to="/gallery"
              className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              to="/about"
              className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              to="/contact"
              className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;