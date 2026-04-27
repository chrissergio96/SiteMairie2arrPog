import React from 'react';
import './Titreleg.css';

const Titreleg = () => {
  return (
    <div className='titre-leg-container'>

      <div className="titre-leg-card">

        <div className="titre-leg-badge">
          Service officiel
        </div>

        <h1>
          Légalisation des documents
        </h1>

        <div className="titre-leg-line"></div>

        <p>
          Le service de légalisation de la Mairie du 2e Arrondissement de Port-Gentil
          est à votre disposition pour authentifier et certifier conformes vos documents administratifs.
          <br /><br />
          Que ce soit pour des actes officiels, des copies certifiées ou des déclarations sous serment,
          notre équipe garantit la validité et la reconnaissance légale de vos documents auprès des autorités compétentes.
          <br /><br />
          Simplifiez vos démarches administratives grâce à un service rapide, fiable et sécurisé.
        </p>

      </div>

    </div>
  );
};

export default Titreleg;