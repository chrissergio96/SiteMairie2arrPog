import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'; // Pour la navigation
import './Actualites.css';

const Actualites = () => {
    const [actualites, setActualites] = useState([]);
    const navigate = useNavigate(); // Initialiser useNavigate pour rediriger vers d'autres pages

    useEffect(() => {
        // Détecter l'URL de l'API en fonction de l'environnement (local ou production)
        const apiUrl = process.env.NODE_ENV === 'production' 
            ? 'https://site-mairie2arr-pog.vercel.app/actualites' // URL en ligne
            : 'http://localhost:5000/api/actualites'; // URL locale

        // Récupérer les actualités depuis l'API backend
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setActualites(data))
            .catch(error => console.error("Erreur lors de la récupération des actualités : ", error));
    }, []);

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
