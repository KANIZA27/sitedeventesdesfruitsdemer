// src/components/Paiement.js
import React, { useState, useEffect } from 'react';  // Importation de React et des hooks useState et useEffect
import axios from 'axios';  // Importation d'axios pour effectuer des requêtes HTTP

const Paiement = () => {
  // Déclaration de l'état pour stocker les paiements
  const [paiements, setPaiements] = useState([]);  // Utilisation de useState pour gérer la liste des paiements

  // Utilisation de useEffect pour effectuer la requête API lors du montage du composant
  useEffect(() => {
    axios.get('/api/paiements')  // Envoie une requête GET à l'API pour récupérer la liste des paiements
      .then(response => {
        setPaiements(response.data);  // Si la requête réussit, mettre à jour l'état paiements avec les données reçues
      })
      .catch(error => console.error("Il y a eu une erreur : ", error));  // En cas d'erreur, afficher l'erreur dans la console
  }, []);  // Le tableau vide [] assure que l'effet est exécuté une seule fois, lors du montage initial

  return (
    <div>
      <h2>Paiements</h2>
      <div className="paiements">
        {/* Pour chaque paiement récupéré, on affiche une carte avec les informations */}
        {paiements.map(paiement => (
          <div key={paiement.id} className="paiement-card">  {/* Utilisation de l'ID comme clé unique */}
            <h3>Paiement #{paiement.id}</h3>  {/* Affiche l'ID du paiement */}
            <p>Montant: {paiement.montant} €</p>  {/* Affiche le montant du paiement */}
            <p>Méthode: {paiement.methode}</p>  {/* Affiche la méthode de paiement */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paiement;  // Exportation du composant Paiement pour qu'il puisse être utilisé ailleurs
