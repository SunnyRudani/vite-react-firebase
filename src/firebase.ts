// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDpIWAj7uBoRwqLaWetaj6FMtMezUYU9c",
  authDomain: "vite-react-b84d1.firebaseapp.com",
  projectId: "vite-react-b84d1",
  storageBucket: "vite-react-b84d1.appspot.com",
  messagingSenderId: "818733207433",
  appId: "1:818733207433:web:6820bf1a3e55ded5e91b58",
  measurementId: "G-E2ELYNSTLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);