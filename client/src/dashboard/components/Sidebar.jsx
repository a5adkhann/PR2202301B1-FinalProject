import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { HomeIcon, InboxIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <div className="flex h-screen text-black">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex flex-col bg-white shadow-lg transition-all duration-300
          ${open ? 'w-64' : 'w-16'}
        `}
      >
        {/* Toggle button */}
        <button
          className="self-end m-2 p-1 rounded hover:bg-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? '←' : '→'}
        </button>

        {/* Branding */}
        {open && (
          <div className="px-4 py-2 text-xl font-bold">
            Dashboard
          </div>
        )}

        {/* Menu */}
        <nav className="flex-1 px-2 space-y-2 overflow-y-auto">
          <Link
            to="/"
            className="flex items-center p-2 space-x-3 rounded hover:bg-gray-100"
          >
            <HomeIcon className="w-6 h-6 text-gray-600" />
            {open && <span>Home</span>}
          </Link>

          <Link
            to="/inbox"
            className="flex items-center p-2 space-x-3 rounded hover:bg-gray-100"
          >
            <InboxIcon className="w-6 h-6 text-gray-600" />
            {open && <span>Inbox</span>}
          </Link>

          {/* Category with dropdown */}
          <div>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex w-full items-center p-2 space-x-3 rounded hover:bg-gray-100"
            >
              <span className="w-6 h-6 text-gray-600">📂</span>
              {open && (
                <>
                  <span className="flex-1 text-left">Category</span>
                  <BsChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      categoryOpen ? 'rotate-180' : ''
                    }`}
                  />
                </>
              )}
            </button>

            {open && categoryOpen && (
              <div className="ml-8 flex flex-col space-y-1">
                <Link to="addcategory" className="p-2 rounded hover:bg-gray-100">Add Category</Link>
                <Link to="viewcategory" className="p-2 rounded hover:bg-gray-100">View Category</Link>
              </div>
            )}
          </div>

          {/* Product with dropdown */}
          <div>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex w-full items-center p-2 space-x-3 rounded hover:bg-gray-100"
            >
              <span className="w-6 h-6 text-gray-600">📦</span>
              {open && (
                <>
                  <span className="flex-1 text-left">Product</span>
                  <BsChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      productOpen ? 'rotate-180' : ''
                    }`}
                  />
                </>
              )}
            </button>

            {open && productOpen && (
              <div className="ml-8 flex flex-col space-y-1">
                <Link to="addproduct" className="p-2 rounded hover:bg-gray-100">Add Product</Link>
                <Link to="viewproduct" className="p-2 rounded hover:bg-gray-100">View Product</Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main
        className="flex-1 transition-margin duration-300"
        style={{
          marginLeft: open ? (window.innerWidth < 640 ? 0 : 256) : 64
        }}
      >
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Main Content Area</h1>
        </div>
      </main>
    </div>
  )
}

export default Sidebar
