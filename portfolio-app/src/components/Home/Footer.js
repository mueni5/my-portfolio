import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      
        
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 CM Mbuvi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
