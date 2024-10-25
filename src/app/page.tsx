// pages/index.tsx
"use client"
import Header from '../app/component/common/HeaderComponent';
import Hero from '../app/component/HeroComponent';


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      
      <Header />
      <main>
        <Hero />
        
      </main>

    </div>
  );
};

export default HomePage;
