import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Utiliser react-router-dom pour la navigation
import "./SplashScreen.css"; // Le fichier CSS pour les styles
import logo from "../Images/logo Mairie.jpg"; // Importez l'image du logo


const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Après 3 secondes, redirige vers la page d'accueil
    const timer = setTimeout(() => {
      navigate("/accueil"); // Redirection vers la page d'accueil après 3 secondes
    }, 5000); // 3000 ms = 3 secondes

    // Nettoyage du timer quand le composant est démonté
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={logo} alt="Logo de la Mairie du 2e Arrondissement" className="logo" />
    </div>
  );
};

export default SplashScreen;
