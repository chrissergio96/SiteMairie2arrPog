import React from 'react';
import './Projetcdq.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


const MotProjet = () => {
    return (
        <div className="projet-container">

          <div className='boss-trait'>
           <div className='trait-projet1'></div> 
           <h3 className='projet-text'> PROJETS DE DEVELOPPEMENT URBAIN </h3>
          <div className='trait-projet2'></div>
          </div>

          <div className="projet-care">
                <div className="projet-image">
                   <img
                   src={require('../../Images/cdq5.jpg')}
                    alt="" 
                  /> 

                </div>
                <div className="projet-texts">
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, commodi. At fuga, incidunt perferendis tenetur 
                    quod voluptatem labore et. Nisi, quo! Totam hic repellat inventore sint amet expedita recusandae tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae quod ratione rem natus velit esse, 
                    animi fugiat perspiciatis sunt. Laudantium assumenda mollitia voluptatem numquam labore est fugit, rem cumque.
                    </p>
                    <button className='buton-project' type="button">Voir plus<ArrowRightAltOutlinedIcon/></button>
                </div>
            </div>
        </div>
    );
}

export default MotProjet;