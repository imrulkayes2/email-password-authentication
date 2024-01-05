// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjC3eKFfWVCmxk9qy2hl7hjet5JMPO-AI",
    authDomain: "email-password-authentic-e2987.firebaseapp.com",
    projectId: "email-password-authentic-e2987",
    storageBucket: "email-password-authentic-e2987.appspot.com",
    messagingSenderId: "997669521233",
    appId: "1:997669521233:web:5d643697ac7e43eb2e3570"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;