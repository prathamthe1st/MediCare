import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCnK7s9qItSS9K0vAvgTEyKvDOybJs-GDo",
    authDomain: "emerga-f9fe4.firebaseapp.com",
    projectId: "emerga-f9fe4",
    storageBucket: "emerga-f9fe4.appspot.com",
    messagingSenderId: "938167196778",
    appId: "1:938167196778:web:b08da0bbacfe5375533e13",
    measurementId: "G-GBVVJQ4QMF"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleauth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);