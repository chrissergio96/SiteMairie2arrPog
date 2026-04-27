import React, { useState } from 'react';
import './Footer.css';
import logo from '../../Images/logo Mairie.jpg';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Vous devez accepter les conditions.');
      return;
    }

    if (!email) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    emailjs.send(
      'service_1p0onh9',
      'template_s6j0aw6',
      {
        to_email: 'mairie2pog@gmail.com',
        from_email: email,
        subject: 'Nouvelle inscription à la newsletter',
        message: `Nouvel abonné : ${email}`,
      },
      'myESIYLJrrS1XkCq-'
    )
    .then(() => {
      alert('Merci pour votre abonnement !');
      setEmail('');
      setIsChecked(false);
    })
    .catch(() => {
      alert('Une erreur est survenue, veuillez réessayer.');
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img src={logo} alt="Logo Mairie du 2ème Arrondissement" className="footer-logo-img" />
          </Link>

          <p className="footer-brand-desc">
            Mairie du 2ème Arrondissement de Port-Gentil. Au service des citoyens de la République Gabonaise.
          </p>

          <div className="footer-social">

            {/* WhatsApp */}
            <a
              href="https://wa.me/24160371461"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.7)">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Mairie2eArrondissementPortGentil"
              className="footer-social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.7)">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Horaires */}
        <div className="footer-col">
          <div className="footer-col-title">
            <span className="footer-col-dot" />
            Horaires d'ouverture
          </div>

          <div className="footer-hours-item">
            <span>Lundi – Vendredi</span>
            <span>7h30 – 15h30</span>
          </div>

          <div className="footer-hours-item">
            <span>Samedi</span>
            <span>Fermé</span>
          </div>

          <div className="footer-hours-item">
            <span>Dimanche</span>
            <span>Fermé</span>
          </div>

          <div className="footer-hours-note">
            <p>L'accueil physique se fait uniquement sur rendez-vous.</p>
          </div>

          {/* Calendly */}
          <a
            href="https://calendly.com/safou-christiansergio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-hours-btn"
          >
            Prendre RDV →
          </a>
        </div>

        {/* Accès rapide */}
        <div className="footer-col">
          <div className="footer-col-title">
            <span className="footer-col-dot" />
            Accès rapide
          </div>

          <ul className="footer-links-list">
            {[
              { label: 'Service État Civil', path: '/etatcivil' },
              { label: 'Service Social', path: '/servicesocial' },
              { label: 'Service Technique', path: '/technique' },
              { label: 'Urbanisme', path: '/urbanisme' },
              { label: 'Agenda', path: '/agenda' },
              { label: 'Chefs de quartiers & CDQ', path: '/cdq' },
              { label: 'Hub Municipal', path: '/hubmunicipal' },
              { label: 'Galerie', path: '/galerie' },
            ].map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <div className="footer-col-title">
            <span className="footer-col-dot" />
            Je m'informe
          </div>

          <p className="footer-newsletter-desc">
            Recevez les actualités et informations officielles de la Mairie du 2ème Arrondissement.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="footer-input-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
              />
              <button type="submit">S'abonner</button>
            </div>

            <div className="footer-checkbox-wrap">
              <input
                type="checkbox"
                id="cgu"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="cgu">
                J'accepte de recevoir les communications de la Mairie et confirme avoir pris connaissance de la politique de confidentialité.
              </label>
            </div>
          </form>
        </div>

      </div>

     
    </footer>
  );
};

export default Footer;