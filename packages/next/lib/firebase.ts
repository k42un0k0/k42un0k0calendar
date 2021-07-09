import firebase from "firebase"
import {firebaseConfig} from "../firebase.config"

try{
    firebase.initializeApp(firebaseConfig);
}catch(e:unknown){
    console.error(e)
}
export const db = firebase.firestore()
