import React from 'react';
import './Aproposde.css';
import DelegueImage from '../../Images/Delegue.jpg';
import GeneralImage from '../../Images/general.jpg';
import CCImage from '../../Images/pont.jpg';
import ChristelleImage from '../../Images/Christelle.jpg';
import JeanneImage from '../../Images/Jeanne.jpg';
import FranciscaImage from '../../Images/Francisca.jpg'


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

          
          <div className="team-member">
            <img src={CCImage} alt="Cabinet" />
            <h3>Chef de Cabinet :<br></br><br></br><strong>Chris IGANA </strong>
            </h3>
            <p>Coordination des activités administratives.</p>
          </div>

          

           <div className="team-member">
            <img src={FranciscaImage} alt="Service Etat civil" />
            <h3>Sécrétaire particulière du Délégué Spécial: <br/><br/><br/> <strong> Joel AYAMINE REMBANGOUET</strong>
            </h3>
            <p>Gestion des tâches administratives, organisationnelles et relationnelles du Délégué Spécial</p>
          </div>

           <div className="team-member">
              <img src={ChristelleImage} alt="Chargé de l'état spécial" />
              <h3>Chargé de l'Etat Spécial : <br/><br/><br/> <strong> Christelle Pamela MANDZEMBE BILONGO</strong>
            </h3>
            <p>En charge de la gestion des finances de la Mairie.</p>
          </div>

          <div className="team-member">
          <img src={JeanneImage} alt="Chargé du Protocole" />
          <h3>Chargé du Protocole <br/><br/><br/> <strong> Jeanne BOUTSANA </strong>
            </h3>
            <p>En charge de la gestion protocolaire de la Mairie.</p>
          </div>

          <div className="team-member">
            <img src={GeneralImage} alt="Service Etat civil" />
            <h3>Chef de section d'Etat-Civil: <br/><br/><br/> <strong> Joel AYAMINE REMBANGOUET</strong>
            </h3>
            <p>Gestion des actes de naissance, mariage, et décès.</p>
          </div>
             

          <div className="team-member">
            <img src="/images/service_social.jpg" alt="Service Social" />
            <h3>Chef de section Service Social <br/><br/><br/> <strong> Jacqueline NZIENGUI Epse NZIENGUI</strong>
            </h3> 
            <p>Soutien aux familles et programmes d’aide sociale.</p>
          </div>


          <div className="team-member">
            <img src="/images/etat_civil.jpg" alt="Assistant Technique" />
            <h3>Assistant Technique <br/><br/><br/> <strong> Jovan MOKOUKOU KONDJA </strong>
            </h3>
            <p>Gestion des infrastructures publiques et des travaux.</p>
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
