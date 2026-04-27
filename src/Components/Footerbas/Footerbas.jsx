import React from 'react';
import './Footerbas.css';
import { Link } from 'react-router-dom';

const Footerbas = () => {
  return (
    <div className="footerbas">
      <div className="footerbas-inner">
        <span className="footerbas-copy">
          © 2025 <strong>Mairie du 2ème Arrondissement de Port-Gentil</strong> · République Gabonaise
        </span>
        <div className="footerbas-links">
          <a href="#">Mentions légales</a>
          <span className="footerbas-sep">·</span>
          <a href="#">Confidentialité</a>
          <span className="footerbas-sep">·</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footerbas;