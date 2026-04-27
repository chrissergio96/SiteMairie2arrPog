import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Actualites from '../Components/Actualites/Actualites';
import MotMaire from '../Components/MotMaire/MotMaire';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Publicites from '../Components/Publicites/Publicites';
import '../Components/Publicites/Publicites.css';
import QuickActions from '../Components/QuickActions/QuickActions';


function Accueil() {
  return (
    <div>
      <Navbar />
      <Header />

      {/* Zone avec sidebar Publicités à droite */}

            <div className="page-avec-pub">
        {/* CONTENU */}
        <div className="page-contenu">
          <Actualites />
          <MotMaire />
          <Contact />
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

export default Accueil;
