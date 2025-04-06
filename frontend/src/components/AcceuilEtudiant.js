// src/components/HomePage.js
import React from 'react';
import './css/AcceuilEtudiant.css';

function AcceuilEtudiant() {
  return (
    <div>

    <nav class="navbar">
        <div class="container">
            <div class="nav-content">
                <a href="/" class="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-icon">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>
                    <span>Restaurant UCAD</span>
                </a>
                
                <div class="nav-links">
                    <a href="/menu">Menu du jour</a>
                    <a href="/tickets">Mes tickets</a>
                    <a href="/petit-dejeuner">Petit-déjeuner</a>
                    <a href="/planning">Planning</a>
                    
                    <div class="nav-actions">
                        <button class="icon-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                            </svg>
                            <span class="badge">2</span>
                        </button>
                        
                        <button class="icon-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="8" cy="21" r="1"/>
                                <circle cx="19" cy="21" r="1"/>
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                            </svg>
                            <span class="badge">3</span>
                        </button>

                        <div class="dropdown">
                            <button class="profile-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span>Mon Compte</span>
                            </button>
                            <div class="dropdown-content">
                                <a href="/profile">Mon profil</a>
                                <a href="/settings">Paramètres</a>
                                <a href="/historique">Historique</a>
                                <hr/>
                                <a href="/logout" class="logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                        <polyline points="16 17 21 12 16 7"/>
                                        <line x1="21" y1="12" x2="9" y2="12"/>
                                    </svg>
                                    <span>Déconnexion</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main class="main-content">
        <div class="container">
            <header class="page-header">
                <h1>Restaurant Universitaire</h1>
                <h2>ESP/ENSETP</h2>
            </header>

            <section class="ticket-balance">
                <h2>Mon Solde de Tickets</h2>
                <div class="balance-grid">
                    <div class="balance-item">
                        <h3>12</h3>
                        <p>Tickets Repas</p>
                    </div>
                    <div class="balance-item">
                        <h3>5</h3>
                        <p>Petit-déjeuner</p>
                    </div>
                    <div class="balance-item">
                        <h3>2</h3>
                        <p>Tickets Partagés</p>
                    </div>
                </div>
            </section>

            <section class="quick-actions">
                <button class="action-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M7 15h0M2 9.5h20"/>
                    </svg>
                    <span>Acheter des tickets</span>
                </button>
                <button class="action-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                        <polyline points="16 6 12 2 8 6"/>
                        <line x1="12" y1="2" x2="12" y2="15"/>
                    </svg>
                    <span>Partager un ticket</span>
                </button>
                <button class="action-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>Générer QR Code</span>
                </button>
            </section>
            
            <div class="cards-grid">
                <a href="/tickets" class="card">
                    <div class="card-icon" style={{ backgroundColor: 'var(--primary-light)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                            <path d="M13 5v2"/>
                            <path d="M13 17v2"/>
                            <path d="M13 11v2"/>
                        </svg>
                    </div>
                    <h3>Mes Tickets</h3>
                    <p>Gérez vos tickets de restauration et votre solde</p>
                </a>

                <a href="/menu" class="card">
                    <div class="card-icon" style={{ backgroundColor: 'var(--success-light)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                            <line x1="6" y1="17" x2="18" y2="17"/>
                        </svg>
                    </div>
                    <h3>Menu du Jour</h3>
                    <p>Découvrez les plats du jour et les spécialités</p>
                </a>

                <a href="/petit-dejeuner" class="card">
                    <div class="card-icon" style={{ backgroundColor: 'var(--warning-light)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                            <line x1="6" y1="2" x2="6" y2="4"/>
                            <line x1="10" y1="2" x2="10" y2="4"/>
                            <line x1="14" y1="2" x2="14" y2="4"/>
                        </svg>
                    </div>
                    <h3>Petit-déjeuner</h3>
                    <p>Réservez votre petit-déjeuner à l'avance</p>
                </a>

                <a href="/planning" class="card">
                    <div class="card-icon" style={{ backgroundColor: 'var(--purple-light)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    </div>
                    <h3>Planning</h3>
                    <p>Consultez les horaires et la disponibilité</p>
                </a>
            </div>

            <div class="info-grid">
                <div class="info-card">
                    <div class="info-header">
                        <div class="info-icon" style={{ backgroundColor: 'var(--primary-light)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                            </svg>
                        </div>
                        <h2>Annonces</h2>
                    </div>
                    <div class="announcements">
                        <div class="announcement">
                            <p class="date">22 Mars 2024</p>
                            <h3>Nouveau système de tickets numériques</h3>
                            <p>Le nouveau système de tickets numériques est maintenant disponible. Plus besoin de tickets papier !</p>
                        </div>
                        <div class="announcement">
                            <p class="date">21 Mars 2024</p>
                            <h3>Menu spécial du weekend</h3>
                            <p>Ce weekend, découvrez notre menu spécial avec des plats traditionnels sénégalais.</p>
                        </div>
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-header">
                        <div class="info-icon" style={{ backgroundColor: 'var(--warning-light)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                                <path d="M7 2v20"/>
                                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                            </svg>
                        </div>
                        <h2>Menu du Jour</h2>
                    </div>
                    <div class="menu-content">
                        <div class="menu-section">
                            <h3>Déjeuner (12h - 14h)</h3>
                            <ul>
                                <li>Thiéboudienne</li>
                                <li>Poulet Yassa</li>
                                <li>Salade de fruits frais</li>
                            </ul>
                        </div>
                        <div class="menu-section">
                            <h3>Dîner (19h - 21h)</h3>
                            <ul>
                                <li>Couscous aux légumes</li>
                                <li>Poisson grillé</li>
                                <li>Dessert du jour</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>© 2024 Restaurant Universitaire ESP/ENSETP. Tous droits réservés.</p>
        </div>
    </footer>

    </div>
  );
}

export default AcceuilEtudiant;
