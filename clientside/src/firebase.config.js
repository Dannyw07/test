// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlQtzOo5Idbz0KYNFhv3MI6-Tak8dHzjs",
  authDomain: "golfapp-fyp2.firebaseapp.com",
  projectId: "golfapp-fyp2",
  storageBucket: "golfapp-fyp2.appspot.com",
  messagingSenderId: "139127844592",
  appId: "1:139127844592:web:afd1339f83166b88bb9c35",
  measurementId: "G-6TGTG3KMD9",
};

// Initialize Firebase
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, firestore, storage, analytics };
