'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'
import { Theme } from '@/styles/theme'

import { SidebarProvider } from './sidebar'

interface IAppProvider {
  children: ReactNode
}

export function AppProvider({ children }: IAppProvider) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
