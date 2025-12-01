// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfydv-u00OJT7yp6gEDshsxxBqQxWO3M",
  authDomain: "agency-7bede.firebaseapp.com",
  projectId: "agency-7bede",
  storageBucket: "agency-7bede.firebasestorage.app",
  messagingSenderId: "971262269541",
  appId: "1:971262269541:web:ca03e30134a6425c65ce8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;