
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headeraide from '../Aidesocials/Headeraide';
import Cartesaidesocial from '../Aidesocials/Cartesaidesocial';
import Grandbouton from '../Aidesocials/Grandbouton';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';

import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Aidesocials() {
  return (
    <div>
    <Navbar/>
    <Headeraide/>
    <Cartesaidesocial/>
    <Grandbouton/>
    <BackButtonUrb/>
    <Contact/>
    <Footer/>
    <Footerbas/>
    </div>
  );
}

export default Aidesocials;
