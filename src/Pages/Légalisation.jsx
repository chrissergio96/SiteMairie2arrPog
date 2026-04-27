import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Headerleg from '../Légalisation/Headerleg';
import Cartes from '../Légalisation/Cartes';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Info from '../Légalisation/info';
import Contact from '.././Components/Contact/Contact';
import Footer from '.././Components/Footer/Footer';
import Footerbas from '.././Components/Footerbas/Footerbas';
import Titreleg from '../Légalisation/Titrelegal';
import Publicites from '../Components/Publicites/Publicites';
import QuickActions from '../Components/QuickActions/QuickActions';

import '../Components/Publicites/Publicites.css';

function Légalisation() {
  return (
    <>
      <Navbar />
      <Headerleg />
      

      <div className="page-avec-pub">

        {/* CONTENU */}
        <div className="page-contenu">
          <Titreleg />
          <Cartes />
          <Info />
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

export default Légalisation;