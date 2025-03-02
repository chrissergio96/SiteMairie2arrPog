import React from 'react';
import './RubriqueUrb.css';
import log from '../../Images/gg_arrow-up-o.png';
import { Link } from 'react-router-dom';

const RubriqueUrb = () =>  {
    return (
        <div className="rubriquet">
           <h2>Rubriques</h2>

           <div className='four'>
            <Link to='/amenagements'>
            <button className='travauxi'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Aménagements</h4>
           </button>
           </Link>
           <Link to='/reglesUrb'>
           <button className='travauxi'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Règles d'urbanisme</h4>
           </button>
           </Link>
           <Link to='/autorisationsurbanisme'>
           <button className='travauxi'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Autorisations d'urbanisme</h4>
           </button>
           </Link>
           <Link to='/travauxurbanisme'>
           <button className='travauxi'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Travaux</h4>
           </button>
           </Link>
           </div>
        </div>
    );
}

export default RubriqueUrb;
