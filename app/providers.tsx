'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  themeAnalyzerOpen: boolean;
  setThemeAnalyzerOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [themeAnalyzerOpen, setThemeAnalyzerOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        themeAnalyzerOpen,
        setThemeAnalyzerOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}