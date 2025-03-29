import React, { useState } from 'react';
import Declarationnai from '../Images/Fiche-naissance.jpg';
import './Cartestrans.css';

function Cartestrans() {
  const [hoveredImage, setHoveredImage] = useState(null); // État pour stocker l'image survolée

  const handleMouseEnter = (image) => {
    setHoveredImage(image); // Afficher l'image en aperçu lors du survol
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Cacher l'aperçu de l'image quand la souris quitte la carte
  };

  return (
    <div>
      <div className="cards-wrapperB">
        
        {/* Texte introductif */}
        <div className="intro-text">
          <h1>Service de Transcription</h1>
          <p>
            Le service de transcription de la Mairie du 2e Arrondissement de Port-Gentil s'occupe de la régularisation des actes de naissance, de mariage et de décès.
            Ce service permet de transcrire les événements survenus à l’étranger ou hors de la commune dans les registres d’état civil de la Mairie, assurant ainsi leur reconnaissance légale.
          </p>
        </div>

        <div className="cardF" onMouseEnter={() => handleMouseEnter(Declarationnai)} onMouseLeave={handleMouseLeave}>
          <img src={Declarationnai} alt="Certificat de residence" />
          <div>
          <h2>Déclaration de naissance</h2>
          <p>
            Pour transcrire à une déclaration de naissance, il faut fournir:
            <strong>
              <p>- 1 copie de la pièce d'identité du demandeur ;</p>
              <p>- Remplir l'imprimé à retirer à la Mairie (document ci-joint) ;</p>
              <p>- 1 timbre de 1000f .</p>
              <a href="/Fiche-naissance.pdf" target="_blank" rel="noopener noreferrer" download>
                <button className='telechargebtns'>Téléchargez la fiche de déclaration</button>
              </a>
            </strong>
          </p>
          </div>
        </div>
      </div>

      {/* Aperçu de l'image survolée */}
      {hoveredImage && (
        <div className="image-preview">
          <img src={hoveredImage} alt="Aperçu de l'image" />
        </div>
      )}
    </div>
  );
}

export default Cartestrans;
