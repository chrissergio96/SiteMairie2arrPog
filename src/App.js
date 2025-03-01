import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ComponentsUrbanisme/ScrollToTop/ScrollToTop.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Accueil from './Pages/Accueil.jsx';
import Etatcivil from './Pages/Etatcivil'; // Garder cette ligne
import Urbanisme from './Pages/Urbanisme.jsx';
import Amenagements from './Pages/Amenagements.jsx';
import ReglesUrb from './Pages/ReglesUrb.jsx';
import Transcription from './Pages/Transcription.jsx';

import Galerie from './Pages/Galerie.jsx';


import Service from './Pages/Service.jsx';

import Galeriemariage from './Pages/Galeriemariage.jsx';
import Cdqgalerie from './Cdqgalerie/Cdqheadergal/Cdqheadergal.js';
import Socialgalerie from './Pages/Socialgalerie.jsx';
import Culturegalerie from './Pages/Culturegalerie.jsx'

import Dossiercdq1 from './Pages/Dossiercdq1.jsx';
import Agenda from './Pages/Agenda.jsx'




import Légalisation from './Pages/Légalisation'; // Garder cette ligne
import AutorisationsUrbanisme from './Pages/AutorisationsUrbanisme.jsx';
import TravauxUrbanisme from './Pages/TravauxUrbanisme.jsx';
import Technique from './Pages/Technique.jsx';
import Mariage from './Pages/Mariage.jsx';

import Cdq from './Pages/Cdq.jsx';
import Apropos from './Pages/Apropos.jsx';



import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Servicesocial from './Pages/Servicesocial.jsx';
import Aidesocials from './Pages/Aidesocials.jsx';
import Projet from './Pages/Projet.jsx';
import Numerosutiles from './Pages/Numerosutiles.jsx';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />  {/* Ce composant s'assure que chaque navigation commence en haut */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etatcivil" element={<Etatcivil />} /> {/* Garder cette ligne */}
          <Route path="/legalisation" element={<Légalisation />} /> {/* Garder cette ligne */}
          <Route path="/urbanisme" element={<Urbanisme />} />
          <Route path="/amenagements" element={<Amenagements />} />
          <Route path="/reglesurb" element={<ReglesUrb />} />

          <Route path="/transcription" element={<Transcription />} />
          <Route path="/servicesocial" element={<Servicesocial/>} />
          <Route path="/aidesocials" element={<Aidesocials/>} />

          <Route path="/autorisationsurbanisme" element={<AutorisationsUrbanisme />} />
          <Route path="/travauxurbanisme" element={<TravauxUrbanisme />} />
          <Route path="/technique" element={<Technique/>} />
          <Route path="/Mariage" element={<Mariage/>} />

          <Route path="/cdq" element={<Cdq/>} /> 
          <Route path="/apropos" element={<Apropos/>} /> 
          <Route path="/projet" element={<Projet/>} /> 
          <Route path="/numerosutiles" element={<Numerosutiles/>} /> 






       

          <Route path="/Galerie" element={<Galerie/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Cdqgalerie" element={<Cdqgalerie/>} />
          <Route path="/Socialgalerie" element={<Socialgalerie/>} />
          <Route path="/Culturegalerie" element={<Culturegalerie/>} />
          <Route path="/galeriemariage" element={<Galeriemariage/>} /> 
          <Route path="/dossiercdq1" element={<Dossiercdq1/>} /> 
          <Route path="/agenda" element={<Agenda/>} /> 








           

        </Routes>
      </Router>
    </div>
  );
}

export default App;
