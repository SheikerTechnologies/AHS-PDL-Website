'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ActiveTab } from '@/lib/types';
import { useAppContext } from './providers';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { currency, setCurrency, language, setLanguage, setThemeAnalyzerOpen } = useAppContext();

  // Derive activeTab from current route pathname
  const activeTab: ActiveTab = pathname === '/projects' ? 'Projects'
    : pathname === '/about' ? 'About'
      : pathname === '/contact' ? 'Contact'
        : pathname === '/properties' ? 'Properties'
          : 'Home';

  const handleSetActiveTab = (tab: ActiveTab) => {
    if (tab === 'Home') router.push('/');
    else if (tab === 'Projects') router.push('/projects');
    else if (tab === 'About') router.push('/about');
    else if (tab === 'Contact') router.push('/contact');
    else if (tab === 'Properties') router.push('/#discover-properties-section');
  };

  const handleGetStartedClick = () => {
    router.push('/#discover-properties-section');
  };

  const handleOpenThemeAnalyzer = () => {
    setThemeAnalyzerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
        onGetStartedClick={handleGetStartedClick}
        onOpenThemeAnalyzer={handleOpenThemeAnalyzer}
      />

      {/* Main Content - flex-grow to push footer to bottom */}
      <main className="flex-grow">{children}</main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
