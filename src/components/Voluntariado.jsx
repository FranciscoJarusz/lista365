import React from 'react';

const Voluntariado = () => {
    return (
        <div id="voluntariado" className="p-6 flex flex-col items-center justify-center mt-20 gap-6">

            <h1 className="text-4xl md:text-6xl font-bold text-primario text-center flex items-center gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 640" fill="var(--color-primario)">
                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM288 312C288 303.2 295.2 296 304 296L336 296C344.8 296 352 303.2 352 312L352 352L392 352C400.8 352 408 359.2 408 368L408 400C408 408.8 400.8 416 392 416L352 416L352 456C352 464.8 344.8 472 336 472L304 472C295.2 472 288 464.8 288 456L288 416L248 416C239.2 416 232 408.8 232 400L232 368C232 359.2 239.2 352 248 352L288 352L288 312z"/>
                </svg>
                Voluntariado
            </h1>

            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <p className="text-md text-gray-600 mb-12 text-center">Conocé nuestras actividades de voluntariado.</p> 

        </div>
    );
};

export default Voluntariado;