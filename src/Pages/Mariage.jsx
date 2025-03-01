import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headermariage from '../Component-mariage/Header-mariage/Headermariage';
import Textes from '../Component-mariage/Textes-bonasavoir/Textes';
import Texte from '../Component-mariage/Textes-pieces/Texte';
import Textetrangers from '../Component-mariage/Textes-etranger/Text-etrangers';
import Archives from '../Component-mariage/Archives/Archives';
import Reseaux from '../Component-mariage/Reseaux/Reseaux';
import Contact from '../Components/Contact/Contact';
import Footer from'../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';

function Mariage() {

  return (
    <div>
      <Navbar/>
      <Headermariage/>
      <Textes/>
      <Texte/>
      <Textetrangers/>
      <Archives/>
      <Reseaux/>
      <BackButtonUrb/>
      <Contact/>
      <Footer/>
      <Footerbas/>
    </div>
  );
}

export default Mariage;