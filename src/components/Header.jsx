import React from 'react';
import { FaUser, FaShoppingCart, FaTruck, FaSearch  } from 'react-icons/fa'; // Import icons
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Lakshmi Boutique</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/all-collections">All Collections</a></li>
          <li><a href="/new-animals">New Arrivals</a></li>
          {/* <li><a href="/lakshmi-sale">Lakshmi Sale</a></li> */}
          {/* <li><a href="/kurtis-under-499">Kurtis Under 499 Collection</a></li>
          <li><a href="/kurtis-under-649">Kurtis Under 649 Collection</a></li> */}
          {/* <li><a href="/kurtis">Kurtis</a></li> */}
          {/* <li><a href="/bargles">Bargles</a></li> */}
          <li><a href="/jaipur-cotton">Jaipur Cotton</a></li>
          {/* <li><a href="/bridal">Bridal</a></li> */}
          <li><a href="/blouses">Blouses</a></li>
          <li><a href="/patola">Patola</a></li>
        </ul>
      </nav>

      {/* Search Box with Icon */}
      <div className="search-box">
        <input type="text" placeholder="Search products..." />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
      
      <div className="icons"> {/* Add icons to the header */}
        <a href="/account" className="icon"><FaUser /></a>
        <a href="/cart" className="icon"><FaShoppingCart /></a>
        <a href="/pickup" className="icon"><FaTruck /></a>
      </div>
    </header>
  );
};

export default Header;
