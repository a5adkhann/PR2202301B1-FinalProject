import React, { useState } from 'react'
import { BellIcon, ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline'
const TopNavbar = ({logoutUser}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Left: Mobile menu button */}
       <button className="md:hidden p-2">
  <Bars3Icon className="h-6 w-6 text-gray-600" />
</button>


        {/* Center: Title / Breadcrumb */}
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

        {/* Right: Notifications & User */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded hover:bg-gray-100">
            <BellIcon className="h-6 w-6 text-gray-600" />
          </button>

          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100"
            >
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden md:inline text-gray-700">John Doe</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <button className="block px-4 py-2 hover:bg-gray-100 w-[100%] text-left" onClick={logoutUser}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
)
}

export default TopNavbar
