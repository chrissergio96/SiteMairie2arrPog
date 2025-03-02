import React from 'react';
import Navbar from '../Componentgalerie/Navbar/Navbar';
import HeaderGalerie from '../Componentgalerie/HeaderGalerie/HeaderGalerie';
import Text from '../Componentgalerie/Texte/Text';
import Bouton from '../Componentgalerie/Bouton/Bouton';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Componentgalerie/Footerbas/Footerbas';



function Galerie() {
    return (
      <div>
      <Navbar/>
      <HeaderGalerie/>
      <Text/>
      <Bouton/>
      <BackButtonUrb/>
      < Contact/>
      < Footer/>
      < Footerbas/>
      
      
      </div>
      
    );
  }
  
  export default Galerie;
  