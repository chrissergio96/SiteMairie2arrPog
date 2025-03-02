import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeaderUrb from '../ComponentsUrbanisme/HeaderUrb/HeaderUrb';
import AproposUrb from '../ComponentsUrbanisme/AproposUrb/AproposUrb';
import RubriqueUrb from '../ComponentsUrbanisme/RubriqueUrb/RubriqueUrb'
import CarteUrb from '../ComponentsUrbanisme/CarteUrb/CarteUrb';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Contact from '../Components/Contact/Contact';

function Accueil() {
    return (
      <div>
       <Navbar/>  
       <HeaderUrb/>
       <AproposUrb/>
       <RubriqueUrb/>
       <CarteUrb/>
       <BackButtonUrb/>
       <Contact/>
       <Footer/>
       <Footerbas/>
      </div>
      
    );
  }
  
  export default Accueil;
  