import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVvUJPmgvz_wismeVYhzRFIH3afISoQQ8",
  authDomain: "fitnessskyproproject.firebaseapp.com",
  databaseURL: "https://fitnessskyproproject-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnessskyproproject",
  storageBucket: "fitnessskyproproject.appspot.com",
  messagingSenderId: "1046783734590",
  appId: "1:1046783734590:web:adc9c8d47f24d8dd02326f"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getDatabase(app)
// DataBase

export { auth, db, app }