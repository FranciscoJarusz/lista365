import React from 'react';
import instagramIcon from '../assets/instagram.svg';
import whatsappIcon from '../assets/whatsapp.svg';

const Footer = () => {
    return (
        <footer className="bg-black p-6 flex flex-col items-center justify-center mt-20">
            
            <div className="flex flex-col items-center justify-center gap-8">
                <p className="text-xl text-primario font-bold text-wrap max-w-2xl text-center">Centro de Estudiantes de la Licenciatura en Enfermería - Lista 365</p>
                
                <div className="flex items-center justify-center gap-2">
                    <a href="mailto:lista365unlu@gmail.com" className="animacion-underline flex items-center justify-center gap-2 text-lg text-white font-bold text-wrap max-w-2xl text-center">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-10 5L2 7"/>
                    </svg>
                        lista365unlu@gmail.com
                    </a>
                
                </div>

                <div className="flex items-center justify-center gap-6">

                     <a href="https://www.instagram.com/lista365unlu/" target="_blank" className="gradiente-boton p-3 rounded-full">
                         <img 
                             src={instagramIcon} 
                             alt="Instagram" 
                               width="24" 
                               height="24"
                             className="rounded-sm"
                         />
                     </a>

                     <a href="https://wa.me/541167545219" target="_blank" className="gradiente-boton p-3 rounded-full">
                         <img 
                             src={whatsappIcon} 
                             alt="WhatsApp" 
                               width="24" 
                               height="24"
                             className="rounded-sm"
                         />
                     </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;