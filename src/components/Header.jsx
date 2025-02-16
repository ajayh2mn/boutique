import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Lakshmi Routique</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/all-collections">All Collections</a></li>
          <li><a href="/new-animals">New Animals</a></li>
          <li><a href="/lakshmi-sale">Lakshmi Sale</a></li>
          <li><a href="/kurtis-under-499">Kurtis Under 499 Collection</a></li>
          <li><a href="/kurtis-under-649">Kurtis Under 649 Collection</a></li>
          <li><a href="/kurtis">Kurtis</a></li>
          <li><a href="/bargles">Bargles</a></li>
          <li><a href="/jaipur-cotton">Jaipur Cotton</a></li>
          <li><a href="/bridal">Bridal</a></li>
          <li><a href="/blouses">Blouses</a></li>
          <li><a href="/patola">Patola</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;