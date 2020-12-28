import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBx91WMe_FTmN6CzDba4fKq0Kavm-mMqRo",
  authDomain: "facebookclone-5b6c6.firebaseapp.com",
  projectId: "facebookclone-5b6c6",
  storageBucket: "facebookclone-5b6c6.appspot.com",
  messagingSenderId: "119602589389",
  appId: "1:119602589389:web:e06fdfaceb9b3f1b538384",
  measurementId: "G-70E540W1TP",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { storage };
export default db;
