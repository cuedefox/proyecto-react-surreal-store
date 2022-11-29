// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDidDTwSveI8vypJOyb4Ujjx9Ca16g2sQg",
  authDomain: "surreal-store-74bed.firebaseapp.com",
  projectId: "surreal-store-74bed",
  storageBucket: "surreal-store-74bed.appspot.com",
  messagingSenderId: "91349820921",
  appId: "1:91349820921:web:f15947b56294ca197b4928",
  measurementId: "G-V1RPF134YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);