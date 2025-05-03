// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkCpMIb2_vyfh71AzxIq52fasXfhEaYFY",
  authDomain: "piwo-c03be.firebaseapp.com",
  projectId: "piwo-c03be",
  storageBucket: "piwo-c03be.firebasestorage.app",
  messagingSenderId: "336351280631",
  appId: "1:336351280631:web:fea66a61fcf8a4a57d02f2",
  measurementId: "G-6F9EGQS7ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default db;
