// src/pages/Shop.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Shopping.css'
import listeProduit from '../data/listeProduit';

function Shop() {
  const fruitsDeMer = [
    { name: 'Pwedza', image: '/image/pwedza.png', price: 40 },
    { name: 'Trondro', image: '/image/trondro.jpg', price: 150 },
    { name: 'Kamara', image: '/image/kamara.jpg', price: 20 },
    { name: 'Crabe', image: '/image/crabe.webp', price: 17 },
    { name: 'Crevette', image: '/image/crevettes.jpg', price: 12 },
    { name: 'Calamars', image: '/image/calamars.webp', price: 15 },
    { name: 'Homard', image: '/image/homard.jpg', price: 9 },
    { name: 'Langouste', image: '/image/langouste.jpg', price: 19 }

  
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
      <ul>
        {fruitsDeMer.map((fruit, index) => (
          <ProductCard key={index} name={fruit.name} image={fruit.image} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}


export default Shop;
