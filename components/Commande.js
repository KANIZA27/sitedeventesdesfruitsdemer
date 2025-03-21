// src/components/Commande.js
import React, { useState, useEffect } from 'react';  // Importation de React et des hooks useState et useEffect pour gérer l'état et les effets secondaires
import axios from 'axios';  // Importation de la bibliothèque Axios pour effectuer des requêtes HTTP

const Commande = () => {
  // Déclaration de l'état 'commandes' qui va contenir la liste des commandes
  const [commandes, setCommandes] = useState([]);

  // useEffect est utilisé ici pour effectuer une requête API lorsque le composant est monté
  useEffect(() => {
    // Envoi d'une requête GET pour récupérer les commandes depuis l'API
    axios.get('/api/commandes')  // Assurez-vous que cette route existe dans ton API
      .then(response => {
        // Une fois la réponse obtenue, on met à jour l'état 'commandes' avec les données reçues
        setCommandes(response.data);
      })
      .catch(error => {
        // En cas d'erreur lors de la requête, on l'affiche dans la console
        console.error("Il y a eu une erreur : ", error);
      });
  }, []);  // Le tableau vide [] indique que cet effet sera exécuté seulement au montage du composant, une seule fois

  return (
    <div>
      <h2>Commandes</h2>  {/* Titre de la section */}
      <div className="commandes">
        {/* On parcourt le tableau 'commandes' et on affiche chaque commande sous forme de carte */}
        {commandes.map(commande => (
          <div key={commande.id} className="commande-card">  {/* Chaque carte de commande a une clé unique basée sur l'id */}
            <h3>Commande #{commande.id}</h3>  {/* Affichage de l'identifiant de la commande */}
            <p>Statut: {commande.statut}</p>  {/* Affichage du statut de la commande */}
            <p>Total: {commande.total} €</p>  {/* Affichage du total de la commande */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commande;  // Exportation du composant pour qu'il soit utilisé ailleurs dans l'application
