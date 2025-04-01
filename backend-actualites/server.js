const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Utiliser le port dynamique pour le déploiement
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));

// Permettre à ton frontend de faire des requêtes vers ce serveur
app.use(cors({
    origin: '*', // Autoriser toutes les origines ou spécifie ton domaine ici
}));

// Middleware pour analyser les corps des requêtes au format JSON
app.use(express.json());

// Servir des fichiers statiques à partir du dossier "public"
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
let actualites = [
    {
        id: 1,
        titre: 'Projet d’Assainissement des Quartiers',
        imageUrl: '/travaux-assainissement.jpg',  // Pas besoin du backend
        description: 'Actualité 1 description',
        date: '2025-03-01',
    },
    {
        id: 2,
        titre: 'VISITE DE TERRAIN : Engagement pour le bien-être',
        imageUrl: '/inondation.jpg',
        description: 'La Mairie du 2ème arrondissement démontre son engagement.',
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
        titre: 'Modernisation et embellissement au 2ᵉ Arrondissement',
        imageUrl: '/carref-centre-social.jpg',
        description: "Des aménagements sont en cours.",
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
