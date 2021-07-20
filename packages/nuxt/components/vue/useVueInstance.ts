import { getCurrentInstance } from '@nuxtjs/composition-api'

export function useVueInstance() {
  const instance = getCurrentInstance()
  return instance?.proxy
}
