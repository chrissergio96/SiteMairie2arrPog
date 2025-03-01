import React from 'react';
import './RetourButtonleg.css'; // Importation des styles pour le bouton


const RetourButtonleg = () => {
    return (
        <button className="Retour-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
    );
};

export default RetourButtonleg;
