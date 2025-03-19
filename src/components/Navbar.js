// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Nous allons ajouter du style à cette barre de navigation

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Accueil</Link>
        </li>
        <li className="navbar-item">
          <Link to="/catalogue" className="navbar-link">Catalogue produit</Link>
        </li>
        <li className="navbar-item">
          <Link to="/achat-paiement" className="navbar-link">Achat / Paiement</Link>
        </li>
        <li className='navbar-item'>
            <Link to="/connexion-inscription" className='navbar-link'>Connexion / Incription</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
