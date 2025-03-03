import React from 'react';
import './Agendaheader.css';
import Agenda5 from '../../Images/agenda5.jpg'; // Assurez-vous que l'image est dans le bon dossier
import Agenga1 from '../../Images/agenda1.jpg'
import Agenda2 from '../../Images/agenda2.jpg';
import  Agenda4 from '../../Images/agenda4.jpg'
import  Agenda7 from '../../Images/Agenda7.jpg'



const Agendaheader = () => {
  return (
    <div className="mot-maire-container1">
        
        <div className='mere1'>

      <div className="maire-card1">

        <div className="maire-image1">
          <img src={Agenda5} alt="Agenda1" />
        </div>
        
        <div className="maire-text1">
          <h2>Du 04 janvier au 16 janvier</h2> {/* Ajout du nom du maire */}
          <p>
            [RÉVISION DES LISTES ÉLECTORALES]
          </p>
        </div>  
      </div>
      </div>



      <div className='mere2'>

      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda2} alt="Agenda2" />
        </div>
        <div className="maire-text1">
          <h2>Du 04 janvier au 16 janvier</h2> {/* Ajout du nom du maire */}
          <p>
            [RÉVISION DES LISTES ÉLECTORALES]
          </p>
        </div>
      </div>

      </div>






      <div className='mere3'>


     

     
      </div>

      <div className='mere4'>

      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda4 } alt="Agenda3" />
        </div>
        <div className="maire-text1">
          <h2>Du 30 août</h2> {/* Ajout du nom du maire */}
          <p>
          [JOURNÉE NATIONALE DE LA LIBÉRATION]
          </p>
        </div>
      </div>
      



      </div>

      <div className='mere5'>

      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda5} alt="Agenda1" />
        </div>
        <div className="maire-text1">
          <h2>Du 04 janvier au 16 janvier</h2> {/* Ajout du nom du maire */}
          <p>
            [RÉVISION DES LISTES ÉLECTORALES]
          </p>
        </div>
      </div>

      
      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda4 } alt="Agenda3" />
        </div>
        <div className="maire-text1">
          <h2>Du 30 août</h2> {/* Ajout du nom du maire */}
          <p>
          [JOURNÉE NATIONALE DE LA LIBÉRATION]
          </p>
        </div>
      </div>

      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda5} alt="Agenda1" />
        </div>
        <div className="maire-text1">
          <h2>Du 04 janvier au 16 janvier</h2> {/* Ajout du nom du maire */}
          <p>
            [RÉVISION DES LISTES ÉLECTORALES]
          </p>
        </div>
      </div>

      </div>




      <div className='mere6'>

      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenga1} alt="Agenda1" />
        </div>
        <div className="maire-text1">
          <h2>Du 24 novembre au 26 novembre</h2> {/* Ajout du nom du maire */}
          <p>
          [OCTOBRE ROSE : DÉPISTAGE DU CANCER DU SEIN ET DU COL DE L’UTÉRUS]
          </p>
        </div>
      </div>
      
      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenda7 } alt="Agenda7" />
        </div>
        <div className="maire-text1">
          <h2>Du 06 octobre au 08 octobre</h2> {/* Ajout du nom du maire */}
          <p>
          [Culture, Evènement, Sports]
          </p>
        </div>
      </div>
      <div className="maire-card1">
        <div className="maire-image1">
          <img src={Agenga1} alt="Agenda1" />
        </div>
        <div className="maire-text1">
          <h2>Du 24 novembre au 26 novembre</h2> {/* Ajout du nom du maire */}
          <p>
          [OCTOBRE ROSE : DÉPISTAGE DU CANCER DU SEIN ET DU COL DE L’UTÉRUS]
          </p>
        </div>
      </div>



      </div>





    </div>
  );
}

export default Agendaheader;
