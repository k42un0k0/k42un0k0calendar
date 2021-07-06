import firebase from "firebase"
import {firebaseConfig} from "../../firebase.config"

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
