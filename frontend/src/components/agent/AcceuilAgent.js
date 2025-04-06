import React from "react";
import '../css/acceuilagent.css';

function AcceuilAgent() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="nav-content">
                        <a href="/" className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M7 15h0M2 9.5h20" />
                            </svg>
                            <span>Agent Restaurant ESP</span>
                        </a>

                        <div className="nav-links">
                            <a href="scan.html">Scanner QR Code</a>
                            <a href="historique.html" className="active">Historique</a>
                            <a href="statistiques.html">Statistiques</a>

                            <div className="nav-actions">
                                <div className="dropdown">
                                    <button className="profile-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <span>Mon Compte</span>
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="profile.html">Mon profil</a>
                                        <a href="settings.html">Paramètres</a>
                                        <hr />
                                        <a href="/logout" className="logout">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1="21" y1="12" x2="9" y2="12" />
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

            <main className="main-content">
                <div className="container">
                    <div className="history-container">
                        <div className="history-header">
                            <h1>Historique des Validations</h1>
                            <div className="history-filters">
                                <div className="search-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                    <input type="text" placeholder="Rechercher un étudiant..." />
                                </div>
                                <div className="filter-buttons">
                                    <button className="filter-button active">Aujourd'hui</button>
                                    <button className="filter-button">Cette semaine</button>
                                    <button className="filter-button">Ce mois</button>
                                </div>
                            </div>
                        </div>

                        <div className="stats-cards">
                            <div className="stat-card">
                                <div className="stat-icon" style={{ backgroundColor: 'var(--primary-light)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <h3>245</h3>
                                    <p>Validations aujourd'hui</p>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon" style={{ backgroundColor: 'var(--warning-light)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12" y2="16" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <h3>12</h3>
                                    <p>En attente</p>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon" style={{ backgroundColor: 'var(--danger-light)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <h3>5</h3>
                                    <p>Tickets invalides</p>
                                </div>
                            </div>
                        </div>

                        <div className="history-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Étudiant</th>
                                        <th>Type de Ticket</th>
                                        <th>Date & Heure</th>
                                        <th>Statut</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="student-info">
                                                <div className="student-avatar">FD</div>
                                                <div className="student-details">
                                                    <span className="student-name">Fatou Diop</span>
                                                    <span className="student-id">ID: 20210234</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Déjeuner</td>
                                        <td>22 Mars 2024, 12:30</td>
                                        <td>
                                            <span className="status-badge success">Validé</span>
                                        </td>
                                        <td>
                                            <button className="action-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="19" cy="12" r="1" />
                                                    <circle cx="5" cy="12" r="1" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="student-info">
                                                <div className="student-avatar">AS</div>
                                                <div className="student-details">
                                                    <span className="student-name">Amadou Sow</span>
                                                    <span className="student-id">ID: 20210456</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Dîner</td>
                                        <td>22 Mars 2024, 19:15</td>
                                        <td>
                                            <span className="status-badge warning">En attente</span>
                                        </td>
                                        <td>
                                            <button className="action-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="19" cy="12" r="1" />
                                                    <circle cx="5" cy="12" r="1" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="student-info">
                                                <div className="student-avatar">MB</div>
                                                <div className="student-details">
                                                    <span className="student-name">Mariama Ba</span>
                                                    <span className="student-id">ID: 20210789</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Déjeuner</td>
                                        <td>22 Mars 2024, 13:45</td>
                                        <td>
                                            <span className="status-badge error">Invalide</span>
                                        </td>
                                        <td>
                                            <button className="action-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="1" />
                                                    <circle cx="19" cy="12" r="1" />
                                                    <circle cx="5" cy="12" r="1" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="pagination">
                            <button className="pagination-button" disabled>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <div className="pagination-numbers">
                                <button className="active">1</button>
                                <button>2</button>
                                <button>3</button>
                                <span>...</span>
                                <button>8</button>
                            </div>
                            <button className="pagination-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AcceuilAgent;