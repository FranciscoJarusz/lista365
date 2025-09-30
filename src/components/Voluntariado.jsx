import React, { useState } from 'react';
import Calendar from './Calendario';

const Voluntariado = () => {
    const [currentMonth, setCurrentMonth] = useState(9);

    return (
        <div id="voluntariado" className="p-6 flex flex-col items-center justify-center mt-20 gap-6">

            <h1 className="text-4xl md:text-6xl font-bold text-black flex sm:flex-row flex-col items-center gap-4 md:gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 640" fill="var(--color-primario)">
                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM288 312C288 303.2 295.2 296 304 296L336 296C344.8 296 352 303.2 352 312L352 352L392 352C400.8 352 408 359.2 408 368L408 400C408 408.8 400.8 416 392 416L352 416L352 456C352 464.8 344.8 472 336 472L304 472C295.2 472 288 464.8 288 456L288 416L248 416C239.2 416 232 408.8 232 400L232 368C232 359.2 239.2 352 248 352L288 352L288 312z"/>
                </svg>
                Voluntariado
            </h1>

            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <p className="text-md text-gray-600 mb-12 text-center">Conocé nuestras actividades de voluntariado.</p> 

            <div className="flex flex-col items-center justify-center gap-10 -mt-10 w-full px-6">

                <div className="max-w-6xl">
                    <Calendar onMonthChange={setCurrentMonth} />
                </div>

                {currentMonth === 9 && (
                    <div className="flex flex-col items-center justify-center gap-10 max-w-4xl">

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full max-w-4xl px-4">

                            <p className='bg-[#10B981] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-white text-sm md:text-lg font-bold text-center w-full sm:w-auto'>Con APS (14:00 a 16:00hs.)</p>
                            <p className='bg-[#fca704] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-white text-sm md:text-lg font-bold text-center w-full sm:w-auto'>365 (14:00 a 16:00hs.)</p>

                        </div>

                        <div className="w-full max-w-6xl bg-gray-100 p-6 rounded-xl mx-4 shadow-lg">

                            <p className="flex flex-col gap-2 text-left text-sm sm:text-md text-gray-600">
                                <span className='block text-[#10B981]'>08-09: <span className="font-bold">Barrio Cielos del Sur (Cefenno Namuncura y De los Inmigrantes)</span></span>
                                <span className='block text-[#fca704]'>12-09: <span className="font-bold">Plaza Principal (Av. Soarez y Moreno)</span></span>
                                <span className='block text-[#fca704]'>15-09: <span className="font-bold">Barrio Gral. San Martín (Ex Fonavi, Faverio 170)</span></span>
                                <span className='block text-[#10B981]'>22-09: <span className="font-bold">Barrio Los Arces (Gregorio Molina y Paunero)</span></span>
                                <span className='block text-[#fca704]'>26-09: <span className="font-bold">Plaza Belgrano (Miguel Calderon y Brandsen)</span></span>
                                <span className='block text-[#10B981]'>29-09: <span className="font-bold">Barrio 25 de Mayo (Francisco Ramirez y Juana Manso)</span></span>
                            </p>

                        </div>
                    
                    </div>
                )}
                {currentMonth === 10 && (
                    <div className="flex flex-col items-center justify-center gap-6 max-w-4xl">

                        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl px-4">

                            <p className='bg-[#05681e] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-white text-sm md:text-lg font-bold text-center w-full sm:w-auto'>Servicios (14:00 a 16:00hs.)</p>
                            
                            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-[#05681e] to-[#236634] rounded-xl"></div>
                            
                            <div className='text-gray-600 flex flex-col items-center justify-center'>
                                <p className=''>Admisión y gestiones</p>
                                <p className=''>Medicina Clínica</p>
                                <p className=''>Odontología</p>
                                <p className=''>Enfermería</p>
                                <p className=''>Trabajo Social</p>
                            </div>

                        </div>

                        <div className="w-full max-w-6xl bg-gray-100 p-6 rounded-xl mx-4 shadow-lg">

                            <p className="flex flex-col gap-2 text-left text-sm sm:text-md text-gray-600">
                                <span className='block text-[#05681e]'>06-10: <span className="font-bold">Barrios Cielos del Sur (frente al SUM)</span></span>
                                <span className='block text-[#05681e]'>13-10: <span className="font-bold">Barrio Gral. San Martín (ex Fonavi) (frente al CIC)</span></span>
                                <span className='block text-[#05681e]'>20-10: <span className="font-bold">Barrio Los Arces (frente al SUM)</span></span>
                                <span className='block text-[#05681e]'>22-09: <span className="font-bold">Barrio 25 de Mayo (frente al SUM)</span></span>
                            </p>

                        </div>
                    
                    </div>
                )}
                
            </div>

        </div>
    );
};

export default Voluntariado;