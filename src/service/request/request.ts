import axios, { AxiosInstance } from 'axios'
import { HDRequestConfig, HDRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

class HDRequest {
  instance: AxiosInstance
  interceptors?: HDRequestInterceptors
  loading?: LoadingInstance
  showLoading?: boolean
  constructor(config: HDRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true
          })
        }
        console.log(this.showLoading)
        console.log('所有实例都有的拦截器，请求成功')
        return config
      },
      (error) => {
        console.log('所有实例都有的拦截器，请求失败')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器，响应成功')
        this.loading?.close()
        const data = res.data
        return data
      },
      (error) => {
        console.log('所有实例都有的拦截器，响应失败')
        this.loading?.close()
        return error
      }
    )
  }

  request<T>(config: HDRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.showLoading = true

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: HDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T = any>(config: HDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  delete<T = any>(config: HDRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default HDRequest
