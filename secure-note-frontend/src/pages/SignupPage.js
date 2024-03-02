import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'; // Import Redirect from react-router-dom
import '../App.css'; // Import App.css for styling

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup/', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      setSignupSuccess(true); // Set signup success to true
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Failed to sign up. Please try again.'); // Set error message if signup fails
    }
  };

  // Redirect to login page upon successful signup
  if (signupSuccess) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="signup-page"> {/* Apply class for page styling */}
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if exists */}
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input-field" /> {/* Apply class for input field styling */}
      <button onClick={handleSignup} className="signup-button">Sign Up</button> {/* Apply class for button styling */}
    </div>
  );
};

export default SignupPage;