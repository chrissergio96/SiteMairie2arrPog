import React from 'react';
import './Actu.css';

const Actu = () => {
    const news = [
        { text: "Présidentielle gabonaise :  « Les électeurs invités à retirer leur carte dès ce mercredi . »", link: "presidentielle-gabonaise-les-electeurs-invites-a-retirer-leur,10176" },
        { text: "Libreville :  « Un mort et un blessé dans l’éboulement d’une habitation au PK6 . »", link: "libreville-un-mort-et-un-blesse-dans-l-eboulement-d-une,10175" },
        { text: "Présidentielle 2025 : « L’émission de débat électoral débute ce jeudi à la télé pour les candidats . »", link: "presidentielle-2025-l-emission-de-debat-electoral-debute-ce,10174" },
        { text: "Mobilisation politique à Port-Gentil : « Abel Magouegou appelle à soutenir Oligui Nguema »", link: "https://www.gabonreview.com/mobilisation-politique-a-port-gentil-abel-magouegou-appelle-a-soutenir-oligui-nguema/" },
        { text: "Présidentielle 2025 : «  tous les candidats se désistent au profit d’Oligui Nguema…sauf Bilie By Nze ! »", link: "https://gabonmediatime.com/presidentielle-2025-tous-les-candidats-se-desistent-au-profit-doligui-nguemasauf-bilie-by-nze/" },
        { text: "Gabon : «  Les communautés Akélé, Benga, Mpongwè et Sekiani soutiennent Oligui Nguema ! »", link: "https://fr.infosgabon.com/gabon-les-communautes-akele-benga-mpongwe-et-sekiani-soutiennent-oligui-nguema/" }
    ];

    return (
        <div id="breadcrumb" className="bnews jsModule">
            <br />
            <div className="breakingnews">
                <div className="holder font_primary">
                    <h2>Dans l'actu<br /><em>du jour</em></h2>
                    <div className="breaking-txt">
                        <div className="news-scroll">
                            {/* Duplication des actualités pour un effet de défilement fluide */}
                            {[...news, ...news].map((item, index) => (
                                <a key={index} className="font_primary" href={item.link}>
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actu;
