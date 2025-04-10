import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload)
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      // console.log(pageResult)
      const { list, totalCount } = pageResult.data
      // console.log(list)
      // console.log(totalCount)
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
