// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWZ6YKQSO2QGpI937UkCfL9nUnc17AsJU",
  authDomain: "cultral-group.firebaseapp.com",
  databaseURL: "https://cultral-group-default-rtdb.firebaseio.com",
  projectId: "cultral-group",
  storageBucket: "cultral-group.appspot.com",
  messagingSenderId: "536051826232",
  appId: "1:536051826232:web:dd23ca18089133ceacf0cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app)