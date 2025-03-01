import React from 'react';
import './Footertech.css';
import logo from '../../Images/logo maire 14.svg'; // Remplacez par le chemin de votre logo
import log from '../../Images/whatsapp.svg'; // Remplacez par le chemin de votre logo
import lo from '../../Images/facebook.svg'; // Remplacez par le chemin de votre logo


const Footertech = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
         <img src={logo} alt="Logo Mairie" />
        </div>

        <div className="footer-middle">
          <h3>Horaires</h3>
          <ul>
            <li><strong>Lundi</strong> : 7h30 à 15h30</li>
            <li><strong>Mardi</strong> : 7h30 à 15h30</li>
            <li><strong>Mercredi</strong> : 7h30 à 15h30</li>
            <li><strong>Jeudi</strong> : 7h30 à 15h30</li>
            <li><strong>Vendredi</strong> : 7h30 à 15h30</li>

          </ul>
          <p><strong>Attention</strong> : L’accueil physique dans le hall administratif se fait uniquement sur rendez-vous.</p>
          <button className="footer-button">Voir les horaires</button>
        </div>

        <div className="footer-links">
          <h3>Accès rapide</h3>
          <ul>
            <a href='https://www.facebook.com/Mairie2eArrondissementPortGentil'><li>Service Etat-Civil</li></a>
            <li>Service Social</li>
            <li>Service Technique</li>
            <li>Urbanisme</li>
            <li>Agenda</li>
            <li>CDQ</li>
            <li>Hub Municipal</li>
            <li>Galerie</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Je m'informe</h3>
          <div className="social-icons">

          <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil">
          <img src={log} alt="whatsapp" /></a>
          <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil">
          <img src={lo} alt="facebook" /></a>

          </div>
          <input type="email" placeholder="Adresse e-mail *" className="email-input" />
          <div className="footer-checkbox">
            <input type="checkbox" />
            <label>J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</label>
          </div>
          <button className="subscribe-button">Je m'abonne !</button>
        </div>
      </div>
    </footer>
  );
};

export default Footertech;
