import React from 'react';
import './Contacttech.css';
import AgendaImage from '../../Images/Agenda.png';
import caniveauImage from '../../Images/caniveau.jpg'
import pontImage from '../../Images/pont.jpg'

const Contact = () => {
    return (
        <div className="contact-container-tech">
            
            <div className='container-tech'>
            
            <div className='barre-tech'>
            <div className='trait-tech3'></div>
            <div className='trait-tech4'></div>
            </div>
            <div className='titre-tech'>
                <h1>Consultez</h1>
            </div>
            <div className='ligne-tech5'>
            </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card">
                    
                    <img src={caniveauImage} alt="caniveau" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>Gallerie</h2>
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>Mariage</h2>
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
