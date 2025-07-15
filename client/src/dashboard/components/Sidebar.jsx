import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 bg-gray-800 text-white flex justify-between items-center">
        <span className="font-bold text-xl">Dashboard</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 h-screen fixed top-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:translate-x-0 md:static md:h-auto`}
      >
        <div className="p-6 font-bold text-2xl border-b border-gray-700">Admin Panel</div>
        <nav className="flex flex-col p-4 space-y-2 text-sm">

          <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">Dashboard</a>

          {/* Categories Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('categories')}
              className="flex justify-between items-center w-full p-2 hover:bg-gray-700 rounded transition-colors"
            >
              <span>Categories</span>
              {openDropdown === 'categories' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openDropdown === 'categories' && (
              <div className="ml-4 flex flex-col space-y-1">
                <Link to="addcategory" className="hover:bg-gray-700 p-2 rounded transition-colors">Add Category</Link>
                <Link to="viewcategories" className="hover:bg-gray-700 p-2 rounded transition-colors">View Categories</Link>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('products')}
              className="flex justify-between items-center w-full p-2 hover:bg-gray-700 rounded transition-colors"
            >
              <span>Products</span>
              {openDropdown === 'products' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openDropdown === 'products' && (
              <div className="ml-4 flex flex-col space-y-1">
                <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">Add Product</a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">View Products</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">Users</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">Reports</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded transition-colors">Settings</a>
          
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
