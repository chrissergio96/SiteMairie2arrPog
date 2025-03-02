import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Dossierheadercdq from '../Dossiercdq/Dossiercdq1/Dossierheadercdq';
import Cartescdq2 from '../Dossiercdq/Cartescdq2/Cartescdq2';
import Textephotos0 from '../Galerietecnic/Textephotos/Textephotos0';
import Voirplus from '../Galerietecnic/Voirplus/Voirplus';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';


function Dossiercdq1() {
  return (
    <div>
      <Navbar/>
      <Dossierheadercdq/>
      <Textephotos0/>
      <Cartescdq2 />
      < Voirplus />
      < Boutonretour2/>
      <Contact/>
      <Footer/>
      <Footerbas/>
      
    </div>
  );
}

export default Dossiercdq1;
