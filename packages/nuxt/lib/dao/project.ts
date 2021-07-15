import firebase from 'firebase'
import { Project } from '../model/todo'

export class ProjectRepository {
  constructor(private db: firebase.firestore.Firestore) {}
  create(userid: string, data: Project) {
    return this.db
      .collection('users')
      .doc(userid)
      .collection('project')
      .add(data)
  }
}
