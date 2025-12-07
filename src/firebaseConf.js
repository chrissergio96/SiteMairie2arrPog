// Import des fonctions nécessaires de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Firestore
import { getStorage } from "firebase/storage";       // Storage
import { getAnalytics } from "firebase/analytics";  // Analytics (optionnel)

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuvotYRwmL1P4eQLVnq-WPVMvNZj2laTM",
  authDomain: "mairie4arrlbv.firebaseapp.com",
  projectId: "mairie4arrlbv",
  storageBucket: "mairie4arrlbv.appspot.com",
  messagingSenderId: "574622018666",
  appId: "1:574622018666:web:b0a1306988d63ee4852e13",
  measurementId: "G-CFKDLY859G"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // tu peux commenter si tu ne l'utilises pas
const db = getFirestore(app);
const storage = getStorage(app);

// Export des services Firebase
export { db, storage, analytics };
