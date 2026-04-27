import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headergaleri2 from '../Mariagegalerie/Headergaleriemariage/Headergaleri2'
import Cartephoto2024 from '../Mariagegalerie/Cartesphoto2/Cartephoto2024';
import Textephoto2 from '../Mariagegalerie/Textephoto2/Textephoto2';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Voirplus from '../Galerietecnic/Voirplus/Voirplus';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Galeriemariage() {
  return (
    <div>
     <Navbar />
      <Headergaleri2/>
      <div className="page-avec-pub">

        {/* CONTENU */}
        <div className="page-contenu">
      <Textephoto2/>
      <Cartephoto2024 />
      <Voirplus />
      <Boutonretour2/>
      <Contact />
       </div>
        
                {/* SIDEBAR DROITE */}
                <div className="sidebar-right">
        
                  <QuickActions />
                  <Publicites />
        
                </div>
      </div>
      <Footer/>
      <Footerbas />
      
      
    </div>
  );
}

export default Galeriemariage;
