import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import imageMariage from '../Images/Mariage.jpeg';

export default function MediaCard1() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh', // Hauteur de la vue pour centrer verticalement
        padding: 2,
        boxSizing: 'border-box', // Assure que tout est bien contenu dans la fenêtre
      }}
    >
      <Card
        sx={{
          width: 1080, // Largeur augmentée
          height: 540, // Hauteur augmentée
          boxShadow: 3, // Ajout d'une ombre pour un effet esthétique
          borderRadius: 2, // Coins légèrement arrondis
        }}
      >
        {/* Agrandissement de l'image */}
        <CardMedia
          sx={{
            height: 300, // Augmente la hauteur de l'image
            backgroundSize: 'cover', // Ajuste l'image pour qu'elle couvre l'espace
          }}
          image={imageMariage}
        />
        <CardContent>
          {/* Agrandissement du titre */}
          <Typography
            gutterBottom
            variant="h3" // Taille de titre plus grande
            component="div"
            sx={{
              fontWeight: 'bold', // Rend le titre plus visible
              fontSize:'20px',
              color:'#1B3D71'
            }}
          >
            PROCESSUS DE DÉCLARATION DE MARIAGE

          </Typography>
          {/* Agrandissement du texte de contenu */}
          <Typography
            variant="p" // Texte plus grand
            sx={{
              color: 'text.secondary',
              lineHeight: 1, // Améliore la lisibilité
              fontSize:'15px',
              fontWeight:'bold'
            }}
          >
           Vous souhaitez vous mariez ?  <br />
            Suivez ces étapes simples pour une procédure rapide à la Mairie du
            2e Arrondissement.
          </Typography>
        </CardContent>
        <CardActions>
        <a href="/CONSTITUTION%20DU%20DOSSIER%20DE%20MARIAGE2.pdf" target="_blank" rel="noopener noreferrer">
         <button className='telechargebtn'>Voir plus</button>
        </a>
        </CardActions>
      </Card>
    </Box>
  );
}
