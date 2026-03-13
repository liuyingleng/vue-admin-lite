import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-vue-next'

import { useSidebar } from '@/composables/use-sidebar'

import type { SidebarData, Team, User } from '../types'

const user: User = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
}

const teams: Team[] = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveform,
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: Command,
    plan: 'Free',
  },
]

export function getSidebarData() {
  const { navData } = useSidebar()

  return computed<SidebarData>(() => ({
    user,
    teams,
    navMain: navData.value,
  }))
}
