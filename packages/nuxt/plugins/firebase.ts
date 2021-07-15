import firebase from 'firebase'
import { firebaseConfig } from '../firebase.config'
import { Card } from '../lib/model/todo'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
export const auth = firebase.auth()

export const card: Card = {
  title: 'un',
  detail: 'deux',
}
