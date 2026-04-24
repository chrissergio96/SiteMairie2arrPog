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

function Accueil() {
  return (
    <div>
      <Navbar />
      <Header />

      {/* Zone avec sidebar Publicités à droite */}
      <div className="accueil-avec-pub">
        <div className="accueil-contenu">
          <Actualites />
          <MotMaire />
          <Contact />
        </div>

        <Publicites />
      </div>

      <Footer />
      <Footerbas />
    </div>
  );
}

export default Accueil;
