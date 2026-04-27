import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headermariage from '../Component-mariage/Header-mariage/Headermariage';
import Textes from '../Component-mariage/Textes-bonasavoir/Textes';
import Texte from '../Component-mariage/Textes-pieces/Texte';
import Textetrangers from '../Component-mariage/Textes-etranger/Text-etrangers';
import Archives from '../Component-mariage/Archives/Archives';
import Reseaux from '../Component-mariage/Reseaux/Reseaux';
import Contact from '../Components/Contact/Contact';
import Footer from'../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';

function Mariage() {

  return (
    <div>
      <Navbar/>
      <Headermariage/>
      <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu"> 
      <Textes/>
      <Texte/>
      <Textetrangers/>
      <Archives/>
      <Reseaux/>
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

export default Mariage;