'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, Language } from '@/lib/types';

interface AppContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  themeAnalyzerOpen: boolean;
  setThemeAnalyzerOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [language, setLanguage] = useState<Language>('EN');
  const [themeAnalyzerOpen, setThemeAnalyzerOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
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
