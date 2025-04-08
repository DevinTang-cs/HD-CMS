import HDRequest from './request/request'
import { TIME_OUT, BASE_URL } from './request/config'
import localCache from '@/utils/cache'

const hdRequest = new HDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      console.log('请求成功')
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败')
      return error
    },
    responseInterceptor: (config) => {
      console.log('响应成功')
      return config
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败')
      return error
    }
  }
  // showLoading: true
})

export default hdRequest
