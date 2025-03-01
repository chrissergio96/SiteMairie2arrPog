import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderTravauxUrb from '../ComponentsTravauxUrb/HeaderTravauxUrb/HeaderTravauxUrb';
import TitreTravauxUrb from '../ComponentsTravauxUrb/TitreTravauxUrb/TitreTravauxUrb';
import TitreEncours from '../ComponentsTravauxUrb/TitreEncours/TitreEncours';
import TitreAvenir from '../ComponentsTravauxUrb/TitreAvenir/TitreAvenir';
import Boutonturb from '../ComponentsReglesUrb/ButtonUrb/ButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function TravauxUrbanisme() {
    return (
      <div>

       <Navbar/>  
       <HeaderTravauxUrb/>
       <TitreTravauxUrb/>
       <TitreEncours/>
       <TitreAvenir/>
       <Boutonturb/>
       <Footer/>
       <Footerbas/>

      </div>
      
    );
  }
  
  export default TravauxUrbanisme;
  