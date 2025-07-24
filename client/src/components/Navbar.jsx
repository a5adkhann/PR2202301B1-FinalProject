import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">MyApp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/categories" className="block text-gray-700 hover:text-blue-600">Categories</Link>
            <Link to="/products" className="block text-gray-700 hover:text-blue-600">Products</Link>
            <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 space-y-1 shadow">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/categories" className="block text-gray-700 hover:text-blue-600">Categories</Link>
          <Link to="/products" className="block text-gray-700 hover:text-blue-600">Products</Link>
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
