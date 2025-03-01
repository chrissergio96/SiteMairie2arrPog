import React from 'react';
import './Procedureasuivre.css';
import PermisImage from '../../Images/ou-poser-permis-construire-3.png'
import DeclarationImage from '../../Images/declaration-prealable-tuto5-600x245.png'


const Procedureasuivre= () => {
    return ( 
        <div className='merepas'>

        <div className='containerApas'>
            
            <div className='barrespas'>
            <div className='trait1pas'></div>
            <div className='trait2pas'></div>
            </div>
            <div className='titrepas'>
                <h1>PROCEDURES A SUIVRE</h1>
            </div>
            <div className='ligne5pas'>
            </div>
            </div>
            <div className='textedemarche'>
            <p> Les démarches pour l'obtention des autorisations d urbanisme sont clairement définies par la législation gabonaise. Voici les étapes à suivre pour soumettre votre dossier :</p>
            <h6>
                DEPOTS DE DOSSIER:
            </h6>
            <p>
            Les dossiers doivent être déposés auprès du service d urbanisme de la mairie ou en ligne (si disponible). Le dépôt doit inclure les documents justificatifs nécessaires à l instruction de la demande.
            </p>
            </div>

           <div className='textepas'>
            <div className='permispas'>
            
            <p>
            * Pour un permis de construire, vous devrez soumettre un dossier complet comprenant 

            les plans du projet, le certificat de propriété, et les études techniques (si nécessaire).
            </p>
            <div className='construirep'>
            <img src={PermisImage} alt="permis de construire" />
            </div>
            <h6>
            DELAIS DE TRAITEMENT:
            </h6>
            <p><strong>* Permis de construire : 2 à 3 mois selon l’ampleur du projet</strong></p>
            <p><strong>* Déclaration préalable : 1 mois maximum</strong></p>
           <p> <strong>* Permis de démolir : 2 mois.</strong></p>
            
            </div>
            <div className='limitepas'></div>
            <div className='documentpas'>
            
            <p>
            * Pour une déclaration préalable de travaux, fournissez une description des travaux et des plans
             sommaires
            </p>
            <div className='declarationp'>
            <img src={DeclarationImage} alt="declaration prealable " />
            </div>
            <h6>
            NOTIFICATION ET AFFICHAGE: 
            </h6>
            <p>
            * Une fois l'autorisation obtenue, elle doit être affichée sur le terrain pendant toute la durée des travaux

             pour permettre d'éventuelles contestations de tiers. L’affichage doit être visible depuis la voie publique
            </p>
           
            </div>
           </div>
           <div className='frais'>
           <h6>
            FRAIS DE DOSSIER: 
            </h6>
            <p>
            Les demandes d'autorisations sont soumises à des frais, calculés en fonction de la nature et de l'envergure des travaux.
            </p>
           </div>
           
    </div>
    
    );
};

export default Procedureasuivre;
