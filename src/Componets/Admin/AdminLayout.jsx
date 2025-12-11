import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUsers, FaCog, FaBox } from "react-icons/fa";


import { Link } from "react-router-dom";


function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transition-all duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Panel</h1>

          {/* Close Icon Mobile */}
          <FaTimes
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="space-y-4 text-lg">
          
           <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/dashboard" className="flex items-center gap-3 w-full">
              <FaUsers /> Dashboard
            </Link>
          </li>


          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/clients" className="flex items-center gap-3 w-full">
              <FaUsers /> Clients
            </Link>
          </li>

          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/subscript" className="flex items-center gap-3 w-full">
              <FaUsers /> Subscript
            </Link>
          </li>
              <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/contact" className="flex items-center gap-3 w-full">
              <FaUsers /> Contact
            </Link>
          </li>
            <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/projects" className="flex items-center gap-3 w-full">
              <FaUsers /> Projects
            </Link>
          </li>

          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
            <Link to="/setting" className="flex items-center gap-3 w-full">
              <FaUsers /> Setting
            </Link>
          </li>

        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="text-2xl md:hidden cursor-pointer" onClick={() => setOpen(true)}>
            <FaBars />
          </div>

          <h2 className="font-semibold text-xl">Admin Dashboard</h2>

          <div className="flex items-center gap-4">
            <span className="font-semibold">Welcome, Admin</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
             <Link to="/"> Logout</Link>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
