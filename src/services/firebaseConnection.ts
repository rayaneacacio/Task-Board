import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWf88rUfEuJYNkSZcnMDEWqSiOENpv6TE",
  authDomain: "taskboard-ba477.firebaseapp.com",
  projectId: "taskboard-ba477",
  storageBucket: "taskboard-ba477.appspot.com",
  messagingSenderId: "900087613629",
  appId: "1:900087613629:web:4a75eff6f169b6dd208fd4",
  measurementId: "G-T7Q59MDQWR",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
