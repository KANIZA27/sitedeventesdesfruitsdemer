import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';   // Importation de ton fichier CSS
import App from './components/App';  // Ton composant App principal
import { BrowserRouter } from 'react-router-dom';  // Import de BrowserRouter pour gérer le routage
import reportWebVitals from './reportWebVitals';

// Création du root pour ton application React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application avec BrowserRouter enveloppant le composant App
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Enveloppe l'application dans BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si tu veux mesurer la performance de ton app, tu peux passer une fonction à reportWebVitals
reportWebVitals();
