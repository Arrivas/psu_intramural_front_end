import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBLXGddo7nCKg9BaZoNZFEr8qlDqdzUxo",
  authDomain: "psuintramural-df906.firebaseapp.com",
  projectId: "psuintramural-df906",
  storageBucket: "psuintramural-df906.appspot.com",
  messagingSenderId: "1092046328413",
  appId: "1:1092046328413:web:97ef5a4dabfcff827173b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,  sendPasswordResetEmail };
