import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJR9dwtaVhCfD7mVEv2oDNKdTu7_DyD_8",
  authDomain: "feast-4899.firebaseapp.com",
  projectId: "feast-4899",
  storageBucket: "feast-4899.appspot.com",
  messagingSenderId: "493436136143",
  appId: "1:493436136143:web:9836baff4cca6d1b8425ba"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);