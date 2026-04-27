
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmdAAlxW4WxHwbXr3WApo6zredbHzTkcs",
  authDomain: "webcarros-cf556.firebaseapp.com",
  projectId: "webcarros-cf556",
  storageBucket: "webcarros-cf556.firebasestorage.app",
  messagingSenderId: "231473781156",
  appId: "1:231473781156:web:4c25197780e1cc89f08931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
