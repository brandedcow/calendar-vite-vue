import firebase from 'firebase/app'

import "firebase/auth"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVBCXzq9yW3reeTfVZye3Fz1XEwI9yfGg",
  authDomain: "todo-backend-67d85.firebaseapp.com",
  projectId: "todo-backend-67d85",
  storageBucket: "todo-backend-67d85.appspot.com",
  messagingSenderId: "122388851558",
  appId: "1:122388851558:web:fd1e4a2efffa58c017f6a7"
};

firebase.initializeApp(firebaseConfig)

export default firebase