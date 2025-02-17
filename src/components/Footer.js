import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import social icons
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lakshmi Boutique offers a wide range of stylish and traditional wear. Explore our collections and shop with confidence.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/all-collections">All Collections</a></li>
            <li><a href="/new-arrivals">New Arrivals</a></li>
            <li><a href="/blouses">Blouses</a></li>
            <li><a href="/patola">Patola</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@lakshmiboutique.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123, Fashion Street, Jaipur, India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:contact@lakshmiboutique.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lakshmi Boutique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
