import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

// ✅ Importe les images ici en haut
import ImgAgenda from '../../Images/Agenda.png';
import ImgNumeros from '../../Images/NumeroUtile.jpeg';
import ImgGalerie from '../../Images/Galerie2.jpeg';
import ImgMariage from '../../Images/MARIAGE.jpg';
import ImgCDQ from '../../Images/CDQ.jpg';

const services = [
  {
    num: '01',
    name: 'Agenda',
    path: '/agenda',
    bgColor: '#1a3a6b',
    image: ImgAgenda, // ✅ utilise la variable importée
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Numéros utiles',
    path: '/numerosutiles',
    bgColor: '#8b1c2e',
    image: ImgNumeros,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Galerie',
    path: '/galerie',
    bgColor: '#0d4a3a',
    image: ImgGalerie,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Mariage',
    path: '/mariage',
    bgColor: '#4a3a0d',
    image: ImgMariage,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Chefs de Quartiers & CDQ',
    path: '/cdq',
    bgColor: '#2a0d4a',
    image: ImgCDQ,
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section className="consult-section">
      <div className="consult-inner">
        <div className="consult-header">
          <div className="consult-flag">
            <span></span>
            <span></span>
          </div>
          <div>
            <div className="consult-sup">Navigation rapide</div>
            <h2 className="consult-title">Consultez aussi</h2>
          </div>
          <div className="consult-line" />
        </div>

        <div className="consult-grid">
          {services.map((s) => (
            <Link to={s.path} key={s.num} className="consult-card">
              <div
                className="consult-card-bg"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: s.bgColor,
                }}
              />
              <div className="consult-card-overlay" />
              <span className="consult-card-num">{s.num}</span>
              <div className="consult-card-body">
                <div className="consult-card-icon">{s.icon}</div>
                <div className="consult-card-name">{s.name}</div>
                <div className="consult-card-arrow">Voir →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;