import React from 'react';
import './RetourButtonprecedaide.css'; // Importation des styles pour le bouton


const RetourButtonprecedaide = () => {
    return (
        <button className="Retour-button1" onClick={() => window.history.back()}>
            Retour à la page Précedente
        </button>
    );
};

export default RetourButtonprecedaide;
