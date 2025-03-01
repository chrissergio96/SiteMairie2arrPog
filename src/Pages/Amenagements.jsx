import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Amenagementstitre from '../ComponentsAmenagements/Amenagementstitre/Amenagementstitre';
import ActualitesAme from '../ComponentsAmenagements/ActualitesAme/ActualitesAme';
import TousAme from '../ComponentsAmenagements/TousAme/TousAme';
import ButtonAme from '../ComponentsAmenagements/ButtonAme/ButtonAme';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Amenagements() {
    return (
      <div>
       <Navbar/>  
       <Amenagementstitre/>
       <ActualitesAme/>
       <TousAme/>
       <ButtonAme/>
       <Contact/>
       <Footer/>
       <Footerbas/>
      </div>
      
    );
  }
  
  export default Amenagements;
  