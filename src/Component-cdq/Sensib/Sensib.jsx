import React from 'react';
import './Sensib.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


const Sensib = () => {
    return (
        <div className="sensibilisation-container">

          <div className='boss-trait-sensib'>
           <div className='trait-projet1-sensib'></div> 
           <h3 className='projet-text-sensib'> SENSIBILSER LA POPULATION </h3>
          <div className='trait-projet2-sensib'></div>
          </div>

          <div className="projet-card-sensib">
                <div className="projet-image-sensib">
                   <img className= 'image-projet1-sensib'
                   src={require('../../Images/cdq 6.jpg')}
                    alt="" 
                  /> 

                </div>
                <div className="projet-texts-sensib">
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

export default Sensib;