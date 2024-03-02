import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;