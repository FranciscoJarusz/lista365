import React from 'react';
import Header from '../components/Header';
import QuienesSomos from '../components/Quienes-somos';
import Integrantes from '../components/Integrantes';
import Recursos from '../components/Recursos';
import PreguntasFrecuentes from '../components/Preguntas-frecuentes';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
        
      <Header showNav={true} />
      
      <main className="flex-grow">
        <QuienesSomos />
        <Integrantes />
        <Recursos />
        <PreguntasFrecuentes />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;