import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import './Projets.css';

const Projets = () => {
  const projets = [
    {
      id: 1,
      titre: 'Projet d’Assainissement des Quartiers',
      description: 'Ce projet vise à améliorer les conditions sanitaires des quartiers à travers la réfection des canalisations et l’entretien des espaces publics.',
      image: require('../../Images/travaux-assainissement.jpg'),
    },
    {
      id: 2,
      titre: '[𝐕𝐈𝐒𝐈𝐓𝐄 𝐃𝐄 𝐓𝐄𝐑𝐑𝐀𝐈𝐍] : Un engagement solide pour le bien-etre des habitants du 2eme Arrondissement',
      description: 'La Mairie du 2ème arrondissement, sous la vision 𝐝𝐮 𝐃𝐞́𝐥𝐞́𝐠𝐮𝐞́ 𝐒𝐩𝐞́𝐜𝐢𝐚𝐥 Boubacar Ngouwa Guingo Mayaki, démontre une fois de plus son engagement en faveur d’un cadre de vie sain.',
      image: require('../../Images/inondation.jpg'),
    },
    
    {
      id: 4,
      titre: "[𝑴𝒐𝒅𝒆𝒓𝒏𝒊𝒔𝒂𝒕𝒊𝒐𝒏 𝒆𝒕 𝒆𝒎𝒃𝒆𝒍𝒍𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒂𝒖 2ᵉ 𝑨𝒓𝒓𝒐𝒏𝒅𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝑷𝒐𝒓𝒕-𝑮𝒆𝒏𝒕𝒊𝒍]",
      description: "Ces travaux visent à moderniser l'espace urbain tout en garantissant plus de sécurité et de confort pour tous. Merci pour votre patience et votre collaboration !",
      image: require('../../Images/carref centre social.jpg'),
    },
    {
      id: 3,
      titre: 'Nettoyage des caniveaux au quartier chic',
      description: 'Un projet pour améliorer les routes principales et secondaires du 2e arrondissement afin de fluidifier la circulation et réduire les accidents.',
      image: require('../../Images/canivau.jpg'),
    },
   
   
  ];

  return (
    <div className="projets-container">
      <h1>Nos Projets</h1>
      <p>Découvrez les projets en cours et à venir qui transformeront le 2e Arrondissement de Port-Gentil.</p>
      
      <div className="projets-grid">
        {projets.map((projet) => (
          <Link to={`/projet/${projet.id}`} key={projet.id} className="projet-card-link"> {/* Ajouter un lien vers les détails du projet */}
            <div className="projet-card">
              <img src={projet.image} alt={projet.titre} />
              <div className="projet-info">
                <h2>{projet.titre}</h2>
                <p>{projet.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projets;
