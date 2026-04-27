import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components-tech/Header/Headertech';
import Text from '../Components-tech/Text/Text';
import Profil from '../Components-tech/Profil/Profil';
import Traveaux from '../Components-tech/Traveaux/traveaux';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Technique() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
      <Text/>
      <Profil/>
      <Traveaux/>
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

export default Technique;