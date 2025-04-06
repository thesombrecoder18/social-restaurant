// backend/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
