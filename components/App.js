
import React from 'react';  // Importation de React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Importation des composants nécessaires de react-router-dom pour la gestion du routage
import Header from './components/Header';  // Importation du composant Header pour l'en-tête
import Footer from './components/Footer';  // Importation du composant Footer pour le pied de page
import Login from './components/Login';  // Importation du composant Login pour la page de connexion
import Signup from './components/Signup';  // Importation du composant Signup pour la page d'inscription
import Produit from './components/Produit';  // Importation du composant Produit pour afficher la liste des produits
import Panier from './components/Panier';  // Importation du composant Panier pour afficher et gérer le panier

const App = () => {
  return (
    // Le composant Router permet de gérer la navigation et les routes
    <Router>
      <Header />  {/* Affichage de l'en-tête du site */}
      
      <div className="content">  {/* Conteneur principal pour le contenu de la page */}
        <Switch>  {/* Switch permet de rendre uniquement la première route correspondante */}
          {/* Route pour la page de connexion */}
          <Route path="/login" component={Login} />
          
          {/* Route pour la page d'inscription */}
          <Route path="/signup" component={Signup} />
          
          {/* Route pour afficher les produits */}
          <Route path="/produits" component={Produit} />
          
          {/* Route pour afficher le panier */}
          <Route path="/panier" component={Panier} />
          
          {/* Route par défaut, si aucune des précédentes ne correspond */}
          <Route path="/" exact component={Produit} />  {/* Affiche les produits sur la page d'accueil */}
        </Switch>
      </div>
      
      <Footer />  {/* Affichage du pied de page */}
    </Router>
  );
};

export default App;  // Exportation du composant principal de l'application
