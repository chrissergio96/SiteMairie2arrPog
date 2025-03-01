import React from 'react';
import './TitreTravauxUrb.css';
import travauxassainissementImage from '../../Images/travaux-assainissement.jpg'; // Assurez-vous que l'image est dans le bon dossier
import hjImage from '../../Images/hj.jpg';
import canivauImage from '../../Images/canivau.jpg';
import elecImage from '../../Images/elec.jpg'

const TitreTravauxUrb = () => {
    return (
        <div className='travauxtitre'>
        <h2>Travaux</h2>
        <div className='travauxpar'>
            <p>
            Bienvenue dans la rubrique Travaux de la Mairie du 2ᵉ Arrondissement de Port-Gentil. Cette section est dédiée à l'information et au suivi des différents travaux d'infrastructure entrepris dans l'Arrondissement. Qu'il s'agisse de la construction de nouvelles infrastructures, de la réfection de routes, ou de l'aménagement des espaces publics, vous trouverez ici les détails sur les projets en cours et à venir. 
            Nous mettons un point d'honneur à assurer que chaque initiative vise à améliorer le cadre de vie de nos citoyens, tout en respectant les normes d'urbanisme et les objectifs de développement durable.
            </p>
        </div>
        <div className='containertrurb'>
        <div className='barrestrurb'>
            <div className='trait1trurb'></div>
            <div className='trait2trurb'></div>
            </div>
            <div className='titrestrurb'>
                <h1>TOUS LES TRAVAUX</h1>
            </div>
            <div className='lignes55trurb'>
            </div>
            </div>
            <div className='meretrurbphoto'>

            <div className='trurbphoto'>

            <img src={hjImage} alt="hj"/>
            <strong>
            <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid0NxKHwSiKgbVFdAjUXzFL3sEHXMrAgDMiwAB3uW63P6fee2DQ5v9mAkg8Ma7tmrC4l">[VISITE DE TERRAIN]:Travaux de reffectionnement de l'ecole Henri Clement</a>
            </strong>
            </div>

            <div className='trurbphoto'>

            <img src={canivauImage} alt="canivau" />

            <strong>
            <a href="https://www.facebook.com/photo?fbid=542188971651297&set=pcb.542189051651289">[TRAVAUX PUBLICS]</a>
            </strong>  
            </div>

            <div className='trurbphoto'>

            <img src={elecImage} alt="elec" />
            <strong>
            <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid02Hy8JoZGwvsZyVsg1XHgHiSRaB6ULdsTqD8cLagjoVfSX67bXqZQzjrMQTeEcR1CNl">
            [VISITE DE TERRAIN : SECURITE ELECTRIQUE AU 2E ARRONDISSEMENT]</a>
            </strong>
            </div>

            <div className='trurbphoto'>

            <img src={travauxassainissementImage} alt="travauxassainissement" />
            <strong>
            <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid0JUiw1hi2x6Ppji7DXFvPNkAqWx9G2hK76otboWCNjNtrBPURtVntMRtKRPaow9LRl">[TRAVAUX D’ASSAINISSEMENT] </a>
            </strong>
            </div>
            <button><a href="https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid0JUiw1hi2x6Ppji7DXFvPNkAqWx9G2hK76otboWCNjNtrBPURtVntMRtKRPaow9LRl"> Voir plus</a></button>
            </div>
            
              
        </div>
  );
};

export default TitreTravauxUrb;


