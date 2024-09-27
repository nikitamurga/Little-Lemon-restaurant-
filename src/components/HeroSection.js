import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <img src="path/to/hero-image.jpg" alt="Restaurant Dish" className="hero-image" />
    </section>
  );
}

export default HeroSection;
