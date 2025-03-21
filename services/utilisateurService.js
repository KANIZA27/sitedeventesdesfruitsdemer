// src/services/utilisateurService.js
import api from '../config/api';

// Fonction pour la connexion d'un utilisateur
export const loginUtilisateur = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    localStorage.setItem('token', response.data.token); // Stocke le token dans le localStorage
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error;
  }
};

// Fonction pour l'inscription d'un utilisateur
export const inscrireUtilisateur = async (utilisateur) => {
  try {
    const response = await api.post('/signup', utilisateur);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    throw error;
  }
};

// Fonction pour récupérer l'utilisateur connecté (utilise le token)
export const getUtilisateurConnecte = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { token }; // Exemple simple : dans une vraie app, vous décoderiez le token JWT pour extraire les informations de l'utilisateur
  }
  return null;
};
