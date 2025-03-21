// src/config/api.js
import axios from 'axios';

// Configuration de l'URL de base pour l'API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Assurez-vous que cette variable d'environnement soit définie dans .env

// Créez une instance axios avec l'URL de base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
