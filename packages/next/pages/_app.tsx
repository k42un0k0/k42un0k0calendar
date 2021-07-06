import '../styles/globals.css'
import firebase from "firebase/app"
import {firebaseConfig} from "../firebase.config"
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
  firebase.initializeApp(firebaseConfig)
  },[])
  return <Component {...pageProps} />
}

export default MyApp
