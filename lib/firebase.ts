// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj2jtxZnBhga9MAA1g7JSiSKhI-om9Ul4",
  authDomain: "portfolio-aaa-8ee44.firebaseapp.com",
  databaseURL: "https://portfolio-aaa-8ee44-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-aaa-8ee44",
  storageBucket: "portfolio-aaa-8ee44.firebasestorage.app",
  messagingSenderId: "934215126737",
  appId: "1:934215126737:web:ac039f81a0cde0d68dbff0",
  measurementId: "G-99RLYKVVGF"
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore database
const db = getFirestore(app);

// Export the database
export { db };