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
        titre: 'VISITE DE TERRAIN : CONSTRUCTION DE L\'ÉCOLE HENRI CLEMENT',
        imageUrl: '/hj.jpg',
        description: 'Actualité 1 description',
        date: '2025-03-01'
    },
    {
        id: 2,
        titre: 'SECURITE ELECTRIQUE AU 2E ARRONDISSEMENT',
        imageUrl: '/elec.jpg', // Le chemin est relatif au dossier public de React
        description: 'Actualité 2 description',
        date: '2025-03-10'
    },
    {
        id: 3,
        titre: 'NETTOYAGE DES CANIVEAUX AU QUARTIER CHIC',
        imageUrl: '/canivau.jpg',
        description: 'Actualité 3 description',
        date: '2025-03-20'
    }
];

// Route pour obtenir les 3 dernières actualités
app.get('/api/actualites', (req, res) => {
    res.json(actualites);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
