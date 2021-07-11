import firebase from "firebase"
import {firebaseConfig} from "../../firebase.config"

try{
    firebase.initializeApp(firebaseConfig);
}catch(e){
    console.error(e)
}
export const db = firebase//firebase.firestore()
