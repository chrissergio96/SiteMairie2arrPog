import React from 'react';
import { Link } from 'react-router-dom';
import './Boutonback.css'; // Importe le CSS

const Boutonback2 = () => {
  return (
    <div className='Butonback2'>
      <div className="Butonbackgal2">
        <Link to='/galerie'>
          <button className="Butonback21">
            <span className="Butonback2">&#8592;</span> Page Précédente
          </button>
        </Link>
        <Link to='/'>
          <button className="Butonback2">
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Boutonback2;
