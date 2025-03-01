import React from 'react';
import './RetourButtonpreced.css'; // Importation des styles pour le bouton


const RetourButtonpreced = () => {
    return (
        <button className="Retour-button" onClick={() => window.history.back()}>
            Retour à la page Précedente
        </button>
    );
};

export default RetourButtonpreced;
