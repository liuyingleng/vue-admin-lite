import type { AxiosError } from 'axios'

import axios from 'axios'

import { useAuthStore } from '@/stores/auth'
import env from '@/utils/env'

export function useAxios() {
  const authStore = useAuthStore()

  const axiosInstance = axios.create({
    baseURL: env.VITE_SERVER_API_URL + env.VITE_SERVER_API_PREFIX,
    timeout: env.VITE_SERVER_API_TIMEOUT,
  })

  // 请求拦截器：添加 token
  axiosInstance.interceptors.request.use((config) => {
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // 响应拦截器：处理错误
  axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error: AxiosError) => {
    // 401 未授权，清除登录状态
    if (error.response?.status === 401) {
      authStore.clearAuth()
      window.location.href = '/auth/sign-in'
    }
    return Promise.reject(error)
  })

  return {
    axiosInstance,
  }
}
