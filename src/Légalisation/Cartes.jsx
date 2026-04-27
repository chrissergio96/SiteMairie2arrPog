import { useState } from 'react';
import React from 'react';
import './Cartes.css';

// Images
import Attestationpec from '../Images/Attestation-prise-charge_page-0001.jpg';
import Autorisationp from '../Images/Legalisation/Autorisation Parentale_page-0001.jpg';
import Certificatc from '../Images/Legalisation/Certificat de celibat_page-0001.jpg';
import Certificathe from '../Images/Legalisation/Certificat hebergement_page-0001.jpg';
import Certificatee from '../Images/Legalisation/Certificat entretien et education_page-0001.jpg';
import Certificatv from '../Images/Legalisation/CERTIFICAT DE de vie.pdf.jpg';
import Attestationhp from '../Images/Legalisation/Attestation-sur -honneur-pension_page-0001.jpg';
import Certificatresi from '../Images/Legalisation/CERTIFICAT-RESIDENCE (2)_page-0001.jpg';
import Attestationnond from '../Images/Legalisation/Attestation-non-dissolution_page-0001.jpg';
import Certificatcout from '../Images/Legalisation/CERTIFICAT DE COUTUME.pdf.jpg';
import Certificatvv from '../Images/Legalisation/CERTIFICAT-VENTE-VEHICUL.jpg';
import Certificatnr from '../Images/Legalisation/CERTIFICAT-NON-MARIAGE (1).pdf.jpg';
import LettreI from '../Images/Legalisation/lettreinv.jpg';
import AttestationL from '../Images/Legalisation/Attestation-Logementt (1).pdf.jpg';
import Procuration from '../Images/Legalisation/Procuration (1) (1).pdf.jpg';
import Autorisationmaritale from '../Images/Legalisation/Autorisation maritale (1).jpg';

function Cartes() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (img) => setHoveredImage(img);
  const handleMouseLeave = () => setHoveredImage(null);

  const cards = [
    {
      title: "Attestation de prise en charge",
      img: Attestationpec,
      items: [
        "Pièce d'identité du garant",
        "Pièce du bénéficiaire",
        "Attestation de travail ou fiche de poste",
        "Timbre 5000F"
      ]
    },
    {
      title: "Autorisation parentale",
      img: Autorisationp,
      items: [
        "Pièce d'identité du parent",
        "Acte de naissance de l'enfant",
        "Timbre 5000F"
      ]
    },
    {
      title: "Certificat de célibat",
      img: Certificatc,
      items: [
        "Timbre 5000F"
      ]
    }
  ];

  return (
    <div className="cards-wrapper">

      {/* GRILLE CARDS */}
      <div className="cards-grid">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <img
              src={c.img}
              alt={c.title}
              onMouseEnter={() => handleMouseEnter(c.img)}
              onMouseLeave={handleMouseLeave}
            />

            <h3>{c.title}</h3>

            <ul>
              {c.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* PREVIEW IMAGE */}
      {hoveredImage && (
        <div className="image-preview">
          <img src={hoveredImage} alt="preview" />
        </div>
      )}

    </div>
  );
}

export default Cartes;