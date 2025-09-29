import React from 'react';

const PreguntasFrecuentes = () => {
    return (
        <div id="preguntas-frecuentes" className="p-6 flex flex-col items-center justify-center mt-20">
            
            <h1 className="text-4xl md:text-6xl font-bold text-black flex sm:flex-row flex-col items-center gap-4 md:gap-8 text-center mb-8 md:mb-12">

                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 512 512" fill="var(--color-primario)">
                    <path d="M176 0c-26.5 0-48 21.5-48 48l0 208c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64 32 0c70.7 0 128 57.3 128 128S390.7 448 320 448L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16.9 0c30.4-34 48.9-78.8 48.9-128 0-106-86-192-192-192l-32 0 0-80c0-26.5-21.5-48-48-48L176 0zM120 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"/>
                </svg>
                <span><span className="text-primario">Preguntas</span> frecuentes</span>

            </h1>
            
            <div className="flex flex-col items-center justify-center max-w-9xl gap-4 md:gap-6 px-4 md:px-0">
                
                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta1" className="hidden" />

                    <label htmlFor="pregunta1" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Qué diferencia hay entre el título de Enfermero/a Universitario/a y el de Licenciado/a en Enfermería?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>
                    
                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">El título intermedio de Enfermero/a Universitario/a se obtiene al aprobar el ciclo básico y habilita para ejercer la profesión. </p>
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">El título de Licenciado/a en Enfermería se logra al completar todo el plan de estudios, incorporando mayor formación en gestión, investigación y docencia. </p>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta2" className="hidden" />

                    <label htmlFor="pregunta2" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Qué requisitos debo cumplir para inscribirme en la carrera?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>
                    
                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Se necesita: </p>

                            <ul className="list-disc list-inside">
                                
                                <li className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Título secundario completo o, en su defecto, cumplir con el Art. 7 de la Ley 24.521 (mayores de 25 años con estudios previos). </li>
                                
                                <li className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Dos dosis de vacuna contra la Hepatitis B. </li>
                                
                                <li className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Refuerzo de vacuna antitetánica vigente (doble adultos o triple bacteriana). </li>
                            
                            </ul>

                        </div>
                    
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta3" className="hidden" />

                    <label htmlFor="pregunta3" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Cómo puedo acceder a la biblioteca y al préstamo de notebooks?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>
                    
                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">La biblioteca del Centro Regional Chivilcoy funciona de lunes a viernes de 9 a 20:30 hs. </p>
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Además, podés solicitar notebooks de uso gratuito dentro del predio universitario. </p>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta4" className="hidden" />

                    <label htmlFor="pregunta4" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Qué apoyo brinda la Secretaría de Bienestar Universitario y Asuntos Estudiantiles?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>
                    
                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Ofrece servicios como becas, pasantías, deportes, apoyo a la salud estudiantil y asesoramiento sobre empleabilidad. </p>
                           
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Es un recurso clave para mejorar la experiencia universitaria. </p>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta5" className="hidden" />

                    <label htmlFor="pregunta5" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Cómo es la modalidad de cursado en el Centro Regional Chivilcoy?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>

                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">En Chivilcoy la modalidad es presencial y teórico-práctica, con clases en aula y prácticas en instituciones de salud de la región.</p>
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Los tres primeros años se cursan de lunes a viernes de 14 a 22 hs, mientras que en 4º y 5º año se mantienen los mismos horarios vespertinos, facilitando la organización para quienes trabajan o viajan.</p>
                        
                        </div>

                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta6" className="hidden" />

                    <label htmlFor="pregunta6" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Cómo está organizado el plan de estudios de Enfermería?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>

                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">El plan vigente (52.02) tiene una duración total de 4072 horas reloj. </p>
                            
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Está dividido en dos etapas: </p>

                            <ul className="list-disc list-inside">
                                
                                <li className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Enfermero/a Universitario/a (título intermedio): 2444 horas, incluye 26 materias cuatrimestrales, prácticas integradas y competencias básicas en informática. </li>
                                
                                <li className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Licenciado/a en Enfermería (título final): 1628 horas adicionales, con 9 materias cuatrimestrales, 3 anuales, práctica integrada y un Trabajo Final de Graduación. </li>
                            
                            </ul>
                        
                        </div>
                        
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta7" className="hidden" />

                    <label htmlFor="pregunta7" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-base font-semibold text-black group-hover:text-white transition-colors duration-300">
                            ¿Cómo me comunico con el Centro de Estudiantes Lista 365?
                        </span>
                        <svg 
                            className="w-6 h-6 text-primario group-hover:text-white transition-colors duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </label>

                    <div className="deslizar-abajo-content">
                        
                        <div className="flex flex-col gap-6 p-6">

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base">Podes contactarnos por:</p>  

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primario)">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                Mail: <a href="mailto:lista365unlu@gmail.com" className="text-primario">lista365unlu@gmail.com</a>
                            </p>

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primario)">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                                Instagram: <a href="https://www.instagram.com/lista365unlu/" target="_blank" className="text-primario">lista365unlu</a>
                            </p>
                           
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--color-primario)">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                Secretaria: <a href="https://wa.me/541167545219" target="_blank" className="text-primario">+54 11 6754-5219</a>
                            </p>
                        
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>  
    );
};

export default PreguntasFrecuentes;