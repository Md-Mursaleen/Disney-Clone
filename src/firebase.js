import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAI_rHGyebKKd7IigXJRC2pzo3wVj0HM9E",
    authDomain: "disney-clone-362d6.firebaseapp.com",
    projectId: "disney-clone-362d6",
    storageBucket: "disney-clone-362d6.appspot.com",
    messagingSenderId: "1070047237033",
    appId: "1:1070047237033:web:b306590fe382b7f1e7aab8",
    measurementId: "G-YT1JVNZHPT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;