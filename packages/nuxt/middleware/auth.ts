import { Context } from '@nuxt/types'
import { auth } from '~/plugins/firebase'

export default function ({ route, redirect }: Context) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return 0
    } else {
      if (route.name === 'login') return
      redirect('/login')
    }
  })
}
