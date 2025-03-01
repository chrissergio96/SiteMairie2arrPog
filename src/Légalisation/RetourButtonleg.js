import React from 'react';
import './RetourButtonleg.css'; // Importation des styles pour le bouton
import { Link } from 'react-router-dom';


const RetourButtonleg = () => {
    return (
        <Link to='/'>
        <button className="Retour-button">
            Retour à la page d'accueil
        </button>
        </Link>
    );
};

export default RetourButtonleg;
