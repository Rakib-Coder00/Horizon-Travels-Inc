// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEV9exQwlBfinQLSZaoXt7KleC5MBQ5as",
  authDomain: "horizon-travel-6f421.firebaseapp.com",
  projectId: "horizon-travel-6f421",
  storageBucket: "horizon-travel-6f421.appspot.com",
  messagingSenderId: "556949414590",
  appId: "1:556949414590:web:a2fb170465b39fc56d74ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth