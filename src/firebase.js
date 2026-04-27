import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1d0gn5PFjb78MTRpYLqbImEUPiFCDQyU",
    authDomain: "shelter-d9cc6.firebaseapp.com",
    projectId: "shelter-d9cc6",
    storageBucket: "shelter-d9cc6.firebasestorage.app",
    messagingSenderId: "640555090666",
    appId: "1:640555090666:web:b1990ebbce65fb81374d93"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app) 