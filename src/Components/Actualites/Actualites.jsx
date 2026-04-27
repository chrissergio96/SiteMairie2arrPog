import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Actualites.css';

const actualites = [
  { id: 1, titre: 'Assainissement des quartiers du 2ème Arrondissement de Port-Gentil', categorie: 'Travaux publics', date: 'Avril 2025', imageUrl: 'travaux-assainissement.jpg', featured: true },
  { id: 2, titre: 'Programme de prévention des inondations dans les zones à risque', categorie: 'Prévention', date: 'Mars 2025', imageUrl: 'inondation.jpg' },
  { id: 3, titre: 'Modernisation du carrefour Centre Social — phase 1 terminée', categorie: 'Infrastructure', date: 'Février 2025', imageUrl: 'carref centre social.jpg' },
  { id: 4, titre: 'Visites des chantiers initiés par le CTRI dans le 2ème Arrondissement', categorie: 'CTRI', date: 'Janvier 2025', imageUrl: 'anciennebalise.jpg' },
  { id: 5, titre: 'Visite de terrain : réponse immédiate des délégués spéciaux', categorie: 'Terrain', date: 'Décembre 2024', imageUrl: 'visiteterrainpg2.jpg' },
  { id: 6, titre: 'Construction de caniveaux dans les quartiers prioritaires', categorie: 'Travaux publics', date: 'Novembre 2024', imageUrl: 'canivau.jpg' },
];

const Actualites = () => {
  const navigate = useNavigate();
  const featured = actualites[0];
  const sidebar = actualites.slice(1, 4);
  const mini = actualites.slice(3);

  return (
    <section className="actu-section">
      {/* En-tête */}
      <div className="actu-header">
        <div className="actu-flag">
          <span></span>
          <span></span>
        </div>
        <div className="actu-header-text">
          <div className="actu-label">Mairie du 2ème Arrondissement · Port-Gentil</div>
          <h2 className="actu-title">Actualités</h2>
        </div>
        <div className="actu-line" />
      </div>

      {/* Grille principale */}
      <div className="actu-grid">
        {/* Article à la une */}
        <div className="actu-featured" onClick={() => navigate(`/projet/${featured.id}`)}>
          <img src={featured.imageUrl} alt={featured.titre} className="actu-featured-img-real" />
          <div className="actu-featured-overlay" />
          <div className="actu-featured-body">
            <span className="actu-cat">{featured.categorie}</span>
            <h3 className="actu-featured-title">{featured.titre}</h3>
            <div className="actu-featured-meta">
              <span className="actu-meta-txt">Mairie de Port-Gentil</span>
              <span className="actu-meta-dot" />
              <span className="actu-meta-txt">{featured.date}</span>
            </div>
            <div className="actu-read">
              Lire la suite
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#90b4e8" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="actu-sidebar">
          {sidebar.map((a) => (
            <div key={a.id} className="actu-card" onClick={() => navigate(`/projet/${a.id}`)}>
              <div className="actu-card-accent" />
              <div>
                <div className="actu-card-cat">{a.categorie}</div>
                <div className="actu-card-title">{a.titre}</div>
              </div>
              <div className="actu-card-meta">{a.date} · Mairie</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini cards */}
      <div className="actu-more-row">
        {mini.map((a, i) => (
          <div key={a.id} className="actu-mini" onClick={() => navigate(`/projet/${a.id}`)}>
            <div className="actu-mini-num">0{i + 4}</div>
            <div className="actu-mini-body">
              <div className="actu-mini-cat">{a.categorie}</div>
              <div className="actu-mini-title">{a.titre}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton voir tout */}
      <div className="actu-footer">
        <button className="actu-all-btn" onClick={() => navigate('/actualites')}>
          Toutes les actualités
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Actualites;