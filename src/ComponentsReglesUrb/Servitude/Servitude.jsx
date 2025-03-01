import React from 'react';
import './Servitude.css';

const Servitude= () => {
    return (
        <div className='merex'>

        <div className='containA'>
            
            <div className='barrs'>
            <div className='trai1'></div>
            <div className='trai2'></div>
            </div>
            <div className='tite'>
                <h1>SERVITUDES ET RESTRICTIONS</h1>
            </div>
            <div className='lign5'>
            </div>
            </div>
            <div className='defin'>
            <p>
                LES SERVITUDES SONT DES DROITS D'USAGES OU DES RESTRICTIONS IMPOSEES A CERTAINES PROPRIETES POUR DES RAISONS DE SECURITE,D'ENVIRONNEMENT, OU DE PROTECTION D'INFRASTUCTURES PUBLIQUES.
            </p>
            </div>
            
           <div className='tex'>
            <p>
               <strong>Service de passage: </strong>   Certaines propriétés doivent laisser un accès pour les réseaux d'eau et electricité.
            </p>
            <p>
               <strong>Zones protégées: </strong> Les terrains situés près des mangroves sont soumis à des restrictions strictes pour préserver cet écosystème sensible.
            </p>
           </div>
    </div>
    
    );
};

export default Servitude;
