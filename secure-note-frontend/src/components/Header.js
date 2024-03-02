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
      <div dangerouslySetInnerHTML={{ __html: `
        <div>
          <img src='https://private-user-images.githubusercontent.com/133222922/302182174-1a409a86-25ab-410e-af84-88e8947a622e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzODQzNjgsIm5iZiI6MTcwOTM4NDA2OCwicGF0aCI6Ii8xMzMyMjI5MjIvMzAyMTgyMTc0LTFhNDA5YTg2LTI1YWItNDEwZS1hZjg0LTg4ZTg5NDdhNjIyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMlQxMjU0MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NmI0NDQ5YTRhN2ViMGNjYmViZWQ0NDM0MmU3ZDgyNzEwMGY3ZjczYjAwYjY3NTYzZjZkZmU1YTA0OGNmZTQ2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.MTgUEQZIf4JnKSo_HnNpxOuewkORQH4wvmVowK_VDN0>'
        </div>
      `}} />
      <h1 className="app-title" style={{ color: '#800000' }}>GuardianNote</h1> {/* Application name with maroon color */}
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
