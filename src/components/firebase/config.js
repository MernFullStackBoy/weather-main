import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDERG_dxexcep4RMEGdu_MfMYhPkkGV3Do",
    authDomain: "weather-9fbda.firebaseapp.com",
    projectId: "weather-9fbda",
    storageBucket: "weather-9fbda.appspot.com",
    messagingSenderId: "136664442587",
    appId: "1:136664442587:web:8fe2b2d3f1762437ff8efe",
    measurementId: "G-9VKCV4D53M"
};

const app = initializeApp(firebaseConfig);
export default app