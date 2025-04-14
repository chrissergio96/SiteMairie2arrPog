import React from 'react';
import './Delegue.css'; // fichier CSS pour styliser la page
import InaugurationImage from '../Images/Delegue.jpg';
import DsaImage from '../Images/Maire2arr.jpg'


const Delegue = () => {
  return (
    <div className="maire-page">
      {/* Section Biographie */}
      <section className="biography">
        <h1> Monsieur Boubakar NGOUWA GUINGO MAYAKI</h1>
        <img className='inaug' src={InaugurationImage} alt="Acte de naissance" />

        <p>
           Délégué Spédial du 2e Arrondissement de Port-Gentil depuis 2023.
          Né et élevé à Port-Gentil, il a consacré sa carrière à servir la communauté locale en
          occupant divers postes dans l'administration publique avant d'être nommé Délégué Spédial. Son
          engagement pour le développement durable et l'amélioration des infrastructures du
          quartier fait de lui un leader apprécié et respecté.
        </p>
      </section>

      {/* Section Fonctions et Responsabilités */}
      <section className="responsibilities">
        <h2>Fonctions et Responsabilités</h2>
        <ul>
          <li>Superviser la gestion administrative de l'Arrondissement.</li>
          <li>Assurer la mise en œuvre des politiques locales de développement urbain.</li>
          <li>Rencontrer les citoyens pour écouter leurs besoins et préoccupations.</li>
          <li>Collaborer avec les services municipaux pour améliorer les infrastructures.</li>
        </ul>
      </section>

      {/* Section Projets en cours */}
      <section className="projects">
        <h2>Projets en cours</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Rénovation des voiries du quartier Cap Lopez</h3>
            <p>
              Ce projet vise à réhabiliter les routes du quartier Cap Lopez pour améliorer la
              circulation et la sécurité des habitants. La fin des travaux est prévue pour fin 2025.
            </p>
          </div>
          <div className="project-item">
            <h3>Modernisation de l'éclairage public</h3>
            <p>
              Installation de lampadaires solaires dans les principales rues de l'arrondissement
              pour une meilleure sécurité nocturne et une réduction de la consommation
              énergétique.
            </p>
          </div>
        </div>
      </section>

      {/* Section Message du Maire */}
      <section className="message">
        <h2>Message du Maire</h2>
        <p>
          Chers concitoyens du 2e arrondissement, c'est avec une grande responsabilité que je
          continue à œuvrer pour le bien-être de notre communauté. Mon objectif est de rendre
          notre quartier plus moderne, plus sûr et plus inclusif. Ensemble, nous allons construire
          un avenir meilleur pour tous.
        </p>
      </section>

      {/* Section Prise de Rendez-vous */}
      <section className="contact">
        <h2>Contactez le Maire</h2>
        <p>
          Si vous souhaitez rencontrer le maire pour discuter des préoccupations ou proposer
          des idées pour améliorer l'arrondissement, veuillez prendre rendez-vous en cliquant
          sur le lien ci-dessous :
        </p>
        <a
          href="https://calendly.com/maire-2e-arrondissement/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Prendre Rendez-vous
        </a>
      </section>

      {/* Section Galerie de Photos */}
      <section className="gallery">
        <h2>Galerie Photos</h2>
        <div className="gallery-grid">
        <img src={InaugurationImage} alt="Inaug" />
        <img src={DsaImage} alt="Dsa" />

          <img src="/images/maire-rencontre.jpg" alt="Rencontre avec les citoyens" />
          <img src="/images/maire-discours.jpg" alt="Discours du maire lors d'un événement" />
        </div>
      </section>

      {/* Section Actualités */}
      <section className="news">
        <h2>Dernières Actualités</h2>
        <ul>
          <li>
            <a href="/actualites/reunion-publique">Réunion publique sur le plan de rénovation urbaine</a>
          </li>
          <li>
            <a href="/actualites/campagne-sensibilisation">Campagne de sensibilisation à la propreté</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Delegue;
