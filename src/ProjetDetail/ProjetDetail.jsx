import React from 'react';
import './ProjetDetail.css';
import { useParams } from 'react-router-dom'; // Pour récupérer les paramètres de l'URL
import Navbar from '../Components/Navbar/Navbar';

const ProjetDetail = () => {
  const { id } = useParams(); // Récupérer l'ID du projet dans l'URL

  // Liste des projets (ceci est une liste statique pour remplacer l'API)
  const projets = [
    {
      id: 1,
      titre: 'Projet d’Assainissement des Quartiers',
      description: 'Ce projet vise à améliorer les conditions sanitaires des quartiers à travers la réfection des canalisations et l’entretien des espaces publics.',
      image: require('../Images/travaux-assainissement.jpg'),
      details: 'Ce projet est très important pour la santé publique et l’environnement. Dans le cadre de la campagne d’assainissement de notre arrondissement, des travaux d’envergure sont actuellement en cours sur le canal reliant St Paul à Cosmos. Ces travaux visent à améliorer l’écoulement des eaux et à prévenir les inondations à l’approche de la saison des pluies.',
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid0Jo8iHKXyL8Y4qKHH5uKe2VCnPGXYtEpe2ncV3GWYJ5rjMenZzLyDCyemvGmdCRU8l'
    },
    {
      id: 2,
      titre: '[𝐕𝐈𝐒𝐈𝐓𝐄 𝐃𝐄 𝐓𝐄𝐑𝐑𝐀𝐈𝐍] : Un engagement solide pour le bien-être des habitants du 2eme Arrondissement',
      description: 'La Mairie du 2ème arrondissement, sous la vision du Délégué Spécial Boubacar Ngouwa Guingo Mayaki, démontre une fois de plus son engagement en faveur d’un cadre de vie sain.',
      image: require('../Images/inondation.jpg'),
      details: "Des efforts continus sont faits pour sécuriser les quartiers contre les inondations. La Mairie du 2ème arrondissement, sous la 𝐯𝐢𝐬𝐢𝐨𝐧 𝐞𝐭 𝐥'𝐢𝐦𝐩𝐮𝐥𝐬𝐢𝐨𝐧 𝐝𝐮 𝐃𝐞́𝐥𝐞́𝐠𝐮𝐞́ 𝐒𝐩𝐞́𝐜𝐢𝐚𝐥 Boubacar Ngouwa Guingo Mayaki, démontre une fois de plus son engagement indéfectible en faveur d’un cadre de vie sain, sécurisé et digne pour tous.",
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid05c7jjdci6tCp4VaTX2rLHtLuQSw9XaCRNN5hKwXgEDsCB4xVeCpNBRdLpdSVmZvZl'
    },
    {
      id: 3,
      titre: "[TRAVAUX PUBLICS ]",
      description: '',
      image: require('../Images/canivau.jpg'),
      details: 'Ce projet se concentre sur le nettoyage et l’entretien des caniveaux pour éviter les inondations. Ce matin, les services techniques de la Mairie du 2e Arrondissement sont intervenus dans le Quartier Chic pour effectuer des travaux de nettoyage des caniveaux, dans le cadre de l’amélioration de l’assainissement et de la prévention des inondations dans cette zone.',
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid01GH6zHCRHHyPnAvr28CKqewrGKstBrvjacuc1v87rj2sNvgDJ1Pmf4FzRhqBv2Gyl'
    },
    {
      id: 4,
      titre: "[𝑴𝒐𝒅𝒆𝒓𝒏𝒊𝒔𝒂𝒕𝒊𝒐𝒏 𝒆𝒕 𝒆𝒎𝒃𝒆𝒍𝒍𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒂𝒖 2ᵉ 𝑨𝒓𝒓𝒐𝒏𝒅𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝑷𝒐𝒓𝒕-𝑮𝒆𝒏𝒕𝒊𝒍]",
      description: "Dans le cadre des travaux initiés par le CTRI, des aménagements sont en cours au carrefour du Centre Social pour améliorer l'infrastructure et le cadre de vie des habitants.",
      image: require('../Images/carref centre social.jpg'),
      details: "Ces travaux visent à moderniser l'espace urbain tout en garantissant plus de sécurité et de confort pour tous. Merci pour votre patience et votre collaboration !",
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid02McQG75xsozyFZa4bWBL1b75ujtWC1eGihuRSZGv46nod7BYCJSUKBicCpuvmyTqwl'
    },
    {
      id: 5,
      titre: '[VISITE DES CHANTIERS INITIES PAR LE CTRI DANS LE  𝑰𝑵𝑰𝑻𝑰𝑬́𝑺 2ᵉ ARRONDISSEMENT DE PORT-GENTIL]',
      image: require('../Images/anciennebalise.jpg'),
      details: "Ce vendredi 21 février 2025 , le Délégué Spécial de la Mairie du 2ᵉ arrondissement de Port-Gentil Boubacar Ngouwa Guingo Mayaki a conduit une visite de terrain afin d'évaluer l'état d'avancement des chantiers stratégiques entrepris sous l'égide du Comité pour la Transition et la Restauration des Institutions (CTRI) . Cette initiative s'inscrit dans une dynamique de modernisation des infrastructures et d'un cadre de vie de nos concitoyens.",
      lienFacebook:'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid024Wzh3uxWx291nq62x6AyuPGLV8fp7un2igQwZopU69cR68rVrNpoqhHkD1gKCUZEl'
    },
    {
      id:6,
      titre:'[ 𝑽𝑰𝑺𝑰𝑻𝑬 𝑻𝑬𝑹𝑹𝑨𝑰𝑵 : 𝑹𝑬𝑷𝑶𝑵𝑺𝑬 𝑰𝑴𝑴𝑬𝑫𝑰𝑨𝑻𝑬 𝑫𝑬𝑺 𝑫𝑬𝑳𝑬𝑮𝑼𝑬𝑺 𝑺𝑷𝑬𝑪𝑰𝑨𝑼𝑿]',
      image: require('../Images/visiteterrainpg2.jpg'),
      details: "Dans un esprit de réactivité et de transparence, les Délégués Spéciaux du 2e Arrondissement de Port-Gentil, accompagnés de leurs équipes, ont rapidement organisé une visite sur le terrain dans le quartier PG2. Cette descente a été motivée par les préoccupations des habitants, notamment les informations circulant concernant une prétendue commercialisation informelle des camions de sable issus des opérations de curage. Après vérification, il s’est avéré que ces rumeurs étaient infondées.",
      lienFacebook:'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid02TYrTWwskmR1bhAVQ13Forafz5KjxsaHm8p7X5mu3yuWyPQmFqnvpSLVCdrF42finl'
    }
  ];

  // Trouver le projet correspondant à l'ID
  const projet = projets.find(p => p.id === parseInt(id));

  if (!projet) {
    return <h2>Projet non trouvé</h2>;
  }

  return (
    <div className="projet-detail">
      <Navbar />
      <h1 className='hh1'>{projet.titre}</h1>
      <img src={projet.image} alt={projet.titre} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
      <p>{projet.description}</p>
      <p>{projet.details}</p>
      <a href={projet.lienFacebook} target="_blank" rel="noopener noreferrer">👉 Suivez toute l'actualité sur Facebook</a>
    </div>
  );
};

export default ProjetDetail;
