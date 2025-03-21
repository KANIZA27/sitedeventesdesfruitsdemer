// src/components/Categorie.js
import React, { useState, useEffect } from 'react';  // Importation de React et des hooks useState et useEffect pour gérer l'état et les effets secondaires
import axios from 'axios';  // Importation de la bibliothèque Axios pour effectuer des requêtes HTTP

const Categorie = () => {
  // Déclaration de l'état 'categories' qui va contenir la liste des catégories
  const [categories, setCategories] = useState([]);

  // useEffect est utilisé ici pour effectuer une requête API quand le composant est monté
  useEffect(() => {
    // Envoi d'une requête GET pour récupérer les catégories depuis l'API
    axios.get('/api/categories')  // Assurez-vous que cette route existe dans ton API
      .then(response => {
        // Une fois la réponse obtenue, on met à jour l'état 'categories' avec les données reçues
        setCategories(response.data);
      })
      .catch(error => {
        // En cas d'erreur lors de la requête, on l'affiche dans la console
        console.error("Il y a eu une erreur : ", error);
      });
  }, []);  // Le tableau vide [] indique que cet effet sera exécuté seulement au montage du composant, une seule fois

  return (
    <div>
      <h2>Catégories</h2>  {/* Titre de la section */}
      <div className="categories">
        {/* On parcourt le tableau 'categories' et on affiche chaque catégorie sous forme de carte */}
        {categories.map(categorie => (
          <div key={categorie.id} className="categorie-card">  {/* Chaque carte de catégorie a une clé unique basée sur l'id */}
            <h3>{categorie.nom}</h3>  {/* Affichage du nom de la catégorie */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorie;  // Exportation du composant pour qu'il soit utilisé ailleurs dans l'application
