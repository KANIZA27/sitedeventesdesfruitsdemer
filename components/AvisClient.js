// src/components/AvisClient.js
import React, { useState, useEffect } from 'react';  // Importation de React et des hooks useState et useEffect pour gérer l'état et les effets secondaires
import axios from 'axios';  // Importation de la bibliothèque Axios pour effectuer des requêtes HTTP

const AvisClient = () => {
  // Déclaration de l'état 'avis' qui va contenir la liste des avis des clients
  const [avis, setAvis] = useState([]);

  // useEffect est utilisé ici pour effectuer une requête API quand le composant est monté
  useEffect(() => {
    // Envoi d'une requête GET pour récupérer les avis des clients depuis l'API
    axios.get('/api/avis')  // Assurez-vous que cette route existe dans ton API
      .then(response => {
        // Une fois la réponse obtenue, on met à jour l'état 'avis' avec les données reçues
        setAvis(response.data);
      })
      .catch(error => {
        // En cas d'erreur lors de la requête, on l'affiche dans la console
        console.error("Il y a eu une erreur : ", error);
      });
  }, []);  // Le tableau vide [] indique que cet effet sera exécuté seulement au montage du composant, une seule fois

  return (
    <div>
      <h2>Avis des Clients</h2>  {/* Titre de la section */}
      <div className="avis">
        {/* On parcourt le tableau 'avis' et on affiche chaque avis sous forme de carte */}
        {avis.map(av => (
          <div key={av.id} className="avis-card">  {/* Chaque carte d'avis a une clé unique basée sur l'id */}
            <h3>Note: {av.note}/5</h3>  {/* Affichage de la note de l'avis */}
            <p>{av.commentaire}</p>  {/* Affichage du commentaire de l'avis */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvisClient;  // Exportation du composant pour qu'il soit utilisé ailleurs dans l'application
