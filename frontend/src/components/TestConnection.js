import React, { useEffect, useState } from 'react';
import api from '../utils/api';

function TestConnection() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Effectuer une requête pour tester la connexion à la base de données
    api.get('/test-db')
      .then((response) => {
        // Vérification de la réponse du backend
        if (response.data.error) {
          // Si l'API retourne une erreur, afficher un message d'erreur
          setMessage(`Erreur de la base de données: ${response.data.error}`);
        } else if (response.data.message) {
          // Si la réponse contient un message, l'afficher
          setMessage(response.data.message);
        } else {
          // Par défaut, afficher un message de connexion réussie si les données sont renvoyées
          setMessage('Connexion à la base de données réussie !');
        }
      })
      .catch((error) => {
        // En cas d'erreur dans la requête, afficher un message d'erreur
        setMessage('Erreur de connexion à l\'API');
        console.error('Erreur de l\'API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Test de la connexion</h1>
      <p>{message}</p>
    </div>
  );
}

export default TestConnection;
