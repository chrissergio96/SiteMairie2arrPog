import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Headerleg from '../Légalisation/Headerleg';
import Cartes from '../Légalisation/Cartes';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';
import Info from '../Légalisation/info';
import Contact from '.././Components/Contact/Contact';
import Footer from '.././Components/Footer/Footer';
import Footerbas from '.././Components/Footerbas/Footerbas';


function Légalisation() {
  return (
    <>
      <Navbar />  
      <Headerleg/>
      <Cartes/>
      <Info/>
      <Boutonretour2/>
      <Contact/>
     <Footer/>
     <Footerbas/>
    </>
  );
}

export default Légalisation;