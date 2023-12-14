import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Tutorial from './components/Tutorial';
import Pricing from '../../components/Pricing';
import Purchase from '../../components/Purchase';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Tutorial />
      <Pricing />
      <Purchase />
    </>
  );
};

export default Home;
