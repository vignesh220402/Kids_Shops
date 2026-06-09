import React from "react";
import "../css/hero.css";
function Hero({ altImg }) {
  return (
    <div className="hero-glass-container">
      <div
        className="hero-dynamic-bg"
        style={{ backgroundImage: `url(${altImg})` }}
      ></div>
      <div className="hero-text-content">
        <span className="hero-tag">💎 LUXURY GLASS EDITION</span>
        <h1 className="hero-title">
          Classy Dynamic <br />
          <span className="title-highlight">Kids Boutique 💖</span>
        </h1>
        <p className="hero-description">
          Beautiful animations and 100% authentic kids' merchandise crafted just
          for you!
        </p>
      </div>
      <div className="hero-image-wrapper">
        <img
          src={altImg}
          alt="Featured Product"
          className="hero-floating-img"
        />
      </div>
    </div>
  );
}
export default Hero;
