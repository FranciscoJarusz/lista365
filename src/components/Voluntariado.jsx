import React, { useState } from 'react';
import Calendar from './Calendario';
import voluntariado1 from '../assets/voluntariado_1.jpg';
import voluntariado2 from '../assets/voluntariado_2.jpg';

const Voluntariado = () => {
    const [currentDate, setCurrentDate] = useState({ month: 9, year: 2025 });
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [voluntariado1, voluntariado2];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="voluntariado" className="p-6 flex flex-col items-center justify-center mt-20 gap-6">

            <h1 className="text-4xl md:text-6xl font-bold text-black flex sm:flex-row flex-col items-center gap-4 md:gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 640 640" fill="var(--color-primario)">
                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM288 312C288 303.2 295.2 296 304 296L336 296C344.8 296 352 303.2 352 312L352 352L392 352C400.8 352 408 359.2 408 368L408 400C408 408.8 400.8 416 392 416L352 416L352 456C352 464.8 344.8 472 336 472L304 472C295.2 472 288 464.8 288 456L288 416L248 416C239.2 416 232 408.8 232 400L232 368C232 359.2 239.2 352 248 352L288 352L288 312z"/>
                </svg>
                Voluntariado
            </h1>

            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <p className="text-md text-gray-600 text-center">Conocé mas acerca del voluntariado.</p>

            <p className="text-sm md:text-md bg-gray-50 p-6 rounded-xl mb-8 text-left max-w-3xl text-gray-600 text-wrap shadow-lg">
                La salud comunitaria constituye un pilar fundamental en el marco de la Atención Primaria de la Salud (APS), ya que permite garantizar el derecho a la salud a través de estrategias preventivas, promocionales y participativas. En este sentido, la implementación de Postas de Salud Comunitaria se presenta como una herramienta clave para acercar los servicios sanitarios a la población, generando espacios de diálogo, control y acompañamiento.
                Las postas se proponen como un dispositivo de intervención territorial que posibilita la realización de controles básicos de signos vitales (presión arterial, frecuencia cardíaca, frecuencia respiratoria y temperatura) y, a su vez, fomenta la promoción de hábitos saludables orientados a la prevención de enfermedades no transmisibles, como la hipertensión arterial, la diabetes, la obesidad y las enfermedades cardiovasculares.
                Este proyecto se desarrollará en articulación con la Dirección de Atención Primaria de la Salud de Chivilcoy, mediante la integración de estudiantes voluntarios de la carrera de Enfermería. A través de esta experiencia, se busca fortalecer el vínculo entre la comunidad y el sistema de salud, al mismo tiempo que se ofrece a los estudiantes un espacio formativo de gran valor para el desarrollo de competencias en el campo comunitario.
            </p>

            <div className="relative w-full max-w-xl mx-auto group mb-8">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-160">
                    <div 
                        className="flex transition-transform duration-500 ease-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <img 
                                key={index}
                                src={image} 
                                alt={`Voluntariado ${index + 1}`} 
                                className="w-full h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primario p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Imagen anterior"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primario p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Imagen siguiente"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'bg-primario w-6' 
                                    : 'bg-white/60 hover:bg-white/80'
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            <p className="text-md text-gray-600 text-center">Conocé las fechas y horarios de las postas de salud comunitaria.</p>

            <div className="h-1 w-20 lg:w-30 bg-gradient-to-r from-primario to-secundario rounded-xl"></div>

            <div className="flex flex-col items-center justify-center gap-10 w-full px-6">

                <div className="max-w-6xl">
                    <Calendar onMonthChange={setCurrentDate} />
                </div>

                {currentDate.month === 9 && currentDate.year === 2025 && (
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
                {currentDate.month === 10 && currentDate.year === 2025 && (
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