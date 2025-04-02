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
      titre: "Travaux d'Assainissement dans le 2e Arrondissement : Amélioration du Canal St Paul - Cosmos",
      description: 'Ce projet vise à améliorer les conditions sanitaires des quartiers à travers la réfection des canalisations et l’entretien des espaces publics.',
      image: require('../Images/travaux-assainissement.jpg'),
      details:  <p>
        <li>Des travaux d’envergure pour prévenir les inondations</li><br />
        À l’approche de la saison des pluies, ces travaux d’assainissement revêtent une importance capitale pour la protection des habitants et la préservation des infrastructures publiques. En modernisant le système de drainage et en élargissant le canal, la Mairie cherche à garantir un écoulement fluide des eaux de pluie, minimisant ainsi les risques d’inondations, de dégâts matériels et de perturbations dans la vie quotidienne des citoyens. Cette initiative s’inscrit dans un plan global de gestion des eaux pluviales, afin de créer un environnement plus sécurisé et résilient face aux intempéries.<br /><br />
        <li>Des défis à surmonter pour garantir la réussite des travaux</li><br />
        Malheureusement, certaines constructions anarchiques, qui ont été installées sans respect des normes urbanistiques et des plans de zonage, entravent la bonne progression des travaux. Ces constructions illégales bloquent en effet l'accès au canal et compliquent les interventions nécessaires à sa réhabilitation. Elles représentent non seulement un frein aux efforts de la Mairie, mais elles augmentent également les risques d'inondation dans les zones concernées.

