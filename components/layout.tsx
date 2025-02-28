import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Demo from './demo';
import HeroComponent from './hero';

// type HomeLayoutProps = {
//   children: React.ReactNode
// }

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <Demo />
      <Footer />
    </div>
  );
};

export default HomeLayout;
