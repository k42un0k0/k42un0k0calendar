import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import firestore from '@react-native-firebase/firestore';

import Route from './screens';

export default function App() {
  const usersCollection = firestore().collection('users');
  usersCollection.get().then((users)=>{
    users.forEach((res)=>{
      console.log(res)
    })
  })
  return (
    <RecoilRoot>
      <Route />
    </RecoilRoot>
  );
}

