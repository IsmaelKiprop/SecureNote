// LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importing the local logo image
import '../App.css'; // Importing App.css here

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="landing-page">
                <img src={logo} alt="Logo" className="landing-logo" /> {/* Displaying the logo */}
                <h1>Welcome to GuardianNote</h1>
                <p>A secure note-taking application</p>
        
                <p>Get started today and keep your notes safe and secure with GuardianNote!</p>

                <div className="landing-buttons">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/signup" className="btn">Sign Up</Link>
                </div>
            </div>
            <footer className="footer">
                <p>Copyright © {new Date().getFullYear()} GuardianNote. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;