// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGSiWJ-m6XC9RAG_YqVgHSR8FtoLOK72Q",
    authDomain: "reactappmaite.firebaseapp.com",
    projectId: "reactappmaite",
    storageBucket: "reactappmaite.appspot.com",
    messagingSenderId: "888291925465",
    appId: "1:888291925465:web:c0d8b4476f6675b3dc0dc8",
    measurementId: "G-2Q2XPF03VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;