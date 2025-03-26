// src/components/DbStatus.js
import React, { useState, useEffect } from 'react';
import { testDbConnection } from '../utils/api';

const DbStatus = () => {
  const [dbStatus, setDbStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDbStatus = async () => {
      try {
        const data = await testDbConnection();
        setDbStatus(data.message);
      } catch (error) {
        setDbStatus('Erreur de connexion à la base de données');
      } finally {
        setLoading(false);
      }
    };

    fetchDbStatus();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{dbStatus}</h1>
    </div>
  );
};

export default DbStatus;
