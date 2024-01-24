

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/cart" className="nav-button">Cart</Link>
    </nav>
  );
}