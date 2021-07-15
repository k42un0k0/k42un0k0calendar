import { getCurrentInstance } from '@nuxtjs/composition-api'
import { Vue } from 'vue/types/vue'

export function useVueInstance() {
  const instance = getCurrentInstance()
  return instance?.proxy as Vue | undefined
}
