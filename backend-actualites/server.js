const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

// Permettre à ton frontend de faire des requêtes vers ce serveur
app.use(cors());

// Servir des fichiers statiques à partir du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Exemples d'actualités avec des chemins d'images valides
const actualites = [
    {
        id: 1,
        titre: 'Projet d’Assainissement des Quartiers',
        imageUrl: '/travaux-assainissement.jpg',
        description: 'Actualité 1 description',
        date: '2025-03-01',
    },
    {
        id: 2,
        titre: '[𝐕𝐈𝐒𝐈𝐓𝐄 𝐃𝐄 𝐓𝐄𝐑𝐑𝐀𝐈𝐍] : Un engagement solide pour le bien-etre des habitants du 2eme Arrondissement',
        imageUrl: '/inondation.jpg', // Le chemin est relatif au dossier public de React
        description: 'La Mairie du 2ème arrondissement, sous la vision 𝐝𝐮 𝐃𝐞́𝐥𝐞́𝐠𝐮𝐞́ 𝐒𝐩𝐞́𝐜𝐢𝐚𝐥 Boubacar Ngouwa Guingo Mayaki, démontre une fois de plus son engagement en faveur d’un cadre de vie sain.',
        date: '2025-03-10'
    },
    {
        id: 3,
        titre: 'Nettoyage des caniveaux au quartier chic',
        imageUrl: '/canivau.jpg',
        description: 'Actualité 3 description',
        date: '2025-03-20'
    } ,
    {
        id: 4,
        titre: "[𝑴𝒐𝒅𝒆𝒓𝒏𝒊𝒔𝒂𝒕𝒊𝒐𝒏 𝒆𝒕 𝒆𝒎𝒃𝒆𝒍𝒍𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒂𝒖 2ᵉ 𝑨𝒓𝒓𝒐𝒏𝒅𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝑷𝒐𝒓𝒕-𝑮𝒆𝒏𝒕𝒊𝒍]",
        imageUrl: '/carref centre social.jpg',
        description: "Dans le cadre des travaux initiés par le CTRI , des aménagements sont en cours au carrefour du Centre Social pour améliorer l'infrastructure et le cadre de vie des habitants. ",
        date: '2025-02-24'
    } ,
   
];

// Route pour obtenir les 3 dernières actualités
app.get('/api/actualites', (req, res) => {
    res.json(actualites);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
