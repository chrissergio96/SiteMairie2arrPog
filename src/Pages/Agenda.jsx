import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Agendaheader from '../Agengda1/Agendaheader/Agendaheader';
import Agendaheader2 from '../Agengda1/Agendaheader.2/Agendaheader2';
import Textagenda from '../Agengda1/Textagenda/Textagenda';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function  Agengda1() {
  return (
    <div>
     <Navbar/> 
     <Agendaheader2/>
     <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu">
     <Textagenda/>
     <Agendaheader/>
     <BackButtonUrb/>
     <Contact/>
      </div>
        {/* SIDEBAR DROITE */}
        <div className="sidebar-right">

          <QuickActions />
          <Publicites />
          </div>
      </div>
     <Footer />
     <Footerbas />
     
    </div>
    
  );
}

export default   Agengda1;
