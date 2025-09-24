import React from 'react';

const Voluntariado = () => {
    return (
        <div id="voluntariado" className="p-6 flex flex-col items-center justify-center mt-20 gap-6">

            <h1 className="text-4xl md:text-6xl font-bold text-primario text-center">Voluntariado</h1>

            <div className="h-1 w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <p className="text-md text-gray-600 mb-12 text-center">Conocé nuestras actividades de voluntariado.</p> 

        </div>
    );
};

export default Voluntariado;