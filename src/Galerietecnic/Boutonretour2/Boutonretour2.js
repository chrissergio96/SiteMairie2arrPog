import React from 'react';
import { Link } from 'react-router-dom';
import './Boutonretour2.css'; // Importe le CSS

const Boutonretour2 = () => {
  return (
    
      <div className="Butonbackgal">
        <Link to='/galerie'>
          <button className="Butonbackgal22">
            <span className="Butonbackgal33">&#8592;</span> Page Précédente
          </button>
        </Link>
        <Link to='/'>
          <button className="Butonbackgal44">
            Retour à l'accueil
          </button>
        </Link>
      </div>
   
  );
};

export default Boutonretour2;
