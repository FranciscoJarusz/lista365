import React from 'react';

const PreguntasFrecuentes = () => {
    return (
        <div id="preguntas-frecuentes" className="p-6 flex flex-col items-center justify-center mt-20">
            
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8 md:mb-12 text-center"><span className="text-primario">Preguntas</span> frecuentes</h1>
            
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

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold">📧 Mail: <a href="mailto:lista365unlu@gmail.com" className="text-primario">lista365unlu@gmail.com</a></p>

                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold">📱 Instagram: <a href="https://www.instagram.com/lista365unlu/" target="_blank" className="text-primario">lista365unlu</a></p>
                           
                            <p className="text-gray-600 text-wrap max-w-4xl text-sm md:text-base font-bold">📞 Secretaria: <a href="https://wa.me/541167545219" target="_blank" className="text-primario">+54 11 6754-5219</a></p>
                        
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>  
    );
};

export default PreguntasFrecuentes;