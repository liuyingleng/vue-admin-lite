import { storeToRefs } from 'pinia'
import { toast } from 'vue-sonner'
import { useAuthStore } from '@/stores/auth'
import { useLoginMutation, useLogoutMutation } from '@/services/api/auth.api'

export function useAuth() {
  const router = useRouter()

  const authStore = useAuthStore()
  const { isLogin } = storeToRefs(authStore)
  
  const loginMutation = useLoginMutation()
  const logoutMutation = useLogoutMutation()

  const loading = computed(() => loginMutation.isPending.value || logoutMutation.isPending.value)

  /**
   * 登出
   */
  async function logout() {
    try {
      await logoutMutation.mutateAsync()
      authStore.clearAuth()
      toast.success('登出成功')
      router.push({ path: '/auth/sign-in' })
    }
    catch (error: any) {
      // 即使后端失败，也清除本地状态
      authStore.clearAuth()
      router.push({ path: '/auth/sign-in' })
    }
  }

  /**
   * 跳转到首页
   */
  function toHome() {
    router.push({ path: '/dashboard' })
  }

  /**
   * 登录
   */
  async function login(username: string, password: string) {
    try {
      const result = await loginMutation.mutateAsync({ username, password })
      
      if (result.success && result.data) {
        // 保存认证信息
        authStore.setAuth(result.data.token, result.data.userInfo)
        
        toast.success(result.message || '登录成功')

        // 跳转
        const redirect = router.currentRoute.value.query.redirect as string
        if (!redirect || redirect.startsWith('//')) {
          toHome()
        }
        else {
          router.push(redirect)
        }
      }
      else {
        toast.error(result.message || '登录失败')
      }
    }
    catch (error: any) {
      const message = error.response?.data?.message || '登录失败，请检查用户名和密码'
      toast.error(message)
      throw error
    }
  }

  return {
    loading,
    logout,
    login,
  }
}
