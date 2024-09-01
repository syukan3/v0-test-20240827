'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';

export default function Sidebar({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) {
  const pathname = usePathname();

  // パスが '/facilities' で始まるかどうかをチェックする関数
  const isFacilitiesPath = (path: string) => path.startsWith('/facilities');

  return (
    <aside className={`bg-white transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-16' : 'w-64'} border-r border-gray-200`}>
      <nav className="py-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center py-3 px-2 text-sm rounded-md transition-colors duration-150 ease-in-out ${(pathname === item.href || (item.href === '/facilities' && isFacilitiesPath(pathname)))
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } ${isSidebarCollapsed ? 'justify-center w-16' : 'justify-start pl-4 w-64'}`}
              >
                <item.icon className={`h-5 w-5 ${(pathname === item.href || (item.href === '/facilities' && isFacilitiesPath(pathname)))
                    ? 'text-blue-600'
                    : 'text-gray-400'
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