import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWpOiiqdU3qzZ4xzwPX6kfIULSIozTBQY",
    authDomain: "estante-virtual2.firebaseapp.com",
    projectId: "estante-virtual2",
    storageBucket: "estante-virtual2.appspot.com",
    messagingSenderId: "381446631114",
    appId: "1:381446631114:web:62d2fb9024549aa9828e33"
};

const app = initializeApp(firebaseConfig);

// Exportar Firestore
const db = getFirestore(app);

export { db };