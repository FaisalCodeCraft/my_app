import { initializeApp } from "firebase/app";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBw_LnUrGkzyDVh_8ssAm31BOxzdRScctk",
  authDomain: "fir-app-19b73.firebaseapp.com",
  projectId: "fir-app-19b73",
  storageBucket: "fir-app-19b73.appspot.com",
  messagingSenderId: "598711142624",
  appId: "1:598711142624:web:17824daa78c2787e7b6885",
  measurementId: "G-KT5PNZV6HM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Provider = new GoogleAuthProvider();
export const db = getFirestore(app);
