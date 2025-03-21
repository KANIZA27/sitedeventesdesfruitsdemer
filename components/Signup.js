
// src/components/Signup.js
import React, { useState } from 'react';  // Importation de React et du hook useState
import { inscrireUtilisateur } from '../services/utilisateurService';  // Importation de la fonction pour inscrire un utilisateur via l'API

const Signup = () => {
  // Déclaration des états pour gérer l'email et le mot de passe
  const [email, setEmail] = useState('');  // État pour l'email
  const [motdepasse, setMotdepasse] = useState('');  // État pour le mot de passe

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();  // Empêche la soumission par défaut du formulaire (rechargement de la page)
    try {
      // Appel de la fonction inscrireUtilisateur pour envoyer les données à l'API
      await inscrireUtilisateur({ email, motdepasse });
      alert('Inscription réussie');  // Affiche une alerte si l'inscription est réussie
    } catch (error) {
      console.error('Erreur d\'inscription', error);  // Affiche l'erreur dans la console si l'inscription échoue
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      {/* Formulaire d'inscription */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Met à jour l'email chaque fois qu'il change
          placeholder="Email"
          required  // Rend ce champ obligatoire
        />
        <input
          type="password"
          value={motdepasse}
          onChange={(e) => setMotdepasse(e.target.value)}  // Met à jour le mot de passe chaque fois qu'il change
          placeholder="Mot de passe"
          required  // Rend ce champ obligatoire
        />
        <button type="submit">S'inscrire</button>  {/* Bouton pour soumettre le formulaire */}
      </form>
    </div>
  );
};

export default Signup;  // Exportation du composant Signup pour pouvoir l'utiliser ailleurs
