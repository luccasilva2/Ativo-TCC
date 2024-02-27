// firebase.js
import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Auth com AsyncStorage para persistência
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

// Obtenha a instância do Firestore
const database = getFirestore(app);

export { auth, database };
export default app;