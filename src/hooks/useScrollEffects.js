import { useState, useEffect } from 'react';

export const useEfectosScroll = () => {
  const [progresoScroll, setProgresoScroll] = useState(0);
  const [haScrolleado, setHaScrolleado] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      const scrollSuperior = window.pageYOffset;
      const alturaDocumento = document.body.offsetHeight - window.innerHeight;
      const porcentajeScroll = (scrollSuperior / alturaDocumento) * 100;
      
      setProgresoScroll(porcentajeScroll);
      setHaScrolleado(scrollSuperior > 100);
    };

    window.addEventListener('scroll', manejarScroll);
    
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  return { progresoScroll, haScrolleado };
};
