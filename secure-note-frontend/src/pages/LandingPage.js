import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Importing App.css here

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to GuardianNote</h1>
            <p>A secure note-taking application</p>
            <p>GuardianNote prioritizes the protection of sensitive information, providing a robust and secure platform for individuals to store their confidential notes with confidence.</p>
            <p>Key features include:</p>
            <ul>
                <li>Secure storage of confidential notes</li>
                <li>User-friendly interface for easy note management</li>
                <li>Token-based authentication for enhanced security</li>
                <li>Responsive design for seamless use on various devices</li>
            </ul>
            <p>Get started today and keep your notes safe and secure with GuardianNote!</p>
            <div className="landing-buttons">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </div>
            <img src="/path/to/your/image" alt="GuardianNote" className="landing-image" />
        </div>
    );
}

export default LandingPage;