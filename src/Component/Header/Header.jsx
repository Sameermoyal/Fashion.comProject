import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ toggleTheme, isDarkTheme }) {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">FASHION.COM</Link>
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/men" className="nav-link">MEN</Link>
        <Link to="/women" className="nav-link">WOMEN</Link>
        <Link to="/child" className="nav-link">CHILD</Link>
      </nav>

      <div className="action-buttons">
        <Link to="/cart" className="icon-link">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/contact" className="icon-link">
          <i className="fa-solid fa-address-book"></i>
        </Link>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
    </header>
  );
}

export default Header;
