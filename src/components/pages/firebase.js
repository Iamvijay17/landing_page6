import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBop73ZYlVetxmpsowHUa-rqN6x4ksrEQw",
  authDomain: "demogoauth-5560d.firebaseapp.com",
  projectId: "demogoauth-5560d",
  storageBucket: "demogoauth-5560d.appspot.com",
  messagingSenderId: "415371866889",
  appId: "1:415371866889:web:6a8f8b537a4fb26a2a19d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export default app