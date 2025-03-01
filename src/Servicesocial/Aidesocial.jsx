import React from 'react';
import social from '../Images/aide.jpg';
import { Link } from 'react-router-dom';
import './Aidesocial.css';
function Aidesocial() {
  return (
    <div className="social">
        <img src={social} alt="" />
          <div className='aidesocial'>
          <Link to='/Aidesocials'><button className="services-buttons">AIDE SOCIAL</button></Link>
          </div>
    </div>
  );
}

export default Aidesocial;
 