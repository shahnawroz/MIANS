// pages/index.tsx
"use client"
import Header from '../app/component/common/HeaderComponent';
import Hero from '../app/component/HeroComponent';
import FooterComponent from './component/common/FooterComponent';


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      
      <Header />
      <main>
        <Hero />
        
      </main>
<FooterComponent/>
    </div>
  );
};

export default HomePage;
