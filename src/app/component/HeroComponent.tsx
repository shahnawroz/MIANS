// components/Hero.tsx
import React from 'react';

const HeroComponent = () => {
  return (
    <section className="hero-section bg-black flex items-center justify-center h-screen">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to MIANS Website</h1>
        <p className="text-lg mb-8 text-white">We provide top-notch IT solutions.</p>
        
      </div>
    </section>
  );
};

export default HeroComponent;
