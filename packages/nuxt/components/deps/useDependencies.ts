import { useVueInstance } from '../vue/useVueInstance'

export function useDependencies() {
  const instance = useVueInstance()
  return instance?.$deps
}
