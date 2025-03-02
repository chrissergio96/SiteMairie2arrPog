import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contacte from '../ComponentContacte/Contacte/Contacte';

function Numerosutiles() {
    return (
      <div>
        <Navbar/>
        <Contacte/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Numerosutiles;
  