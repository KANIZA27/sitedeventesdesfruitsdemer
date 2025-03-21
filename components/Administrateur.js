import React, { useState, useEffect } from 'react';  // Importation des hooks React useState et useEffect pour gérer l'état et les effets secondaires
import axios from 'axios';  // Importation d'Axios pour faire des requêtes HTTP

const Administrateur = () => {
  // Déclaration de l'état 'admins' qui va contenir les données des administrateurs
  const [admins, setAdmins] = useState([]);

  // useEffect est un hook qui s'exécute après le rendu du composant
  // Il sert ici à récupérer la liste des administrateurs via une requête GET à l'API
  useEffect(() => {
    // On envoie une requête GET pour récupérer les administrateurs depuis l'API
    axios.get('/api/administrateurs')  // Assurez-vous que cette route existe dans ton API
      .then(response => {
        // Lorsque la réponse est reçue avec succès, on met à jour l'état 'admins'
        setAdmins(response.data);
      })
      .catch(error => {
        // Si une erreur se produit, on l'affiche dans la console
        console.error("Il y a eu une erreur : ", error);
      });
  }, []);  // Le tableau vide [] indique que cet effet ne sera exécuté qu'une seule fois, au montage du composant

  return (
    <div>
      <h2>Administrateurs</h2>  {/* Titre de la section */}
      <div className="administrateurs">
        {/* On parcourt la liste des administrateurs et on crée une carte pour chaque admin */}
        {admins.map(admin => (
          <div key={admin.id} className="admin-card">  {/* Chaque carte a une clé unique basée sur l'id */}
            <h3>{admin.nom} {admin.prenom}</h3>  {/* Affichage du nom et prénom de l'administrateur */}
            <p>Email: {admin.email}</p>  {/* Affichage de l'email de l'administrateur */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administrateur;  // Exportation du composant pour qu'il puisse être utilisé ailleurs
