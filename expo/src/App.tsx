import React from 'react';
import { RecoilRoot } from 'recoil';
import Route from './screens';
import firebase from "firebase/app"
import {firebaseConfig} from "../firebase.config"
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    firebase.initializeApp(firebaseConfig);
  },[])
  return (
    <RecoilRoot>
      <Route />
    </RecoilRoot>
  );
}

