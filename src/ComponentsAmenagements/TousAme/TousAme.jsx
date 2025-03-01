import React from 'react';
import './TousAme.css';
import PontImage from '../../Images/pont.jpg';
import CanalImage from '../../Images/canal.jpg';
import ElecImage from '../../Images/elec.jpg';
import HjImage from '../../Images/hj.jpg';

const TousAme = () => {
    return (
        <div className="TousAme-container">
            <div className="TousAme-card">
                <div className="TousAme-text">
                    <h4> [TRAVAUX DE RÉFECTION DES PONTS À CÔTE D'AZUR]</h4> {/* Ajout du nom du maire */}
                    <p>
                    Dans le cadre des efforts continus pour l'amélioration des infrastructures au sein du 2e Arrondissement, le 𝐂𝐨𝐦𝐢𝐭é 𝐝𝐞 𝐃é𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐦𝐞𝐧𝐭 𝐝𝐞 𝐐𝐮𝐚𝐫𝐭𝐢𝐞𝐫 (𝐂𝐃𝐐) de Côte d'Azur a entrepris des 𝐭𝐫𝐚𝐯𝐚𝐮𝐱 𝐝𝐞 𝐫é𝐟𝐞𝐜𝐭𝐢𝐨𝐧 𝐝𝐞𝐬 𝐩𝐨𝐧𝐭𝐬 dans le quartier. Ces initiatives témoignent de l'engagement des CDQ à embellir et améliorer la vie quotidienne des riverains. Avec l'arrivée prochaine de la saison des pluies, ces travaux permettront aux habitants de circuler librement sans risque d'être bloqués par l'eau.
Lors de leur visite sur le terrain, les Délégués Spéciaux du 2e Arrondissement ont tenu à encourager ces personnes engagées et à leur fournir de précieux conseils pour mener à bien cette initiative. La Mairie du 2e Arrondissement invite les autres CDQ à suivre cet exemple en mettant en place des actions similaires dans leurs quartiers respectifs, afin de contribuer à l'embellissement et au développement de notre arrondissement.
N'oubliez pas de nous suivre également sur Whatsapp pour ne manquer aucune actualité sur les CDQ. Visitez également notre chaine whatsapp pour plus d'informations : <a href="https://whatsapp.com/channel/0029Vap0vkYICVfkljiXNn0h/134"> https://whatsapp.com/channel/0029Vap0vkYICVfkljiXNn0h/134</a>
                    </p>
                </div>
                <div className="TousAme-image">
                    <img src={PontImage} alt="Maire" />
                </div>
            </div>
            <div className="TousAme-card">
                <div className="TousAme-text">
                    <h4>[TRAVAUX D’ASSAINISSEMENT]</h4> {/* Ajout du nom du maire */}
                    <p>
                    Dans le cadre de la campagne d’assainissement de notre arrondissement, des travaux d’envergure sont actuellement en cours sur le canal reliant St Paul à Cosmos. Ces travaux visent à améliorer l’écoulement des eaux et à prévenir les inondations à l’approche de la saison des pluies.
Malheureusement, certaines constructions anarchiques entravent la bonne progression des travaux. La Mairie du 2e Arrondissement appelle donc à la coopération de tous pour garantir le bon déroulement de ces opérations vitales pour notre sécurité et notre environnement.  Pour plus d'actualités, visitez également notre page Facebook: <a href="https://web.facebook.com/Mairie2eArrondissementPortGentil"> https://web.facebook.com/Mairie2eArrondissementPortGentil</a>
                </p>
                </div>
                <div className="TousAme-image">
                    <img src={CanalImage} alt="Maire" />
                </div>
            </div>
            <div className="TousAme-card">
                <div className="TousAme-text">
                    <h4>[VISITE DE TERRAIN : TRAVAUX DE CONSTRUCTION DE L'ECOLE HENRI CLEMENT]</h4> {/* Ajout du nom du maire */}
                    <p>
                    Ce matin les Délégués Spéciaux se sont rendus sur le site de construction de l'école 𝐇𝐞𝐧𝐫𝐢 𝐂𝐥é𝐦𝐞𝐧𝐭 pour évaluer l'avancement des travaux préparatoires avant le lancement officiel prévu pour ce vendredi 13 septembre. Il est important de rappeler que cet projet est réalisé par 𝐁â𝐭𝐢𝐬 𝐆𝐚𝐛𝐨𝐧 𝐒𝐚𝐫𝐥 et fait partie du projet PISE Gabon.
Ils en ont profité pour rappeler que les gravats, remblais et autres matériaux ne sont pas à vendre, démentant ainsi les rumeurs qui circulent. Pour plus d'actualités, visitez également notre page Facebook: <a href="https://web.facebook.com/Mairie2eArrondissementPortGentil"> https://web.facebook.com/Mairie2eArrondissementPortGentil</a>
                </p>
                </div>
                <div className="TousAme-image">
                    <img src={HjImage} alt="Maire" />
                </div>
            </div>
            <div className="TousAme-card">
                <div className="TousAme-text">
                    <h4> [VISITE DE TERRAIN : SECURITE ELECTRIQUE AU 2E ARRONDISSEMENT]
                    </h4> {/* Ajout du nom du maire */}
                    <p>
                    Ce matin, le Délégué Spécial Boubacar Ngouwa Guingo Mayaki, accompagné des responsables de la SEEG, a effectué une visite de terrain dans le 2e Arrondissement pour inspecter la ligne de haute tension entre le poste P0053 et le poste P0078, située derrière le centre social et les pavés Pentecôte.
Cette visite a mis en lumière plusieurs préoccupations, notamment 𝐥𝐞𝐬 𝐜â𝐛𝐥𝐞𝐬 𝐚𝐩𝐩𝐚𝐫𝐞𝐧𝐭𝐬 qui présentent des 𝐫𝐢𝐬𝐪𝐮𝐞𝐬 𝐝'é𝐥𝐞𝐜𝐭𝐫𝐨𝐜𝐮𝐭𝐢𝐨𝐧 pour les riverains et l'impossibilité de mener à bien les activités de nettoyage dans les canaux et caniveaux de la zone. En réponse à ces enjeux, 𝐮𝐧𝐞 𝐝𝐞𝐦𝐚𝐧𝐝𝐞 𝐝𝐞 𝐦𝐢𝐬𝐞 𝐞𝐧 𝐜𝐨𝐧𝐟𝐨𝐫𝐦𝐢𝐭é 𝐚 é𝐭é 𝐟𝐨𝐫𝐦𝐮𝐥é𝐞, avec l'engagement de la SEEG d'exécuter les travaux très prochainement pour garantir la sécurité de tous. Pour plus d'actualités, visitez également notre page Facebook: <a href="https://web.facebook.com/Mairie2eArrondissementPortGentil"> https://web.facebook.com/Mairie2eArrondissementPortGentil</a>
                    </p>
                </div>
                <div className="TousAme-image">
                    <img src={ElecImage} alt="Maire" />
                </div>
            </div>
        </div>
    );
}

export default TousAme;
