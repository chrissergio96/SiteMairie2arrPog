import React from 'react';
import './FormulaireTelecharger.css';


const FormulaireTelecharger= () => {
    return ( 
        <div className='mereft'>

        <div className='containerAft'>
            
            <div className='barresft'>
            <div className='trait1ft'></div>
            <div className='trait2ft'></div>
            </div>
            <div className='titreft'>
                <h1>FORMULAIRES ET DOCUMENTS</h1>
            </div>
            <div className='ligne5ft'>
            </div>
            </div>
            <div className='texteft'>
             <strong>
            <p className='ft'> Téléchargez les formulaires nécessaires pour vos demandes d'autorisations :</p>
            </strong>
            <div>
            <a href="http://anuttc.ga/uploads/default/files/flm/ANUTTC_DG_DOUAF_PiecesDemandePC_29032017_VF.pdf?fbclid=IwAR3VwtoRq4cGSFGOmND9jBYELVQ6diWupVEZ_QJ2X6gdl_t1It8hB9oeuuQ" target="_blank" rel="noopener noreferrer">
           <button> Formulaire de demande de permis de construire </button>
             </a>           
             </div>
             
            <div>
            <a href="http://anuttc.ga/uploads/default/files/flm/ANUTTC_DG_DOUAF_PiecesDemandePC_29032017_VF.pdf?fbclid=IwAR3VwtoRq4cGSFGOmND9jBYELVQ6diWupVEZ_QJ2X6gdl_t1It8hB9oeuuQ" target="_blank" rel="noopener noreferrer">
            <button>Formulaire de déclaration préalable de travaux </button>
             </a>
             </div>
            <div>
            <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer">
            <button>Formulaire de demande de permis d'aménager</button>
             </a> 
            </div>
            <div className='apresb'>
                <p>
                * Pour toute question ou assistance dans la préparation de votre dossier, vous pouvez prendre rendez-vous avec le service d'urbanisme via notre plateforme en ligne ou par téléphone. Nos experts sont à votre disposition pour vous aider à
                naviguer dans les démarches administratives liées à vos projets.
                </p>
            </div>

           </div>
           
    </div>
    
    );
};

export default FormulaireTelecharger;
