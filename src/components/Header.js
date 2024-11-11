import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'; 
import logo from '../img/logoW.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
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

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/about" onClick={toggleMenu}>O mně</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Galerie</Link></li>
        <li><Link to="/booking" onClick={toggleMenu}>Booking</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li>
        <li><Link to="/login" onClick={toggleMenu}>Přihlášení</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
