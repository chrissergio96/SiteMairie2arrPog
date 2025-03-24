import React from 'react';
import './Refectionement.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


const Projet = () => {
    return (
        <div className="refectionement-container">

          <div className='boss-trait-refect'>
           <div className='trait-projet1-refect'></div> 
           <h3 className='projet-text-refect'> REFECTIONNEMENT DES INFRASTRUCTURES PUBLICS </h3>
          <div className='trait-projet2-refect'></div>
          </div>

          <div className="projet-card-refect">
                <div className="projet-image-refect">
                   <img className= 'image-projet1-refect'
                   src={require('../../Images/cdq2.jpg')}
                    alt="" 
                  /> 

                </div>
                <div className="projet-texts-refect">
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, commodi. At fuga, incidunt perferendis tenetur 
                    quod voluptatem labore et. 
                    </p>
                    <button className='buton-project-refect' type="button">Voir plus<ArrowRightAltOutlinedIcon/></button>
                </div>
            </div>
        </div>
    );
}

export default Projet;