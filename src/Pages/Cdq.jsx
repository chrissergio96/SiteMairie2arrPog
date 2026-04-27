import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headercdq from '../Component-cdq/Header-cdq/Headercdq';
import Comitecdq from '../Component-cdq/Comite-cdq/Comitecdq'
import Projetcdq from '../Component-cdq/Projetcdq/Projetcdq';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Refectionement from '../Component-cdq/Refectionement-cdq/Refectionement';
import Contact from '../Components/Contact/Contact';
import Footerbas from '../Components/Footerbas/Footerbas'
import Footer from '../Components/Footer/Footer';
import Sensib from '../Component-cdq/Sensib/Sensib';
import Textbas from '../Component-cdq/Text-bas-cdq/Textbas-cdq';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Cdq() {
  return (
    <div>
     <Navbar/> 
     <Headercdq/> 
     <div className="page-avec-pub">

        {/* CONTENU */}
        <div className="page-contenu">
     <Comitecdq/>
     <Projetcdq/>
     <Refectionement/>
     <Sensib/>
     <Textbas/>
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

export default Cdq;
