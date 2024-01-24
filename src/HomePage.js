// HomePage.js
import React from 'react';
import Product from './Product';
import './HomePage.css';

export default function HomePage({ products, order, addToCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} order={order} addToCart={addToCart}/>
      ))}
    </div>
  );
}