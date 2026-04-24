import React, { useState, useEffect } from 'react';
import './Publicites.css';

const pubs = [
  {
    id: 1,
    nom: 'Boulangerie Soleil',
    categorie: 'Alimentation',
    description: 'Pains frais, pâtisseries et viennoiseries chaque matin.',
    contact: '+241 06 00 00 01',
    badge: 'PME locale',
    emoji: '🍞',
    couleur: '#f59e0b',
    image: 'https://gabonactu.com/wp-content/uploads/2026/02/Pub-Alternee-1.gif',
    // ↑ Remplacez par le chemin local : './images/boulangerie.jpg' ou une URL
    lien: 'https://boulangerie-soleil.ga',
    // ↑ Mettez null si l'entrepreneur n'a pas de site web
  },
  {
    id: 2,
    nom: 'Atelier Couture Élégance',
    categorie: 'Mode & Textile',
    description: 'Confection sur mesure, retouches et tenues traditionnelles.',
    contact: '+241 06 00 00 02',
    badge: 'Artisan',
    emoji: '🧵',
    couleur: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=160&fit=crop',
    lien: 'https://couture-elegance.ga',
  },
  {
    id: 3,
    nom: 'BTP Gabon Services',
    categorie: 'Construction',
    description: 'Travaux de construction, rénovation et aménagement intérieur.',
    contact: '+241 06 00 00 03',
    badge: 'Entrepreneur',
    emoji: '🏗️',
    couleur: '#10b981',
    image: 'https://gabonmediatime.com/wp-content/uploads/2025/09/Pub-comilog-RSE-02-dec-2025.jpg',
    lien: 'https://btp-gabon.ga',
  },
  {
    id: 4,
    nom: 'Pharmacie du Centre',
    categorie: 'Santé',
    description: 'Médicaments, produits de beauté et conseils santé.',
    contact: '+241 06 00 00 04',
    badge: 'Santé',
    emoji: '💊',
    couleur: '#ef4444',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=160&fit=crop',
    lien: 'https://pharmacie-centre.ga',
  },
  {
    id: 5,
    nom: 'Taxi Express Mairie',
    categorie: 'Transport',
    description: 'Transport rapide et fiable 24h/24 dans toute la commune.',
    contact: '+241 06 00 00 05',
    badge: 'Service',
    emoji: '🚖',
    couleur: '#3b82f6',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=300&h=160&fit=crop',
    lien: null, // Pas de site web → bouton désactivé
  },
];

function Publicites() {
  const [indexActif, setIndexActif] = useState(0);
  const [visible, setVisible] = useState(true);
  const [imgErreur, setImgErreur] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndexActif((prev) => (prev + 1) % pubs.length);
        setVisible(true);
        setImgErreur(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const pub = pubs[indexActif];

  const allerPub = (index) => {
    setVisible(false);
    setTimeout(() => {
      setIndexActif(index);
      setVisible(true);
      setImgErreur(false);
    }, 300);
  };

  return (
    <aside className="publicites-sidebar">
      {/* En-tête */}
      <div className="pub-header">
        <span className="pub-header-icon">📢</span>
        <div>
          <h3 className="pub-titre">Espace Publicité</h3>
          <p className="pub-sous-titre">PME & Entrepreneurs locaux</p>
        </div>
      </div>

      {/* Carte pub */}
      <div className={`pub-carte ${visible ? 'visible' : 'hidden'}`}>

        {/* IMAGE avec fallback emoji si l'image ne charge pas */}
        <div className="pub-image-zone" style={{ borderBottom: `3px solid ${pub.couleur}` }}>
          {pub.image && !imgErreur ? (
            <img
              src={pub.image}
              alt={pub.nom}
              className="pub-image"
              onError={() => setImgErreur(true)}
            />
          ) : (
            <div className="pub-image-fallback" style={{ background: `${pub.couleur}18` }}>
              <span className="pub-emoji-grand">{pub.emoji}</span>
            </div>
          )}
          <span className="pub-badge" style={{ background: pub.couleur }}>
            {pub.badge}
          </span>
        </div>

        {/* Contenu texte */}
        <div className="pub-corps">
          <p className="pub-categorie">{pub.categorie}</p>
          <h4 className="pub-nom">{pub.nom}</h4>
          <p className="pub-description">{pub.description}</p>

          <div className="pub-contact">
            <span>📞</span>
            <a href={`tel:${pub.contact.replace(/\s/g, '')}`}>{pub.contact}</a>
          </div>

          {/* Bouton lien vers leur page */}
          {pub.lien ? (
            <a
              href={pub.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-lien-btn"
              style={{ background: pub.couleur }}
            >
              🌐 Visiter leur page
            </a>
          ) : (
            <span className="pub-lien-indisponible">📵 Pas de site web</span>
          )}
        </div>
      </div>

      {/* Dots de navigation — couleur dynamique selon la pub active */}
      <div className="pub-dots">
        {pubs.map((p, i) => (
          <button
            key={i}
            className={`pub-dot ${i === indexActif ? 'actif' : ''}`}
            style={i === indexActif ? { background: p.couleur, transform: 'scale(1.3)' } : {}}
            onClick={() => allerPub(i)}
            aria-label={`Publicité ${i + 1} - ${p.nom}`}
          />
        ))}
      </div>

      <p className="pub-compteur">{indexActif + 1} / {pubs.length}</p>

      {/* CTA inscription */}
      <div className="pub-cta">
        <p className="pub-cta-texte">Vous êtes une PME ou un entrepreneur ?</p>
        <a href="mailto:mairie@commune.ga" className="pub-cta-btn">
          📩 Nous contacter
        </a>
      </div>
    </aside>
  );
}

export default Publicites;
