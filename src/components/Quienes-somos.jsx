import React from 'react';

const QuienesSomos = () => {
    return (
        <div id="nosotros" className="bg-gray-50 shadow-lg p-6 rounded-lg flex flex-col items-center justify-center mt-40 max-w-3xl mx-auto gap-12">
            
            <div className="flex flex-col items-center justify-center gap-12">
                <h1 className="text-6xl font-bold text-black"><span className="text-primario">¿</span>Quiénes somos<span className="text-primario">?</span></h1>
                
                <p className="text-lg text-gray-600 text-wrap max-w-2xl">
                    Somos el Centro de Estudiantes de la Licenciatura en Enfermería (Lista 365) del Centro Regional Chivilcoy.
                    
                    Nos enorgullece ser una entidad, activa y pionera en esta iniciativa dentro de nuestra sede.

                    Nuestro compromiso principal es acompañar y respaldar a las y los estudiantes de Enfermería, promoviendo de manera constante la mejora académica y la participación estudiantil.

                    Creemos en el trabajo conjunto con la Universidad Nacional de Luján, impulsando propuestas innovadoras y colaborativas que fortalezcan la vida universitaria.

                    Estamos convencidos de que, al crecer juntos como estudiantes, personas e institución, podemos potenciar el desarrollo integral de toda la comunidad educativa.
                </p>

            </div>

        </div>
    );
};

export default QuienesSomos;