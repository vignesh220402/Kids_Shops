import React from 'react';
import '../css/testimonials.css';
function Testimonials() {
  const reviews = [
    { id: 1, name: "Someone1", role: "Mom of 2 Kids", text: "The princess dress material I bought here is incredibly soft! My daughter absolutely loves it.", rating: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Someone2", role: "Father", text: "Ordered the wooden blocks set. The finishing is completely smooth, making it totally safe for toddler gameplay.", rating: "⭐⭐⭐⭐" },
    { id: 3, name: "Someone3", role: "New Mom", text: "The teddy bear is huge and super cute! The premium packaging and delivery completely exceeded my expectations.", rating: "⭐⭐⭐⭐⭐" }
  ];
  return (
    <div className="premium-page-container testimonial-bg">
      <span className="premium-badge">WORDS FROM PARENTS</span>
      <h2 className="testimonial-title">Loved by <span className="text-gradient">Happy Families</span></h2>
      
      <div className="testimonial-grid">
        {reviews.map(review => (
          <div key={review.id} className="testimonial-card">
            <div className="quote-mark">“</div>
            <p className="review-text">{review.text}</p>
            <div className="review-stars">{review.rating}</div>
            <div className="user-info">
              <h4>{review.name}</h4>
              <p>{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;