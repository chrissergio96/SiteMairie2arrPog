import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headertrans from '../Transcription/Headertrans';
import Cartestrans from '../Transcription/Cartestrans';
import MediaCard1 from '../Transcription/infotrans'; // Importez correctement le composant MediaCard1

import Contact from '../Components/Contact/Contact';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Publicites from '../Components/Publicites/Publicites';
import QuickActions from '../Components/QuickActions/QuickActions';

function Transcription() {
  return (
    <div>
      <Navbar/>  
      <Headertrans /> 
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
      <Cartestrans /> 
      <MediaCard1 /> {/* Utilisation correcte du composant */}
      <BackButtonUrb/>
      <Contact/> 
      </div>
        
          {/* SIDEBAR DROITE */}
         <div className="sidebar-right">
        
          <QuickActions />
            <Publicites />
        
          </div>
      </div>
      <Footer/> 
      <Footerbas/> 
    </div>
  );
}

export default Transcription;
