import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Agendaheader from '../Agengda1/Agendaheader/Agendaheader';
import Agendaheader2 from '../Agengda1/Agendaheader.2/Agendaheader2';
import Textagenda from '../Agengda1/Textagenda/Textagenda';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function  Agengda1() {
  return (
    <div>
     <Navbar/> 
     <Agendaheader2/>
     <Textagenda/>
     <Agendaheader/>
     <Contact/>
     <Footer />
     <Footerbas />
     
    </div>
    
  );
}

export default   Agengda1;
