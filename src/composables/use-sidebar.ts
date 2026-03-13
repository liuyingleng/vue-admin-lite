import { BellDot, Bug, LayoutDashboard, Palette, PictureInPicture2, Settings, SquareUserRound, User, Wrench } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import type { NavGroup } from '@/components/app-sidebar/types'

export function useSidebar() {
  const { t } = useI18n()

  const settingsNavItems = computed(() => [
    { title: t('menu.profile'), url: '/settings/', icon: User },
    { title: t('menu.account'), url: '/settings/account', icon: Wrench },
    { title: t('menu.appearance'), url: '/settings/appearance', icon: Palette },
    { title: t('menu.notifications'), url: '/settings/notifications', icon: BellDot },
    { title: t('menu.display'), url: '/settings/display', icon: PictureInPicture2 },
  ])

  const navData = computed<NavGroup[]>(() => [
    {
      title: t('menu.mainFeatures'),
      items: [
        { title: t('menu.dashboard'), url: '/dashboard', icon: LayoutDashboard },
      ],
    },
    {
      title: t('menu.systemPages'),
      items: [
        {
          title: t('menu.auth'),
          icon: SquareUserRound,
          items: [
            { title: t('menu.signIn'), url: '/auth/sign-in' },
            { title: t('menu.signIn2'), url: '/auth/sign-in-2' },
            { title: t('menu.signUp'), url: '/auth/sign-up' },
            { title: t('menu.forgotPassword'), url: '/auth/forgot-password' },
            { title: t('menu.otp'), url: '/auth/otp' },
          ],
        },
        {
          title: t('menu.errors'),
          icon: Bug,
          items: [
            { title: t('menu.error401'), url: '/errors/401' },
            { title: t('menu.error403'), url: '/errors/403' },
            { title: t('menu.error404'), url: '/errors/404' },
            { title: t('menu.error500'), url: '/errors/500' },
            { title: t('menu.error503'), url: '/errors/503' },
          ],
        },
      ],
    },
    {
      title: t('menu.other'),
      items: [
        { title: t('menu.settings'), icon: Settings, items: settingsNavItems.value },
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
