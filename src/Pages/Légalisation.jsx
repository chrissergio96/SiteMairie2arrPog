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


function Légalisation() {
  return (
    <>
      <Navbar />  
      <Headerleg/>
      <Titreleg/>
      <Cartes/>
      <Info/>
      <BackButtonUrb/>
      <Contact/>
     <Footer/>
     <Footerbas/>
    </>
  );
}

export default Légalisation;