// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe0q_6FSVuApb5CmpdDiERpLw4q3YYmXw",
  authDomain: "rinku-3d44e.firebaseapp.com",
  projectId: "rinku-3d44e",
  storageBucket: "rinku-3d44e.appspot.com",
  messagingSenderId: "523066030722",
  appId: "1:523066030722:web:07daf1819af53c0afa529b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};