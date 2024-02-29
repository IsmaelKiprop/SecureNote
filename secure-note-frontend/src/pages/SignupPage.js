import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://your-django-backend/signup/', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      // Additional signup success logic if needed
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupPage;