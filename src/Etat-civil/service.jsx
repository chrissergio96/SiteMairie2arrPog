import React from 'react';
import image1 from '../Images/461868947_547372121132982_42946754266194435_n.jpg';
import image2 from '../Images/actes de Naissances  2..............jpg'; // Remplacez par le bon chemin si nécessaire
import './service.css';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="mere1ser">
      
      <div className="bloc1">
      <div className='photo'>
          <img src={image1} alt="" />
          </div>
          <div className='legalisation'>
          <Link to='/Legalisation'><button className="service-button"><p>LÉGALISATION</p></button></Link>
          </div>
      </div>

    
      <div className="bloc2">
      <div className='photo'>
          <img src={image2} alt="" />
          </div>
          <div className='transcription'>
          <Link to='/Transcription'> <button className="service-button2"><p>TRANSCRIPTION</p></button></Link>
          </div>
      </div>
    </div>
  );
}

export default Service;