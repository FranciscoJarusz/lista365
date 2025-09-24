import React from 'react';

const Recursos = () => {
    return (
        <div id="recursos" className="p-6 flex flex-col items-center justify-center mt-20">
            
            <div className="flex flex-col items-center justify-center gap-6">            
            
                <h1 className="text-4xl md:text-6xl font-bold text-black"><span className="text-primario">Recursos</span> útiles</h1>

                <div className="h-1 w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

                <p className="text-md text-gray-600 mb-12 text-center">Accedé a todos los recursos que hemos preparado para ayudarte en tu carrera.</p>
            
            </div>

            
            <div className="flex flex-col items-left justify-center max-w-3xl w-full mx-auto gap-8 md:gap-12 px-4 md:px-0">
                
                <div className="flex flex-col items-left gap-3 md:gap-4 bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg">

                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" className="text-primario md:w-7 md:h-7">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <h2 className="text-xl md:text-2xl font-bold text-primario">Bibliografía digital</h2>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 text-wrap max-w-2xl">
                        Accedé a una recopilación de libros y manuales usados en las materias de la carrera.
                    </p>

                    <a href="https://drive.google.com/drive/folders/1H6jQ2K5hPKi9ClLSg4SxSHSsfR4Nz3_8" target="_blank" className="flex items-center justify-center gradiente-boton rounded-full py-2 px-4 text-md text-white w-30">
                        <span>Ver</span>
                    </a>

                </div>

            </div>

        </div>
    );
};

export default Recursos;    