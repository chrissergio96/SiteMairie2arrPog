import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contacte from '../ComponentContacte/Contacte/Contacte';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Numerosutiles() {
    return (
      <div>
        <Navbar/>
        <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
        <Contacte/>
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
  
  export default Numerosutiles;
  