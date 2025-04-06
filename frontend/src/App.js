// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcceuilEtudiant from './components/AcceuilEtudiant';
import ConnexionAgent from './components/agent/ConnexionAgent';
import AcceuilAgent from './components/agent/AcceuilAgent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcceuilEtudiant />} />
        <Route path="/agent/connexion" element={<ConnexionAgent />} />
        <Route path="/agent/acceuil" element={<AcceuilAgent />} />
      </Routes>
    </Router>
  );
}

export default App;
