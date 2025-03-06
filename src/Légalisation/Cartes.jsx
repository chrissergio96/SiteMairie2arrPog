import React from 'react';
import passeport from '../Images/id.jpeg';
import Actenaissance from '../Images/actes de Naissances  2..............jpg';

import Attestation from '../Images/Attestation  de logement.jpg';
import './Cartes.css';

function Cartes() {
  return (
    <div className="cards-wrapperA">
    <div className='block1'>
    <div className="cardA">
        <img src={Actenaissance} alt="Pièces d’identité" />
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
        <img src={Actenaissance} alt="Acte de vente de véhicule" />
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
        <img src={Attestation} alt="Attestation de logement" />
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
        <img src={passeport} alt="Autorisation Maritale" />
        <h2>Attestion de prise en charge</h2>
        <p> Pour légaliser une attestation de prise en charge , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité de celui qui prend en charge ;</p>
          <p>- 1 copie de l'acte ou la pièces d'identité de celui qu'on prend en charge ;</p>
          <p>- 1 Attestation d'emploi ou presence au poste ou fiche circuit ;</p>
          <p>- 1 timbre de 5000f .</p>

        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={passeport} alt="Acte de naissance" />
        <h2>Autorisation parentale</h2>
        <p className='ju'> Pour légaliser une autorisation parentale , il faut founir: 
        <strong>
          <p>- 1 copie de la pièce d'identité du père ou de la mère ;</p>
          <p>- 1 copie de l'acte de naissance de l'enfant ;</p>
          <p>- 1 timbre de 5000f .</p>

        </strong>
        </p>
      </div>
      <div className="cardA">
        <img src={Attestation} alt="Certification de célibat" />
        <h2>Certificat de residence</h2>
        <p> Pour légaliser un certifat de residence , il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité du demandeur ;</p>
          <p>- Remplir l'imprimé à retirer à la Mairie ;</p>
          <p>- 1 timbre de 1000f .</p>
          <button className='telechargebtn'>Telecharger le document</button>

        </strong>
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default Cartes;
