const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Utiliser le port dynamique pour le déploiement
const port = process.env.PORT || 5000;

// Permettre à ton frontend de faire des requêtes vers ce serveur
app.use(cors({
    origin: '*', // Autoriser toutes les origines ou spécifie ton domaine ici
}));

// Middleware pour analyser les corps des requêtes au format JSON
app.use(express.json());

// Servir des fichiers statiques à partir du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Exemple d'actualités
let actualites = [
    {
        id: 1,
        titre: 'Projet d’Assainissement des Quartiers',
        imageUrl: '/travaux-assainissement.jpg',
        description: 'Actualité 1 description',
        date: '2025-03-01',
    },
    {
        id: 2,
        titre: '[𝐕𝐈𝐒𝐈𝐓𝐄 𝐃𝐄 𝐓𝐄𝐑𝐑𝐀𝐈𝐍] : Un engagement solide pour le bien-être des habitants du 2eme Arrondissement',
        imageUrl: '/inondation.jpg',
        description: 'La Mairie du 2ème arrondissement démontre son engagement en faveur d’un cadre de vie sain.',
        date: '2025-03-10'
    },
    {
        id: 3,
        titre: 'Nettoyage des caniveaux au quartier chic',
        imageUrl: '/canivau.jpg',
        description: 'Actualité 3 description',
        date: '2025-03-20'
    },
    {
        id: 4,
        titre: "[𝑴𝒐𝒅𝒆𝒓𝒏𝒊𝒔𝒂𝒕𝒊𝒐𝒏 𝒆𝒕 𝒆𝒎𝒃𝒆𝒍𝒍𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒂𝒖 2ᵉ 𝑨𝒓𝒓𝒐𝒏𝒅𝒊𝒔𝒔𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝑷𝒐𝒓𝒕-𝑮𝒆𝒏𝒕𝒊𝒍]",
        imageUrl: '/carref centre social.jpg',
        description: "Des aménagements sont en cours au carrefour du Centre Social pour améliorer l'infrastructure.",
        date: '2025-02-24'
    },
];

// Route pour récupérer toutes les actualités
app.get('/api/actualites', (req, res) => {
    res.json(actualites);
});

// Route pour récupérer une actualité par son ID
app.get('/api/actualites/:id', (req, res) => {
    const actualite = actualites.find(a => a.id === parseInt(req.params.id));
    if (!actualite) return res.status(404).send('Actualité non trouvée');
    res.json(actualite);
});

// Route pour ajouter une nouvelle actualité
app.post('/api/actualites', (req, res) => {
    const { titre, imageUrl, description, date } = req.body;

    if (!titre || !imageUrl || !description || !date) {
        return res.status(400).send('Tous les champs sont requis');
    }

    const newActualite = {
        id: actualites.length + 1, // Assigner un ID unique
        titre,
        imageUrl,
        description,
        date,
    };

    actualites.push(newActualite);
    res.status(201).json(newActualite);
});

// Route pour modifier une actualité par son ID
app.put('/api/actualites/:id', (req, res) => {
    const { titre, imageUrl, description, date } = req.body;
    const actualite = actualites.find(a => a.id === parseInt(req.params.id));

    if (!actualite) return res.status(404).send('Actualité non trouvée');

    // Mettre à jour l'actualité avec les nouvelles données
    actualite.titre = titre || actualite.titre;
    actualite.imageUrl = imageUrl || actualite.imageUrl;
    actualite.description = description || actualite.description;
    actualite.date = date || actualite.date;

    res.json(actualite);
});

// Route pour supprimer une actualité par son ID
app.delete('/api/actualites/:id', (req, res) => {
    const actualiteIndex = actualites.findIndex(a => a.id === parseInt(req.params.id));

    if (actualiteIndex === -1) return res.status(404).send('Actualité non trouvée');

    const deletedActualite = actualites.splice(actualiteIndex, 1); // Supprimer l'actualité
    res.json(deletedActualite);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
