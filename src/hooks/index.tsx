import { ReactNode } from 'react'

import { SidebarProvider } from './sidebar'

interface IAppProvider {
  children: ReactNode
}

export function AppProvider({ children }: IAppProvider) {
  return <SidebarProvider>{children}</SidebarProvider>
}
