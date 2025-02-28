import React from 'react';
// import MobileNav from './components/mobile-nav'
import HeroComponent from './components/Hero';

const HomePage = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center overflow-hidden bg-white p-4 md:w-[1200px]">
      <HeroComponent />
    </div>
  );
};

export default HomePage;
