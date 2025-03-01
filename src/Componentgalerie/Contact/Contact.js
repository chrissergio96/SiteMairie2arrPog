import React from 'react';
import './ConsultezAussi.css';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const ConsultezAussi = () => {
    return (
        <div className="consultezAussi-container">
            <div className='header-container'>
                <div className='header-bar'>
                    <div className='header-trait top-trait'></div>
                    <div className='header-trait bottom-trait'></div>
                    <h1>CONSULTEZ AUSSI</h1>
                </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card">
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles</h2>
                </div>
                <div className="card">
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                </div>
                <div className="card">
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                </div>
                <div className="card">
                    <img src={CDQImage} alt="CDQ" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default ConsultezAussi;
