// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJC3Lb1FvSoZbCNHD2PJHj84y1VRClPLc",
  authDomain: "darksphere-94f85.firebaseapp.com",
  projectId: "darksphere-94f85",
  storageBucket: "darksphere-94f85.appspot.com",
  messagingSenderId: "441823412351",
  appId: "1:441823412351:web:9c4fbe006438ec357eff4a",
  measurementId: "G-P09CFXLNFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
