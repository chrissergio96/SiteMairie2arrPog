
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headersocial from '../Servicesocial/Headersocial';
import Actualitéscial from '../Servicesocial/Actualitésocial';
import Aidesocial from '../Servicesocial/Aidesocial';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contact from '../Components/Contact/Contact';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Servicesocial() {
  return (
    <div>
     <Navbar/>
     <Headersocial/>
     <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
     <Actualitéscial/>
     <Aidesocial/>
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

export default Servicesocial;
