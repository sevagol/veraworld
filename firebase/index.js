import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
    apiKey: "AIzaSyAUxxudarsXNb3IaRh6_p_noJaFZy33t6I",
    authDomain: "vera-373709.firebaseapp.com",
    projectId: "vera-373709",
    storageBucket: "vera-373709.appspot.com",
    messagingSenderId: "706784698376",
    appId: "1:706784698376:web:c105a67e1a3aa9d3fb71bd"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };