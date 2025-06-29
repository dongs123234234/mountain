import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mountain-ef041.firebaseapp.com",
  projectId: "mountain-ef041",
  storageBucket: "mountain-ef041.firebasestorage.app",
  messagingSenderId: "986261429853",
  appId: "1:986261429853:web:88e6f8ebf42c0ec4f237b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app; 