import React from 'react';
import './Projets.css';

const Projets = () => {
  const projets = [
    {
      titre: 'Projet d’Assainissement des Quartiers',
      description: 'Ce projet vise à améliorer les conditions sanitaires des quartiers à travers la réfection des canalisations et l’entretien des espaces publics.',
      image: require('../../Images/travaux-assainissement.jpg'),
    },
    {
      titre: 'Modernisation du Marché Local',
      description: 'Le projet de modernisation du marché a pour but de rénover les installations et d’améliorer les infrastructures pour mieux accueillir les commerçants et les visiteurs.',
      image: require('../../Images/travaux-assainissement.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Construction de Centres de Santé',
      description: 'La construction de nouveaux centres de santé pour garantir un accès de qualité aux soins dans les zones les plus reculées du 2e arrondissement.',
      image: require('../../Images/hj.jpg'),
    },
    {
      titre: 'Réhabilitation des Routes Urbaines',
      description: 'Un projet pour améliorer les routes principales et secondaires du 2e arrondissement afin de fluidifier la circulation et réduire les accidents.',
      image: require('../../Images/urbanism.jpg'),
    },
    {
      titre: 'Développement du Hub Municipal',
      description: 'Le Hub Municipal servira de plateforme pour les initiatives citoyennes, les innovations technologiques et le soutien aux entrepreneurs locaux.',
      image: require('../../Images/hj.jpg'),
    },
  ];

  return (
    <div className="projets-container">
      <h1>Nos Projets</h1>
      <p>Découvrez les projets en cours et à venir qui transformeront le 2e arrondissement de Port-Gentil.</p>
      
      <div className="projets-grid">
        {projets.map((projet, index) => (
          <div className="projet-card" key={index}>
            <img src={projet.image} alt={projet.titre} />
            <div className="projet-info" style={{ color: 'black', fontSize: '16px', visibility: 'visible' }}>
              {console.log(projet.titre)}
              <h2>{projet.titre}</h2>
              <p>{projet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
