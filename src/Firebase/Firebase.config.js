// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufd8M2pGtdl4_0FuCd5BJPhSb5gHUcF0",
  authDomain: "zero3quest.firebaseapp.com",
  projectId: "zero3quest",
  storageBucket: "zero3quest.firebasestorage.app",
  messagingSenderId: "521602941099",
  appId: "1:521602941099:web:e1ed663cefc4130fa4b7ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;