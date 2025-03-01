import React from 'react';
import './ZoneUrb.css';
import mar from '../../Images/Capture planif urb.PNG'

const ZoneUrb = () => {
    return (
        <div className='merees'>
        <div className='containeres'>
        <div className='barres22'>
            <div className='traits11'></div>
            <div className='traits22'></div>
            </div>
            <div className='titres44'>
                <h1>ZONES D'URBANISME</h1>
            </div>
            <div className='lignes66'>
            </div>
            </div>
            <div className='texte33'>
                <p>
            La ville est divisée en plusieurs zones avec des usages spécifiques, et chaque zone a des règles d'urbanisme propres. 
            </p>
            <p> <strong>Zones Résidentielles : </strong>  
             Règles concernant la construction de maisons ou d'immeubles résidentiels.
            </p>
            <p> <strong> Zones Commerciales : </strong>  
            Réglementation pour les commerces et bureaux.
            </p>
            <p> <strong> Zones Industrielles : </strong>  
             Restrictions sur la taille des bâtiments, les distances entre les infrastructures et les zones     résidentielles, ou les critères environnementaux à respecter.
            </p>
           </div>
           <div className='planif'>
           <img src={mar} alt="Carte 3" className="carte-image" />
           </div>
           <div className='hauteur'>
           <div className='barres222'>
            <div className='traits111'></div>
            <div className='traits222'></div>
            </div>
            <div className='titres444'>
                <h1>HAUTEUR ET DISTANCE DES CONSTRUCTIONS</h1>
            </div>
            
           </div>
           <div className='texteconst'>
                <p>
                CHAQUE CONSTRUCTION DANS LA COMMUNE RESPECETER LES REGLES STRICTES EN TERME DE HAUTEUR ET DE DISTANCE PAR RAPPORT AUX AUTRES BATIMENTS, AUX ROUTES OU AUX ESPACES PUBLICS.
                </p>
            </div>
            <div className='textecontainer'>
            <p> <strong>Hauteur des batiments: </strong>  
            Les batiments situé près du bord de mer ne peuvent pas dépassés 10mètres pour préserver l'horizons et la vue.
            </p>
            <p> <strong>Distances Minimales : </strong>  
            Un espaces de 5 mètres minimal doit etre retenue entre une maison et la route principale.
            </p>
            </div>
     </div>
    
    );
};

export default ZoneUrb;
