import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
function Navbar({ cartCount, onFilterChange }) {
  return (
    <nav className="glass-navbar">
      <h2 className="navbar-logo" onClick={() => onFilterChange("all")}>
        ✨ <span className="logo-blue">Kids</span>Zone
      </h2>
      <div className="nav-links-container">
        <Link to="/" className="nav-item-link">Home</Link>
        <Link to="/shop" className="nav-item-link">Shop</Link>
        <Link to="/about" className="nav-item-link">About Us</Link>
        <Link to="/testimonials" className="nav-item-link">Testimonials</Link>
        <Link to="/contact" className="nav-item-link">Contact</Link>
      </div>
      <div className="navbar-actions">
        <div className="offer-menu-badge">
          <span>💎</span> Offers Menu
        </div>
        <div className="cart-bag-btn">
          <span>🛒</span>{" "}
          <span className="cart-text">
            <Link to="/mybags">My Bags</Link>
          </span>
          <span className="cart-badge-count">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;