import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Actualitécivil from '../Etat-civil/Actualitécivil';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Service from '../Etat-civil/service';
import Headerciv from '../Etat-civil/Headerciv';
import Publicites from '../Components/Publicites/Publicites';
import '../Components/Publicites/Publicites.css';
import './Etatcivil.css'
import QuickActions from '../Components/QuickActions/QuickActions';

function Etatcivil() {
  return (
    <>
      <Navbar />
      <Headerciv />

      {/* 🔥 STRUCTURE AVEC SIDEBAR PUB */}
      <div className="page-avec-pub">

        <div className="contenu-principal">
          <Actualitécivil />
          <Service />
          <BackButtonUrb />
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
    </>
  );
}

export default Etatcivil;