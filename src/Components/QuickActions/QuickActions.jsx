import React from 'react';
import './QuickActions.css';

function QuickActions() {
  return (
    <div className="quick-actions">

      <h3>Actions rapides</h3>

      <button>📄 Télécharger un formulaire</button>
      <button>📅 Prendre un rendez-vous</button>
      <button>📞 Contacter la mairie</button>
      <button>🏛️ Horaires d’ouverture</button>

    </div>
  );
}

export default QuickActions;