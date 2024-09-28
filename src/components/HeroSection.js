import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import restaurantImage from '../images/restauranfood.jpg';

function HeroSection() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/reservations');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <img src={restaurantImage} alt="Restaurant Dish" className="hero-image" />
    </section>
  );
}

export default HeroSection;
