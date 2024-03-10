// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "black-oak-realty-8d306.firebaseapp.com",
  projectId: "black-oak-realty-8d306",
  storageBucket: "black-oak-realty-8d306.appspot.com",
  messagingSenderId: "554225712113",
  appId: "1:554225712113:web:52d8c01a2a44ada6dee250",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
