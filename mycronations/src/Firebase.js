import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZQw0-1NsPyB55GOENJObaqZ9nkj7fVLU",
  authDomain: "mycronations-a3b4c.firebaseapp.com",
  projectId: "mycronations-a3b4c",
  storageBucket: "mycronations-a3b4c.appspot.com",
  messagingSenderId: "789910154253",
  appId: "1:789910154253:web:9f1c1b2f59c91624473944",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);