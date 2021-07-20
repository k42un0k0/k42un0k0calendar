import { Inject, Context } from '@nuxt/types/app'
import { db } from './firebase'
import { ProjectRepository } from '~/lib/dao/project'

declare module 'vue/types/vue' {
  interface Vue {
    $deps: {
      projectRepository: import('../lib/dao/project').ProjectRepository
    }
  }
}

export default (_context: Context, inject: Inject) => {
  inject('deps', { project: new ProjectRepository(db) })
}
