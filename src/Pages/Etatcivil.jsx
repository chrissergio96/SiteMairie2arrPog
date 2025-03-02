import React from 'react';
// import './Etatcivil.css';
import Navbar from '../Components/Navbar/Navbar';
import Actualitécivil from '../Etat-civil/Actualitécivil';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas'

import Service from '../Etat-civil/service';
import Headerciv from '../Etat-civil/Headerciv';


function Etatcivil() {
  return (
    <>
      <Navbar />  
      <Headerciv />
      <Actualitécivil />
      <Service/>
      <BackButtonUrb/>
      <Contact/>
      <Footer/>
      <Footerbas/>
    </>
  );
}

export default Etatcivil;