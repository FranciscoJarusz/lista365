import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';

const Integrantes = () => {
    return (
        <div id="integrantes" className="p-6 flex flex-col items-center justify-center mt-20 mx-auto gap-6">
            
            <h1 className="text-4xl md:text-6xl font-bold text-black text-center"><span className="text-primario">Conocé</span> a nuestros <span className="text-primario">integrantes</span></h1>

            <div className="h-1 w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-primario mb-6 text-center">Comisión Directiva</h2>

            <div className="flex items-center justify-center gap-12 flex-col lg:flex-row">
                
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Jesús Ressia</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Presidente</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-sm md:text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Mateo Schenone</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Vice Presidente</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-sm md:text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Fátima Cirulli</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Secretaria general</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-sm md:text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primario mt-12 mb-6 text-center">Vocales</h2>

            <div className="flex items-center justify-center gap-6 md:gap-12 flex-col lg:flex-row px-4 md:px-0">

                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl border-bottom-gradiente text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto">Vanesa Pierdomenico</p>
                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl border-bottom-gradiente text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto">Mateo Bugliolo</p>
                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl border-bottom-gradiente text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto">Damian Maldonado</p>

            </div>

        </div>
    );
};

export default Integrantes;
