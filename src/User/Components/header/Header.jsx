import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-md z-50 fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <img src="./images/logo.jpg" alt="Logo Site" className=" h-16" />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 font-medium">
          <Link to="/" className="text-[20px] text-gray-800 capitalize px-4 py-1 hover:bg-[#E0EEFF]  rounded">
            Home
          </Link>
          <Link to="/all-jobs" className="text-[20px] text-gray-800 px-4 py-1 hover:bg-[#E0EEFF]  rounded">
            Find Offer
          </Link>
          <Link to="#" className="text-[20px] text-gray-800 px-4 py-1 hover:bg-[#E0EEFF]  rounded">
            About Us
          </Link>
        </div>

        {/* Desktop Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-auto text-lg  bg-[#E0EEFF] flex items-center  px-4 py-2 rounded-[10px] cursor-pointer">
          
            <FiUser className="mr-2 text-[25px] text-[#1967D2]" />
            <p className="text-[#1967D2]">Se Connecter</p>
            <AiOutlineDown className="ml-3 text-2xl text-[#1967D2]" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-10">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Se Connecter</Link>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Votre compte</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Suivre candidature</a>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-3xl text-gray-800">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src="./images/logo.png" alt="Logo" className="h-12" />
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 space-y-4 text-lg font-medium">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/all-jobs" className="text-gray-800 hover:text-blue-600">Find Offer</Link>
          <Link to="#" className="text-gray-800 hover:text-blue-600">About Us</Link>
          <hr />
          <Link to="#" className="text-gray-800 hover:text-blue-600">Se Connecter</Link>
          <Link to="#" className="text-gray-800 hover:text-blue-600">Votre compte</Link>
          <Link to="#" className="text-gray-800 hover:text-blue-600">Suivre candidature</Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        >

        </div>
      )}
    </nav>
  );
};

export default Header;
