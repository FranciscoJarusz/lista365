import React from 'react';

const Recursos = () => {
    return (
        <div id="recursos" className="p-6 flex flex-col items-center justify-center mt-20">
            
            <div className="flex flex-col items-center justify-center gap-6">            
            
                <h1 className="text-4xl md:text-6xl font-bold text-black flex items-center gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 640" fill="var(--color-primario)">
                        <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM288 224C288 215.2 295.2 208 304 208L336 208C344.8 208 352 215.2 352 224L352 264L392 264C400.8 264 408 271.2 408 280L408 312C408 320.8 400.8 328 392 328L352 328L352 368C352 376.8 344.8 384 336 384L304 384C295.2 384 288 376.8 288 368L288 328L248 328C239.2 328 232 320.8 232 312L232 280C232 271.2 239.2 264 248 264L288 264L288 224z"/>
                    </svg>

                    <span><span className="text-primario">Recursos</span> útiles</span>
                    
                </h1>

                <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

                <p className="text-md text-gray-600 mb-12 text-center">Accedé a todos los recursos que hemos preparado para ayudarte en tu carrera.</p>
            
            </div>

            
            <div className="flex flex-col items-left justify-center max-w-3xl w-full mx-auto gap-8 md:gap-12 px-4 md:px-0">
                
                <div className="flex flex-col items-left gap-3 md:gap-4 bg-gray-50 p-4 md:p-6 rounded-xl shadow-lg">

                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-file-earmark-medical" viewBox="0 0 16 16" fill="var(--color-primario)">
                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
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