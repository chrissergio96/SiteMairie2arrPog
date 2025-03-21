import React from 'react';
import './HeaderGalerie.css'; // Importe le CSS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche


function HeaderGalerie() {
  return (
    <div className="header-containergale">
        <div className="boutton-containergale">
                <div className='butgale'>
             <button className="bouttongale">ACCUEIL<ArrowForwardIcon className="arrow-icon" />GALERIE</button>
             <h1>GALERIE</h1> 
            </div>
            </div>
    </div>
  );
}

export default HeaderGalerie;
