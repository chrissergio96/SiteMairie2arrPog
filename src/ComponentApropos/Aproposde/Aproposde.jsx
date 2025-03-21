import React from 'react';
import './Aproposde.css';
import DelegueImage from '../../Images/Delegue.jpg';
import GeneralImage from '../../Images/general.jpg';


const Aproposde = () => {
  return (
    <div className="apropos-container">
      <h1>À propos de la Mairie du 2e Arrondissement de Port-Gentil</h1>
      <section className="apropos-intro">
        <p>
          La Mairie du 2e Arrondissement de Port-Gentil se distingue par un engagement constant envers les citoyens. Nous visons à améliorer la vie des résidents avec des services sociaux, des initiatives de développement, et un engagement pour la transparence.
        </p>
      </section>

      <section className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team-members">

          {/* Maire */}
          <div className="team-member">
          <img src={DelegueImage} alt="Maire" />
          <h3>Délégué Spécial :<br></br><br></br><strong> Boubakar NGOUWA GUINGO MAYAKI</strong></h3>
            <p>Responsable de la gestion générale du 2e Arrondissement.</p>
          </div>

          {/* Délégué spécial adjoint */}
          <div className="team-member">
            <img src={GeneralImage} alt="Délégué Spécial Adjoint" />
            <h3>Délégué Spécial Adjoint:<br></br><br></br><strong>Le Commandant ONDO ZUE Bertin </strong>  
               
            </h3>
            <p>Responsable adjoint des affaires sociales et du développement local du 2e Arrondissement.</p>
          </div>

          {/* Secrétariat */}
          <div className="team-member">
            <img src={DelegueImage} alt="Secrétariat" />
            <h3>Chef de Cabinet</h3>
            <p>Coordination des activités administratives.</p>
          </div>

          {/* Responsable du service technique */}
          <div className="team-member">
            <img src={GeneralImage} alt="Service Technique" />
            <h3>Responsable du Service Technique</h3>
            <p>Gestion des infrastructures publiques et des travaux.</p>
          </div>

          {/* Service social */}
          <div className="team-member">
            <img src="/images/service_social.jpg" alt="Service Social" />
            <h3>Responsable du Service Social</h3>
            <p>Soutien aux familles et programmes d’aide sociale.</p>
          </div>

          {/* Service état civil */}
          <div className="team-member">
            <img src="/images/etat_civil.jpg" alt="État Civil" />
            <h3>Responsable du Service État Civil</h3>
            <p>Gestion des actes de naissance, mariage, et décès.</p>
          </div>

          {/* Hub municipal */}
          <div className="team-member">
            <img src="/images/hub_municipal.jpg" alt="Hub Municipal" />
            <h3>Hub Municipal</h3>
            <p>Point de contact pour l'innovation et le développement local.</p>
          </div>

        </div>
      </section>

      <section className="apropos-valeurs">
        <h2>Nos Valeurs</h2>
        <p>
          Transparence, responsabilité et engagement communautaire sont les principes qui guident chaque décision que nous 
          prenons. Nous travaillons sans relâche pour bâtir une administration proche de ses citoyens et attentive à leurs besoins.
        </p>
      </section>
    </div>
  );
};

export default Aproposde;
