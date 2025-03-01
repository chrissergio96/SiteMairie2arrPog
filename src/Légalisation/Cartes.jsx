import React from 'react';
import passeport from '../Images/id.jpeg';
import Actedevente from '../Images/Acte de vente.webp';
import Attestation from '../Images/Attestation  de logement.jpg';
import './Cartes.css';

function Cartes() {
  return (
    <div className="cards-wrapperA">
    <div className='block1'>
    <div className="cardA">
        <img src={passeport} alt="Pièces d’identité" />
        <h2>Pièces d’identité</h2>
      </div>
      <div className="cardA">
        <img src={Actedevente} alt="Acte de vente de véhicule" />
        <h2>Acte de vente de véhicule</h2>
      </div>
      <div className="cardA">
        <img src={Attestation} alt="Attestation de logement" />
        <h2>Attestation de logement</h2>
      </div>
    </div>
      <div className='block2'>
      <div className="cardA">
        <img src={passeport} alt="Autorisation Maritale" />
        <h2>Autorisation Maritale</h2>
      </div>
      <div className="cardA">
        <img src={Actedevente} alt="Acte de naissance" />
        <h2>Acte de naissance</h2>
      </div>
      <div className="cardA">
        <img src={Attestation} alt="Certification de célibat" />
        <h2>Certification de célibat</h2>
      </div>
      </div>
      <div className='block3'>
      <div className="cardA">
        <img src={passeport} alt="Attestation d'emploi" />
        <h2>Attestation d'emploi</h2>
      </div>
      <div className="cardA">
        <img src={Actedevente} alt="Carte de Séjour" />
        <h2>Carte de Séjour</h2>
      </div>
      <div className="cardA">
        <img src={Attestation} alt="Certificat de résidence" />
        <h2>Certificat de résidence</h2>
      </div>
      </div>
    </div>
  );
}

export default Cartes;
