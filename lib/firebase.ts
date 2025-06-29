import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase 설정 - API 키가 없을 경우 더미 값 사용
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy-api-key-for-development",
  authDomain: "mountain-ef041.firebaseapp.com",
  projectId: "mountain-ef041",
  storageBucket: "mountain-ef041.firebasestorage.app",
  messagingSenderId: "986261429853",
  appId: "1:986261429853:web:88e6f8ebf42c0ec4f237b4"
};

let app: any = null;
let db: any = null;
let auth: any = null;

try {
  // Firebase 초기화 시도
  app = initializeApp(firebaseConfig);
  
  // Firestore 초기화
  db = getFirestore(app);
  
  // Auth 초기화
  auth = getAuth(app);
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.warn('Firebase initialization failed:', error);
  
  // 개발 환경에서 Firebase 없이도 동작하도록 더미 객체 생성
  db = {
    // Firestore 더미 메서드들
    collection: () => ({ get: () => Promise.resolve({ docs: [] }) }),
  };
  
  auth = {
    // Auth 더미 메서드들
    currentUser: null,
  };
}

export { db, auth };
export default app; 