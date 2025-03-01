import React from 'react';
import './Headertech.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche

const Headertech = () => {
    return (
        <div className='mairie1tec'>
            
            <div className="boutton-containertec">
                <div className='buttec'>
             <button className="bouttontec">ACCUEIL<ArrowForwardIcon className="arrow-icon" />SERVICE TECHNIQUE</button>
             <h1>TECHNIQUE</h1> 
            </div>
            </div>
        </div>
    );
};

export default Headertech;
