import React from 'react';
import './NavbarAutorisationsUrb.css'; // Fichier CSS pour le style
import logo from '../../Images/logo Mairie.jpg'; // Chemin vers ton logo
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Icône de menu hamburger
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',       // Couleur principale (ex : bleu)
      light: '#63a4ff',      // Teinte plus claire de la couleur principale
      dark: '#004ba0',       // Teinte plus foncée de la couleur principale
      contrastText: '#fff',  // Couleur du texte contrastant (ex : blanc)
    },
    secondary: {
      main: '#1B3D71',       // Couleur secondaire (ex : rose)
      light: '#ff79b0',      // Teinte plus claire de la couleur secondaire
      dark: '#c60055',       // Teinte plus foncée de la couleur secondaire
      contrastText: '#000',  // Couleur du texte contrastant (ex : noir)
    },
  },
});


const NavbarAutorisationsUrb = () => {
  const [open, setOpen] = React.useState(false); // État pour contrôler l'ouverture du menu

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemText primary={<a href="#home">Accueil</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#services">Services</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#about">À propos</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#projects">Projets</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#contact">Contact</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#faq">FAQ</a>} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" className="navbar">
      <Toolbar className='navbar-container'>
        <div className="navbar-logo">
          <Link to='/'>
          <img src={logo} alt="Logo Mairie" />
          </Link>
        </div>

        {/* Icône de menu hamburger */}
        <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
          <MenuIcon color="secondary" />
        </IconButton>
      </Toolbar>

      {/* Drawer pour le menu */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </AppBar>
    </ThemeProvider>
  );
};

export default NavbarAutorisationsUrb;
