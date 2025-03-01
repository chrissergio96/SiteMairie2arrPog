import React from 'react';
import passeport from '../Images/id.jpeg';
import Actedevente from '../Images/Acte de vente.webp';
import Attestation from '../Images/Attestation  de logement.jpg';
import './Cartestrans.css';

function Cartestrans() {
  return (
    <div>
     <div className="cards-wrapperB">
    <div className='black1'>
    <div className="cardB">
        <img src={passeport} alt="Pièces d’identité" />
        <h2>Déclaration de Mariage</h2>
      </div>
      <div className="cardB">
        <img src={Actedevente} alt="Acte de vente de véhicule" />
        <h2>Réservation de la salle de mariage</h2>
      </div>
      <div className="cardB">
        <img src={Attestation} alt="Attestation de logement" />
        <h2>Déclaration de Naissance</h2>
      </div>
    </div>
      <div className='black2'>
      <div className="cardB">
        <img src={passeport} alt="Autorisation Maritale" />
        <h2>Etablissement d’Acte de Naissance</h2>
      </div>
      <div className="cardB">
        <img src={Actedevente} alt="Acte de naissance" />
        <h2>Processus de Déclaration de Mariage</h2>
      </div>
      <div className="cardB">
        <img src={Attestation} alt="Certification de célibat" />
        <h2>Certification de  célibat</h2>
      </div>
      </div>
      <div className='black3'>
      <div className="cardB">
        <img src={passeport} alt="Attestation d'emploi" />
        <h2>Carte de Séjour </h2>
      </div>
      <div className="cardB">
        <img src={Actedevente} alt="Carte de Séjour" />
        <h2>Carte de Séjour</h2>
      </div>
      <div className="cardB">
        <img src={Attestation} alt="Certificat de résidence" />
        <h2>Certificat de  résidence </h2>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Cartestrans;
