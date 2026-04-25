import { initializeApp } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "catenergy-f7dce.firebaseapp.com",
    projectId: "catenergy-f7dce",
    storageBucket: "catenergy-f7dce.firebasestorage.app",
    messagingSenderId: "394441435581",
    appId: "1:394441435581:web:6d89069bf3813db3698ad4",
    measurementId: "G-VXLJF4JTK1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
