
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headeraide from '../Aidesocials/Headeraide';
import Cartesaidesocial from '../Aidesocials/Cartesaidesocial';
import Grandbouton from '../Aidesocials/Grandbouton';
import Contact from '../Components/Contact/Contact';
import RetourButtonprecedaide from '../Aidesocials/RetourButtonprecedaide';
import RetourButtonaide from '../Aidesocials/RetourButtonaideso';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Aidesocials() {
  return (
    <div>
    <Navbar/>
    <Headeraide/>
    <Cartesaidesocial/>
    <Grandbouton/>
    <Contact/>
    <RetourButtonprecedaide/>
    <RetourButtonaide/>
    <Footer/>
    <Footerbas/>
    </div>
  );
}

export default Aidesocials;
