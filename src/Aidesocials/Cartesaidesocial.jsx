import React from 'react';
import passeport from '../Images/id.jpeg';
import Actedevente from '../Images/Acte de vente.webp';
import Attestation from '../Images/Attestation  de logement.jpg';
import './Cartesaidesocial.css';

function Cartesaidesociale() {
  return (
    <div className="cards-wrapperAaide-social">
  <div className="block1aide-social">
    <div className="cardAaide-social">
      <img src={passeport} alt="Pièces d’identité" />
      <h2>Aide à l'enfance</h2>
    </div>
    <div className="cardAaide-social">
      <img src={Actedevente} alt="Acte de vente de véhicule" />
      <h2>Insertion professionnelle</h2>
    </div>
    <div className="cardA aide-social">
      <img src={Attestation} alt="Attestation de logement" />
      <h2>Handicap et accessibilité</h2>
    </div>
  </div>
  <div className="block2aide-social">
    <div className="cardA aide-social">
      <img src={passeport} alt="Autorisation Maritale" />
      <h2>Action sociale pour les personnes âgée</h2>
    </div>
    <div className="cardAaide-social">
      <img src={Actedevente} alt="Acte de naissance" />
      <h2>Handicap et accessibilité</h2>
    </div>
    <div className="cardAaide-social">
      <img src={Attestation} alt="Certification de célibat" />
      <h2>Aide alimentaire et logement d’urgence</h2>
    </div>
  </div>
  <div className="block3aide-social">
    <div className="cardAaide-social">
      <img src={passeport} alt="Attestation d'emploi" />
      <h2>Santé et prévention</h2>
    </div>
    <div className="cardAaide-social">
      <img src={Actedevente} alt="Carte de Séjour" />
      <h2>Médiation sociale</h2>
    </div>
    <div className="cardAaide-social">
      <img src={Attestation} alt="Certificat de résidence" />
      <h2>Aide à la  famille</h2>
    </div>
  </div>
</div>
)
}

export default Cartesaidesociale;
