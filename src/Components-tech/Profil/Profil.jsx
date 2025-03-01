import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Profil.css'

const Profil = () => {
  return (
    <div className='profil-bosse'
     
    >
      {/* Premier Paper */}
      <Paper className='paper1' 
       
      >
        <Typography variant="body1" color="textSecondary">
          Assistant technique :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Monsieur Derson Levy
        </Typography>
        <img
          src={require('../../Images/eleve 4.jpg')}
          alt="" />
      </Paper>

      {/* Deuxième Paper */}
      <Paper className='paper2'
        elevation={3} 
        style={{
          padding: '20px',
          width: '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',          
          alignItems: 'center',
          overflow:'hidden'
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Assistant technique  :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Madame Fyti Naicka
        </Typography>
        <img
          src={require('../../Images/eleve 2.jpg')}
          alt="" />
      </Paper>
    </div>
  );
};

export default Profil;
