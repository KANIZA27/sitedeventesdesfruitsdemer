// src/components/Login.js
import React, { useState } from 'react';  // Importation de React et du hook useState pour gérer l'état local
import { useHistory } from 'react-router-dom';  // Importation de useHistory pour gérer la navigation après connexion
import { loginUtilisateur } from '../services/utilisateurService';  // Importation de la fonction de connexion

const Login = () => {
  // Déclaration des états pour l'email et le mot de passe
  const [email, setEmail] = useState('');  // Utilisation de useState pour gérer l'email
  const [motdepasse, setMotdepasse] = useState('');  // Utilisation de useState pour gérer le mot de passe
  
  // Utilisation du hook useHistory pour rediriger l'utilisateur après la connexion
  const history = useHistory();

  // Fonction qui sera appelée lors de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();  // Empêche le comportement par défaut du formulaire (rechargement de la page)
    try {
      // Appel de la fonction loginUtilisateur pour vérifier les informations de l'utilisateur
      await loginUtilisateur({ email, motdepasse });
      // Si la connexion réussit, rediriger vers la page d'accueil
      history.push('/');
    } catch (error) {
      // En cas d'erreur, afficher une erreur dans la console
      console.error('Erreur de connexion', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>  {/* Formulaire qui appelle handleSubmit lors de la soumission */}
        {/* Champ pour l'email */}
        <input
          type="email"
          value={email}  // Valeur de l'input liée à l'état email
          onChange={(e) => setEmail(e.target.value)}  // Mise à jour de l'état email lors du changement
          placeholder="Email"  // Texte affiché dans le champ
          required  // Champ requis
        />
        {/* Champ pour le mot de passe */}
        <input
          type="password"
          value={motdepasse}  // Valeur de l'input liée à l'état motdepasse
          onChange={(e) => setMotdepasse(e.target.value)}  // Mise à jour de l'état motdepasse lors du changement
          placeholder="Mot de passe"  // Texte affiché dans le champ
          required  // Champ requis
        />
        {/* Bouton pour soumettre le formulaire */}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;  // Exportation du composant Login pour qu'il puisse être utilisé ailleurs dans l'application
