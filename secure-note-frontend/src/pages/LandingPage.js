import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css here

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to GuardianNote</h1>
            <p>A secure note-taking application</p>
            <p>GuardianNote prioritizes the protection of sensitive information, providing a robust and secure platform for individuals to store their confidential notes with confidence.</p>
    
            <p>Get started today and keep your notes safe and secure with GuardianNote!</p>

            <div className="landing-buttons">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </div>
            <footer className="footer">
                <p>Copyright © {new Date().getFullYear()} GuardianNote. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;