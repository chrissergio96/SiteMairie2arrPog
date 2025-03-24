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
                   src={require('../../Images/WhatsApp Image 2025-03-04 at 08.06.12.jpeg')}
                    alt="" 
                  /> 

                </div>
                <div className="projet-texts">
                    <p>
                    🌿 𝐉𝐨𝐮𝐫𝐧𝐞́𝐞 𝐂𝐢𝐭𝐨𝐲𝐞𝐧𝐧𝐞 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐪𝐮𝐚𝐫𝐭𝐢𝐞𝐫 𝐏𝐞𝐧𝐭𝐞𝐜𝐨̂𝐭𝐞 : 𝐔𝐧 𝐛𝐞𝐥 𝐞𝐱𝐞𝐦𝐩𝐥𝐞 𝐝'𝐞𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐜𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐟 ! 🌿
                    Aujourd'hui, le 𝗖𝗼𝗺𝗶𝘁𝗲́ 𝗱𝗲 𝗗𝗲́𝘃𝗲𝗹𝗼𝗽𝗽𝗲𝗺𝗲𝗻𝘁 𝗱𝗲 𝗤𝘂𝗮𝗿𝘁𝗶𝗲𝗿 (𝗖𝗗𝗤) "𝗡𝗼𝘁𝗿𝗲 𝗖𝗮𝘂𝘀𝗲 𝗖𝗼𝗺𝗺𝘂𝗻𝗲" a brillamment démontré l'importance de l'unité et du civisme en initiant une grande 𝗷𝗼𝘂𝗿𝗻𝗲́𝗲 𝗰𝗶𝘁𝗼𝘆𝗲𝗻𝗻𝗲.  </p>
                    <button className='buton-project' type="button"><a style={{color:'white'}} href="https://www.facebook.com/share/p/1BkqVwx5TQ/">Voir plus<ArrowRightAltOutlinedIcon/></a></button>
                </div>
            </div>
        </div>
    );
}

export default MotProjet;