import React from 'react';
import './Highlights.css';
import greekSaladImage from '../images/greek salad.jpg';
import bruschettaImage from '../images/bruchetta.svg';
import lemonDessertImage from '../images/lemon dessert.jpg';

const specials = [
  {
    name: 'Greek Salad',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese...',
    price: '$12.99',
    image: greekSaladImage,
  },
  {
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt...',
    price: '$5.89',
    image: bruschettaImage,
  },
  {
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced...',
    price: '$5.00',
    image: lemonDessertImage,
  },
];

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This week's specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div key={index} className="special-card">
            <img src={item.image} alt={item.name} className="special-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <button className="order-button">Order a Delivery</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
