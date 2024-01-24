// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

export default function ProductDetails({ products, order, addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const handleAddToCart = () => {
    addToCart(id);
  };

  return product ? (
    <div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong>$ {product.price}</p>
      <p><strong>Cart Quantity:</strong> {order[id] || 0}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  ) : (
    <div>Product not found</div>
  );
}