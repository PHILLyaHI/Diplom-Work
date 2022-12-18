// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVLvrQBiAQgtCQdC2eLrN2HTeFllLckh8",
    authDomain: "fatuber-1f4b8.firebaseapp.com",
    projectId: "fatuber-1f4b8",
    storageBucket: "fatuber-1f4b8.appspot.com",
    messagingSenderId: "653123518120",
    appId: "1:653123518120:web:903b1ff8426d791a68cc9d",
    measurementId: "G-B4SQE199W8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
const analytics = getAnalytics(app);