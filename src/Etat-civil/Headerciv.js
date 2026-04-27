import React from 'react';
import './Headerciv.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Headerciv = () => {
  return (
    <div className="civ-hero">

      {/* Overlay */}
      <div className="civ-overlay"></div>

      <div className="civ-content">

        {/* Breadcrumb */}
        <div className="civ-breadcrumb">
          <Link to="/">Accueil</Link>
          <ArrowForwardIcon className="civ-arrow" />
          <span>État civil</span>
        </div>

        {/* Titre */}
        <h1 className="civ-title">État civil</h1>

        {/* Sous-texte */}
        <p className="civ-subtitle">
          Actes de naissance, mariage, décès et démarches administratives
        </p>

      </div>
    </div>
  );
};

export default Headerciv;