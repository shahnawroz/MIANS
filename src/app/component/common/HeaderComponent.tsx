// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-10 p-4">
      <div className="flex justify-between items-center">
      <Link href="/" className="logo text-black">
          <Image src="/images/logo.png" alt="MIANS" width={100} height={20} />
        </Link>
        
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black md:hidden"
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
          <Link href="#services" className="border-b-2 border-transparent hover:border-b-gray-600 transition-all duration-300 text-black">
            Our Team
          </Link>
          <Link href="#testimonials" className="border-b-2 border-transparent hover:border-b-gray-600 transition-all duration-300 text-black">
            Case Study
          </Link>
          <Link href="#contact" className="border-b-2 border-transparent hover:border-b-gray-600 transition-all duration-300 text-black">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation with Animation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col mt-4 space-y-2 bg-white items-end">
          <div className="flex flex-col items-end">
            <Link href="#services" className="text-black">
              Our Team
            </Link>
            <div className="w-full h-[2px] bg-black mt-1"></div>
          </div>
          <div className="flex flex-col items-end">
            <Link href="#testimonials" className="text-black ">
              Case Study
            </Link>
            <div className="w-full h-[2px] bg-black mt-1"></div>
          </div>
          <div className="flex flex-col items-end">
            <Link href="#contact" className="text-black">
              Contact
            </Link>
            <div className="w-full h-[2px] bg-black mt-1"></div>
          </div>
        </nav>
       )}
    </header>
  );
};

export default HeaderComponent;
