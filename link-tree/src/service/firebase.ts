
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX7aUPcNxvOXX7DEXFFu6ter_PE9llI84",
  authDomain: "reactlinks-jd.firebaseapp.com",
  projectId: "reactlinks-jd",
  storageBucket: "reactlinks-jd.firebasestorage.app",
  messagingSenderId: "144022278099",
  appId: "1:144022278099:web:ff567977dd00b73f002926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };