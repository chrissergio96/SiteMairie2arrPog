import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'; // Pour la navigation
import './Actualites.css';

const Actualites = () => {
    const navigate = useNavigate(); // Initialiser useNavigate pour rediriger vers d'autres pages

    // Liste des actualités (données statiques ou simulées)
    const actualites = [
        {
            id: 1,
            titre: 'ASSAINISSEMENT DES QUARTIERS',
            imageUrl: 'travaux-assainissement.jpg'
        },
        {
            id: 2,
            titre: 'INONDATION PREVENTION',
            imageUrl: 'inondation.jpg'
        },
        { 
            id: 3,
            titre: "[TRAVAUX PUBLICS ]",
            description: '',
            imageUrl:'canivau.jpg'
     },
        {
            id: 4,
            titre: 'MODERNISATION DU CARREFOUR CENTRE SOCIAL',
            imageUrl: 'carref centre social.jpg'
        },
        {
            id: 5,
            titre: '[VISITES DES CHANTIERS INITIES PAR LE CTRI DANS LE 2ᵉ ARRONDISSEMENT DE PORT-GENTIL]',
            imageUrl: 'anciennebalise.jpg'
        },
        {
            id: 6,
            titre: '[ VISITE DE TERRAIN : REPONSE IMMEDIATEDES DELEGUES SPECIAUX]',
            imageUrl: 'visiteterrainpg2.jpg'
        },
       

        // Ajoute ici les autres actualités statiques
    ];

    // Fonction pour gérer la redirection vers la page projet
    const handleClick = (projetId) => {
        navigate(`/projet/${projetId}`);
    };

    return (
        <div className='mere'>
            <div className='container1j'>
                <div className='barres'>
                    <div className='trait1l'></div>
                    <div className='trait2'></div>
                </div>
                <div className='titres'>
                    <h1>ACTUALITES</h1>
                </div>
                <div className='lignes55'></div>
            </div>

            <div className="carousel-containeracc">
                <Carousel interval={3000}>
                    {actualites.map((actualite, index) => (
                        <Carousel.Item
                            key={index}
                            onClick={() => handleClick(actualite.id)}
                        >
                            <img
                                className="d-block w-100"
                                src={actualite.imageUrl} 
                                alt={`Slide ${index + 1}`}
                            />
                            <Carousel.Caption>
                                <h3>{actualite.titre}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Actualites;
