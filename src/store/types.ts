import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  token: string
  userInfo: any
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: []
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
