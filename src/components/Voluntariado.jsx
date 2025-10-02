import React, { useState, useEffect } from 'react';
import Calendar, { allEvents } from './Calendario';
import voluntariado1 from '../assets/voluntariado_1.jpg';
import voluntariado2 from '../assets/voluntariado_2.jpg';

// Obtenemos los eventos del mes actual
const getEventsForMonth = (month, year) => {
    return allEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() + 1 === month && eventDate.getFullYear() === year;
    });
};


const Voluntariado = () => {
    const [currentDate, setCurrentDate] = useState({ month: 9, year: 2025 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [todayEvent, setTodayEvent] = useState(null);
    const [monthEvents, setMonthEvents] = useState([]);

    const images = [voluntariado1, voluntariado2];

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const eventToday = allEvents.find(event => event.date === today);
        setTodayEvent(eventToday);
    }, []);

    useEffect(() => {
        const events = getEventsForMonth(currentDate.month, currentDate.year);
        setMonthEvents(events);
    }, [currentDate]);

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
        <>
            {todayEvent && (
                <div 
                    className="fixed inset-0 bg-black/60 z-[1002] flex items-center justify-center p-4"
                    onClick={() => setTodayEvent(null)}
                >
                    <div 
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div 
                            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                            style={{ backgroundColor: todayEvent.color }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
                            ¡Evento de Hoy!
                        </h2>

                        <p className="text-center text-gray-600 mb-6">
                            Hoy tenemos <span className="font-bold" style={{ color: todayEvent.color }}>{todayEvent.title}</span> programado de <strong>14:00 a 16:00hs</strong>. ¡No te lo pierdas!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => setTodayEvent(null)}
                                className="cursor-pointer flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Ahora no
                            </button>
                            <button
                                onClick={() => {
                                    setTodayEvent(null);
                                    document.querySelector('.calendar-container')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="cursor-pointer flex-1 px-6 py-3 text-white rounded-lg font-semibold transition-all hover:shadow-xl"
                                style={{ backgroundColor: todayEvent.color }}
                            >
                                Ver detalles
                            </button>
                        </div>

                        <button
                            onClick={() => setTodayEvent(null)}
                            className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

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

                {monthEvents.length > 0 && (
                    <div className="flex flex-col items-center justify-center gap-10 max-w-4xl">

                        {monthEvents.some(event => event.type === 'servicios') && (() => {
                            const serviciosEvent = monthEvents.find(event => event.type === 'servicios');
                            return (
                                <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl px-4">
                                    <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ color: serviciosEvent.color }}>
                                        Servicios
                                    </h2>

                                    <div className="h-1 w-20 lg:w-30 rounded-xl" style={{ backgroundColor: serviciosEvent.color }}></div>

                                    <div className='text-gray-600 flex flex-col items-center justify-center'>
                                        <p>Admisión y gestiones</p>
                                        <p>Medicina Clínica</p>
                                        <p>Odontología</p>
                                        <p>Enfermería</p>
                                        <p>Trabajo Social</p>
                                    </div>
                                </div>
                            );
                        })()}

                        <div className="w-full max-w-6xl bg-gray-100 p-6 rounded-xl mx-4 shadow-lg">
                            <div className="flex flex-col gap-2 text-left text-sm sm:text-md text-gray-600">
                                {monthEvents
                                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                                    .map(event => {
                                        const eventDate = new Date(event.date);
                                        const dayMonth = `${String(eventDate.getDate()).padStart(2, '0')}-${String(eventDate.getMonth() + 1).padStart(2, '0')}`;
                                        
                                        return (
                                            <span 
                                                key={event.id}
                                                className='block'
                                                style={{ color: event.color }}
                                            >
                                                {dayMonth}: <span className="font-bold">{event.title} - {event.location}</span> <span className="text-gray-500">({event.time})</span>
                                            </span>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                )}

                {monthEvents.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-4 max-w-4xl py-8 -mt-10">
                        <div className="text-gray-600 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-lg md:text-xl font-semibold text-gray-500">Por el momento no hay actividades programadas</p>
                            <p className="text-sm text-gray-600 mt-2">Navegá por el calendario para ver otros meses</p>
                        </div>
                    </div>
                )}
                
            </div>

        </div>
        </>
    );
};

export default Voluntariado;