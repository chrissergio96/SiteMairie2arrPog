import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import { Link} from "react-router-dom";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    // Tableau des suggestions
    const suggestions = [
        { name: 'Service État Civil', path: '/Etatcivil' },
        { name: 'Service Technique', path: '/technique' },
        { name: 'Service Social', path: '/Servicesocial' },
        { name: 'Urbanisme', path: '/urbanisme' },
        { name: 'Agenda', path: '/agenda' },
        { name: 'Chefs de Quartiers et CDQ', path: '/cdq' },
        { name: 'Mariage', path: '/mariage' },
        { name: 'Galerie', path: '/galerie' },
        { name: 'Contact', path: '/contact'},
        { name: 'Cdq', path: '/cdq'},
        { name: 'Etatcivil', path: '/etatcivil'},
        { name: 'Légalisation', path: '/légalisation'},
        { name: 'Aidesocials', path: '/aidesocials'},
        { name: 'Projet', path: '/projet'},
        { name: 'Transcription', path: '/transcription'},
        { name: 'Technique', path: '/technique'},
        { name: 'Servicesocial', path: '/servicesocial'},
        { name: 'TravauxUrbanisme', path: '/travauxurbanisme'},
        { name: 'AutorisationsUrbanisme', path: '/autorisationsurbanisme'},
        { name: 'Amenagements', path: '/amenagements'},
        { name: 'Apropos', path: '/apropos'},
        { name: 'Cdqgalerie', path: '/cdqgalerie'},
        { name: 'Culturegalerie', path: '/culturegalerie'},
        { name: 'Galeriemariage', path: '/galeriemariage'},
        { name: 'ReglesUrb', path: '/reglesurb'},
    ];

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Filtrer les suggestions basées sur la saisie
        if (value.length > 0) {
            const filtered = suggestions.filter(suggestion =>
                suggestion.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    };

    return (
        <div className='mairiea'>
            <div className='mere-searcha'>
                <div className="search-containera">
                    <input 
                        type="text" 
                        placeholder="Rechercher..." 
                        className="search-inputa" 
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <SearchIcon className="search-icon" />
                </div>
                
                {/* Affichage des suggestions */}
                {filteredSuggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li key={index}>
                                <Link to={suggestion.path} className="suggestion-item">
                                    {suggestion.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="button-containersa">
                <div className="buttons-left">
                    <Link to='/Etatcivil'><button className="button">SERVICE ETAT CIVIL<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/technique'><button className="button">SERVICE TECHNIQUE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/Servicesocial'> <button className="button">SERVICE SOCIAL<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/urbanisme'><button className="button">URBANISME<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
                <div className="buttons-rights">
                    <Link to='/agenda'><button className="button">AGENDA <ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/cdq'><button className="button">CHEFS DE QUARTIERS ET CDQ<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/mariage'><button className="button">MARIAGE <ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/galerie'><button className="button">GALERIE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
            </div>
             
            <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer" className="audience-button">
                Demande d'audience
            </a>
        </div>
    );
};

export default Header;
