import React from 'react';
import './Headerleg.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Headerleg = () => {
  return (
    <div className='legal-hero'>

      <div className="legal-overlay"></div>

      <div className="legal-content">

        <div className="legal-card">

          <div className="legal-breadcrumb">
            <span>ÉTAT CIVIL</span>
            <ArrowForwardIcon fontSize="small" />
            <span>LÉGALISATION</span>
          </div>

          <h1>Légalisation des documents</h1>

          <p>
            Service officiel de validation et d’authentification des documents administratifs
            délivrés par la Mairie du 2ème Arrondissement de Port-Gentil.
          </p>

          <button className="legal-btn">
            Accéder au service
            <ArrowForwardIcon />
          </button>

        </div>

      </div>

    </div>
  );
};

export default Headerleg;