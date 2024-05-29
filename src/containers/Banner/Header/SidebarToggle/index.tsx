'use client'

import { List } from '@phosphor-icons/react'

import { useSidebar } from '@/hooks/sidebar'

import { SidebarToggleContainer } from '../styles'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()
  return (
    <SidebarToggleContainer onClick={toggleSidebar}>
      <List size={24} weight="bold" />
    </SidebarToggleContainer>
  )
}
