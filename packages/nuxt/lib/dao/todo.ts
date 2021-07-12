import type firebase from 'firebase'
import { flow } from 'fp-ts/function'

type DocumentData = firebase.firestore.DocumentData
type DocumentReference<T> = firebase.firestore.DocumentReference<T>
type CollectionReference<T> = firebase.firestore.CollectionReference<T>

const collection = (name: string) => {
  return (
    ref: DocumentReference<DocumentData> | firebase.firestore.Firestore
  ) => {
    return ref.collection(name)
  }
}

const doc = (name: string) => {
  return (ref: CollectionReference<DocumentData>) => {
    return ref.doc(name)
  }
}

const set = (data: Partial<DocumentData>) => {
  return (ref: DocumentReference<DocumentData>) => {
    return ref.set(data)
  }
}

const data =
  () =>
  async (
    ref: Promise<firebase.firestore.DocumentSnapshot<DocumentData>>
  ): Promise<DocumentData | undefined> => {
    return (await ref).data()
  }

const get = () => async (ref: DocumentReference<DocumentData>) => {
  return (await ref).get()
}

export const getData = (id: string) => {
  return flow(doc(id), get(), data())
}

export const add = (data: Partial<DocumentData>) => {
  return (ref: CollectionReference<DocumentData>) => {
    return ref.add(data)
  }
}

export const update = (id: string, data: Partial<DocumentData>) => {
  return flow(doc(id), set(data))
}

export const getUsers = () => {
  return flow(collection('users'))
}

export const getTodo = () => {
  return flow(collection('todos'))
}
