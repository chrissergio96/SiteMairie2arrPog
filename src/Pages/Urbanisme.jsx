import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderUrb from '../ComponentsUrbanisme/HeaderUrb/HeaderUrb';
import AproposUrb from '../ComponentsUrbanisme/AproposUrb/AproposUrb';
import RubriqueUrb from '../ComponentsUrbanisme/RubriqueUrb/RubriqueUrb'
import CarteUrb from '../ComponentsUrbanisme/CarteUrb/CarteUrb';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contact from '../Components/Contact/Contact';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Accueil() {
    return (
      <div>
       <Navbar/>  
       <HeaderUrb/>
       <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
       <AproposUrb/>
       <RubriqueUrb/>
       <CarteUrb/>
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
  
  export default Accueil;
  