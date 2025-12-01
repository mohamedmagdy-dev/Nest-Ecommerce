import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFuQYDR5G2Cb2_9R50suLxqaTHlsiKSFU",
  authDomain: "nest-ecommerce-5a50c.firebaseapp.com",
  projectId: "nest-ecommerce-5a50c",
  storageBucket: "nest-ecommerce-5a50c.firebasestorage.app",
  messagingSenderId: "565488395454",
  appId: "1:565488395454:web:a2e3a55d07b2b07b3b2aef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
