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
          Monsieur James
        </Typography>
        <img
          src={require('../../Images/eleve 4.jpg')}
          alt="" />
      </Paper>

      {/* Deuxième Paper */}
      <Paper className='paper2'
        elevation={3} 
        
      >
        <Typography variant="body1" color="textSecondary">
          Assistant technique  :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Madame Jessi
        </Typography>
        <img
          src={require('../../Images/eleve 2.jpg')}
          alt="" />
      </Paper>
    </div>
  );
};

export default Profil;
