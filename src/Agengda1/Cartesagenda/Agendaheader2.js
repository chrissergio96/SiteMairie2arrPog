import React from 'react';
import './Headergalerie.css'; // Importe le CSS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche


function Headergalerie() {
  return (
    <div className="header-containerga">
        <div className="boutton-containerga1">
                <div className='butga1'>
                  
             <button className="bouttonga1">ACCUEIL<ArrowForwardIcon className="1arrow-icon" />GALERIE</button>
             <h1>Services Techniques</h1> 
            </div>
            </div>
    </div>
  );
}

export default Headergalerie;

