import React from 'react';
import logo from '../assets/logo365.png';

const Header = ({showNav = true }) => {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3">
          <div>
            <a href="/">
              <img src={logo} alt="Logo Centro de Estudiantes – Lista 365" className="h-20 w-20 object-contain hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"/>
            </a>
          </div>

          {showNav && (
            <nav className="flex gap-12">
              <a href="#nosotros" className="animacion-underline text-black text-lg font-bold">
                Nosotros
              </a>
              <a href="#integrantes" className="animacion-underline text-black text-lg font-bold">
                Integrantes
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;