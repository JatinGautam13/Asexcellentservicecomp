import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaBars, FaTimes } from 'react-icons/fa';

const HelpNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-6 py-4 relative">
      {/* Logo Section */}
      <div className="flex items-center gap-4 text-[#0e171b]">
        <div className="size-[60px] pt-2">
          <img src="src/assets/loooooogo-removebg-preview.png" alt="Logo" />
        </div>
        <h2 className="text-[#0e171b] text-lg font-bold leading-tight tracking-[-0.015em]">
          Excellent Services
        </h2>
      </div>

      {/* Menu Toggle Button (Visible on mobile) */}
      <button
        className="text-2xl lg:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Side Drawer Menu (Slides in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden z-50`}
      >
        {/* Close Button Inside Drawer */}
        <button
          className="absolute top-4 left-4 text-2xl text-gray-600 focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col mt-16 space-y-6 px-6">
        <Link
            to="/"
            className="text-[#0e171b] text-sm font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-[#0e171b] text-sm font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-[#0e171b] text-sm font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/reviews"
            className="text-[#0e171b] text-sm font-medium hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </Link>
        
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            <button className="flex w-full items-center justify-center rounded-full h-10 bg-[#19a2e6] text-slate-50 text-sm font-bold">
              Book now
            </button>
          </Link>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
      <Link
          to="/"
          className="relative text-[#0e171b] text-sm font-medium leading-normal transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="relative text-[#0e171b] text-sm font-medium leading-normal transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          Services
        </Link>
        <Link
          to="/about"
          className="relative text-[#0e171b] text-sm font-medium leading-normal transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          About
        </Link>
        <Link
          to="/reviews"
          className="relative text-[#0e171b] text-sm font-medium leading-normal transition-transform transform hover:scale-110 hover:text-blue-600"
        >
          Reviews
        </Link>
       
        <Link to="/booking">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#19a2e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] transition-transform transform active:scale-95">
            <span className="truncate">Book now</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default HelpNav;




