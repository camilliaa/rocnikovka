import React from 'react';
import '../styles/Header.css'; 

function Header() {
  return (
    <header className="headerContainer">
      <nav>
        <div class="footer-left">MojeLogo</div>
        <div class="footer-right">
            <ul>
                <li><a href="#about">O mně</a></li>
                <li><a href="#galerie">Galerie</a></li>
                <li><a href="#booking">Booking</a></li>
                <li><a href="#contact">Kontakt</a></li>
                <li><a href="#login">Přihlášení</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;