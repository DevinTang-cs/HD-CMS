import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case '/users':
            return state.userList
          case '/role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload)
      const pageName = payload.pageName
      const pageUrl = pageName + '/list'
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // console.log(pageResult)
      const { list, totalCount } = pageResult.data
      // console.log(list)
      // console.log(totalCount)
      if (pageName === '/users') {
        commit('changeUserList', list)
        commit('changeUserCount', totalCount)
      } else if (pageName === '/role') {
        commit('changeRoleList', list)
        commit('changeRoleCount', totalCount)
      }
    }
  }
}

export default systemModule
