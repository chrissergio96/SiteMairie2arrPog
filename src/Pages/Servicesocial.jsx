
import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headersocial from '../Servicesocial/Headersocial';
import Actualitéscial from '../Servicesocial/Actualitésocial';
import Aidesocial from '../Servicesocial/Aidesocial';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contact from '../Components/Contact/Contact';

function Servicesocial() {
  return (
    <div>
     <Navbar/>
     <Headersocial/>
     <Actualitéscial/>
     <Aidesocial/>
     <BackButtonUrb/>
     <Contact/>
     <Footer/>
     <Footerbas/>
    </div>
  );
}

export default Servicesocial;
