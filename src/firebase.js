// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAjxbdl1aFj2DNXcT2wvlIjIUWl6dWLI9M",
  authDomain: "facebook-clone-a1663.firebaseapp.com",
  projectId: "facebook-clone-a1663",
  storageBucket: "facebook-clone-a1663.appspot.com",
  messagingSenderId: "766770035654",
  appId: "1:766770035654:web:ff8ab9c364b07ecf49d0c7",
  measurementId: "G-VKE1WZD9NE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;