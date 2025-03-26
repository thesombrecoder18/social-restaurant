-- Création de la base de données
CREATE DATABASE IF NOT EXISTS resto_campus;
USE resto_campus;

-- Table des utilisateurs
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('etudiant', 'restaurateur', 'gerant', 'agent') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des tickets
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type ENUM('petit_dejeuner', 'repas') NOT NULL,
    qr_code VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('actif', 'utilisé') DEFAULT 'actif',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des menus
CREATE TABLE menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurateur_id INT NOT NULL,
    date_menu DATE NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurateur_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des transactions (achat de tickets)
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    ticket_id INT NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
);

-- Table de la validation des tickets par les agents
CREATE TABLE validations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT NOT NULL,
    agent_id INT NOT NULL,
    validated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE,
    FOREIGN KEY (agent_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des annonces
CREATE TABLE annonces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gerant_id INT NOT NULL,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gerant_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table du suivi des statistiques
CREATE TABLE statistiques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gerant_id INT NOT NULL,
    date_statistique DATE NOT NULL,
    tickets_vendus INT DEFAULT 0,
    tickets_utilises INT DEFAULT 0,
    plats_servis INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gerant_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insertion d'utilisateurs pour chaque rôle avec le mot de passe "passer"
INSERT INTO users (nom, prenom, email, password, role) VALUES 
('Etudiant', 'Test', 'etudiant@test.com', 'passer', 'etudiant'),
('Restaurateur', 'Test', 'restaurateur@test.com', 'passer', 'restaurateur'),
('Gerant', 'Test', 'gerant@test.com', 'passer', 'gerant'),
('Agent', 'Test', 'agent@test.com', 'passer', 'agent');
