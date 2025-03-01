import React from 'react';
import Button from 'react-bootstrap/Button';
import './Bouton.css'; // Assure-toi de renommer le fichier CSS
import { Link } from 'react-router-dom';

function Bouton() {
  return (
    <div className="updated-button-wrapper">
      <h1 className='r1'><strong> Rubriques</strong></h1>
      <div className="updated-button-container">
        <Link to='/service'>
          <Button variant="primary" size="lg" className="updated-custom-button">
            <span className="updated-circle-arrow">➔</span> <strong>Services Technique</strong>
          </Button>
        </Link>

        <Link to='/Galeriemariage'>
          <Button variant="primary" size="lg" className="updated-custom-button">
            <span className="updated-circle-arrow">➔</span> <strong>Mariages</strong>
          </Button>
        </Link>

        <Link to='/Dossiercdq1'>
        <Button variant="primary" size="lg" className="updated-custom-button">
          <span className="updated-circle-arrow">➔</span> <strong> Chefs de quartiers et Cdq</strong>
        </Button>
        </Link>
        
        <Link to='/Socialgalerie'>
        <Button variant="primary" size="lg" className="updated-custom-button">
          <span className="updated-circle-arrow">➔</span> <strong>Services Social</strong>
        </Button>
        </Link>
        <Link to='/Culturegalerie'>
        <Button variant="primary" size="lg" className="updated-custom-button">
          <span className="updated-circle-arrow">➔</span> <strong>Culture et Sport</strong>
        </Button>
        </Link>

      </div>
     
    </div>
  );
}

export default Bouton;
