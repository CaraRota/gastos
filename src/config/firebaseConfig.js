// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkrHcXYII4pj8Ndvr0jWuYi-9zuB_2Zsw",
    authDomain: "gastos-7731e.firebaseapp.com",
    projectId: "gastos-7731e",
    storageBucket: "gastos-7731e.appspot.com",
    messagingSenderId: "963151186963",
    appId: "1:963151186963:web:86ddfc83108320ab4543e6",
    measurementId: "G-ZT5ZW2CD4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
