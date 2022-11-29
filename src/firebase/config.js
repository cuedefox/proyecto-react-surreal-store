import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDidDTwSveI8vypJOyb4Ujjx9Ca16g2sQg",
  authDomain: "surreal-store-74bed.firebaseapp.com",
  projectId: "surreal-store-74bed",
  storageBucket: "surreal-store-74bed.appspot.com",
  messagingSenderId: "91349820921",
  appId: "1:91349820921:web:f15947b56294ca197b4928",
  measurementId: "G-V1RPF134YV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);