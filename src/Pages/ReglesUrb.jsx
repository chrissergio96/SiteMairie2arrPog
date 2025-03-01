import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TitreRegleUrb from '../ComponentsReglesUrb/TitreRegleUrb/TitreRegleUrb';
import ZoneUrb from '../ComponentsReglesUrb/ZoneUrb/ZoneUrb';
import Servitude from '../ComponentsReglesUrb/Servitude/Servitude';
import ButtonUrb from '../ComponentsReglesUrb/ButtonUrb/ButtonUrb'
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function ReglesUrb() {
    return (
      <div>
       <Navbar/>  
       <TitreRegleUrb/>
       <ZoneUrb/>
       <Servitude/>
       <ButtonUrb/>
       <Footer/>
       <Footerbas/>
      </div>
      
    );
  }
  
  export default ReglesUrb;
  