import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/logo Mairie.jpg';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar">

        {/* LEFT */}
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo Mairie" className="navbar-logo" />
          </Link>

          
        </div>

        {/* CENTER MENU (desktop) */}
        <div className="navbar-links">
          <Link to="/">Accueil</Link>
          <Link to="/agenda">Agenda</Link>
          <Link to="/galerie">Galerie</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">
          <a
            href="https://calendly.com/safou-christiansergio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="audience-btn"
          >
            Allo 2e
          </a>

          <IconButton onClick={toggleDrawer} className="menu-btn">
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <div className="drawer-content">
          <List>
            {[
              { label: 'Accueil', path: '/' },
              { label: 'Agenda', path: '/agenda' },
              { label: 'Galerie', path: '/galerie' },
              { label: 'Contact', path: '/contact' },
            ].map((item, i) => (
              <ListItem button key={i} onClick={toggleDrawer}>
                <ListItemText>
                  <Link to={item.path}>{item.label}</Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;