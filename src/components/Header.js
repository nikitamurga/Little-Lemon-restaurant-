
import React from 'react';
import './Header.css';
import logo from '../images/logo.png'; // replace with your logo path

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
