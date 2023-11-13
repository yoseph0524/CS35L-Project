// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwLRGK0FwWt3niyJ3Bh-lwUznuxazb70s",
  authDomain: "coincase-b1337.firebaseapp.com",
  projectId: "coincase-b1337",
  storageBucket: "coincase-b1337.appspot.com",
  messagingSenderId: "335607761170",
  appId: "1:335607761170:web:e920e911e32b0edd9f0bcb",
  measurementId: "G-ZQZRFYWXG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
