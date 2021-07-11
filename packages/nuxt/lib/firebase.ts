import firebase from 'firebase'
import { firebaseConfig } from '../firebase.config'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
export const auth = firebase.auth()
