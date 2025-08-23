import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-md z-50 fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="./images/logo.png" alt="Logo Site" className="w-40 h-18" />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 font-medium">
          <a href="/" className="text-[20px] text-gray-800 capitalize px-4 py-1 hover:bg-blue-800 hover:text-white rounded">
            Home
          </a>
          <a href="/all-jobs" className="text-[20px] text-gray-800 px-4 py-1 hover:bg-blue-800 hover:text-white rounded">
            Find Offer
          </a>
          <a href="#" className="text-[20px] text-gray-800 px-4 py-1 hover:bg-blue-800 hover:text-white rounded">
            About Us
          </a>
        </div>

        {/* Desktop Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-auto text-lg hover:bg-blue-500 hover:text-white bg-[#2e55fa] flex items-center border px-6 py-3 rounded"
          >
            <FiUser className="mr-2 text-[25px] text-white" />
            <p className="text-white">Se Connecter</p>
            <AiOutlineDown className="ml-3 text-2xl text-white" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg border rounded-md z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Se Connecter</a>
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
          <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Find Offer</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">About Us</a>
          <hr />
          <a href="#" className="text-gray-800 hover:text-blue-600">Se Connecter</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Votre compte</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Suivre candidature</a>
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
