import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoO7_LkZ9NF9A_Dr74XrCl8WKPvPFZY4Q",
  authDomain: "imessage-clone-jmue.firebaseapp.com",
  databaseURL: "https://imessage-clone-jmue.firebaseio.com",
  projectId: "imessage-clone-jmue",
  storageBucket: "imessage-clone-jmue.appspot.com",
  messagingSenderId: "689564763961",
  appId: "1:689564763961:web:b7f59a0831990fffae0ae8",
  measurementId: "G-SPFLGS60NB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
