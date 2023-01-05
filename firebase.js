// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firbase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGA13Mp_-DOrPfuYSTxYjAl7ITooALLwc',
  authDomain: 'extramile-d686d.firebaseapp.com',
  projectId: 'extramile-d686d',
  storageBucket: 'extramile-d686d.appspot.com',
  messagingSenderId: '706139529321',
  appId: '1:706139529321:web:e65433987f7d9794cd42f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getting firebase storage, auth, database
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);

export {storage, auth, database};
