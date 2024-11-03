import React from 'react';
import '../styles/Header.css'; 
import logo from '../img/logoW.png';

function Header() {
  return (
    <nav>
      <div class="logo"><img src={logo} alt="Logo" /></div>
      <div>
          <ul>
              <li><a href="#about">O mně</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li><a href="#booking">Booking</a></li>
              <li><a href="#contact">Kontakt</a></li>
              <li><a href="#login">Přihlášení</a></li>
          </ul>
      </div>
    </nav>
  );
}

export default Header;