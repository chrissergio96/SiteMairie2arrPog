// src/components/Header.js
import React from 'react';
import './Headermariage.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

 

function Header() {
  return (
    <header className='bg-mariage'
    style={{
      position: 'relative',
      height: '60vh', // Ajustez la hauteur si nécessaire
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {/* Bouton flottant rectangulaire centré */}
      <div className='flotant'
        variant="contained"
        color= '#1B3D71;'
        
      >
        <button  className='enfant-bleu'>ACCUEIL <ArrowRightAltOutlinedIcon/>MARIAGE</button>
        <h1 className='mariage'>MARIAGE</h1>
      </div>
    </header>
  );
}

export default Header;
