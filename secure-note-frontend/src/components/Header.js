// Headers.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css here

const Header = () => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token from local storage
    window.location.href = '/login'; // Redirect to the login page after logout
  };

  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          {isAuthenticated && <li><button onClick={handleLogout} className="logout-button">Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;