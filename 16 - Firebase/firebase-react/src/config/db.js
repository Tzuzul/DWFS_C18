import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8S3mU3X8nvvCIRd5GAEIYNRYqOHVySRo",
    authDomain: "tzuzulucampfb.firebaseapp.com",
    projectId: "tzuzulucampfb",
    storageBucket: "tzuzulucampfb.appspot.com",
    messagingSenderId: "1070685859253",
    appId: "1:1070685859253:web:6b2971935addc44875bdfc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db