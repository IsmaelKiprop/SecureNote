import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import App.css for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login/', {
        username,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.location.href = '/'; // Redirect upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid username or password'); // Set error message if login fails
    }
  };

  return (
    <div className="login-page"> {/* Apply class for page styling */}
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <button onClick={handleLogin} className="login-button">Login</button> {/* Apply class for button styling */}
    </div>
  );
}

export default LoginPage;