import React from 'react';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    // Additional logout logic if needed
  };

  return (
    <div className="header">
      <h1>Secure Notes</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;