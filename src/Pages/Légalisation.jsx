import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Headerleg from '../Légalisation/Headerleg';
import Cartes from '../Légalisation/Cartes';
import Info from '../Légalisation/info';
import Contact from '.././Components/Contact/Contact';
import Footer from '.././Components/Footer/Footer';
import Footerbas from '.././Components/Footerbas/Footerbas';
import RetourButtonleg from '../Légalisation/RetourButtonleg';
import RetourButtonpreced from '../Légalisation/RetourButtonpreced';

function Légalisation() {
  return (
    <>
      <Navbar />  
      <Headerleg/>
      <Cartes/>
      <Info/>
      <Contact/>
      <RetourButtonleg/>
      <RetourButtonpreced/>
     <Footer/>
     <Footerbas/>
    </>
  );
}

export default Légalisation;