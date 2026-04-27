import React from 'react';
import Delegue from '../Delegue/Delegue';
import Navbar from '../Components/Navbar/Navbar';import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';
;


function Maire() {

  return (
    <div>
      <Navbar/>
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
     <Delegue/>
      </div>
        
                {/* SIDEBAR DROITE */}
                <div className="sidebar-right">
        
                  <QuickActions />
                  <Publicites />
        
                </div>
      </div>
    </div>
  );
}

export default Maire;