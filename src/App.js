// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import Cart from './Cart';
import './App.css';


function App() {
  const products = [
    // replace this array with your actual products
    { id: '1', name: 'Product 1', description: 'This is product 1', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '2', name: 'Product 2', description: 'This is product 2', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '3', name: 'Product 3', description: 'This is product 3', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '4', name: 'Product 4', description: 'This is product 4', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '5', name: 'Product 5', description: 'This is product 5', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '6', name: 'Product 6', description: 'This is product 6', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '7', name: 'Product 7', description: 'This is product 7', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    { id: '8', name: 'Product 8', description: 'This is product 8', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
    // ...
    { id: '9', name: 'Product 9', description: 'This is product 9', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?q=80&w=3292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',price:20 },
  ];

  const [order, setOrder] = useState({});

  const addToCart = (id) => {
    setOrder((prevOrder) => {
      return { ...prevOrder, [id]: (prevOrder[id] || 0) + 1 };
    });
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/product/:id" element={<ProductDetails products={products} order={order} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart products={products} order={order} setOrder={setOrder} />} />
          <Route path="/" element={<HomePage products={products} order={order} addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;