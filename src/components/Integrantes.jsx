import React from 'react';

const Integrantes = () => {
    return (
        <div id="integrantes" className="p-6 flex flex-col items-center justify-center mt-20 mx-auto gap-6">
            
            <h1 className="text-4xl md:text-6xl font-bold text-black text-center"><span className="text-primario">Conocé</span> a nuestros <span className="text-primario">integrantes</span></h1>

            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-primario mb-6 text-center">Comisión Directiva</h2>

            <div className="flex items-center justify-center gap-12 flex-col lg:flex-row">
                
                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg w-full lg:w-auto border-b-4 border-primario">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Jesús Ressia</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Presidente</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg w-full lg:w-auto border-b-4 border-primario">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Mateo Schenone</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Vice Presidente</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 py-4 md:py-6 px-6 md:px-12 rounded-xl shadow-lg w-full lg:w-auto border-b-4 border-primario">
                    <h3 className="text-lg md:text-2xl font-medium text-black text-center text-nowrap">Fátima Cirulli</h3>
                    <p className="text-base md:text-lg text-primario font-bold max-w-2xl text-center">Secretaria general</p>
                </div>

            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primario mt-12 mb-6 text-center">Vocales</h2>

            <div className="flex items-center justify-center gap-6 md:gap-12 flex-col lg:flex-row px-4 md:px-0">

                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto border-b-4 border-primario">Vanesa Pierdomenico</p>
                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto border-b-4 border-primario">Mateo Bugliolo</p>
                <p className="bg-gray-50 p-4 md:p-6 shadow-lg rounded-xl text-base md:text-lg text-black text-wrap max-w-2xl text-center w-full lg:w-auto border-b-4 border-primario">Damian Maldonado</p>

            </div>

        </div>
    );
};

export default Integrantes;
