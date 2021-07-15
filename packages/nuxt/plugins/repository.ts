import { Inject, Context } from '@nuxt/types/app'
import { db } from './firebase'
import { ProjectRepository } from '~/lib/dao/project'

export default (_context: Context, inject: Inject) => {
  inject('repository', { project: new ProjectRepository(db) })
}
