// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZfV4qWDSgztxjFHTw7RAISQPn0LhbRRM",
  authDomain: "netflixgpt-1b141.firebaseapp.com",
  projectId: "netflixgpt-1b141",
  storageBucket: "netflixgpt-1b141.firebasestorage.app",
  messagingSenderId: "773378568842",
  appId: "1:773378568842:web:6fc20a59890c09ae3b7373",
  measurementId: "G-W7C20Q19BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();