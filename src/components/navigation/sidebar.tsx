'use client';

import { ReactNode, createContext, useState } from 'react';
import { LemonSqueezy } from '../LemonSqueezy';
import { Avatar, Button } from '@lemonsqueezy/wedges';

interface Props {
  children: ReactNode;
}

export const SidebarContext = createContext(true);

export default function Sidebar({ children }: Props) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-wg-white dark:bg-wg-gray-900 border-r dark:border-wg-gray-900 shadow-wg-sm text-wg-gray-700'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <LemonSqueezy className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} />
          <Button
            onClick={() => setExpanded((curr) => !curr)}
            className='p-1.5 rounded-lg bg-wg-gray-200 dark:bg-wg-gray-800 hover:bg-wg-gray-400 dark:hover:bg-wg-gray-700'
          >
            {expanded ? '<' : '>'}
          </Button>
        </div>
        <SidebarContext.Provider value={expanded}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>

        <div className='border-t dark:border-wg-gray-900 flex p-3'>
          <Avatar
            alt='Avatar Image'
            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop'
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className='leading-4'>
              <h4 className='text-wg-gray-900 dark:text-wg-gray-300'>Matthew Holden</h4>
              <span className='text-xs text-wg-gray-600'>matthewholden01@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
