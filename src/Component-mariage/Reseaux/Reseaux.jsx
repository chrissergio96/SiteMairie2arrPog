import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './Reseaux.css'
function contactez() {
  return (
    <div className='reseaux'>
      <h5 className='nos-reseaux'>Nos reseaux:</h5>
        <button type='buton' className='facebook'><h6>Facebook <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil"><FacebookIcon className='icon-facebook1' color='primary' /></a></h6>
        </button>

        <button type='button' className='whatsapp'><h6>whatsapp <a href="https://wa.me/24160371461"><WhatsAppIcon className='icon-facebook1' color='success' /></a></h6>
        </button>
        
    </div>
  );
}

export default contactez;
