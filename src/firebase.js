import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_KEY",
  projectId: "YOUR_KEY",
  storageBucket: "YOUR_KEY",
  messagingSenderId: "YOUR_KEY",
  appId: "YOUR_KEY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
