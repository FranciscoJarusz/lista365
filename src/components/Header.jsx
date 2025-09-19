import React, { useState } from 'react';
import logo from '../assets/logo365.png';

const Header = ({showNav = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-999">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div>
              <a href="/">
                <img src={logo} alt="Logo Centro de Estudiantes – Lista 365" className="h-20 w-20 object-contain hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"/>
              </a>
            </div>

            {showNav && (
              <div className="relative z-[1001]">
                <button 
                  onClick={toggleMenu}
                  aria-label="Abrir menú"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36  " height="36" className="stroke-black hover:stroke-primario transition-colors duration-300 hover:cursor-pointer">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      ></div>

       <div className={`fixed top-0 right-0 h-screen w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] bg-gradient-to-br from-primario to-secundario z-[1000] transition-all duration-300 ease-in-out ${
         isMenuOpen ? 'right-0' : 'right-[-100%]'
       }`}>
          <div className="flex justify-between items-center px-12 py-4 border-b border-white/40">
            <p className="text-white text-2xl font-bold">Menú</p>
            <button 
              onClick={closeMenu}
              className="bg-transparent border-none text-white text-3xl cursor-pointer p-2 transition-transform duration-300 hover:scale-125"
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>
        
        <div className="pt-8 px-10 pb-10 h-full flex flex-col justify-start items-center gap-8">
        
          <nav className="flex flex-col gap-6 w-full items-center">
              <a 
                href="#nosotros" 
                onClick={closeMenu}
                className="text-white no-underline text-xl font-bold py-4 px-8 rounded-[25px] transition-all duration-300 text-center w-full max-w-[250px] relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0"
              >
                Nosotros
              </a>
            <a 
              href="#integrantes" 
              onClick={closeMenu}
              className="text-white no-underline text-xl font-bold py-4 px-8 rounded-[25px] transition-all duration-300 text-center w-full max-w-[250px] relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0"
            >
              Integrantes
            </a>            
            <a 
              href="#recursos" 
              onClick={closeMenu}
              className="text-white no-underline text-xl font-bold py-4 px-8 rounded-[25px] transition-all duration-300 text-center w-full max-w-[250px] relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0"
            >
              Recursos
            </a>
            <a 
              href="#preguntas-frecuentes" 
              onClick={closeMenu}
              className="text-white no-underline text-xl font-bold py-4 px-8 rounded-[25px] transition-all duration-300 text-center w-full max-w-[250px] relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;