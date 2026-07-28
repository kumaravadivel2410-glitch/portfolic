import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAvfETBK3ujkuFrmDbkFUD550BMfmpBgXw",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "portfolio-9a9a6.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "portfolio-9a9a6",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "portfolio-9a9a6.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "563746897705",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:563746897705:web:e1ecd80c13a77cdb880138",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-SY6K9EPFT3",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

try {
  if (firebaseConfig.projectId) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);

    if (typeof window !== "undefined") {
      isSupported().then((supported: boolean) => {
        if (supported && app) {
          analytics = getAnalytics(app);
        }
      });
    }
  }
} catch (error) {
  console.warn("Firebase initialization skipped or failed:", error);
}

export { app, db, analytics };
