import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking'; // Импорт компонента подтверждения
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            {/* Главная страница */}
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <Highlights />
                </>
              } 
            />
            {/* Страница бронирования */}
            <Route path="/reservations" element={<BookingPage />} />
            {/* Страница подтверждения */}
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
