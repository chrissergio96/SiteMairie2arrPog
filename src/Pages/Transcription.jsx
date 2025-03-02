import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headertrans from '../Transcription/Headertrans';
import Cartestrans from '../Transcription/Cartestrans';
import MediaCard1 from '../Transcription/infotrans'; // Importez correctement le composant MediaCard1

import Contact from '../Components/Contact/Contact';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Transcription() {
  return (
    <div>
      <Navbar/>  
      <Headertrans /> 
      <Cartestrans /> 
      <MediaCard1 /> {/* Utilisation correcte du composant */}
      < Boutonretour2/>
      <Contact/> 
      <Footer/> 
      <Footerbas/> 
    </div>
  );
}

export default Transcription;
