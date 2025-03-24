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
 
 
</div>
)
}

export default Cartesaidesociale;
