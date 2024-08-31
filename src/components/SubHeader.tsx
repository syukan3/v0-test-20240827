'use client';

import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';
import { userMenuItems } from '@/components/UserMenu';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function SubHeader() {
  const pathname = usePathname();
  const currentPage = menuItems.find(item => item.href === pathname)?.name
    || userMenuItems.find(item => item.href === pathname)?.name
    || 'ダッシュボード';

  const showAddButton = pathname === '/facilities';

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3.5 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">
        {currentPage}{currentPage === '施設' ? ' 一覧' : ''}
      </h2>
      {showAddButton && (
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
          <PlusIcon className="h-4 w-4 mr-1.5" />
          登録
        </button>
      )}
    </div>
  );
}