Dans cette optique, la Mairie du 2ème Arrondissement lance un appel à la coopération et à la responsabilité collective. Il est essentiel que tous les habitants comprennent l'importance de ces travaux d’assainissement pour la sécurité publique et l'amélioration de l'environnement. La Mairie sollicite donc la collaboration des citoyens, des propriétaires et des responsables des constructions pour libérer les zones obstruées et permettre la réalisation efficace des travaux.<br /><br />
        <li>Un appel à la solidarité pour un avenir plus sûr</li><br />
        Les travaux d’assainissement sont un investissement crucial pour l’avenir de notre Arrondissement. Ils visent à offrir à tous un environnement plus sûr, plus sain et plus agréable à vivre. Le respect des règles urbanistiques et la coopération de chacun sont nécessaires pour mener à bien cette opération vitale. Ensemble, nous pouvons garantir un développement harmonieux et durable de notre arrondissement. La Mairie du 2ème Arrondissement s'engage pleinement à mettre en œuvre ces projets d’assainissement, et espère que chaque citoyen jouera son rôle dans cette démarche essentielle pour le bien-être collectif.
      </p>,
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid0Jo8iHKXyL8Y4qKHH5uKe2VCnPGXYtEpe2ncV3GWYJ5rjMenZzLyDCyemvGmdCRU8l'
    },
    {
      id: 2,
      titre: "Visite de Terrain : Un Engagement Solide pour le Bien-être des Habitants du 2e Arrondissement",
      description: "Sous la vision éclairée et l'impulsion dynamique du Délégué Spécial Boubakar NGOUWA GUINGO MAYAKI, la Mairie du 2ème Arrondissement s'engage pleinement à offrir à ses habitants un cadre de vie sain, sécurisé et digne. Chaque initiative prise s'inscrit dans un objectif commun : garantir à tous les citoyens un environnement propice à la santé, à la sécurité et au développement harmonieux des quartiers. ",
      image: require('../Images/inondation.jpg'),
      details: <p>
       <li>Des efforts continus pour sécuriser les quartiers contre les inondations</li> <br />
       La Mairie du 2ème Arrondissement met en œuvre des mesures concrètes pour lutter contre les inondations récurrentes qui, chaque année, perturbent la vie des résidents. En analysant minutieusement les causes profondes de ces inondations, la Mairie a priorisé la mise en place d'infrastructures modernes et adaptées. Des systèmes de drainage plus efficaces sont installés, des canaux sont nettoyés et élargis, et des interventions rapides sont réalisées pour réparer les infrastructures vieillissantes. Ces actions visent à prévenir les risques d'inondation, à protéger les habitations et à préserver les espaces publics contre les intempéries. <br /><br />

      <li>Un leadership résolu pour un avenir prospère</li> <br />
      Sous le leadership déterminé du Délégué Spécial Boubakar NGOUWA GUINGO MAYAKI, des projets de grande envergure ont été initiés pour transformer le 2ème arrondissement en un lieu de vie modèle. Les efforts de sécurisation des quartiers ne se limitent pas à la gestion des inondations. De nombreuses autres initiatives sont en cours pour moderniser les infrastructures, améliorer les espaces publics et promouvoir une urbanisation durable. La Mairie, sous sa direction, œuvre sans relâche pour améliorer l'accessibilité, le confort et la sécurité des quartiers, afin d'offrir aux habitants un cadre de vie qui reflète le respect de la dignité humaine. <br /><br />
      <li>Une vision pour une ville plus verte et plus agréable</li> <br />
      En plus de ses efforts pour sécuriser les quartiers contre les inondations, la Mairie du 2ème Arrondissement met également en place des projets de verdissement urbain. Des espaces verts et des zones de loisirs sont aménagés pour améliorer la qualité de vie des habitants. Ces initiatives contribuent à créer un environnement plus sain, où la nature et l'urbanisation coexistent harmonieusement. Elles permettent également d'offrir aux résidents des lieux de détente et de rencontres, favorisant ainsi la cohésion sociale et le bien-être de la communauté. <br /> <br />
      <li>Une Mairie engagée pour un avenir radieux</li> <br />
      En conclusion, la Mairie du 2ème arrondissement, sous la direction visionnaire du Délégué Spécial Boubakar NGOUWA GUINGO MAYAKI, continue de se battre pour offrir aux citoyens un environnement sain, sécurisé et digne. Ses actions concrètes et son engagement indéfectible témoignent de la volonté de construire un avenir prospère pour les habitants. Ensemble, avec la participation active de chacun, nous pouvons contribuer à faire du 2ème arrondissement un modèle de bien-être, de sécurité et de durabilité pour les générations à venir.
       </p>,
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid05c7jjdci6tCp4VaTX2rLHtLuQSw9XaCRNN5hKwXgEDsCB4xVeCpNBRdLpdSVmZvZl'
    },
    {
      id: 3,
      titre: "[Travaux publics] : Pour un environnement plus propre et une meilleure sécurité",
      description: 'Dans le cadre de l’amélioration continue des infrastructures publiques et de la prévention des risques d’inondations, la Mairie du 2ème Arrondissement s’engage activement à nettoyer et entretenir les caniveaux de la ville. Ces travaux essentiels font partie d’un projet plus large visant à garantir un cadre de vie plus sain et sécurisé pour tous les habitants. Ce matin, les services techniques de la Mairie du 2ème Arrondissement sont intervenus dans le Quartier Chic pour réaliser des travaux de nettoyage des caniveaux, un élément clé dans la gestion des eaux pluviales et la prévention des inondations.',
      image: require('../Images/canivau.jpg'),
      details: <p>
        <li>Une intervention cruciale pour prévenir les inondations</li> <br />
        Les caniveaux jouent un rôle fondamental dans le bon écoulement des eaux pluviales. Lorsqu'ils sont obstrués par des déchets, des feuilles ou d'autres débris, l'eau n’a plus de chemin d’évacuation et peut provoquer des inondations, créant des désagréments importants pour les habitants. En procédant régulièrement au nettoyage et à l’entretien de ces caniveaux, la Mairie assure non seulement une meilleure gestion des eaux de pluie, mais aussi une réduction des risques d’inondation dans les quartiers. <br /><br />
        <li>Des travaux continus pour améliorer l’assainissement</li><br />
        Le nettoyage des caniveaux dans le Quartier Chic est l’un des nombreux projets entrepris par la Mairie pour renforcer l’assainissement dans l’ensemble de l’arrondissement. Ces travaux font partie d’une série d’interventions visant à améliorer la gestion des eaux usées, garantir un environnement plus propre et éviter les accumulations d’eau stagnante. Ces actions contribuent à maintenir une ville plus saine, plus agréable et plus résistante aux intempéries. <br /><br />
        <li>Un appel à la collaboration des citoyens</li> <br />
        Cependant, la Mairie ne peut mener ces efforts de manière efficace sans la coopération active des citoyens. Il est essentiel que chacun prenne soin de ne pas jeter de déchets dans les caniveaux, afin de préserver leur bon fonctionnement et d'éviter les obstructions. L’implication de tous dans cette démarche collective est un facteur clé pour le succès de ces travaux et pour maintenir la ville propre et bien assainie. <br /><br />
        <li>Un engagement pour un avenir plus sûr et plus propre</li> <br />
        Ces travaux de nettoyage des caniveaux ne sont qu’une des nombreuses initiatives de la Mairie du 2ème Arrondissement pour renforcer la sécurité et la qualité de vie de ses habitants. Grâce à des actions concrètes et à un engagement constant, la Mairie œuvre pour créer un environnement plus sûr, plus propre et plus agréable pour tous. Les travaux d’assainissement, comme celui du nettoyage des caniveaux, sont essentiels pour garantir une ville qui peut faire face aux défis environnementaux tout en offrant un cadre de vie digne et sécurisé pour ses habitants.
      </p>,
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid01GH6zHCRHHyPnAvr28CKqewrGKstBrvjacuc1v87rj2sNvgDJ1Pmf4FzRhqBv2Gyl'
    },
    {
      id: 4,
      titre: "[𝑴𝒐𝒅𝒆𝒓𝒏𝒊𝒔𝒂𝒕𝒊𝒐𝒏 𝒆𝒕 𝒆𝒎𝒃𝒆𝒍𝒍𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒂𝒖 2ᵉ 𝑨𝒓𝒓𝒐𝒏𝒅𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝑷𝒐𝒓𝒕-𝑮𝒆𝒏𝒕𝒊𝒍] : Un projet de modernisation pour un avenir plus sûr et agréable",
      description: "Dans le cadre des initiatives menées par le CTRI, des travaux d’envergure sont actuellement en cours au carrefour du Centre Social afin de moderniser et d’embellir cette zone stratégique de notre arrondissement. Ces aménagements font partie d'un projet global visant à améliorer l'infrastructure urbaine et à offrir aux habitants un cadre de vie plus agréable, sécurisé et fonctionnel.",
      image: require('../Images/carref centre social.jpg'),
      details: <p>
        <li>Un projet pour améliorer le cadre de vie des habitants</li> <br />
        Le carrefour du Centre Social est un point névralgique dans la vie quotidienne des citoyens, reliant plusieurs quartiers et infrastructures. Ces travaux sont donc essentiels pour améliorer non seulement la circulation et l’accessibilité, mais aussi pour offrir des espaces publics plus modernes et adaptés aux besoins des habitants. Les aménagements prévoient la mise en place de nouvelles voies, l’élargissement des trottoirs, ainsi que l’implantation d’espaces verts qui amélioreront la qualité de l'air et l'esthétique de l'endroit. Ces interventions visent à apporter plus de sécurité pour les piétons et les automobilistes, et à rendre cette zone plus accueillante et fonctionnelle. <br /><br />
        <li>Un engagement pour la sécurité et le confort</li> <br />
        Les travaux en cours au carrefour du Centre Social ne se limitent pas à l’embellissement visuel de l’espace, ils ont également pour but de garantir une meilleure sécurité pour tous. En réorganisant les flux de circulation et en améliorant les infrastructures de transport, la Mairie du 2ème Arrondissement veille à offrir un environnement plus sûr et plus fluide pour les usagers. De plus, l’installation de nouveaux éclairages et la mise en place de panneaux de signalisation permettront de renforcer la sécurité routière, notamment pour les piétons et les cyclistes. <br /><br />
        <li>Un appel à la patience et à la collaboration des habitants</li> <br />
        Ces travaux de modernisation et d’embellissement, bien qu’importants pour le développement de l’arrondissement, peuvent occasionner quelques désagréments temporaires. Nous remercions tous les habitants pour leur patience et leur compréhension durant cette période de transformation. L’objectif est de faire de cette zone un modèle d’urbanisme moderne et accessible, et nous avons pleinement confiance que les efforts de chacun contribueront à la réussite de ce projet. <br /><br />
        <li>Une vision pour l'avenir</li> <br />
        Le projet de modernisation du carrefour du Centre Social s’inscrit dans une vision plus large de développement et de modernisation de l’ensemble du 2ème Arrondissement de Port-Gentil. Ces initiatives témoignent de la volonté de la Mairie de créer un environnement urbain plus agréable, durable et sécurisé pour ses citoyens. Grâce à des investissements continus dans les infrastructures, la Mairie œuvre pour un avenir plus radieux et plus harmonieux pour tous les habitants.
      </p> ,
      lienFacebook: 'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid02McQG75xsozyFZa4bWBL1b75ujtWC1eGihuRSZGv46nod7BYCJSUKBicCpuvmyTqwl'
    },
    {
      id: 5,
      titre: '[VISITE DES CHANTIERS INITIÉS PAR LE CTRI DANS LE 2ᵉ ARRONDISSEMENT DE PORT-GENTIL] : Un suivi attentif pour un développement durable',
      description: "Ce vendredi 21 février 2025, le Délégué Spécial de la Mairie du 2ᵉ Arrondissement de Port-Gentil, Monsieur Boubacar Ngouwa Guingo Mayaki, a conduit une visite de terrain afin d’évaluer l’état d’avancement des chantiers stratégiques entrepris sous l’égide du Comité pour la Transition et la Restauration des Institutions (CTRI). Cette initiative s’inscrit dans une dynamique de modernisation des infrastructures et vise à améliorer le cadre de vie des habitants de notre arrondissement.",
      image: require('../Images/anciennebalise.jpg'),
      details: <p>
        <li>Un suivi rigoureux pour garantir la réussite des projets</li> <br />
        Lors de cette visite, le Délégué Spécial a pu constater l'avancement des travaux en cours et évaluer la qualité des infrastructures qui seront mises en place pour répondre aux besoins croissants de la population. Ces chantiers couvrent une large gamme de projets, allant de l'amélioration des infrastructures routières à la modernisation des services publics, en passant par l’embellissement des espaces urbains et l’amélioration de la sécurité publique.

L’objectif de cette démarche est de s’assurer que les travaux respectent les délais impartis et répondent aux standards de qualité attendus. Le Délégué Spécial a également pris soin d'écouter les observations des responsables de chaque chantier afin d'apporter les ajustements nécessaires et garantir le bon déroulement de ces projets vitaux pour le développement de la ville. <br /><br />
        <li>Un engagement pour une modernisation durable</li> <br />
        Les travaux entrepris sous l'égide du CTRI s'inscrivent dans une vision plus large de modernisation durable, visant à créer un environnement urbain plus fonctionnel, plus sûr et plus agréable pour les citoyens. Ces projets sont pensés pour améliorer la mobilité, renforcer l'assainissement, développer les infrastructures sociales et promouvoir un urbanisme plus harmonieux. <br /><br />
        <li>Un projet à forte valeur ajoutée pour les habitants</li> <br />
        La Mairie du 2ᵉ Arrondissement, grâce à cette initiative du CTRI, s’engage à offrir à ses citoyens un cadre de vie amélioré, propice au développement économique et social. En modernisant les infrastructures, en optimisant les services publics et en améliorant l’environnement urbain, la Mairie répond aux aspirations des habitants et aux défis du futur. <br /><br />
        <li>Un appel à l’unité pour la réussite du projet</li> <br />
        Enfin, cette visite souligne l’importance de la coopération de tous les acteurs locaux, y compris les citoyens, dans la réussite de ces projets. La Mairie appelle donc à la collaboration de chacun pour soutenir les efforts de modernisation et assurer la réussite de cette transformation.

L'engagement du Délégué Spécial et des équipes du CTRI démontre une volonté affirmée de bâtir un avenir plus moderne, plus sûr et plus agréable pour tous les habitants du 2ᵉ Arrondissement de Port-Gentil. Grâce à ces chantiers, Port-Gentil se prépare à relever les défis de demain tout en garantissant une meilleure qualité de vie à ses citoyens.
      </p> ,
      lienFacebook:'https://www.facebook.com/Mairie2eArrondissementPortGentil/posts/pfbid024Wzh3uxWx291nq62x6AyuPGLV8fp7un2igQwZopU69cR68rVrNpoqhHkD1gKCUZEl'
    },
    {
      id:6,
      titre:'[VISITE TERRAIN : RÉPONSE IMMÉDIATE DES DÉLÉGUÉS SPÉCIAUX]',
      description: "Dans un souci de réactivité et de transparence, les Délégués Spéciaux du 2e Arrondissement de Port-Gentil, accompagnés de leurs équipes, ont pris l'initiative d'organiser une visite de terrain rapide dans le quartier PG2. Cette descente avait pour objectif de répondre aux préoccupations des habitants, suite à la diffusion de rumeurs concernant une prétendue commercialisation informelle des camions de sable provenant des opérations de curage réalisées dans la zone.",
      image: require('../Images/visiteterrainpg2.jpg'),
      details: <p>
        <li>Une action rapide pour rassurer la population</li> <br />
        Face à la propagation de ces informations, les Délégués Spéciaux ont décidé de se rendre immédiatement sur place pour vérifier la véracité des faits. L’objectif était de dissiper tout malentendu et de confirmer aux citoyens que la Mairie du 2e Arrondissement agit avec intégrité dans toutes ses opérations, en particulier celles relatives aux travaux d’assainissement. <br /><br />
        <li>Vérification des faits et clarification de la situation</li> <br />
        Après avoir mené les vérifications nécessaires sur le terrain, il s'est avéré que les rumeurs concernant la commercialisation illégale du sable étaient sans fondement. Aucun cas de vente informelle de sable n’a été constaté, et toutes les opérations de curage menées dans le cadre des travaux d'assainissement sont gérées dans les règles, respectant les normes de transparence et d’équité. Les équipes de la Mairie ont réaffirmé leur engagement à maintenir une gestion rigoureuse et éthique de ces projets. <br /><br />
        <li>Un message clair de transparence et de responsabilité</li> <br />
        Cette visite de terrain a également permis aux Délégués Spéciaux de communiquer directement avec la population, de répondre à leurs préoccupations et de renforcer la confiance des citoyens envers l’administration locale. En prenant le temps de vérifier les informations et d’apporter des réponses claires, la Mairie montre son engagement constant à assurer une gestion responsable des ressources publiques et à travailler en étroite collaboration avec les habitants pour résoudre toute inquiétude. <br /><br />
        <li>Une Mairie proche de ses habitants</li> <br />
        L’action rapide des Délégués Spéciaux témoigne de la volonté de la Mairie du 2e Arrondissement de Port-Gentil de toujours rester proche de ses citoyens. En favorisant le dialogue direct et en agissant de manière transparente, l'administration continue de renforcer sa mission de service public au bénéfice de tous, en garantissant des conditions de vie optimales et une gestion saine de l’environnement urbain.

Cette initiative s'inscrit dans un processus de gouvernance locale active, où la réactivité et l’écoute des besoins de la population sont au cœur des priorités. La Mairie du 2e Arrondissement reste ainsi pleinement investie dans la gestion des travaux publics et dans la préservation d’un environnement sain et sécurisé pour tous ses habitants.
      </p> ,
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
