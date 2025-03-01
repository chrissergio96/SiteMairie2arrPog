import React from 'react';
import './TypeAutorisations.css';

const TypeAutorisations= () => {
    return (
        <div className='mereta'>

        <div className='containeraAta'>
            
            <div className='barresta'>
            <div className='trait1ta'></div>
            <div className='trait2ta'></div>
            </div>
            <div className='titreta'>
                <h1>TYPES D'AUTORISATIONS</h1>
            </div>
            <div className='ligne5ta'>
            </div>
            </div>
            
           <div className='texteta'>
            <div className='permis'>
            <h6>
                PERMIS DE CONSTRUIRE:
            </h6>
            <p>
            Obligatoire pour toute nouvelle construction, agrandissement, ou transformation importante d’un bâtiment. Selon l'article 7 du
Code de l'Urbanisme au Gabon, ce permis est requis pour toute modification touchant à la structure d'un bâtiment ou modifiant
l'apparence extérieure. Il est également obligatoire pour les bâtiments dépassant une certaine hauteur (plus de 2 étages) ou
couvrant une grande surface (plus de 150 m²).
            </p>
            <h6>
            DECLARATION PREALABLE DE TRAVAUX:
            </h6>
            <p>
            Cette autorisation est requise pour les projets de petite envergure, tels que les extensions de faible superficie (moins de 20 m²),
la modification de façades, ou l’installation de clôtures. Selon la Loi n°001/2011 relative à l’urbanisme, la déclaration préalable est
nécessaire pour toute modification qui ne requiert pas un permis de construire mais qui impacte l’aspect extérieur d’un bâtiment.
            </p>
            <h6>
            PERMIS D’AMENAGER:
            </h6>
            <p>
            Requis pour les opérations de lotissement, divisions foncières, ou aménagement de zones à usage spécifique. Ce permis est
essentiel pour toute modification de la structure du sol, comme les projets de lotissement pour la construction de nouvelles
habitations.
            </p>
            </div>
            <div className='limite'></div>
            <div className='document'>
            <h6>
            DOCUMENTS NECESSAIRE:
            </h6>
            <p>
            Plan de situation du terrain
            </p>
            <p>
            Plan de masse précisant les limites et la nature des travaux
            </p>
            <p>
            Plan des façades et coupes du bâtiment projeté
            </p>
            <p>
            Certificat de propriété
            </p>
            <h6>
            PERMIS DE DEMOLIR: 
            </h6>
            <p>
            Ce permis est nécessaire pour toute démolition partielle ou totale d'un bâtiment situé dans une zone
            protégée ou réglementée, comme le stipule l'article 25 du Code de l'Urbanisme gabonais. Il vise à 
            éviter la destruction non contrôlée de bâtiments dans des zones où la démolition pourrait avoir un
            impact sur le patrimoine ou l'environnement.
            </p>
            <h6>
            EXIGENCES: 
            </h6>
            <p>
            Justification de la démolition et précautions environnementales à prendre
            </p>
            </div>
           </div>
    </div>
    
    );
};

export default TypeAutorisations;
