import React from 'react';
import '../css/shop.css';

function Shop() {
  return (
    <div className="premium-page-container shop-bg">
      <div className="glass-hero-banner">
        <span className="premium-badge">✨ NEW ARRIVALS 2026</span>
        <h1 className="premium-page-title">The Premium <span className="text-gradient">Kids Boutique</span></h1>
        <p className="premium-page-subtitle">Your one-stop destination for premium children's apparel, toys, and daily essentials!</p>
      </div>

      <div className="shop-features-grid">
        <div className="feature-glass-card">
          <div className="feature-icon">🧸</div>
          <h3>Organic Toys</h3>
          <p>100% non-toxic, safe, and ultra-soft playful companions for your little ones.</p>
        </div>
        <div className="feature-glass-card">
          <div className="feature-icon">👗</div>
          <h3>Luxury Apparel</h3>
          <p>Comfortable and stylish clothing, perfect for festive seasons and daily wear.</p>
        </div>
        <div className="feature-glass-card">
          <div className="feature-icon">🎒</div>
          <h3>School Packs</h3>
          <p>Lightweight premium backpacks ergonomically designed for maximum back support.</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;