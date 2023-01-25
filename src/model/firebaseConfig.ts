// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp, FirebaseApp } from 'firebase/app';
import {
  FirebaseStorage,
  getStorage,
  ref,
  StorageReference,
} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyB2RTJHkRcfR3OUb7hywvVEGU5TXnPAWTE',
  authDomain: 'uploadimage-95221.firebaseapp.com',
  projectId: 'uploadimage-95221',
  storageBucket: 'uploadimage-95221.appspot.com',
  messagingSenderId: '164481155828',
  appId: '1:164481155828:web:b6cb55a2a816a21c3494a1',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage: FirebaseStorage = getStorage(app);
