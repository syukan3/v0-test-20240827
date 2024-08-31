'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { menuItems } from '@/lib/menuItems';

export default function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside className={`bg-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        {!isSidebarCollapsed && (
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">GAUGENIX</h1>
          </Link>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={`text-gray-500 ${isSidebarCollapsed ? 'mx-auto' : ''}`}
        >
          {isSidebarCollapsed ? <ChevronDoubleRightIcon className="h-5 w-5" /> : <ChevronDoubleLeftIcon className="h-5 w-5" />}
        </Button>
      </div>
      <nav className={`py-2 ${isSidebarCollapsed ? 'px-2' : 'px-4'}`}>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center py-3 px-2 text-sm rounded-md transition-colors duration-150 ease-in-out ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                } ${isSidebarCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon className={`h-5 w-5 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-400'
                } ${isSidebarCollapsed ? '' : 'mr-4'}`} />
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}