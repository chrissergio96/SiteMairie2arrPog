import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Récupère le chemin actuel

  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la page vers le haut
  }, [pathname]); // Chaque fois que la route change

  return null; // Ce composant ne rend rien
};

export default ScrollToTop;
