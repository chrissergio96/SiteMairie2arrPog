import React from 'react';
import './service.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import image1 from '../Images/461868947_547372121132982_42946754266194435_n.jpg';
import image2 from '../Images/actes de Naissances  2..............jpg';

const services = [
  {
    title: 'Légalisation',
    desc: 'Authentification de documents officiels',
    image: image1,
    path: '/Legalisation',
  },
  {
    title: 'Transcription',
    desc: 'Reconnaissance des actes établis à l’étranger',
    image: image2,
    path: '/Transcription',
  },
];

function Service() {
  return (
    <section className="service-section">

      <div className="service-header">
        <span className="service-badge">Services</span>
        <h2>Nos services d’état civil</h2>
      </div>

      <div className="service-grid">
        {services.map((s, index) => (
          <Link to={s.path} key={index} className="service-card">

            <img src={s.image} alt={s.title} />

            <div className="service-overlay"></div>

            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-link">
                Accéder <ArrowForwardIcon />
              </span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}

export default Service;