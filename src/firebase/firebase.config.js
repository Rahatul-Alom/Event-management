// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU3DPLuYWXG4zKE9a0kxnyf7Ei56GxE0Q",
  authDomain: "social-event-management-e5a14.firebaseapp.com",
  projectId: "social-event-management-e5a14",
  storageBucket: "social-event-management-e5a14.appspot.com",
  messagingSenderId: "830123933902",
  appId: "1:830123933902:web:e585dab69c7f131cbbd09f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app