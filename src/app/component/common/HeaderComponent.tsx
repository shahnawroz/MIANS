// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-md z-10 p-4">
      <div className="flex justify-between items-center">
        <div className="logo text-white">My Logo</div>
        
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="hover:text-blue-500 text-white">
            Our Team
          </Link>
          <Link href="#testimonials" className="hover:text-blue-500 text-white">
            Case Study
          </Link>
          <Link href="#contact" className="hover:text-blue-500 text-white">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation with Animation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col mt-4 space-y-2 bg-black items-end">
          <div className="flex flex-col items-end">
            <Link href="#services" className="text-white">
              Our Team
            </Link>
            <div className="w-full h-[2px] bg-white mt-1"></div>
          </div>
          <div className="flex flex-col items-end">
            <Link href="#testimonials" className="text-white">
              Case Study
            </Link>
            <div className="w-full h-[2px] bg-white mt-1"></div>
          </div>
          <div className="flex flex-col items-end">
            <Link href="#contact" className="text-white">
              Contact
            </Link>
            <div className="w-full h-[2px] bg-white mt-1"></div>
          </div>
        </nav>
       )}
    </header>
  );
};

export default HeaderComponent;
