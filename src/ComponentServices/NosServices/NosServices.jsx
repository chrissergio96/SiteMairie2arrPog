import React from 'react';
import { GiJusticeStar, GiCityCar, GiHealthNormal, GiBroom } from 'react-icons/gi'; // Icons for services
import { FaProjectDiagram } from 'react-icons/fa'; // Icon for infrastructure
import './NosServices.css'; // Import the CSS file
import {Link} from 'react-router-dom';

const NosServices = () => {
  return (
    <div className="nos-services-container">
      {/* Introductory text */}
      <h1>Nos Services</h1>
      <p>
        La Mairie du 2e Arrondissement de Port-Gentil vous propose plusieurs services essentiels pour améliorer votre quotidien et répondre à vos besoins administratifs. Voici un aperçu des principaux services offerts :
      </p>

      {/* List of services */}
      <div className="nos-services-list">
        <div className="service-item">
         <Link to='/etatcivil'> <GiJusticeStar className="service-icon" />
          <h2>État civil</h2>
          <p>
            Délivrance d'actes de naissance, de mariage, de décès et transcription de documents d'état civil.
          </p>
          </Link>
        </div>

        <div className="service-item">
          <Link to='/urbanisme'>
          <GiCityCar className="service-icon" />
          <h2>Urbanisme</h2>
          <p>
            Gestion des demandes de permis de construire, suivi des chantiers et régulation des travaux d'infrastructure.
          </p>
          </Link>
        </div>

        <div className="service-item">
          <Link to='/servicesocial'>
          <GiHealthNormal className="service-icon" />
          <h2>Services sociaux</h2>
          <p>
            Assistance sociale pour les familles et les personnes en situation de vulnérabilité, ainsi que des programmes de soutien.
          </p>
          </Link>
        </div>

        <div className="service-item">
          <Link to='/technique'>
          <GiBroom className="service-icon" />
          <h2>Propreté et assainissement</h2>
          <p>
            Gestion des déchets, assainissement des espaces publics et entretien de l’environnement urbain.
          </p>
          </Link>
        </div>

        <div className="service-item">
          <FaProjectDiagram className="service-icon" />
          <h2>Transports et infrastructures</h2>
          <p>
            Développement et entretien des infrastructures routières, transports publics et services connexes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NosServices;
