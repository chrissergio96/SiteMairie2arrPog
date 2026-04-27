import React from 'react';
import Navbar from '../Componentgalerie/Navbar/Navbar';
import HeaderGalerie from '../Componentgalerie/HeaderGalerie/HeaderGalerie';
import Text from '../Componentgalerie/Texte/Text';
import Bouton from '../Componentgalerie/Bouton/Bouton';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Componentgalerie/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';



function Galerie() {
    return (
      <div>
      <Navbar/>
      <HeaderGalerie/>
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
      <Text/>
      <Bouton/>
      <BackButtonUrb/>
      < Contact/>
      </div>
        {/* SIDEBAR DROITE */}
        <div className="sidebar-right">

          <QuickActions />
          <Publicites />
          </div>
      </div>
      < Footer/>
      < Footerbas/>
      
      
      </div>
      
    );
  }
  
  export default Galerie;
  