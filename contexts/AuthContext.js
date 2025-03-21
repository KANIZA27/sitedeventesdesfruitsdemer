// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getUtilisateurConnecte } from '../services/utilisateurService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() => {
    const utilisateurConnecte = getUtilisateurConnecte();
    setUtilisateur(utilisateurConnecte);
  }, []);

  return (
    <AuthContext.Provider value={{ utilisateur, setUtilisateur }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
