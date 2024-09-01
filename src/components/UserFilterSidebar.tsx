'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface UserFilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: any) => void;
}

export default function UserFilterSidebar({ isOpen, onClose, onApplyFilter }: UserFilterSidebarProps) {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    facility: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApply = () => {
    onApplyFilter(filters);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">フィルター</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ユーザー名</label>
            <Input
              type="text"
              name="name"
              id="name"
              value={filters.name}
              onChange={handleInputChange}
              className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
            <Select
              name="status"
              id="status"
              value={filters.status}
              onChange={handleInputChange}
              className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
            >
              <option value="">選択してください</option>
              <option value="active">有効</option>
              <option value="inactive">無効</option>
            </Select>
          </div>
          <div>
            <label htmlFor="facility" className="block text-sm font-medium text-gray-700 mb-1">施設</label>
            <Input
              type="text"
              name="facility"
              id="facility"
              value={filters.facility}
              onChange={handleInputChange}
              className="w-full text-black bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm placeholder-gray-400"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            キャンセル
          </Button>
          <Button
            type="button"
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out"
          >
            適用
          </Button>
        </div>
      </div>
    </div>
  );
}