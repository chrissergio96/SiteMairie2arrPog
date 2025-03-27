import React from 'react';
import { useParams } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL

const ProjetDetail = () => {
  const { id } = useParams(); // Récupérer l'ID du projet dans l'URL
  
  // Liste des projets (ceci pourrait provenir d'une API ou d'un fichier de données séparé)
  const projets = [
    {
      id: 1,
      titre: 'Projet d’Assainissement des Quartiers',
      description: 'Ce projet vise à améliorer les conditions sanitaires des quartiers à travers la réfection des canalisations et l’entretien des espaces publics.',
      image: require('../Images/travaux-assainissement.jpg'),
    },
    {
      id: 2,
      titre: '[𝐕𝐈𝐒𝐈𝐓𝐄 𝐃𝐄 𝐓𝐄𝐑𝐑𝐀𝐈𝐍] : Un engagement solide pour le bien-etre des habitants du 2eme Arrondissement',
      description: 'La Mairie du 2ème arrondissement, sous la vision 𝐝𝐮 𝐃𝐞́𝐥𝐞́𝐠𝐮𝐞́ 𝐒𝐩𝐞́𝐜𝐢𝐚𝐥 Boubacar Ngouwa Guingo Mayaki, démontre une fois de plus son engagement en faveur d’un cadre de vie sain.',
      image: require('../Images/inondation.jpg'),
    },
    
    {
      id: 4,
      titre: 'Réhabilitation des Routes Urbaines',
      description: 'Un projet pour améliorer les routes principales et secondaires du 2e arrondissement afin de fluidifier la circulation et réduire les accidents.',
      image: require('../Images/urbanism.jpg'),
    },
    {
      id: 3,
      titre: 'NETTOYAGE DES CANIVEAUX AU QUARTIER CHIC',
      description: 'Un projet pour améliorer les routes principales et secondaires du 2e arrondissement afin de fluidifier la circulation et réduire les accidents.',
      image: require('../Images/canivau.jpg'),
    },
  ];

  // Trouver le projet correspondant à l'ID
  const projet = projets.find(p => p.id === parseInt(id));

  if (!projet) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div className="projet-detail">
      <h1>{projet.titre}</h1>
      <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      <p>{projet.description}</p>
    </div>
  );
};

export default ProjetDetail;
