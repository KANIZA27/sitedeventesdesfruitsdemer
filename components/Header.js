// src/components/Header.js
import React from 'react';  // Importation de React pour pouvoir créer un composant fonctionnel
import { Link } from 'react-router-dom';  // Importation du composant 'Link' de react-router-dom pour la navigation

const Header = () => {
  return (
    // Définition de l'en-tête (header) de l'application
    <header>
      <nav>
        {/* Menu de navigation avec une liste non ordonnée */}
        <ul>
          {/* Chaque élément de la liste est un lien qui redirige vers une autre page de l'application */}
          <li><Link to="/">Accueil</Link></li>  {/* Lien vers la page d'accueil */}
          <li><Link to="/produits">Produits</Link></li>  {/* Lien vers la page des produits */}
          <li><Link to="/panier">Panier</Link></li>  {/* Lien vers la page du panier */}
          <li><Link to="/login">Connexion</Link></li>  {/* Lien vers la page de connexion */}
          <li><Link to="/signup">S'inscrire</Link></li>  {/* Lien vers la page d'inscription */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;  // Exportation du composant Header pour qu'il soit utilisé ailleurs dans l'application
