import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'
import {
  createPageData,
  editPageData,
  getPageListData
} from '@/service/main/system/system'
import { deletePageData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
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
          case '/goods':
            return state.goodsList
          case '/menu':
            return state.menuList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case '/users':
            return state.userCount
          case '/role':
            return state.roleCount
          case '/goods':
            return state.goodsCount
          case '/menu':
            return state.menuCount
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
      } else if (pageName === '/goods') {
        commit('changeGoodsList', list)
        commit('changeGoodsCount', totalCount)
      } else if (pageName === '/menu') {
        commit('changeMenuList', list)
        commit('changeMenuCount', totalCount)
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `${pageName}/${id}`
      await deletePageData(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = pageName
      await createPageData(pageUrl, newData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = pageName + `/${id}`
      await editPageData(pageUrl, editData)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
