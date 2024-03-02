import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css here

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token from local storage
    window.location.href = '/login'; // Redirect to the login page after logout
  };

  return (
    <header className="app-header">
      <h1 className="app-title">GuardianNote</h1> {/* Application name */}
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;