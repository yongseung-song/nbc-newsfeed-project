// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl1_glBN0ToOqWmjQmN8jyCCYdkjo9KR8",
  authDomain: "nbc-newsfeed-93c1c.firebaseapp.com",
  projectId: "nbc-newsfeed-93c1c",
  storageBucket: "nbc-newsfeed-93c1c.appspot.com",
  messagingSenderId: "1064945483023",
  appId: "1:1064945483023:web:59006dfb3b01067cef527a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;
