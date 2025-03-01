import './Grandbouton.css';
import React from "react";


const Grandbouton = () => {
  return (
    <div className="button-container-aide-social">
      <button className="dropdown-btn-aide-social">
        Vous êtes une personne âgée ou en situation de handicap...
        <span className="arrow-aide-social">&#9662;</span>
      </button>
      <button className="dropdown-btn-aide-social">
        Vous vivez en famille...
        <span className="arrow-aide-social">&#9662;</span>
      </button>
      <button className="dropdown-btn-aide-social">
        Vous vivez seul·e ou en couple, et sans enfant à charge ...
        <span className="arrow-aide-social">&#9662;</span>
      </button>
      <button className="dropdown-btn-aide-social">
        Vous êtes sans domicile fixe...
        <span className="arrow-aide-social">&#9662;</span>
      </button>
    </div>
  );
};

export default Grandbouton;
