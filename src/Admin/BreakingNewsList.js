import React, { useEffect, useState } from "react";
import { db } from "../firebaseConf";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import './BreakingNewsList.css'

const BreakingNewsList = ({ onEdit }) => {
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async () => {
    const querySnapshot = await getDocs(collection(db, "breakingnews"));
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setNewsList(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette news ?")) {
      await deleteDoc(doc(db, "breakingnews", id));
      fetchNews();
    }
  };

  return (
    <div className="breakingnews-list">
      {newsList.map(item => (
        <div key={item.id} className="news-item">
          <div className="news-text">
            {item.image && <img src={item.image} alt="news" />}
            <span>{item.text}</span>
          </div>
          <div className="news-actions">
            <button onClick={() => onEdit(item)}>Modifier</button>
            <button onClick={() => handleDelete(item.id)}>Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreakingNewsList;
