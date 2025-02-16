import React from 'react';
import Header from './components/Header'; // Import the Header component
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <main>
        {/* Add other components or content here */}
        <h1>Welcome to Lakshmi Routique</h1>
        <p>Explore our latest collections and exclusive offers.</p>
      </main>
    </div>
  );
}

export default App;