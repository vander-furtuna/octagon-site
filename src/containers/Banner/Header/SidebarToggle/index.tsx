'use client'

import { AlignJustify } from 'lucide-react'

import { useSidebar } from '@/hooks/sidebar'

import { SidebarToggleContainer } from '../styles'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()
  return (
    <SidebarToggleContainer onClick={toggleSidebar}>
      <AlignJustify size={24} />
    </SidebarToggleContainer>
  )
}
