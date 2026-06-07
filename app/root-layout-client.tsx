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

  // Derive activeTab from current route
  const activeTab: ActiveTab = 
    pathname === '/projects' ? 'Projects' :
    pathname === '/about' ? 'About' :
    pathname === '/layout' ? 'Layout' :           // ← Added
    pathname === '/contents' ? 'Contents' :       // ← Added
    pathname === '/contact' ? 'Contact' :
    pathname === '/properties' ? 'Properties' :
    'Home';

  const handleSetActiveTab = (tab: ActiveTab) => {
    switch (tab) {
      case 'Home':
        router.push('/');
        break;
      case 'Projects':
        router.push('/projects');
        break;
      case 'About':
        router.push('/about');
        break;
      case 'Layout':
        router.push('/layout');
        break;
      case 'Contents':
        router.push('/contents');
        break;
      case 'Contact':
        router.push('/contact');
        break;
      case 'Properties':
        router.push('/#discover-properties-section');
        break;
      default:
        router.push('/');
    }
  };

  const handleGetStartedClick = () => {
    router.push('/#discover-properties-section');
  };

  const handleOpenThemeAnalyzer = () => {
    setThemeAnalyzerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}