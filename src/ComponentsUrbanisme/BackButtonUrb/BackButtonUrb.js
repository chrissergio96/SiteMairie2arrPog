import React from 'react';
import './BackButtonUrb.css'; // Importation des styles pour le bouton

import {Link} from 'react-router-dom'

const BackButtonUrb = () => {
    return (
        <Link to='/accueil'>
        <button className="back-buttons">
            Retour à la page d'accueil
        </button>
        </Link>



    );
};

export default BackButtonUrb;
