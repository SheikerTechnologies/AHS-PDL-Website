'use client';

import { usePathname, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactIcons from '@/components/FloatingContactIcons';
import { ActiveTab } from '@/lib/types';
import { useAppContext } from './providers';

const routeMap: Record<string, ActiveTab> = {
  '/projects': 'Projects',
  '/about': 'About',
  '/layout': 'Layout',
  '/contact': 'Contact',
  '/services': 'Services',
};

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { setThemeAnalyzerOpen } = useAppContext();

  const activeTab: ActiveTab = routeMap[pathname] || 'Home';

  const handleSetActiveTab = (tab: ActiveTab) => {
    const paths: Record<ActiveTab, string> = {
      Home: '/',
      Projects: '/projects',
      About: '/about',
      Layout: '/layout',
      Contact: '/contact',
      Services: '/services',
    };
    router.push(paths[tab]);
  };

  const handleGetStartedClick = () => router.push('/services');
  const handleOpenThemeAnalyzer = () => setThemeAnalyzerOpen(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        onGetStartedClick={handleGetStartedClick}
        onOpenThemeAnalyzer={handleOpenThemeAnalyzer}
      />

      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Floating Contact Icons - WhatsApp, Messenger, Phone */}
      <FloatingContactIcons />
    </div>
  );
}