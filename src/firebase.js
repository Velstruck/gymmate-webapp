import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCckAO0N5KYMMZCrRcnyucHDM1o4mrcCWM",
  authDomain: "app-f213f.firebaseapp.com",
  projectId: "app-f213f",
  storageBucket: "app-f213f.firebasestorage.app",
  messagingSenderId: "226181043797",
  appId: "1:226181043797:web:7aa2e570d8632282e766dc",
  measurementId: "G-YGMVPLJ6X5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
