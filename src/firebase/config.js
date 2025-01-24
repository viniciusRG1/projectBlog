
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDd4ucTYhQVKhHaS4yRf3_n_9muS9i85xc",
  authDomain: "miniblog-d390b.firebaseapp.com",
  projectId: "miniblog-d390b",
  storageBucket: "miniblog-d390b.firebasestorage.app",
  messagingSenderId: "984572924345",
  appId: "1:984572924345:web:f110f9238de5faf3686668"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}