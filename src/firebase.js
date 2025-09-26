import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsqKNFov6LQWdqaeWIm1oyEKyW-oFFGTc",
  authDomain: "mobile-purchase-store-c8896.firebaseapp.com",
  projectId: "mobile-purchase-store-c8896",
  storageBucket: "mobile-purchase-store-c8896.firebasestorage.app",
  messagingSenderId: "841916613",
  appId: "1:841916613:web:0d1294676eb84d943ad0ac"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
