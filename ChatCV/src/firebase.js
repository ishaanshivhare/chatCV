import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeyOm6cwurPqH6xInwGs4Ef8B_U399ndo",
    authDomain: "chatcv-28893.firebaseapp.com",
    projectId: "chatcv-28893",
    storageBucket: "chatcv-28893.firebasestorage.app",
    messagingSenderId: "1060100594247",
    appId: "1:1060100594247:web:4abfb720031141ed5e2f62",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
