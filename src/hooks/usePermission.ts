import { useStore } from 'vuex'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  let verifyPermission = ''
  if (pageName.slice(1) === 'category' || pageName.slice(1) === 'goods') {
    verifyPermission = `product:${pageName.slice(1)}:${handleName}`
  } else {
    verifyPermission = `system:${pageName.slice(1)}:${handleName}`
  }
  return Boolean(permissions.find((item: any) => item === verifyPermission))
}
