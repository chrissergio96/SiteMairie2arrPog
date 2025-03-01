import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AutorisationsUrb from '../ComponentsAutorisationsUrb/AutorisationsUrb/AutorisationsUrb';
import TypeAutorisations from '../ComponentsAutorisationsUrb/TypeAutorisations/TypeAutorisations';
import Procedureasuivre from '../ComponentsAutorisationsUrb/Proceduresasuivre/Procedureasuivre';
import ReglesRegulation from '../ComponentsAutorisationsUrb/ReglesRegulation/ReglesRegulation';
import ConsultationDossier from '../ComponentsAutorisationsUrb/ConsultationDossier/ConsultationDossier';
import FormulaireTelecharger from '../ComponentsAutorisationsUrb/FormulaireTelecharger/FormulaireTelecharger';
import ButtonAutoU from '../ComponentsAutorisationsUrb/ButtonAutoU/ButtonAutoU';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';



function AutorisationsUrbanisme() {
    return (
      <div>
       <Navbar/>  
       <AutorisationsUrb/>
       <TypeAutorisations/>
       <Procedureasuivre/>
       <ReglesRegulation/>
       <ConsultationDossier/>
       <FormulaireTelecharger/>
       <ButtonAutoU/>
       <Footer/>
       <Footerbas/>

      </div>
      
    );
  }
  
  export default AutorisationsUrbanisme;
  