// SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection
import '../App.css'; // Import App.css for styling

const SignupPage = () => {
  const history = useHistory(); // Initialize useHistory hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup/', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      // Redirect to login page upon successful signup
      history.push('/login');
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Failed to sign up. Please try again.'); // Set error message if signup fails
    }
  };

  return (
    <div className="signup-page"> {/* Apply class for page styling */}
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <button onClick={handleSignup} className="submit-button">Sign Up</button> {/* Apply class for button styling */}
    </div>
  );
};

export default SignupPage;