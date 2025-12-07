import React, { useEffect, useState } from "react";
import { db } from "../firebaseConf";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./ActualitesList.css";

const ActualitesList = () => {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "actualites"));
      setActualites(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const deleteItem = async (id) => {
    if (!window.confirm("Supprimer cette actualité ?")) return;
    await deleteDoc(doc(db, "actualites", id));
    setActualites(actualites.filter(item => item.id !== id));
  };

  return (
    <div className="list-container">
      <h2>Actualités</h2>
      <Link to="/admin/actualites/new" className="btn-add">Ajouter une actualité</Link>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {actualites.map((a) => (
            <tr key={a.id}>
              <td>{a.titre}</td>
              <td><img src={a.imageUrl} alt="" className="thumb" /></td>
              <td>
                <Link to={`/admin/actualites/edit/${a.id}`} className="btn-edit">Modifier</Link>
                <button onClick={() => deleteItem(a.id)} className="btn-delete">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ActualitesList;
