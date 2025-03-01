import React from 'react';
import './HeaderUrb.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche

const HeaderUrb = () => {
    return (
        <div className='mairie1'>
            
            <div className="boutton-container">
                <div className='but'>
             <button  className="bouttone">ACCUEIL<ArrowForwardIcon className="arrow-icon" />URBANISME</button>
             <h1>URBANISME</h1> 
            </div>
            </div>
        </div>
    );
};

export default HeaderUrb;
