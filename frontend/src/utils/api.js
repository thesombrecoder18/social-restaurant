// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const testDbConnection = () => {
  return api.get('/test-db');  // Appel à l'endpoint de test de la base de données
};

export default api;
