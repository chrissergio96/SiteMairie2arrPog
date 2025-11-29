import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConf";
import { useNavigate } from "react-router-dom";
import "./Actualites.css";

const Actualites = () => {
  const [actualites, setActualites] = useState([]);
  const navigate = useNavigate();

 const fetchActualites = async () => {
  const querySnapshot = await getDocs(collection(db, "actualites"));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  setActualites(
    data.sort((a, b) => {
      const dateA = a.date?.toDate ? a.date.toDate() : a.date || 0;
      const dateB = b.date?.toDate ? b.date.toDate() : b.date || 0;
      return dateB - dateA;
    })
  );
};

  useEffect(() => {
    fetchActualites();
  }, []);

  return (
 

    <div className="carousel-containeracc">
           <div className="section-header">
    <div className="bars">
        <div className="line1"></div>
        <div className="line2"></div>
    </div>
    <h1>Actualités</h1>
</div>
      <Carousel interval={3000}>
        {actualites.map((actualite, index) => (
          <Carousel.Item key={index} onClick={() => navigate(`/projet/${actualite.id}`)}>
            <img className="d-block w-100" src={actualite.imageUrl} alt={`Slide ${index}`} />
            <Carousel.Caption>
              <h3>{actualite.titre}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Actualites;
