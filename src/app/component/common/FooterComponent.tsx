// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="flex space-x-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:text-blue-400 transition-all duration-300" />
          </a>
        </div>

        <div className="text-center mb-4">
          <p>Address: MIANS, Your Street, Your City, Your State</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} MIANS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
