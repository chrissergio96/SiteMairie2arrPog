import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Socialheadergal from '../Socialgalerie/Socialheadergal/Socialheadergal';
import Footer from '../Components/Footer/Footer';
import Textephoto2 from '../Mariagegalerie/Textephoto2/Textephoto2';
import Cartesocial from '../Socialgalerie/Socialcartegal/Cartesocial';
import Contact from '../Components/Contact/Contact';
import Footerbas from '../Components/Footerbas/Footerbas';
import Voirplus from '../Galerietecnic/Voirplus/Voirplus';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';
function Socialgalerie() {
  return (
    <div>
     <Navbar/>
      <Socialheadergal/>
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
      <Textephoto2/>
      <Cartesocial/>
      <Voirplus/>
      <Boutonretour2/>
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

export default Socialgalerie;
