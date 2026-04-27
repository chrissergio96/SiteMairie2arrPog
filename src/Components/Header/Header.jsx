import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import Actu from '../Actu/Actu';
import backgroundVideo from './video.mp4';

const suggestions = [
  { name: 'Service État Civil', path: '/Etatcivil', sub: 'Actes & documents' },
  { name: 'Service Technique', path: '/technique', sub: 'Infrastructure & voirie' },
  { name: 'Service Social', path: '/Servicesocial', sub: 'Aide & accompagnement' },
  { name: 'Urbanisme', path: '/urbanisme', sub: 'Permis & plans' },
  { name: 'Agenda', path: '/agenda', sub: 'Événements & dates' },
  { name: 'Chefs de Quartiers et CDQ', path: '/cdq', sub: 'Représentants locaux' },
  { name: 'Mariage', path: '/mariage', sub: 'Célébrations civiles' },
  { name: 'Galerie', path: '/galerie', sub: 'Photos & médias' },
  { name: 'Contact', path: '/contact', sub: 'Nous joindre' },
  { name: 'Mairie', path: '/' },
  { name: 'Maire', path: '/' },
  { name: 'État Civil', path: '/Etatcivil' },
  { name: "Demande d'audience", path: 'https://calendly.com/safou-christiansergio/30min' },
];

const services = [
  { name: 'État Civil', sub: 'Actes & documents', path: '/Etatcivil' },
  { name: 'Urbanisme', sub: 'Permis & plans', path: '/urbanisme' },
  { name: 'Service Social', sub: 'Aide & accompagnement', path: '/Servicesocial' },
  { name: 'Service Technique', sub: 'Infrastructure & voirie', path: '/technique' },
  { name: 'Agenda', sub: 'Événements & dates', path: '/agenda' },
  { name: 'Mariage', sub: 'Célébrations civiles', path: '/mariage' },
  { name: 'CDQ', sub: 'Chefs de quartiers', path: '/cdq' },
  { name: 'Galerie', sub: 'Photos & médias', path: '/galerie' },
];

const fuse = new Fuse(suggestions, { keys: ['name'], threshold: 0.3 });

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setFilteredSuggestions(fuse.search(value).map(r => r.item));
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSearchSubmit = () => {
    if (filteredSuggestions.length > 0) {
      const target = filteredSuggestions[0];
      if (target.path.startsWith('http')) window.open(target.path, '_blank');
      else navigate(target.path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearchSubmit();
  };

  return (
    <div className="hero-wrap">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <Actu />

      {/* Topbar */}
<div className="topbar">
  <div className="logo-zone">
    
    {/* Drapeau gabonais incliné */}
    <div className="gabon-flag">
      <div className="flag-green"></div>
      <div className="flag-yellow"></div>
      <div className="flag-blue"></div>
      <div className="flag-overlay">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="white" opacity="0.9">
          <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l7 3.9v8.6l-7 3.9-7-3.9V8.2l7-3.9z"/>
        </svg>
      </div>
    </div>

    <div className="logo-text">
      <span className="logo-city">Port-Gentil</span>
      <span className="logo-sub">République Gabonaise</span>
    </div>
    <div className="logo-divider" />
    <span className="logo-arr">2ème Arrondissement</span>
  </div>

  <div className="topbar-right">
    <Link to="/" className="nav-pill">Accueil</Link>
    <span className="nav-sep">·</span>
    <Link to="/galerie" className="nav-pill">Galerie</Link>
    <span className="nav-sep">·</span>
    <Link to="/agenda" className="nav-pill">Agenda</Link>
    <span className="nav-sep">·</span>
    <Link to="/contact" className="nav-pill">Contact</Link>
    <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer" className="audience-btn">
      Demande d'audience
    </a>
  </div>
</div>

      {/* Hero center */}
      <div className="hero-center">
        <div className="hero-badge">
          <span className="badge-dot" />
          Mairie officielle
        </div>
        <h1 className="hero-title">
          Bienvenue à la Mairie du<br />
          <em>2ème Arrondissement</em>
        </h1>
        <p className="hero-subtitle">Au service des citoyens de Port-Gentil · Gabon</p>

        <div className="search-wrap">
          <div className="search-box">
            <input
              type="text"
              placeholder="Rechercher un service, une démarche…"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
            <button className="search-btn" onClick={handleSearchSubmit}>
              <SearchIcon style={{ fontSize: 20, color: '#fff' }} />
            </button>
          </div>
          {filteredSuggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {filteredSuggestions.map((s, i) => (
                <li key={i}>
                  <Link
                    to={s.path}
                    className="suggestion-item"
                    onClick={() => setFilteredSuggestions([])}
                  >
                    <span className="suggestion-name">{s.name}</span>
                    {s.sub && <span className="suggestion-sub">{s.sub}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {filteredSuggestions.length === 0 && searchTerm.length > 0 && (
            <p className="no-result">Aucun résultat pour « {searchTerm} »</p>
          )}
        </div>
      </div>

      {/* Services bar */}
      <div className="services-bar">
        {services.map((s, i) => (
          <Link to={s.path} key={i} className="svc-card">
            <div className="svc-info">
              <span className="svc-name">{s.name}</span>
              <span className="svc-sub">{s.sub}</span>
            </div>
            <ArrowForwardIcon className="svc-arrow" style={{ fontSize: 16 }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;