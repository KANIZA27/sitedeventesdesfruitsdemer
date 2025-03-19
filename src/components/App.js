// src/App.js
import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';    // Importation des styles principaux
import ProductCard from './ProductCard';  // Importation du composant ProductCard
import Shop from './Shopping'; // Importation du composant Shop
import Banner from './Banner'; // Importation du composant Banner
import Navbar from './Navbar'; // Importation du composant Navbar

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Barre de navigation en haut */}
      <Banner />  {/* Bannière avec une image et un titre */}
      <ProductCard />  {/* Affichage de la carte produit */}
      <Shop />          {/* Affichage du composant Shop pour le catalogue */}
    </div>
  );
}

export default App;
