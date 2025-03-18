// src/pages/Shop.js
import React from 'react';
import ProductCard from '../components/ProductCard';

function Shop() {
  const fruitsDeMer = [
    { name: 'Pwedza', image: '/images/pwedza.jpg' },
    { name: 'Trondro', image: '/images/trondro.jpg' },
    { name: 'Kamara', image: '/images/kamara.jpg' },
    { name: 'Crabe', image: '/images/crabe.jpg' },
    { name: 'Crevette', image: '/images/crevette.jpg' },
    { name: 'Calamars', image: '/images/calamars.jpg' },
    { name: 'Homard', image: '/images/homard.jpg' },
    { name: 'Langoustines', image: '/images/langoustines.jpg' }
  ];

  return (
    <div>
      <h1>Fruits de Mer</h1>
      <div className="product-list">
        {fruitsDeMer.map((fruit, index) => (
          <ProductCard key={index} name={fruit.name} image={fruit.image} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
