import React from 'react';
import cameraIcon from '../assets/camera.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Integrantes = () => {
    return (
        <div id="integrantes" className="p-6 flex flex-col items-center justify-center mt-20 mx-auto gap-6">
            <h1 className="text-6xl font-bold text-black"><span className="text-primario">Conocé</span> a nuestros <span className="text-primario">integrantes</span></h1>

            <div className="h-1 w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <h2 className="text-3xl font-bold text-primario">Comisión Directiva</h2>

            <div className="p-6 flex items-center justify-center gap-12">
                
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={cameraIcon} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Jesús Ressia</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Presidente</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={cameraIcon} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Mateo Schenone</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Vice Presidente</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-6 rounded-xl w-80 shadow-lg">
                    <img src={cameraIcon} alt="Presidente" className="w-50 h-50 rounded-full object-cover" />
                    <h3 className="text-2xl font-medium text-black">Fátima Cirulli</h3>
                    <p className="text-lg text-primario font-bold max-w-2xl">Secretaria general</p>
                     <a href="/" target="_blank" className="flex items-center gap-4 gradiente-boton rounded-full px-6 py-2 text-lg text-white w-40">
                         <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6"/>
                          <span>LinkedIn</span>
                      </a>
                </div>

            </div>

            <h2 className="text-3xl font-bold text-primario">Vocales</h2>

            <div className="flex items-center justify-center gap-12">

                <p className="bg-gray-50 p-6 shadow-lg rounded-xl border-bottom-gradiente text-lg text-black text-wrap max-w-2xl">Vanesa Pierdomenico</p>
                <p className="bg-gray-50 p-6 shadow-lg rounded-xl border-bottom-gradiente text-lg text-black text-wrap max-w-2xl">Mateo Bugliolo</p>
                <p className="bg-gray-50 p-6 shadow-lg rounded-xl border-bottom-gradiente text-lg text-black text-wrap max-w-2xl">Damian Maldonado</p>

            </div>

        </div>
    );
};

export default Integrantes;
