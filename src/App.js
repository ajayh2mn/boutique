import React from 'react';
// import { FaUser, FaShoppingCart, FaTruck } from 'react-icons/fa'; // Import icons
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <main>
        {/* Add other components or content here
        <h1>Welcome to Lakshmi Routique</h1>
        <p>Explore our latest collections and exclusive offers.</p> */}
        <Home />
      </main>
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;