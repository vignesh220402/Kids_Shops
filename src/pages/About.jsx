import React from 'react';
import '../css/about.css';

function About() {
  return (
    <div className="premium-page-container about-bg">
      <div className="about-glass-card">
        <span className="premium-badge">OUR STORY</span>
        <h2>Welcome to <span className="text-gradient">KidsZone Hub</span></h2>
        <p className="about-lead">We are not just another online storefront; we are a premium universe built to celebrate every little moment of childhood joy!</p>
        
        <div className="about-divider"></div>
        
        <div className="about-stats">
          <div className="stat-box">
            <h4>10K+</h4>
            <p>Happy Parents</p>
          </div>
          <div className="stat-box">
            <h4>100%</h4>
            <p>Safe Materials</p>
          </div>
          <div className="stat-box">
            <h4>24/7</h4>
            <p>Premium Support</p>
          </div>
        </div>

        <p className="about-details">
          Every single one of our products undergoes strict quality testing before reaching your hands. From fabric softness to toy structural safety, we ensure a 100% commitment to excellence.
        </p>
      </div>
    </div>
  );
}

export default About;