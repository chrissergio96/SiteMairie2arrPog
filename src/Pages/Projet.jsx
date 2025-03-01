import React from 'react';
import Projets from '../ComponentProjets/Projets/Projets';
import Navbar from '../Components/Navbar/Navbar';
import BackButtonUrb from '../ComponentProjets/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas'

function Projet() {
    return (
      <div>
        <Navbar/>
        <Projets/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Projet;
  