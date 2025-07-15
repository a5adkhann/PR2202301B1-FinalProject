import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

const TopNavbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center border-b">
      <div className="text-2xl font-bold text-gray-800">
        Dashboard
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition">
          <UserCircle size={24} />
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
