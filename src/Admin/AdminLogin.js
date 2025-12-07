import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // mot de passe simple (à changer). Pour plus de sécurité, utiliser Firebase Auth.
  const ADMIN_PASSWORD = "mairie4arrlbv";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Mot de passe incorrect');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Connexion Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default AdminLogin;
