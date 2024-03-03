// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css here

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <div className="header">
                <h1>Welcome to GuardianNote</h1>
                <nav>
                    <ul>
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="landing-page">
                <p>A secure note-taking application</p>
                <p>GuardianNote prioritizes the protection of sensitive information, providing a robust and secure platform for individuals to store their confidential notes with confidence.</p>
        
                <p>Get started today and keep your notes safe and secure with GuardianNote!</p>
            </div>
            <footer className="footer">
                <p>Copyright © {new Date().getFullYear()} GuardianNote. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;