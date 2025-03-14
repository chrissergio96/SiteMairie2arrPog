import React from 'react';
import Attestationpec from '../Images/Attestation-prise-charge_page-0001.jpg';
import Actenaissance from '../Images/actes de Naissances  2..............jpg';
import Autorisationp from '../Images/Legalisation/Autorisation Parentale_page-0001.jpg';
import Certificatc from '../Images/Legalisation/Certificat de celibat_page-0001.jpg';
import Attestation from '../Images/Attestation  de logement.jpg';
import Certificathe from '../Images/Legalisation/Certificat hebergement_page-0001.jpg';
import Certificatee from '../Images/Legalisation/Certificat entretien et education_page-0001.jpg';
import Certificatv from '../Images/Legalisation/Certificat de vie_page-0001.jpg';
import Attestationhp from '../Images/Legalisation/Attestation-sur -honneur-pension_page-0001.jpg';
import Certificatresi from '../Images/Legalisation/CERTIFICAT-RESIDENCE (2)_page-0001.jpg';
import Attestationnond from '../Images/Legalisation/Attestation-non-dissolution_page-0001.jpg';
import Certificatcout from '../Images/Legalisation/Attestation-non-dissolution_page-0001.jpg'
import './Cartes.css';

function Cartes() {
  return (
    <div className="cards-wrapperA">
    <div className='block1'>
    <div className="cardA">
        <img src={Actenaissance} alt="Acte de naissance" />
        <h2>Acte de naissance</h2>
        <p> Pour légaliser un acte de naissance , il faut founir:
        <strong>
          <p>- Original de l'acte de naissance ;</p>
          <p>- 1 copie de l'acte de naissance ;</p>
          <p>- 1 timbre de 1000f .</p>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Actenaissance} alt="Acte de mariage" />
        <h2>Acte de mariage</h2>
        <p> Pour légaliser un acte de mariage , il faut founir:
        <strong>
          <p>- Original de l'acte de mariage ;</p>
          <p>- 1 copie de l'acte de mariage ;</p>
          <p>- 1 timbre de 1000f .</p>

        </strong>
        </p>
        
      </div>
      <div className="cardA">
        <img src={Attestation} alt="Acte de deces" />
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
      <div className="cardA">
        <img src={Attestationpec} alt="Attestation de prise en charge" />
        <h2>Attestion de prise en charge</h2>
        <p> Pour légaliser une attestation de prise en charge , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité de celui qui prend en charge ;</p>
          <p>- 1 copie de l'acte ou la pièces d'identité de celui qu'on prend en charge ;</p>
          <p>- 1 Attestation d'emploi ou presence au poste ou fiche circuit ;</p>
          <p>- 1 timbre de 5000f .</p> 
          <a href="/Attestation-prise-charge.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>


        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Autorisationp} alt="Autorisation parentale" />
        <h2>Autorisation parentale</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Autorisation%20Parentale.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificatc} alt="Certifat de celibat" />
        <h2>Certificat de célibat</h2>
        <p className='ju'> Pour légaliser un certificat de célibat , il faut founir: 
        <strong>
         
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20de%20celibat.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificathe} alt="Certificat d'hebergement" />
        <h2>Certificat d'hebergement</h2>
        <p className='ju'> Pour légaliser un Certifat d'hebergement , il faut founir: 
        <strong>
 
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20hebergement.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificatee} alt="Certificat entretien et education" />
        <h2>Certificat entretien et education</h2>
        <p className='ju'> Pour légaliser Certificat entretien et education , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20entretien%20et%20education.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificatv} alt="Certificat de vie" />
        <h2>Certificat de vie</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Certificat%20de%20vie.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificatv} alt="Autorisation Maritale" />
        <h2>Autorisation Maritale</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Autorisation%20maritale.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationhp} alt="Attestation sur honneur pension" />
        <h2>Attestation sur l'honneur  </h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-sur%20-honneur-pension.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationhp} alt="Attestation sur honneur pension" />
        <h2>Attestation sur l'honneur  </h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-sur-l'honneur.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      
      <div className="cardA">
        <img src={Certificatresi} alt="Certificat de residence" />
        <h2>Certificat de residence</h2>
        <p> Pour légaliser un certifat de residence , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité du demandeur ;</p>
          <p>- Remplir l'imprimé à retirer à la Mairie(document ci-joins) ;</p>
          <p>- 1 timbre de 1000f .</p>
          <a href="/CERTIFICAT-RESIDENCE%20(2).pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      
      <div className="cardA">
        <img src={Attestationnond} alt="Attestion de non dissolution" />
        <h2>Attestation de non dissolution</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-non-dissolution.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Certificatcout} alt="Cerficat de coutume" />
        <h2>Certificat de coutume</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT%20DE%20COUTUME.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationpec} alt="Certificat de vente vehicule" />
        <h2>Certificat de vente véhicule</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT-VENTE-VEHICULE%20(1).pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationpec} alt="Certificat de non remariage" />
        <h2>Certificat de non remariage</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/CERTIFICAT-NON-MARIAGE.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationpec} alt="Lettre d'invitation" />
        <h2>Lettre d'invitation</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Lettre%20d'invitation.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationpec} alt="Lettre d'invitation" />
        <h2>Attestation de logement</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Attestation-Logementt.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestationpec} alt="Procuration" />
        <h2>Procuration</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>
          <a href="/Procuration%20(1).pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Téléchargez le document</button>
        </a>
        </strong>
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default Cartes;
