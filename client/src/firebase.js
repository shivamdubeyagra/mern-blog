// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e056b.firebaseapp.com",
  projectId: "mern-blog-e056b",
  storageBucket: "mern-blog-e056b.appspot.com",
  messagingSenderId: "894872067446",
  appId: "1:894872067446:web:5fa99f2566bf9df81e6e57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);