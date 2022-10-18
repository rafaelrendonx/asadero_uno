import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

initializeApp( {
  apiKey: "AIzaSyCMqtTOCAMMb5NbcPNIJxQlCJAywnVVFGU",
  authDomain: "asaderouno-2e120.firebaseapp.com",
  projectId: "asaderouno-2e120",
  storageBucket: "asaderouno-2e120.appspot.com",
  messagingSenderId: "976001925208",
  appId: "1:976001925208:web:84265b235d4cf52daf4a2d"
});

export const db = getFirestore(); 