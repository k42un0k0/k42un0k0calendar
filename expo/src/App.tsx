import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { db } from './lib/firebase';
import Route from './screens';

export default function App() {
  db.firestore.setLogLevel('debug')
  db.firestore().collection("users").get().then((v)=>{
    v.forEach((r)=>{
     console.log(r.data())
    })
  })
  return (
    <RecoilRoot>
      <Route />
    </RecoilRoot>
  );
}

