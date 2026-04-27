import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderTravauxUrb from '../ComponentsTravauxUrb/HeaderTravauxUrb/HeaderTravauxUrb';
import TitreTravauxUrb from '../ComponentsTravauxUrb/TitreTravauxUrb/TitreTravauxUrb';
import TitreEncours from '../ComponentsTravauxUrb/TitreEncours/TitreEncours';
import TitreAvenir from '../ComponentsTravauxUrb/TitreAvenir/TitreAvenir';
import Boutonturb from '../ComponentsReglesUrb/ButtonUrb/ButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function TravauxUrbanisme() {
    return (
      <div>

       <Navbar/>  
       <HeaderTravauxUrb/>
       <div className="page-avec-pub">

        {/* CONTENU */}
        <div className="page-contenu">
       <TitreTravauxUrb/>
       <TitreEncours/>
       <TitreAvenir/>
       <Boutonturb/>
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
  
  export default TravauxUrbanisme;
  