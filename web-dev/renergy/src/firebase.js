import { initializeApp } from "firebase/app";
// import firestore from "firebase/firestore"
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDCgMuAmVlEVAqVvmE9PLNlZKqAejXm8Sw",
    authDomain: "gifted-dreamer-311213.firebaseapp.com",
    projectId: "gifted-dreamer-311213",
    storageBucket: "gifted-dreamer-311213.appspot.com",
    messagingSenderId: "646010747268",
    appId: "1:646010747268:web:639958942c6f03519b05d1"
};

const app = initializeApp(firebaseConfig);

export default app