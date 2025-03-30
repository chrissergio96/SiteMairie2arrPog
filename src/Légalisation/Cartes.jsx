import { useState } from 'react';  // Ajout de useState pour gérer l'état
import React from 'react';
import Attestationpec from '../Images/Attestation-prise-charge_page-0001.jpg';
import Autorisationp from '../Images/Legalisation/Autorisation Parentale_page-0001.jpg';
import Certificatc from '../Images/Legalisation/Certificat de celibat_page-0001.jpg';
import Certificathe from '../Images/Legalisation/Certificat hebergement_page-0001.jpg';
import Certificatee from '../Images/Legalisation/Certificat entretien et education_page-0001.jpg';
import Certificatv from '../Images/Legalisation/Certificat de vie_page-0001.jpg';
import Attestationhp from '../Images/Legalisation/Attestation-sur -honneur-pension_page-0001.jpg';
import Certificatresi from '../Images/Legalisation/CERTIFICAT-RESIDENCE (2)_page-0001.jpg';
import Attestationnond from '../Images/Legalisation/Attestation-non-dissolution_page-0001.jpg';
import Certificatcout from '../Images/Legalisation/CERTIFICAT DE COUTUME.pdf.jpg';
import Certificatvv from '../Images/Legalisation/CERTIFICAT-VENTE-VEHICULE (1)_page-0001.jpg';
import Certificatnr from '../Images/Legalisation/CERTIFICAT-NON-MARIAGE (1).pdf.jpg';
import LettreI from '../Images/Legalisation/lettreinv.jpg';
import AttestationL from '../Images/Legalisation/Attestation-Logementt (1).pdf.jpg';
import Procuration from '../Images/Legalisation/Procuration (1) (1).pdf.jpg';
import './Cartes.css';

function Cartes() {

  const [hoveredImage, setHoveredImage] = useState(null); // État pour stocker l'image survolée

  // Gérer l'entrée de la souris sur une carte
  const handleMouseEnter = (image) => {
    setHoveredImage(image); // Afficher l'image en aperçu lors du survol
  };

  // Gérer la sortie de la souris d'une carte
  const handleMouseLeave = () => {
    setHoveredImage(null); // Cacher l'aperçu de l'image quand la souris quitte la carte
  };
  return (
    <div className="cards-wrapperA">
    <div className='block1'>
    <div className="cardAB">
        <h2>Acte de naissance</h2>
        <p> Pour légaliser un acte de naissance , il faut founir:
        <strong>
          <p>- Original de l'acte de naissance ;</p>
          <p>- 1 copie de l'acte de naissance ;</p>
          <p>- 1 timbre de 1000f .</p>
        </strong>
        </p>
      </div>
      <div className="cardAB">
        <h2>Acte de mariage</h2>
        <p> Pour légaliser un acte de mariage , il faut founir:
        <strong>
          <p>- Original de l'acte de mariage ;</p>
          <p>- 1 copie de l'acte de mariage ;</p>
          <p>- 1 timbre de 1000f .</p>

        </strong>
        </p>
        
      </div>
      <div className="cardAB">
        <h2>Acte de décès</h2>
        <p> Pour légaliser un acte de décès , il faut founir:
        <strong>
          <p>- Original de l'acte de décès ;</p>
          <p>- 1 copie de l'acte de décès ;</p>
          <p>- 1 timbre de 1000f .</p>

        </strong>
        </p>
      </div>
    </div>
      <div className='block2'>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Attestationpec)} onMouseLeave={handleMouseLeave}>
        <img src={Attestationpec} alt="Attestation de prise en charge" />
        <h2>Attestion de prise en charge</h2>
        <p> Pour légaliser une attestation de prise en charge , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité de celui qui prend en charge ;</p>
          <p>- 1 copie de l'acte ou la pièces d'identité de celui qu'on prend en charge ;</p>
          <p>- 1 Attestation d'emploi ou presence au poste ou fiche circuit ;</p>
          <p>- 1 timbre de 5000f .</p> 
          <a href="/Attestation-prise-charge.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>


        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Autorisationp)} onMouseLeave={handleMouseLeave}>
        <img src={Autorisationp} alt="Autorisation parentale" />
        <h2>Autorisation parentale</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Autorisation%20Parentale.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatc)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatc} alt="Certifat de celibat" />
        <h2>Certificat de célibat</h2>
        <p className='ju'> Pour légaliser un certificat de célibat , il faut founir: 
        <strong>
         
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20de%20celibat.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificathe)} onMouseLeave={handleMouseLeave}>
        <img src={Certificathe} alt="Certificat d'hebergement" />
        <h2>Certificat d'hebergement</h2>
        <p className='ju'> Pour légaliser un Certifat d'hebergement , il faut founir: 
        <strong>
 
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20hebergement.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatee)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatee} alt="Certificat entretien et education" />
        <h2>Certificat entretien et éducation</h2>
        <p className='ju'> Pour légaliser Certificat entretien et education , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20entretien%20et%20education.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatv)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatv} alt="Certificat de vie" />
        <h2>Certificat de vie</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20de%20vie.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatv)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatv} alt="Autorisation Maritale" />
        <h2>Autorisation Maritale</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Autorisation%20maritale.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Attestationhp)} onMouseLeave={handleMouseLeave}>
        <img src={Attestationhp} alt="Attestation sur honneur pension" />
        <h2>Attestation sur l'honneur  </h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-sur%20-honneur-pension.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Attestationhp)} onMouseLeave={handleMouseLeave}>
        <img src={Attestationhp} alt="Attestation sur honneur pension" />
        <h2>Attestation sur l'honneur  </h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-sur-l'honneur.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatresi)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatresi} alt="Certificat de residence" />
        <h2>Certificat de résidence</h2>
        <p> Pour légaliser un certifat de residence , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité du demandeur ;</p>
          <p>- Remplir l'imprimé à retirer à la Mairie(document ci-joins) ;</p>
          <p>- 1 timbre de 1000f .</p>
          <a href="/CERTIFICAT-RESIDENCE%20(2).pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Attestationnond)} onMouseLeave={handleMouseLeave}>
        <img src={Attestationnond} alt="Attestion de non dissolution" />
        <h2>Attestation de non dissolution</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-non-dissolution.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>

      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatcout)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatcout} alt="Cerficat de coutume" />
        <h2>Certificat de coutume</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT%20DE%20COUTUME.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatvv)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatvv} alt="Certificat de vente vehicule" />
        <h2>Certificat de vente véhicule</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT-VENTE-VEHICULE%20(1).pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Certificatnr)} onMouseLeave={handleMouseLeave}>
        <img src={Certificatnr} alt="Certificat de non remariage" />
        <h2>Certificat de non remariage</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT-NON-MARIAGE.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(LettreI)} onMouseLeave={handleMouseLeave}>
        <img src={LettreI} alt="Lettre d'invitation" />
        <h2>Lettre d'invitation</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Lettre%20d'invitation.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(AttestationL)} onMouseLeave={handleMouseLeave}>
        <img src={AttestationL} alt="Lettre d'invitation" />
        <h2>Attestation de logement</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-Logementt.pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA"  onMouseEnter={() => handleMouseEnter(Procuration)} onMouseLeave={handleMouseLeave}>
        <img src={Procuration} alt="Procuration" />
        <h2>Procuration</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Procuration%20(1).pdf" target="_blank" rel="noopener noreferrer" download>
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      {/* Zone d'aperçu de l'image lors du survol */}
      {hoveredImage && (
        <div className="image-preview">
          <img src={hoveredImage} alt="Aperçu" />
        </div>
      )}
      </div>
     
    </div>
  );
}

export default Cartes;
