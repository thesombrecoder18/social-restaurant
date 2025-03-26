// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Pour naviguer vers d'autres pages
import './css/HomePage.css'; // Importer le fichier CSS pour la page d'accueil

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenue sur la plateforme de digitalisation des restaurants étudiants</h1>
        <p>Gérez vos tickets de repas, consultez les menus et bien plus encore !</p>
      </header>

      <div className="home-content">
        <h2>Fonctionnalités principales</h2>
        <ul>
          <li>Consulter le menu du jour</li>
          <li>Acheter des tickets pour le repas ou petit déjeuner</li>
          <li>Consulter le solde de vos tickets</li>
          <li>Gérer vos informations et consulter les statistiques</li>
        </ul>

        <div className="home-buttons">
          <Link to="/login" className="btn">Se connecter</Link>
          <Link to="/register" className="btn">S'inscrire</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
