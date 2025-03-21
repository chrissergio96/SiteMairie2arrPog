import React from 'react';
import passeport from '../Images/id.jpeg';
import Declarationnai from '../Images/Fiche-naissance.jpg';
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
    </div>

    <div className="cardF">
        <img src={Declarationnai} alt="Certificat de residence" />
        <h2>Déclaration de naissance</h2>
        <p> Pour transcrire à une déclaration de naissance, il faut founir:
        <strong>
          <p>- 1 copie de la pièce d'identité du demandeur ;</p>
          <p>- Remplir l'imprimé à retirer à la Mairie(document ci-joins) ;</p>
          <p>- 1 timbre de 1000f .</p>
          <a href="/Fiche-naissance.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtns'>Téléchargez la  fiche de declaration</button>
        </a>
        </strong>
        </p>
      </div>
     
    </div>
    </div>
  );
}

export default Cartestrans;
