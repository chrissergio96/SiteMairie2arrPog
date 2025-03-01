import React from 'react';
import './Voirplus.css'; // Importe le CSS

const Voirplus = () => {
  return (
    <div className='mereVoirplus'>
      <div className='containerVoirplus'>
        <div className='barresVoirplus'>
          <div className='ligneVoirplus'></div>
          <div className='select-container'>
            <span className='select-iconVoirplus'>▼ Voir plus</span>
          </div>
          <div className='ligneVoirplus'></div>
        </div>
      </div>
    </div>
  );
};

export default Voirplus;
