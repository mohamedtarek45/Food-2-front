import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHLYcxE9Pbb8plGPT2KCgAwNmkcavQPx0",
  authDomain: "testrequest-3b731.firebaseapp.com",
  databaseURL: "https://testrequest-3b731-default-rtdb.firebaseio.com",
  projectId: "testrequest-3b731",
  storageBucket: "testrequest-3b731.firebasestorage.app",
  messagingSenderId: "237986951556",
  appId: "1:237986951556:web:0a4bb7a0ce26770e532dd1",
  measurementId: "G-7F4XH0F86E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);