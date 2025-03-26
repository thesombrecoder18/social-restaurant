// backend/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
// Middleware pour parser les requêtes en JSON
app.use(express.json());
app.use(cors());
// Utilisation des routes
app.use('/api', routes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
