import React from 'react';
import './TitreEncours.css';
import Carousel from 'react-bootstrap/Carousel';

// import travauxassainissementImage from '../../Images/travaux-assainissement.jpg'; // Assurez-vous que l'image est dans le bon dossier
// import hjImage from '../../Images/hj.jpg';
// import canivauImage from '../../Images/canivau.jpg';
// import elecImage from '../../Images/elec.jpg'

const TitreEncours = () => {
    return (
        <div className='encours'>
     
       
        <div className='containertren'>
        <div className='barrestren'>
            <div className='trait1tren'></div>
            <div className='trait2tren'></div>
            </div>
            <div className='titrestren'>
                <h1>EN COURS</h1>
            </div>
            <div className='lignes55tren'>
            </div>
            </div>
            <div className="carousel-containertren">
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

export default TitreEncours;


