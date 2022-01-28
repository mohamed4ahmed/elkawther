import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {
  apiKey: "AIzaSyC4_8oLSgZHN0fG3eKHrUHgnohMDVKmC-8",
  authDomain: "elkawther-53dc3.firebaseapp.com",
  projectId: "elkawther-53dc3",
  storageBucket: "elkawther-53dc3.appspot.com",
  messagingSenderId: "229971612030",
  appId: "1:229971612030:web:a21b4342d95d3a983d232f",
  measurementId: "G-TGB0LTXF3C",
};

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };
