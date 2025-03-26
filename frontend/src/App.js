// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AcceuilEtudiant from './components/AcceuilEtudiant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/etudiant" element={<AcceuilEtudiant />} />
      </Routes>
    </Router>
  );
}

export default App;
