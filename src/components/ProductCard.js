// src/components/ProductCard.js
import React from 'react';

function ProductCard({ name, image }) {
  return (
    <div className="product-card">
      {/* Utilisation de la prop `image` passée à la fonction */}
      <img src={image} alt={name} />

      <h3>{name}</h3>
    </div>
  );
}


export default ProductCard;
