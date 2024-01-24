// Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Product({ product, order, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong>$ {product.price}</p>
      <p><strong>Cart Quantity:</strong> {order[product.id] || 0}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}