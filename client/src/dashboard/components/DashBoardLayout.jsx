import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import { Outlet } from 'react-router-dom'

const DashBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all ${
          sidebarOpen ? 'w-64' : 'w-16'
        } hidden md:block`}>
        <Sidebar collapsed={!sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main section */}
      <div className="flex flex-col flex-1">
        <TopNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashBoardLayout
