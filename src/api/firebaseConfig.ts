import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // apiKey: "AIzaSyCmKzv45GaLayKz7FIqBUdcI_zmM3_TS4k",
  // authDomain: "skyfitnesspro-994eb.firebaseapp.com",
  // databaseURL: "https://skyfitnesspro-994eb-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "skyfitnesspro-994eb",
  // storageBucket: "skyfitnesspro-994eb.appspot.com",
  // messagingSenderId: "451994701296",
  // appId: "1:451994701296:web:8d8bab195f51d07249a135"
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