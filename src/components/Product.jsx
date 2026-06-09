import React from "react";
import "../css/productGrid.css";

function ProductGrid({ filteredProducts, addToCart }) {
  return (
    <div className="products-grid-container">
      <div className="products-glass-grid">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="product-card-premium">
            <div className="card-top-section">
              <div 
                className="product-img-frame" 
                style={{ backgroundColor: product.bgColor }}
              >
                <img src={product.img} alt={product.name} className="product-display-img" />
              </div>

              <div className="product-meta-row">
                <span className="product-rating-badge">⭐ {product.rating}</span>
                <span className="product-category-tag">{product.category}</span>
              </div>

              <h4 className="product-title-text">{product.name}</h4>
              <p className="product-desc-text">{product.desc || "Premium quality product selected for your little ones."}</p>
            </div>

            <div className="card-bottom-section">
              <p className="product-price-tag">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className={`btn-glass-action ${index % 2 === 0 ? "blue-theme" : "pink-theme"}`}
              >
                Add To Bag ✨
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;