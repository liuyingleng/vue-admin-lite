import { BellDot, Bug, LayoutDashboard, Palette, PictureInPicture2, Settings, SquareUserRound, User, Wrench } from 'lucide-vue-next'

import type { NavGroup } from '@/components/app-sidebar/types'

export function useSidebar() {
  const settingsNavItems = [
    { title: '个人资料', url: '/settings/', icon: User },
    { title: '账户设置', url: '/settings/account', icon: Wrench },
    { title: '外观设置', url: '/settings/appearance', icon: Palette },
    { title: '通知设置', url: '/settings/notifications', icon: BellDot },
    { title: '显示设置', url: '/settings/display', icon: PictureInPicture2 },
  ]

  const navData = ref<NavGroup[]>([
    {
      title: '主要功能',
      items: [
        { title: '仪表盘', url: '/dashboard', icon: LayoutDashboard },
      ],
    },
    {
      title: '系统页面',
      items: [
        {
          title: '认证',
          icon: SquareUserRound,
          items: [
            { title: '登录', url: '/auth/sign-in' },
            { title: '登录(双栏)', url: '/auth/sign-in-2' },
            { title: '注册', url: '/auth/sign-up' },
            { title: '忘记密码', url: '/auth/forgot-password' },
            { title: '验证码', url: '/auth/otp' },
          ],
        },
        {
          title: '错误页面',
          icon: Bug,
          items: [
            { title: '401 | 未授权', url: '/errors/401' },
            { title: '403 | 禁止访问', url: '/errors/403' },
            { title: '404 | 页面未找到', url: '/errors/404' },
            { title: '500 | 服务器错误', url: '/errors/500' },
            { title: '503 | 维护中', url: '/errors/503' },
          ],
        },
      ],
    },
    {
      title: '其他',
      items: [
        { title: '设置', icon: Settings, items: settingsNavItems },
      ],
    },
  ])

  const otherPages = ref<NavGroup[]>([])

  return {
    navData,
    otherPages,
    settingsNavItems,
  }
}
