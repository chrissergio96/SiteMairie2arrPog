import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components-tech/Header/Headertech';
import Text from '../Components-tech/Text/Text';
import Profil from '../Components-tech/Profil/Profil';
import Traveaux from '../Components-tech/Traveaux/traveaux';
import Demandetravaux from '../Components-tech/Demandetravaux/Demandetravaux'
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Technique() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Text/>
      <Profil/>
      <Traveaux/>
      <Demandetravaux/>
      <Contact/>
      <Footer/>
      <Footerbas/>
    </div>
  );
}

export default Technique;