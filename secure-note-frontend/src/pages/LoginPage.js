import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import App.css for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login/', {
        username,
        password
      });
      const token = response.data.token;
      // Store token in local storage for authentication
      localStorage.setItem('token', token);
      // Redirect to notes page upon successful login
      navigate('/notes');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Incorrect username or password. Please try again.'); // Set error message for failed login
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if login fails */}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      <button onClick={handleLogin} className="submit-button">Login</button>
    </div>
  );
};

export default LoginPage;