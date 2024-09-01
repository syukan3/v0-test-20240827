'use client';

import { PlusIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubHeaderProps {
  title: string;
  showAddButton?: boolean;
  showEditAndDeleteButtons?: boolean;
  showFilterButton?: boolean; // 新しいプロパティ
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onFilter?: () => void; // 新しいプロパティ
}

export default function SubHeader({
  title,
  showAddButton = false,
  showEditAndDeleteButtons = false,
  showFilterButton = false,
  onAdd,
  onEdit,
  onDelete,
  onFilter
}: SubHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3.5 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <div className="flex items-center space-x-2">
        {showAddButton && (
          <Button onClick={onAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center text-sm">
            <PlusIcon className="h-4 w-4 mr-1.5" />
            登録
          </Button>
        )}
        {showFilterButton && (
          <Button onClick={onFilter} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center text-sm">
            <FunnelIcon className="h-4 w-4" />
          </Button>
        )}
        {showEditAndDeleteButtons && (
          <div className="flex items-center space-x-2">
            <Button onClick={onEdit} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center text-sm">
              <PencilIcon className="h-4 w-4 mr-1.5" />
              編集
            </Button>
            <Button onClick={onDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center text-sm">
              <TrashIcon className="h-4 w-4 mr-1.5" />
              削除
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}