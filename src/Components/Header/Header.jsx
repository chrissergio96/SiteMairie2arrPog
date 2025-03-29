import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import { Link, useNavigate } from "react-router-dom"; // Importation de useNavigate
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js'; // Importation de Fuse.js

// Images de la bannière défilante
const images = [
    require('../../Images/Ville/ancien port p.jpg'),
    require('../../Images/Ville/lephare.jpg'),
    require('../../Images/Ville/POG.jpg'),
    require('../../Images/Ville/MARINA.jpg'),
    require('../../Images/Ville/lamarina.jpg'),
    require('../../Images/Ville/Mairie de.jpg'),
    require('../../Images/Ville/carref len mba.jpg'),
    require('../../Images/Ville/ANCIENPORT.jpg'),
];

// Suggestions actuelles + mots-clés supplémentaires pour la recherche
const suggestions = [
    { name: 'Service État Civil', path: '/Etatcivil' },
    { name: 'Service Technique', path: '/technique' },
    { name: 'Service Social', path: '/Servicesocial' },
    { name: 'Urbanisme', path: '/urbanisme' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Chefs de Quartiers et CDQ', path: '/cdq' },
    { name: 'Mariage', path: '/mariage' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
    // Ajoutez plus de suggestions ici si nécessaire
];

// Mots-clés supplémentaires pour une meilleure recherche
const keywords = [
    { name: 'Mairie', path: '/mairie' },
    { name: 'Maire', path: '/maire' },
    { name: 'Service Urbanisme', path: '/urbanisme' },
    { name: 'Demande d\'audience', path: '/audience' },
    { name: 'Services Techniques', path: '/technique' },
    { name: 'État Civil', path: '/Etatcivil' },
    // Ajoutez autant de mots-clés pertinents que nécessaire
];

// Mélanger les suggestions et les mots-clés
const fullSuggestions = [...suggestions, ...keywords];

// Configuration de Fuse.js
const fuse = new Fuse(fullSuggestions, {
    keys: ['name'],
    threshold: 0.3, // Ajuster pour plus ou moins de tolérance
});

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate(); // Initialiser useNavigate

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change d'image toutes les 5 secondes

        return () => clearInterval(intervalId); // Nettoyage de l'intervalle à la fin
    }, []);

    // Gestion de la recherche
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        filterSuggestions(value);
    };

    // Filtrage des suggestions avec Fuse.js
    const filterSuggestions = (value) => {
        if (value.length > 0) {
            const result = fuse.search(value); // Recherche floue
            setFilteredSuggestions(result.map(res => res.item)); // Extraction des éléments correspondants
        } else {
            setFilteredSuggestions([]);
        }
    };

    // Gérer le clic sur l'icône de la loupe
    const handleIconClick = () => {
        if (filteredSuggestions.length > 0) {
            // Rediriger vers la première suggestion trouvée
            const firstSuggestion = filteredSuggestions[0];
            navigate(firstSuggestion.path); // Utilisation de navigate pour rediriger
        } else if (searchTerm.length > 0) {
            alert('Aucun élément correspondant'); // Affiche un message si aucun résultat
        }
    };

    return (
        <div className='mairiea' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className='mere-searcha'>
                <div className="search-containera">
                    <input 
                        type="text" 
                        placeholder="Rechercher..." 
                        className="search-inputa" 
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <SearchIcon className="search-icon" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
                </div>

                {/* Affichage des suggestions */}
                {filteredSuggestions.length > 0 ? (
                    <ul className="suggestions-list">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li key={index}>
                                <Link to={suggestion.path} className="suggestion-item">
                                    {suggestion.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : searchTerm.length > 0 ? (
                    <p className="no-suggestions">Aucun élément correspondant</p>
                ) : null}
            </div>

            {/* Boutons des services */}
            <div className="button-containersa">
                <div className="buttons-left">
                    <Link to='/Etatcivil'><button className="button">SERVICE ETAT CIVIL<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/technique'><button className="button">SERVICE TECHNIQUE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/Servicesocial'><button className="button">SERVICE SOCIAL<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/urbanisme'><button className="button">URBANISME<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
                <div className="buttons-rights">
                    <Link to='/agenda'><button className="button">AGENDA <ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/cdq'><button className="button">CHEFS DE QUARTIERS ET CDQ<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/mariage'><button className="button">MARIAGE <ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/galerie'><button className="button">GALERIE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
            </div>

            {/* Bouton d'audience */}
            <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer" className="audience-button">
                Demande d'audience
            </a>
        </div>
    );
};

export default Header;
