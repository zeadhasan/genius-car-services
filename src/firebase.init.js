// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYEuPAfefghdQvLVFF1jV8YCqDIqmrshU",
    authDomain: "genius-car-services-99c5d.firebaseapp.com",
    projectId: "genius-car-services-99c5d",
    storageBucket: "genius-car-services-99c5d.appspot.com",
    messagingSenderId: "944923476174",
    appId: "1:944923476174:web:4f4375df3c30c5cf0dd09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

