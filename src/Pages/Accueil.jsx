import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Actualites from '../Components/Actualites/Actualites';
import MotMaire from '../Components/MotMaire/MotMaire';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas'

function Accueil() {
  return (
    <div>
     <Navbar/>  
     <Header/>
     <Actualites/>
     <MotMaire/>
     <Contact/>
     <Footer/>
     <Footerbas/>
    </div>
    
  );
}

export default Accueil;
