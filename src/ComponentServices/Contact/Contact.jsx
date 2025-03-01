import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const Contact = () => {
    return (
        <div className="contact-containeral">
            
            <div className='container1al'>
            
            <div className='barreal'>
            <div className='trait3sal'></div>
            <div className='trait4sal'></div>
                <h1>CONSULTEZ AUSSI</h1>
            </div>
            
            
            </div>
            <div className="cards1-containeral">
                <div className="card1al">
                    <Link to='/agenda'>
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                    </Link>
                </div>
                <div className="card1al">
                    <Link to='/numeros-utiles'>
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles </h2>
                    </Link>
                </div>
                <div className="card1al">
                    <Link to='/galerie'>
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                    </Link>
                </div>
                <div className="card1al">
                    <Link to='/mariage'>
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                    </Link>
                </div>
                <div className="card1al">
                    <Link to='/cdq'>
                    <img src={CDQImage} alt="CDQ" />
                    <h2>CDQ</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
