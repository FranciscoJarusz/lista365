import React from 'react';
import directivaImg from '../assets/hero.jpg';
import linkedinIcon from '../assets/linkedin.svg';

const Integrantes = () => {
    return (
        <div id="integrantes" className="p-6 flex flex-col items-center justify-center mt-20 mx-auto gap-12">
            <h1 className="text-6xl font-bold text-black"><span className="text-primario">Conocé</span> a nuestros <span className="text-primario">integrantes</span></h1>

            <h2 className="text-4xl font-bold text-primario">Directiva</h2>

            <div className="p-6 flex items-center justify-center gap-12">
                
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={directivaImg} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Jesús Ressia</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Presidente</p>
                     <a href="https://www.instagram.com/franciscojarusz/" target="_blank" className="flex items-center gap-4 bg-primario rounded-full px-6 py-2 text-lg text-white hover:scale-105 transition-all duration-300 ease-in-out w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={directivaImg} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Mateo Schenone</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Vice Presidente</p>
                     <a href="https://www.instagram.com/franciscojarusz/" target="_blank" className="flex items-center gap-4 bg-primario rounded-full px-6 py-2 text-lg text-white hover:scale-105 transition-all duration-300 ease-in-out w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={directivaImg} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Fátima Cirulli</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Secretaria general</p>
                     <a href="https://www.instagram.com/franciscojarusz/" target="_blank" className="flex items-center gap-4 bg-primario rounded-full px-6 py-2 text-lg text-white hover:scale-105 transition-all duration-300 ease-in-out w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

            </div>
        </div>
    );
};

export default Integrantes;
