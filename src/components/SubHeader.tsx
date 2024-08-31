'use client';

import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';
import { userMenuItems } from '@/components/UserMenu';
import { PlusIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';

export default function SubHeader() {
  const pathname = usePathname();
  const currentPage = menuItems.find(item => item.href === pathname)?.name
    || userMenuItems.find(item => item.href === pathname)?.name
    || 'ダッシュボード';

  const showAddButton = pathname === '/facilities';
  const showEditAndDeleteButtons = pathname.startsWith('/facilities/') && pathname !== '/facilities';

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3.5 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">
        {currentPage}{currentPage === '施設' ? ' 一覧' : ''}
      </h2>
      {showAddButton && (
        <Link href="/facilities/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
          <PlusIcon className="h-4 w-4 mr-1.5" />
          登録
        </Link>
      )}
      {showEditAndDeleteButtons && (
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
            <PencilIcon className="h-4 w-4 mr-1.5" />
            編集
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
            <TrashIcon className="h-4 w-4 mr-1.5" />
            削除
          </button>
        </div>
      )}
    </div>
  );
}