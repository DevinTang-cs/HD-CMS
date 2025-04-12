import { useStore } from 'vuex'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName.slice(1)}:${handleName}`
  return Boolean(permissions.find((item: any) => item === verifyPermission))
}
