import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDuBEs9nErcg5D48omv1vpL1JtJL4v0Fs",
    authDomain: "assignment-9c0a3.firebaseapp.com",
    projectId: "assignment-9c0a3",
    storageBucket: "assignment-9c0a3.appspot.com",
    messagingSenderId: "650217629944",
    appId: "1:650217629944:web:4618a6661999791d3df30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };