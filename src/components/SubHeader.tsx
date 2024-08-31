'use client';

import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';
import { userMenuItems } from '@/components/UserMenu';

export default function SubHeader() {
  const pathname = usePathname();
  const currentPage = menuItems.find(item => item.href === pathname)?.name
    || userMenuItems.find(item => item.href === pathname)?.name
    || 'ダッシュボード';

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <h2 className="text-xl font-semibold text-gray-800">{currentPage}</h2>
    </div>
  );
}