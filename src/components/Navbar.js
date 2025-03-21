// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active">Accueil</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to="/apropos" className="navbar-link" activeClassName="active">Apropos</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/catalogue" className="navbar-link" activeClassName="active">Catalogue produit</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/achat-paiement" className="navbar-link" activeClassName="active">Achat / Paiement</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/connexion-inscription" className="navbar-link" activeClassName="active">Connexion / Inscription</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

