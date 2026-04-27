import React from 'react';
import './Actu.css';

const Actu = () => {
    const news = [
        { text: "Intelligence Artificielle et Sécurisation des Données : Apports et perspectives pour la transformation numérique au Gabon", link: "http://gabonreview.com/intelligence-artificielle-et-securisation-des-donnees-apports-et-perspectives-pour-la-transformation-numerique-au-gabon/" },
        { text: "Contrats fantômes, harcèlement et primes volatiles, les marins de Peschaud brisent le silence", link: "https://www.gabonreview.com/contrats-fantomes-harcelement-et-primes-volatiles-les-marins-de-peschaud-brisent-le-silence/" },
        { text: "Fuite sur le pipeline Coucal : la riposte technique de Perenco à l'incident du 5 avril", link: "https://www.gabonreview.com/fuite-sur-le-pipeline-coucal-la-riposte-technique-de-perenco-a-lincident-du-5-avril/" },
        { text: "Mobilisation politique à Port-Gentil : Abel Magouegou appelle à soutenir Oligui Nguema", link: "https://www.gabonreview.com/mobilisation-politique-a-port-gentil-abel-magouegou-appelle-a-soutenir-oligui-nguema/" },
        { text: "Présidentielle 2025 : tous les candidats se désistent au profit d'Oligui Nguema… sauf Bilie By Nze !", link: "https://gabonmediatime.com/presidentielle-2025-tous-les-candidats-se-desistent-au-profit-doligui-nguemasauf-bilie-by-nze/" },
        { text: "Gabon : Les communautés Akélé, Benga, Mpongwè et Sekiani soutiennent Oligui Nguema !", link: "https://fr.infosgabon.com/gabon-les-communautes-akele-benga-mpongwe-et-sekiani-soutiennent-oligui-nguema/" }
    ];

    const doubled = [...news, ...news];

    return (
        <div className="bnews-bar">
            <div className="bnews-label">
                Dans l'actu<em>du jour</em>
            </div>
            <div className="bnews-sep" />
            <div className="bnews-track">
                <div className="bnews-scroll">
                    {doubled.map((item, index) => (
                        <div key={index} className="bnews-item">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.text}
                            </a>
                            <span className="bnews-dot" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Actu;