import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuYPyKY7cn1qeI_i8tR-GQwFCvZ8vsNx0",
  authDomain: "clone-a345c.firebaseapp.com",
  projectId: "clone-a345c",
  storageBucket: "clone-a345c.appspot.com",
  messagingSenderId: "607941206263",
  appId: "1:607941206263:web:7d811df9838375e7a373f2",
  measurementId: "G-8Q8ZZNTD0L",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
