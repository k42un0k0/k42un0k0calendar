import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import { db } from './lib/firebase';
import Route from './screens';

export default function App() {
  useEffect(()=>{
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  console.log(db.collection("users").get())
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
  },[])
  return (
    <RecoilRoot>
      <Route />
    </RecoilRoot>
  );
}

