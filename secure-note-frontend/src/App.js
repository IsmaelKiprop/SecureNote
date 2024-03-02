import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage'; // Import LandingPage component

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Route for landing page */}
          <Route path="/notes" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;