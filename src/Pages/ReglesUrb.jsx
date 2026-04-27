import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TitreRegleUrb from '../ComponentsReglesUrb/TitreRegleUrb/TitreRegleUrb';
import ZoneUrb from '../ComponentsReglesUrb/ZoneUrb/ZoneUrb';
import Servitude from '../ComponentsReglesUrb/Servitude/Servitude';
import ButtonUrb from '../ComponentsReglesUrb/ButtonUrb/ButtonUrb'
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function ReglesUrb() {
    return (
      <div>
       <Navbar/>  
       <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
       <TitreRegleUrb/>
       <ZoneUrb/>
       <Servitude/>
       <ButtonUrb/>
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
  
  export default ReglesUrb;
  