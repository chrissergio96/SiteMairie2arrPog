import React from 'react';
import './MotMaire.css';
import MaireImage from '../../Images/Maire2arr.jpg';
// import Adjoint1Image from '../../Images/adjoint1.jpg';
// import Adjoint2Image from '../../Images/adjoint2.jpg';

const adjoints = [
  {
    rang: '1er Adjoint',
    ordre: '1er Adjoint au Maire',
    nom: 'Prénom NOM du 1er Adjoint',
    role: 'Délégation aux affaires sociales',
    desc: "En charge du suivi des politiques sociales, de l'aide aux familles et de la coordination des services de proximité dans le 2ème Arrondissement.",
    // image: Adjoint1Image,
  },
  {
    rang: '2ème Adjoint',
    ordre: '2ème Adjoint au Maire',
    nom: 'Prénom NOM du 2ème Adjoint',
    role: 'Délégation aux travaux & urbanisme',
    desc: "En charge de la supervision des travaux publics, de l'urbanisme et du développement des infrastructures dans l'arrondissement.",
    // image: Adjoint2Image,
  },
];

const MotMaire = () => {
  return (
    <>
      {/* Section Mot du Maire */}
      <section className="maire-section">
        <div className="maire-inner">
          <div className="maire-header">
            <div className="maire-flag">
              <span></span>
              <span></span>
            </div>
            <div className="maire-header-text">
              <div className="maire-sup">Mairie du 2ème Arrondissement · Port-Gentil</div>
              <h2 className="maire-h2">Le mot du Maire</h2>
            </div>
            <div className="maire-hline" />
          </div>

          <div className="maire-body">
            <div className="maire-quote-side">
              <div>
                <span className="maire-guillemet">"</span>
                <p className="maire-quote-text">
                  En tant que Maire du 2ème Arrondissement de Port-Gentil, je tiens à vous
                  remercier pour votre engagement au sein de notre communauté.
                  <br /><br />
                  Notre mission est de continuer à <strong>développer les infrastructures</strong> et
                  améliorer les services publics pour tous les citoyens. Ensemble, nous construirons
                  un avenir meilleur pour notre Arrondissement.
                </p>
              </div>
              <div className="maire-sig">
                <div className="maire-sig-line" />
                <div className="maire-sig-name">Monsieur</div>
                <div className="maire-sig-title">Maire</div>
                <div className="maire-sig-sub">2ème Arrondissement de Port-Gentil · République Gabonaise</div>
              </div>
            </div>

            <div className="maire-img-side">
              <img src={MaireImage} alt="Délégué Spécial Boubakar NGOUWA GUINGO MAYAKI" />
              <div className="maire-img-overlay">
                <div className="maire-img-badge">
                  <span className="maire-img-bdot" />
                  Maire en fonction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Adjoints */}
      <section className="adjoints-wrap">
        <div className="adjoints-inner">
          <div className="adj-header">
            <div className="maire-flag">
              <span></span>
              <span></span>
            </div>
            <div>
              <div className="adj-sup">Direction collégiale</div>
              <h2 className="adj-title">Les Adjoints au Maire</h2>
            </div>
            <div className="adj-line" />
          </div>

          <div className="adj-grid">
            {adjoints.map((adj, i) => (
              <div key={i} className="adj-card">
                <div className="adj-photo">
                  <span className="adj-rank">{adj.rang}</span>
                  {adj.image
                    ? <img src={adj.image} alt={adj.nom} />
                    : (
                      <svg viewBox="0 0 24 24" width="52" height="52" fill="rgba(255,255,255,0.12)">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                      </svg>
                    )
                  }
                </div>
                <div className="adj-info">
                  <div>
                    <div className="adj-order">{adj.ordre}</div>
                    <div className="adj-name">{adj.nom}</div>
                    <div className="adj-role">{adj.role}</div>
                    <p className="adj-desc">{adj.desc}</p>
                  </div>
                  <div>
                    <div className="adj-divider" />
                    <div className="adj-contact">
                      <span className="adj-contact-dot" />
                      <span className="adj-contact-txt">Administration · Mairie 2ème Arr.</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MotMaire;