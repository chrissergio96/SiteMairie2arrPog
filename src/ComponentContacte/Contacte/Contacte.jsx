import React from 'react';
import './Contacte.css';

const emergencyNumbers = [
  {
    category: 'Sapeurs-Pompiers',
    numbers: [
      { label: 'Tel', number: '011.56.27.75' },
      { label: 'Tel', number: '077.63.93.63' },
      { label: 'Tel', number: '062.93.98.48' },
      { label: 'Centre d\'appels', number: '18', extra: ' (numéro vert, fixe uniquement, Port-Gentil)' }
    ]
  },
  {
    category: 'Commissariat Central',
    numbers: [
      { label: 'Numéro d\'urgence', number: '011.55.29.12' }
    ]
  },
  {
    category: 'Samu Social',
    numbers: [
      { label: 'Numéro d\'urgence', number: '1428' }
    ]
  },
  {
    category: 'S.e.e.g',
    numbers: [
      { label: 'Allo Fuite', number: '011.76.12.83' },
      { label: 'Intervention', number: '011.76.73.73' }
    ]
  }
];

const Contacte = () => {
  return (
    <div className='mere-contacte'>
      <h1>Numéros utiles</h1>
      <div className="contacte-container">
        {emergencyNumbers.map((service, index) => (
          <div key={index} className='service-card'>
            <h2>{service.category}</h2>
            {service.numbers.map((num, i) => (
              <p key={i}><strong>{num.label}: {num.number}</strong>{num.extra ? num.extra : ''}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacte;
