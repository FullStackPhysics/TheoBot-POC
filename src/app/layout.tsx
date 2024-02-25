import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/navigation/sidebar';
import SidebarItem from '@/components/navigation/sidebar-item';
import { CalendarIcon, HomeIcon } from '@iconicicons/react';
import { Providers } from '../components/theme/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wedges - Next.js Template',
  description: 'Beautiful UI components for React, crafted with the Wedges design system, Radix UI, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'dark' theme is added here
    <html lang='en' className='wg-antialiased h-full' suppressHydrationWarning>
      <body className={`${inter.className} flex bg-wg-white dark:bg-wg-gray-800 h-full max-w-full`}>
        <Providers>
          <Sidebar>
            <SidebarItem icon={<HomeIcon />} text='Home' active={true} alert={false} />
            <SidebarItem icon={<CalendarIcon />} text='Calendar' active={false} alert={true} />
          </Sidebar>
          <div className='relative flex h-full max-w-full flex-1 flex-col overflow-hidden'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
