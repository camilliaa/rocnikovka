import React, { useState } from 'react';
import '../styles/Header.css'; 
import logo from '../img/logoW.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`logo ${isOpen ? 'hide-logo' : ''}`}>
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L19 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 17L19 17" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      <ul className={isOpen ? 'active' : ''}>
        <li><a href="#about">O mně</a></li>
        <li><a href="#gallery">Galerie</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="#contact">Kontakt</a></li>
        <li><a href="#login">Přihlášení</a></li>
      </ul>
    </nav>
  );
}

export default Header;
