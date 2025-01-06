// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkgXWe7f8aEmKtk16S5uAhgmRgC0h1LHA",
  authDomain: "clone-f1f96.firebaseapp.com",
  projectId: "clone-f1f96",
  storageBucket: "clone-f1f96.appspot.com",
  messagingSenderId: "173641615161",
  appId: "1:173641615161:web:21062c1c79426a40728ae8",
  measurementId: "G-5E47T52SH6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export services
export { db, auth, createUserWithEmailAndPassword , signInWithEmailAndPassword};
