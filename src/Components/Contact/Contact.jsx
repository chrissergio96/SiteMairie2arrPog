import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/NumeroUtile.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/Galerie2.jpeg';
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
                    <Link to='/numerosutiles'>
                    <img src={numeroImage} alt="NumeroUtile" />
                    <h2>Numeros utiles </h2>
                    </Link>
                </div>
                <div className="card1al">
                    <Link to='/galerie'>
                    <img src={galerieImage} alt="Galerie2" />
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
