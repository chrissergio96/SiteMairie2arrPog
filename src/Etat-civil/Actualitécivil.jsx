import React from 'react';
import './Actualitécivil.css';

const Actualitécivil = () => {
  return (
    <section className="etc-section">

      <div className="etc-container">

        {/* Titre */}
        <div className="etc-header">
          <span className="etc-badge">Présentation</span>
          <h2>À propos du service d’état civil</h2>
          <div className="etc-line"></div>
        </div>

        {/* Contenu */}
        <div className="etc-card">
          <p className="etc-text">
            Le service de l'État civil est responsable de l'enregistrement et de la gestion
            des événements majeurs de la vie des citoyens, tels que les naissances,
            mariages, décès et reconnaissances.
          </p>

          <p className="etc-text">
            Il est divisé en deux sections principales :
          </p>

          <div className="etc-list">

            <div className="etc-item">
              <h3>Transcription</h3>
              <p>
                Inscription dans les registres d’état civil des événements survenus à l’étranger
                ou dans des situations particulières, afin d’assurer leur reconnaissance légale.
              </p>
            </div>

            <div className="etc-item">
              <h3>Légalisation</h3>
              <p>
                Authentification des signatures sur des documents publics afin de garantir
                leur validité juridique, notamment à l’international.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Actualitécivil;