// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configuration de CORS pour autoriser les requêtes depuis React (frontend)
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Ton utilisateur MySQL
  password: 'Saindoumy15@e',  // Ton mot de passe MySQL
  database: 'fruits_de_mer'  // Nom de ta base de données
});

// Vérification de la connexion à la base de données
db.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Route pour récupérer les produits depuis la base de données
app.get('/api/produits', (req, res) => {
  const query = 'SELECT * FROM produits';  // Query pour récupérer les produits
  db.query(query, (err, results) => {
    if (err) {
      console.log('Erreur lors de la récupération des produits:', err);
      return res.status(500).send('Erreur serveur');
    }
    res.json(results);  // Envoie les résultats en réponse
  });
});

// Démarrer le serveur
const port = 5000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
