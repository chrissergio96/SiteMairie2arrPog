import React from 'react';
import './TitreAvenir.css';
import Carousel from 'react-bootstrap/Carousel';

// import travauxassainissementImage from '../../Images/travaux-assainissement.jpg'; // Assurez-vous que l'image est dans le bon dossier
// import hjImage from '../../Images/hj.jpg';
// import canivauImage from '../../Images/canivau.jpg';
// import elecImage from '../../Images/elec.jpg'

const TitreAvenir = () => {
    return (
        <div className='avenir'>
     
       
        <div className='containertrav'>
        <div className='barrestrav'>
            <div className='trait1trav'></div>
            <div className='trait2trav'></div>
            </div>
            <div className='titrestrav'>
                <h1>A VENIR</h1>
            </div>
            <div className='lignes55trav'>
            </div>
            </div>
            <div className="carousel-containertrav">
                <Carousel interval={1000}> {/* Définit le délai entre les slides à 1 seconde */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/canal.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>VISITE DE TERRAIN:CONSTRUCTION DE L'ÉCOLE 𝐇ENRI 𝐂LEMENT </h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/elec.jpg')}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>VISITE DE TERRAIN : SECURITE ELECTRIQUE AU 2E ARRONDISSEMENT</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/caniveau.jpg')}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>NETTOYAGE DES CANIVEAUX AU QUARTIER CHIC </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </div>
  );
};

export default TitreAvenir;


