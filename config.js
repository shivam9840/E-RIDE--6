import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC7nu4bxW595tdQF1NToTbnAcv02tvG0XM",
  authDomain: "e-ride-9ab3f.firebaseapp.com",
  projectId: "e-ride-9ab3f",
  storageBucket: "e-ride-9ab3f.appspot.com",
  messagingSenderId: "460423147830",
  appId: "1:460423147830:web:cf9981a76039ba49514397"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
