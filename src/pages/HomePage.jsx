import React from 'react';
import Header from '../components/Header';
import QuienesSomos from '../components/Quienes-somos';
import Integrantes from '../components/Integrantes';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
        
      <Header showNav={true} />
      
      <main className="flex-grow">
        <QuienesSomos />
        <Integrantes />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
