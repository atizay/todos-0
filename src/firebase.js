// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz0E6P-EHktuq9Eq4G7bfWN0ch2k84fW0",
  authDomain: "todos-a85d4.firebaseapp.com",
  projectId: "todos-a85d4",
  storageBucket: "todos-a85d4.appspot.com",
  messagingSenderId: "800391637789",
  appId: "1:800391637789:web:2c011a927f2472a1c8cff4",
  databaseURL: "https://todos-a85d4-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;