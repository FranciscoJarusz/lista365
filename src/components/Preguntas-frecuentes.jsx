import React from 'react';

const PreguntasFrecuentes = () => {
    return (
        <div id="preguntas-frecuentes" className="p-6 flex flex-col items-center justify-center mt-20">
            
            <h1 className="text-6xl font-bold text-black mb-12"><span className="text-primario">Preguntas</span> frecuentes</h1>
            
            <div className="flex flex-col items-center justify-center max-w-9xl gap-6">
                
                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta1" className="hidden" />

                    <label htmlFor="pregunta1" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
                            Inscripciones
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
                        
                        <div className="p-6">
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden deslizar-abajo">

                    <input type="checkbox" id="pregunta2" className="hidden" />

                    <label htmlFor="pregunta2" className="group w-full p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-gradient-to-br hover:from-primario hover:to-secundario hover:text-white">
                        
                        <span className="text-lg font-semibold text-black group-hover:text-white transition-colors duration-300">
                            Preguntas
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
                        
                        <div className="p-6">
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            </p>
                        
                        </div>
                    
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PreguntasFrecuentes;