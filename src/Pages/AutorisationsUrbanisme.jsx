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
import QuickActions from '../Components/QuickActions/QuickActions';
import Publicites from '../Components/Publicites/Publicites';



function AutorisationsUrbanisme() {
    return (
      <div>
       <Navbar/>  
       <div className="page-avec-pub">

        {/* CONTENU */}
        <div className="page-contenu">
       <AutorisationsUrb/>
       <TypeAutorisations/>
       <Procedureasuivre/>
       <ReglesRegulation/>
       <ConsultationDossier/>
       <FormulaireTelecharger/>
       <ButtonAutoU/>
        </div>
        {/* SIDEBAR DROITE */}
        <div className="sidebar-right">

          <QuickActions />
          <Publicites />
          </div>
      </div>
       <Footer/>
       <Footerbas/>

      </div>
      
    );
  }
  
  export default AutorisationsUrbanisme;
  