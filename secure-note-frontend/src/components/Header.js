import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear authentication token or session)
    // Example:
    localStorage.removeItem('token'); // Remove authentication token from local storage
    // Redirect to the login page or any other desired destination
    window.location.href = '/login'; // Redirect to the login page after logout
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li> {/* Logout button */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;