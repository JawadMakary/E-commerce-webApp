import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpTPVIkbrpejo6xYCRDeHWp93PEZBp6HQ",
  authDomain: "projet-memoire-d3305.firebaseapp.com",
  projectId: "projet-memoire-d3305",
  storageBucket: "projet-memoire-d3305.appspot.com",
  messagingSenderId: "456777661312",
  appId: "1:456777661312:web:a3f2f2b3be3deef1995f65",
  measurementId: "G-P7RCN27MFB"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  db.settings({ timestampsInSnapshots: true }); 

  const auth = firebase.auth();

  export {auth}
  export default db;
  