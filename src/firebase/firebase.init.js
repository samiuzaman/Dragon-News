// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyJkZn1BLHcIfjSZvP6yk9BhZv9Wynu94",
  authDomain: "dragon-news-1629d.firebaseapp.com",
  projectId: "dragon-news-1629d",
  storageBucket: "dragon-news-1629d.firebasestorage.app",
  messagingSenderId: "865770037492",
  appId: "1:865770037492:web:cc5cd65c6c8b67cbcabea1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
