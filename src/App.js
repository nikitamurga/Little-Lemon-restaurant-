import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection.js';
import Highlights from './components/Highlights.js';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="flex-container">
      <Header />
      <HeroSection />
      <Highlights />
      <Footer />
    </div>
  );
}


export default App;
