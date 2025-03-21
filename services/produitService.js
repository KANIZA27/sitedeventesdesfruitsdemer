// src/services/produitService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/produits';  // URL du serveur Node.js

// Fonction pour récupérer les produits depuis l'API
export const getProduits = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Retourne les produits récupérés
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    throw error;
  }
};

