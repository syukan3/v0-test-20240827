'use client';

import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';
import { userMenuItems } from '@/components/UserMenu';
import { PlusIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';

interface SubHeaderProps {
  title: string;
  showAddButton?: boolean;
  showEditAndDeleteButtons?: boolean;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SubHeader({
  title,
  showAddButton = false,
  showEditAndDeleteButtons = false,
  onAdd,
  onEdit,
  onDelete
}: SubHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3.5 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {showAddButton && (
        <button onClick={onAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
          <PlusIcon className="h-4 w-4 mr-1.5" />
          登録
        </button>
      )}
      {showEditAndDeleteButtons && (
        <div className="flex items-center space-x-2">
          <button onClick={onEdit} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
            <PencilIcon className="h-4 w-4 mr-1.5" />
            編集
          </button>
          <button onClick={onDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
            <TrashIcon className="h-4 w-4 mr-1.5" />
            削除
          </button>
        </div>
      )}
    </div>
  );
}