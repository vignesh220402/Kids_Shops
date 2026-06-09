import React from 'react';
import '../css/contact.css';

function Contact() {
  return (
    <div className="premium-page-container contact-bg">
      <div className="contact-box-wrapper">
        <div className="contact-info-panel">
          <span className="premium-badge" style={{background:'rgba(255,255,255,0.2)', color:'#fff'}}>GET IN TOUCH</span>
          <h2>Let's Connect, <br />Partner! 🤝</h2>
          <p>Have any questions or custom requests? Drop us a line and let's configure your ideal order!</p>
          <div className="info-item">📍 <span>Puducherry, India</span></div>
          <div className="info-item">📞 <span>+91 98765 43210</span></div>
          <div className="info-item">📧 <span>support@kidszone.com</span></div>
        </div>
        <form className="contact-form-panel" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name..." className="glass-input" />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Vignesh@gmail.com" className="glass-input" />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Type your premium message here..." rows="4" className="glass-input"></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message ✨</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;