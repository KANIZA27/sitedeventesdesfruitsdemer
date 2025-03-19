// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';  // Importation du fichier CSS pour styliser le composant
import pwedza from '../assets/image/pwedza.png';  // Importation de l'image

function Banner() {
  return (
    <div className="banner">
      <img src={pwedza} alt="Pwedza" className="banner-image" />
      <h1 className="banner-title">Bienvenue sur notre boutique de Fruits de Mer</h1>
    </div>
  );
}

export default Banner;
