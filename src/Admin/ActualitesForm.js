import React, { useState, useEffect } from "react";
import { db, storage } from "../firebaseConf";
import { collection, addDoc, updateDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import "./ActualitesForm.css";

const ActualitesForm = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // Charger les infos si on MODIFIE
  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      const docRef = doc(db, "actualites", id);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setTitre(data.titre);
        setDescription(data.description);
        setImageUrl(data.imageUrl || "");
      }
    };
    loadData();
  }, [id]);

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalImageUrl = imageUrl;

    try {
      // UPLOAD IMAGE SI FICHIER CHOISI
      if (imageFile) {
        const storageRef = ref(storage, `actualites/${Date.now()}_${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        finalImageUrl = await getDownloadURL(storageRef);
      }

      const payload = {
        titre,
        description,
        imageUrl: finalImageUrl,
        date: serverTimestamp(), // 🔥 Date automatique Firestore
      };

      if (id) {
        await updateDoc(doc(db, "actualites", id), payload);
      } else {
        await addDoc(collection(db, "actualites"), payload);
      }

      navigate("/admin/actualites");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue lors de l'enregistrement.");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>{id ? "Modifier l’Actualité" : "Ajouter une Actualité"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Titre *</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />

        <label>Description *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Image par URL (optionnel)</label>
        <input
          type="text"
          placeholder="https://exemple.com/photo.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label>OU Upload une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        {/* Prévisualisation */}
        {(imageUrl || imageFile) && (
          <div className="preview">
            <p>Prévisualisation :</p>
            <img
              src={
                imageFile ? URL.createObjectURL(imageFile) : imageUrl
              }
              alt="preview"
            />
          </div>
        )}

        <button type="submit" className="btn-save" disabled={loading}>
          {loading ? "Enregistrement..." : "Enregistrer"}
        </button>
      </form>
    </div>
  );
};

export default ActualitesForm;
