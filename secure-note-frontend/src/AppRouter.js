// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import Login from './components/Login';
import Register from './components/Register';
import Notes from './components/Notes';
import NoteDetail from './components/NoteDetail';

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Change here */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes> {/* Change here */}
    </Router>
  );
};

export default AppRouter;
