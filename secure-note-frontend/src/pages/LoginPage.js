import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Importing App.css here

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login/', {
        username,
        password
      });
      const token = response.data.token;
      // Store token in local storage or state for authentication
      localStorage.setItem('token', token);
      // Redirect to notes list page or any other desired destination
      window.location.href = '/';
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (display error message, clear input fields, etc.)
    }
  };

  return (
    <div className="login-page"> {/* Apply class for page styling */}
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <button onClick={handleLogin} className="login-button">Login</button> {/* Apply class for button styling */}
    </div>
  );
}

export default LoginPage;