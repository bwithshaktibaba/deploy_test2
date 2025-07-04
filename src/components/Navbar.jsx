import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const state = useSelector(state => state.handleCart);

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <NavLink className="brand" to="/">React Ecommerce</NavLink>

        <div className="nav-links">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/product" className="nav-item">Products</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>
          <NavLink to={"/contact"} className="nav-item">Contact</NavLink>
        </div>

        <div className="nav-buttons">
          <NavLink to="/login" className="btn">Login</NavLink>
          <NavLink to="/register" className="btn">Register</NavLink>
          <NavLink to="/cart" className="btn">Cart ({state.length})</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;