import type { AxiosError } from 'axios'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { useAxios } from '@/composables/use-axios'
import type { IResponse } from '../types/response.type'
import type { UserInfo } from '@/stores/auth'

/**
 * 登录请求参数
 */
export interface LoginRequest {
  username: string
  password: string
}

/**
 * 登录响应
 */
export interface LoginResponse {
  token: string
  userInfo: UserInfo
}

/**
 * 登录
 */
export function useLoginMutation() {
  const { axiosInstance } = useAxios()

  return useMutation<IResponse<LoginResponse>, AxiosError, LoginRequest>({
    mutationKey: ['login'],
    mutationFn: async (data: LoginRequest) => {
      const response = await axiosInstance.post('/auth/login', data)
      return response.data
    },
  })
}

/**
 * 获取当前用户信息
 */
export function useGetUserInfoQuery() {
  const { axiosInstance } = useAxios()

  return useQuery<IResponse<UserInfo>, AxiosError>({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await axiosInstance.get('/auth/info')
      return response.data
    },
  })
}

/**
 * 登出
 */
export function useLogoutMutation() {
  const { axiosInstance } = useAxios()

  return useMutation<IResponse<void>, AxiosError>({
    mutationKey: ['logout'],
    mutationFn: async () => {
      const response = await axiosInstance.post('/auth/logout')
      return response.data
    },
  })
}
