import React from 'react';
import './Contacte.css';

const Contacte = () => {
  
  return (
    <div className='mere-contacte'>
        <h1> Numéros utiles </h1>
    <div className="contacte-container">

      <div className='parentpc'>
      <div className='pompiers'>
      <h2>Numéros d'urgence des Sapeurs-Pompiers</h2>
      <p>Voici les numéros d'urgence à contacter en cas de besoin :</p>
      <p> <strong>Tel: 011.56.27.75</strong> </p> 
      <p> <strong>Tel: 077.63.93.63</strong> </p>       
      <p> <strong>Tel: 062.93.98.48</strong> </p>    
      <p><strong>Centre d'appels: 18</strong> <br/>(numéro vert,  partir d'un fixe exclusivement, dans la commune de Port-Gentil).</p>  
      </div>

      <div className='cosa'>
      <div className='commissariat'>
        <h2>Commissariat Central</h2>
        <span><strong> Numéro d'urgence: 077256372 </strong></span>
      </div>

      </div>

      <div className='samu'>
        <h2>Samu Social</h2>
        <span><strong>Numéro d'urgence: 1488 </strong> </span>
      </div>
  </div>
    </div>
    
    </div>
  );
};

export default Contacte;
