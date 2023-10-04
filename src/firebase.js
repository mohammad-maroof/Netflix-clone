//import firebase from "firebase"
//import * as firebase from 'firebase'
import firebase from "firebase/app"
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAMEb4qCdLpCcHXC9X7QawsRlQk3xWLLms",
    authDomain: "netflix-clone-c836b.firebaseapp.com",
    projectId: "netflix-clone-c836b",
    storageBucket: "netflix-clone-c836b.appspot.com",
    messagingSenderId: "4010980700",
    appId: "1:4010980700:web:0f6cfcf38ecc78b6fb7d99"
  };
  const app= initializeApp(firebaseConfig)

const auth= getAuth(app);
export {auth}