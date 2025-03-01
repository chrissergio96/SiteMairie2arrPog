import React from 'react';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Headergalerie from '../Galerietecnic/Headergalerie/Headergalerie';
import Cartephotos from '../Galerietecnic/Cartephotos/Cartephotos';
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Footerbas from '../Components/Footerbas/Footerbas'
import Textephotos0 from '../Galerietecnic/Textephotos/Textephotos0.js';
import Voirplus from '../Galerietecnic/Voirplus/Voirplus.js';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2.js';

function Service() {
    return (
      <div>
          <Navbar/>
         <Headergalerie/>
         <Textephotos0/>
         <Cartephotos/>
         <Voirplus/>
         <Boutonretour2/>
         <Contact/>
         <Footer/>
         <Footerbas/>
         

         

         
     
      </div>
      
    );
  }
  
  export default Service;