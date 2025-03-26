// backend/routes.js
const express = require('express');
const router = express.Router();
const db = require('./db'); 
// Exemple d'endpoint de test
router.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API de resto-campus' });
});
// Exemple de route de test
router.get('/test', (req, res) => {
    res.json({ message: 'Backend fonctionne' });
  });

  router.get('/test-db', async (req, res) => {
    try {
      const results = await db.query('SELECT * FROM users LIMIT 1');
      res.json(results);
    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
      res.status(500).json({ error: 'Erreur de la base de données' });
    }
  });

module.exports = router;
