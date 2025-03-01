import React from 'react';
import './ButtonUrb.css';

import {Link} from 'react-router-dom'


const ButtonUrb = () => {
  return (
    <div className="buutton-container">

      <Link to='/urbanisme'>
      <button className="btn previous-btn">
        <span className="arrow-left">&#8592;</span> Page Précédente
      </button>
      </Link>
      <Link to='/'>
      <button className="btns home-btn">
        Retour à l'accueil
      </button>
      </Link>

    </div>
  );
};

export default ButtonUrb;
