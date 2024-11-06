import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div><Link to="/">HOME</Link></div>
        <div><Link to="/cart">CART</Link></div>
        <div><Link to="/about">ABOUT</Link></div>
        <div><Link to="/contact">CONTACT</Link></div>
        <div><Link to="/blog">BLOGS</Link></div>
      </div>
    </footer>
  );
}

export default Footer;
