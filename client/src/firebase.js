// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "city-scape-homes.firebaseapp.com",
  projectId: "city-scape-homes",
  storageBucket: "city-scape-homes.appspot.com",
  messagingSenderId: "573669809421",
  appId: "1:573669809421:web:18cc735218980619296444",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
