// src/pages/Shop.js
import React from 'react';
import ProductCard from './ProductCard';
import '../styles/Shop.css'
import listeProduit from '../data/listeProduit';
// Importation des images depuis `src/assets/images`
import pwedza from '../assets/images/pwedza.png';
import trondro from '../assets/images/trondro.jpg';
import kamara from '../assets/images/kamara.jpg';
import crabe from '../assets/images/crabe.webp';
import crevettes from '../assets/images/crevettes.jpg';
import calamars from '../assets/images/calamars.webp';
import homard from '../assets/images/homard.jpg';
import langouste from '../assets/images/langouste.jpg';

function Shop() {
  const fruitsDeMer = [
    { name: 'Pwedza', image: pwedza, price: 40 },
    { name: 'Trondro', image: trondro, price: 150 },
    { name: 'Kamara', image: kamara, price: 20 },
    { name: 'Crabe', image: crabe, price: 17 },
    { name: 'Crevette', image: crevettes, price: 12 },
    { name: 'Calamars', image: calamars, price: 15 },
    { name: 'Homard', image: homard, price: 9 },
    { name: 'Langouste', image: langouste, price: 19 }
  ];

  // Exemples de produits pour générer un tableau des prix (si nécessaire)
  const listeProduit = fruitsDeMer.map((fruit) => ({
    prix: fruit.price,  // Ajout de la virgule ici
    name: fruit.name,
    image: fruit.image
  }));
  
  // Extraction des prix uniques
  const prix = listeProduit.reduce((prix, produit) =>
    prix.includes(produit.prix) ? prix : [...prix, produit.prix],
    []
  );

  console.log("Prix produits :", prix);

  // Composant pour afficher chaque fruit avec son prix et image
  function ProductCard({ name, image, price }) {
    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Price: {price} € </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Fruits de Mer</h1>
      <div className="product-list">
        {fruitsDeMer.map((fruit, index) => (
          <ProductCard key={index} name={fruit.name} image={fruit.image} price={fruit.price} />
        ))}
      </div>
    </div>
  );
};



export default Shop;
