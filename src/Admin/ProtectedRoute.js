import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute minimal:
 * - Vérifie si 'isAdmin' dans sessionStorage vaut 'true'
 * - Sinon redirige vers une petite page / modal de login (ici on redirige vers /admin/login ou la racine)
 *
 * Tu peux remplacer la logique par Firebase Auth + rules plus tard.
 */
const ProtectedRoute = ({ children }) => {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    // Rediriger vers une page de login (ou afficher un simple message)
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
