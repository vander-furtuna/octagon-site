"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ISidebarContext {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface ISidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

export function SidebarProvider({ children }: ISidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
    }),
    [isSidebarOpen, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar(): ISidebarContext {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a AppProvider");
  }

  return context;
}
