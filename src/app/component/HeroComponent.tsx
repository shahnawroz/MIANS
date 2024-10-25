// components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroComponent: React.FC = () => {
  return (
    <section className="hero-section bg-[url('/images/bg.svg')] flex items-center justify-center h-screen">
      <div className="flex flex-col items-center text-center px-4">
        
        {/* Animated image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Image 
            src="/images/Logomark.png" // Ensure the image is in the 'public' folder
            alt="Logo"
            width={64} // Adjust width
            height={64} // Adjust height
          />
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 text-textprimarycolor">Welcome to MIANS Website</h1>
        <p className="text-lg mb-8 text-textsecondarycolor">We provide top-notch IT solutions.</p>
        
      </div>
    </section>
  );
};

export default HeroComponent;
