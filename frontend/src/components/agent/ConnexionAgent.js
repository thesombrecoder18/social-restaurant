import React from "react";
import '../css/auth.css';

function ConnexionAgent() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M7 15h0M2 9.5h20" />
                    </svg>
                    <h1>Restaurant ESP</h1>
                    <p>Connexion Agent</p>
                </div>

                <form className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="votre.email@esp.sn" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" placeholder="••••••••" required />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Se souvenir de moi
                        </label>
                        <a href="/auth/reset-password" className="forgot-password">Mot de passe oublié ?</a>
                    </div>

                    <button type="submit" className="btn-primary">Se connecter</button>
                </form>

                <div className="auth-footer">
                    <p>Besoin d'aide ? <a href="/contact">Contactez le support</a></p>
                </div>
            </div>
        </div>
    );
}

export default ConnexionAgent;