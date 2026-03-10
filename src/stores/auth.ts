import { defineStore } from 'pinia'

export interface UserInfo {
  id: number
  username: string
  email?: string
  phone?: string
  nickname?: string
  avatar?: string
  roles?: string[]
  permissions?: string[]
}

export const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)
  const token = ref<string | null>(null)
  const userInfo = ref<UserInfo | null>(null)

  // 从 localStorage 恢复状态
  function initAuth() {
    const savedToken = localStorage.getItem('token')
    const savedUserInfo = localStorage.getItem('userInfo')
    
    if (savedToken && savedUserInfo) {
      token.value = savedToken
      userInfo.value = JSON.parse(savedUserInfo)
      isLogin.value = true
    }
  }

  // 设置认证信息
  function setAuth(authToken: string, user: UserInfo) {
    token.value = authToken
    userInfo.value = user
    isLogin.value = true
    
    // 持久化到 localStorage
    localStorage.setItem('token', authToken)
    localStorage.setItem('userInfo', JSON.stringify(user))
  }

  // 清除认证信息
  function clearAuth() {
    token.value = null
    userInfo.value = null
    isLogin.value = false
    
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }

  // 初始化
  initAuth()

  return {
    isLogin,
    token,
    userInfo,
    setAuth,
    clearAuth,
  }
})
