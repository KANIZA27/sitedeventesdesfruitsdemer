import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assurez-vous que App est dans le dossier client
//import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
