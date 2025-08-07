// Importa funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuKtz6obNNwaMKm2NbvEkqod7A6b_k79Q",
  authDomain: "portafolio-15f0d.firebaseapp.com",
  projectId: "portafolio-15f0d",
  storageBucket: "portafolio-15f0d.firebasestorage.app",
  messagingSenderId: "1027824179764",
  appId: "1:1027824179764:web:ccebc2af2a9b7a37bcc861",
  measurementId: "G-YRPDZ2CRV9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore, Auth y Provider
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

// Exporta para usar en otras partes
export { auth, db, provider, analytics };
